/* =========================================================
   TUPS EDUCATION HUB
   JOBS MODULE
   Version 1.0
========================================================= */

(function () {

  "use strict";


  /* =======================================================
     CONFIGURATION
  ======================================================= */

  const JOBS_CONFIG = {

    // Existing TUPS Education Content Aggregator
    API_URL:
    "https://script.google.com/macros/s/AKfycbxW-qt2N1ggueT8Y5eZGLM9ltM8mGbOiKBKRYx6ZxD0X00rqw23nNJotkO1L2ueEF-E/exec",

    FEED:
      "jobs",

    CACHE_KEY:
      "tups_jobs_cache_v1",

    CACHE_TIME:
      30 * 60 * 1000

  };


  /* =======================================================
     STATE
  ======================================================= */

  let jobs = [];

  let currentPage = 1;

  const JOBS_PER_PAGE = 10;


  /* =======================================================
     INITIALISE
  ======================================================= */

  function initJobsModule() {

    const jobsButton =
      document.querySelector(
        '[data-hub="jobs"]'
      );

    if (!jobsButton) {

      console.warn(
        "TUPS Jobs: Jobs button not found."
      );

      return;
    }


    jobsButton.addEventListener(
      "click",
      function () {

        loadJobsPage();

      }
    );


    console.log(
      "TUPS Jobs module loaded."
    );

  }


  /* =======================================================
     LOAD JOBS PAGE
  ======================================================= */

  function loadJobsPage() {

    const contentArea =
      document.getElementById(
        "content-area"
      );

    if (!contentArea) {

      console.error(
        "TUPS Jobs: #content-area not found."
      );

      return;
    }


    currentPage = 1;


    contentArea.innerHTML = `

      <section class="jobs-page">

        <div class="jobs-page-header">

          <div>

            <span class="jobs-page-icon">
              <i class="fa-solid fa-briefcase"></i>
            </span>

            <h1>
              Jobs &amp; Vacancies
            </h1>

            <p>
              Find current job opportunities from
              schools, companies and other legitimate
              sources.
            </p>

          </div>

        </div>


        <div
          class="jobs-loading"
          id="jobs-loading"
        >

          <i class="fa-solid fa-spinner fa-spin"></i>

          Loading current vacancies...

        </div>


        <div
          id="jobs-content"
          class="jobs-content"
        ></div>

      </section>

    `;


    loadJobsData();

  }


  /* =======================================================
     LOAD DATA
  ======================================================= */

  async function loadJobsData() {

    const cached =
      getCachedJobs();


    /*
     * Show cached jobs immediately when available.
     * This keeps the page responsive.
     */

    if (cached && cached.length) {

      jobs = cached;

      renderJobs();

    }


    try {

      const response =
        await fetch(
          JOBS_CONFIG.API_URL +
          "?feed=" +
          encodeURIComponent(
            JOBS_CONFIG.FEED
          ),
          {
            method: "GET",
            cache: "no-store"
          }
        );


      if (!response.ok) {

        throw new Error(
          "HTTP " +
          response.status
        );

      }


      const data =
        await response.json();


      if (
        !data ||
        !Array.isArray(data.items)
      ) {

        throw new Error(
          "Invalid Jobs feed response."
        );

      }


      jobs =
        data.items;


      saveCachedJobs(jobs);


      renderJobs();


    } catch (error) {

      console.error(
        "TUPS Jobs feed error:",
        error
      );


      /*
       * If cached jobs already exist,
       * keep displaying them.
       */

      if (
        !jobs ||
        !jobs.length
      ) {

        showJobsError();

      }

    }

  }


  /* =======================================================
     RENDER JOBS
  ======================================================= */

  function renderJobs() {

    const container =
      document.getElementById(
        "jobs-content"
      );

    if (!container) {
      return;
    }


    const loading =
      document.getElementById(
        "jobs-loading"
      );

    if (loading) {

      loading.style.display =
        "none";

    }


    if (
      !jobs ||
      !jobs.length
    ) {

      container.innerHTML = `

        <div class="jobs-empty">

          <i class="fa-solid fa-briefcase"></i>

          <h3>
            No vacancies available right now.
          </h3>

          <p>
            Please check again later for new
            opportunities.
          </p>

        </div>

      `;

      return;
    }


    const start =
      (currentPage - 1) *
      JOBS_PER_PAGE;


    const end =
      start +
      JOBS_PER_PAGE;


    const pageJobs =
      jobs.slice(
        start,
        end
      );


    let html = `

      <div class="jobs-summary">

        <strong>
          ${jobs.length}
        </strong>

        current vacancies

      </div>


      <div class="jobs-list">

    `;


    pageJobs.forEach(
      function (job) {

        html +=
          createJobCard(job);

      }
    );


    html += `

      </div>

    `;


    html +=
      createPagination();


    container.innerHTML =
      html;


    attachJobEvents();

  }


  /* =======================================================
     CREATE JOB CARD
  ======================================================= */

  function createJobCard(job) {

    const title =
      escapeHTML(
        job.title ||
        "Untitled vacancy"
      );


    const company =
      escapeHTML(
        job.company ||
        job.source ||
        "Job provider"
      );


    const location =
      escapeHTML(
        job.location ||
        "Location not specified"
      );


    const category =
      escapeHTML(
        job.category ||
        job.sector ||
        "General"
      );


    const employmentType =
      escapeHTML(
        job.employmentType ||
        "Not specified"
      );


    const published =
      formatDate(
        job.publishedAt
      );


    const source =
      escapeHTML(
        job.source ||
        "Original source"
      );


    const applicationUrl =
      safeUrl(
        job.applicationUrl
      );


    /*
     * TUPS does NOT reproduce the full vacancy
     * description or requirements.
     *
     * The visitor is sent to the original
     * provider when they choose the vacancy.
     */

    return `

      <article class="job-card">

        <div class="job-card-top">

          <span class="job-category">

            <i class="fa-solid fa-layer-group"></i>

            ${category}

          </span>


          ${
            job.featured
              ? `
                <span class="job-featured">
                  <i class="fa-solid fa-star"></i>
                  Featured
                </span>
              `
              : ""
          }

        </div>


        <h3 class="job-title">

          ${title}

        </h3>


        <div class="job-company">

          <i class="fa-solid fa-building"></i>

          ${company}

        </div>


        <div class="job-meta">


          <span>

            <i class="fa-solid fa-location-dot"></i>

            ${location}

          </span>


          <span>

            <i class="fa-solid fa-clock"></i>

            ${employmentType}

          </span>


        </div>


        <div class="job-card-footer">


          <span class="job-source">

            ${source}

            ${
              published
                ? " • " + published
                : ""
            }

          </span>


          ${
            applicationUrl
              ? `
                <a
                  href="${applicationUrl}"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="job-apply-button"
                >

                  View Vacancy

                  <i class="fa-solid fa-arrow-up-right-from-square"></i>

                </a>
              `
              : `
                <span class="job-no-link">
                  Application link unavailable
                </span>
              `
          }


        </div>


      </article>

    `;

  }


  /* =======================================================
     PAGINATION
  ======================================================= */

  function createPagination() {

    const totalPages =
      Math.ceil(
        jobs.length /
        JOBS_PER_PAGE
      );


    if (totalPages <= 1) {

      return "";

    }


    return `

      <div class="jobs-pagination">

        <button
          type="button"
          class="jobs-page-button"
          data-job-page="previous"
          ${currentPage === 1 ? "disabled" : ""}
        >

          <i class="fa-solid fa-chevron-left"></i>

          Previous

        </button>


        <span class="jobs-page-number">

          Page
          ${currentPage}
          of
          ${totalPages}

        </span>


        <button
          type="button"
          class="jobs-page-button"
          data-job-page="next"
          ${currentPage === totalPages ? "disabled" : ""}
        >

          Next

          <i class="fa-solid fa-chevron-right"></i>

        </button>

      </div>

    `;

  }


  /* =======================================================
     PAGINATION EVENTS
  ======================================================= */

  function attachJobEvents() {

    const buttons =
      document.querySelectorAll(
        "[data-job-page]"
      );


    buttons.forEach(
      function (button) {

        button.addEventListener(
          "click",
          function () {

            const action =
              button.dataset.jobPage;


            const totalPages =
              Math.ceil(
                jobs.length /
                JOBS_PER_PAGE
              );


            if (
              action === "previous" &&
              currentPage > 1
            ) {

              currentPage--;

              renderJobs();

              scrollJobsToTop();

            }


            if (
              action === "next" &&
              currentPage < totalPages
            ) {

              currentPage++;

              renderJobs();

              scrollJobsToTop();

            }

          }
        );

      }
    );

  }


  /* =======================================================
     ERROR
  ======================================================= */

  function showJobsError() {

    const loading =
      document.getElementById(
        "jobs-loading"
      );


    if (loading) {

      loading.innerHTML = `

        <i class="fa-solid fa-triangle-exclamation"></i>

        Unable to load vacancies at the moment.

        <button
          type="button"
          id="jobs-retry-button"
          class="jobs-retry-button"
        >
          Try Again
        </button>

      `;


      const retry =
        document.getElementById(
          "jobs-retry-button"
        );


      if (retry) {

        retry.addEventListener(
          "click",
          function () {

            loadJobsData();

          }
        );

      }

    }

  }


  /* =======================================================
     CACHE
  ======================================================= */

  function saveCachedJobs(data) {

    try {

      localStorage.setItem(
        JOBS_CONFIG.CACHE_KEY,

        JSON.stringify({

          timestamp:
            Date.now(),

          items:
            data

        })

      );

    } catch (error) {

      console.warn(
        "TUPS Jobs: Could not save cache.",
        error
      );

    }

  }


  function getCachedJobs() {

    try {

      const raw =
        localStorage.getItem(
          JOBS_CONFIG.CACHE_KEY
        );


      if (!raw) {
        return null;
      }


      const cached =
        JSON.parse(raw);


      if (
        !cached ||
        !Array.isArray(
          cached.items
        )
      ) {

        return null;

      }


      if (
        Date.now() -
        cached.timestamp >
        JOBS_CONFIG.CACHE_TIME
      ) {

        return null;

      }


      return cached.items;

    } catch (error) {

      console.warn(
        "TUPS Jobs: Could not read cache.",
        error
      );

      return null;

    }

  }


  /* =======================================================
     SCROLL
  ======================================================= */

  function scrollJobsToTop() {

    const contentArea =
      document.getElementById(
        "content-area"
      );


    if (!contentArea) {
      return;
    }


    contentArea.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }


  /* =======================================================
     DATE
  ======================================================= */

  function formatDate(value) {

    if (!value) {
      return "";
    }


    const date =
      new Date(value);


    if (
      Number.isNaN(
        date.getTime()
      )
    ) {

      return "";

    }


    return date.toLocaleDateString(
      "en-NG",
      {
        day: "numeric",
        month: "short",
        year: "numeric"
      }
    );

  }


  /* =======================================================
     URL SAFETY
  ======================================================= */

  function safeUrl(value) {

    if (!value) {
      return "";
    }


    try {

      const url =
        new URL(value);


      if (
        url.protocol !== "https:" &&
        url.protocol !== "http:"
      ) {

        return "";

      }


      return escapeAttribute(
        url.href
      );

    } catch (error) {

      return "";

    }

  }


  /* =======================================================
     HTML ESCAPING
  ======================================================= */

  function escapeHTML(value) {

    return String(value)
      .replace(
        /&/g,
        "&amp;"
      )
      .replace(
        /</g,
        "&lt;"
      )
      .replace(
        />/g,
        "&gt;"
      )
      .replace(
        /"/g,
        "&quot;"
      )
      .replace(
        /'/g,
        "&#039;"
      );

  }


  function escapeAttribute(value) {

    return escapeHTML(value);

  }


  /* =======================================================
     START
  ======================================================= */

  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      initJobsModule
    );

  } else {

    initJobsModule();

  }


})();