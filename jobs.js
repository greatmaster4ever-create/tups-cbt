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

  let currentApiPage = 1;

  let currentJobFilter = "all";

  let currentJobSearch = "";
  
  let jobsSearchTimer = null;

  let jobsHasMore = false;

  let jobsTotal = 0;

  let jobsLoading = false;

  const JOBS_API_PAGE_SIZE = 30;

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

  currentApiPage = 1;

  jobs = [];

  jobsHasMore = false;

  jobsTotal = 0;

  jobsLoading = false;

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
            Find current opportunities from
            schools, companies and legitimate
            job sources in Nigeria and beyond.
          </p>

        </div>

      </div>


      <div class="jobs-search-area">

        <div class="jobs-search-box">

          <i class="fa-solid fa-magnifying-glass"></i>

          <input
            type="search"
            id="jobs-search"
            placeholder="Search jobs, companies, locations..."
            autocomplete="off"
          >

        </div>


        <div class="jobs-filter-row">

          <button
            type="button"
            class="jobs-filter active"
            data-job-filter="all"
          >
            All Jobs
          </button>

          <button
            type="button"
            class="jobs-filter"
            data-job-filter="nigeria"
          >
            🇳🇬 Nigeria
          </button>

          <button
            type="button"
            class="jobs-filter"
            data-job-filter="abuja"
          >
            Abuja / FCT
          </button>

          <button
            type="button"
            class="jobs-filter"
            data-job-filter="education"
          >
            Education
          </button>

          <button
            type="button"
            class="jobs-filter"
            data-job-filter="technology"
          >
            IT &amp; Technology
          </button>

          <button
            type="button"
            class="jobs-filter"
            data-job-filter="finance"
          >
            Finance
          </button>

          <button
            type="button"
            class="jobs-filter"
            data-job-filter="healthcare"
          >
            Healthcare
          </button>

          <button
            type="button"
            class="jobs-filter"
            data-job-filter="engineering"
          >
            Engineering
          </button>

          <button
            type="button"
            class="jobs-filter"
            data-job-filter="administration"
          >
            Administration
          </button>

          <button
            type="button"
            class="jobs-filter"
            data-job-filter="sales"
          >
            Sales &amp; Marketing
          </button>
		  
		  <button
  type="button"
  class="jobs-filter"
  data-job-filter="customer-service"
>
  Customer Service
</button>

<button
  type="button"
  class="jobs-filter"
  data-job-filter="ngo_development"
>
  NGO &amp; Development
</button>

          <button
            type="button"
            class="jobs-filter"
            data-job-filter="creative"
          >
            Media &amp; Creative
          </button>

          <button
            type="button"
            class="jobs-filter"
            data-job-filter="internship"
          >
            Internship / Graduate
          </button>

          <button
            type="button"
            class="jobs-filter"
            data-job-filter="remote"
          >
            Remote
          </button>

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

  attachJobsSearchEvents();

  loadJobsData();

}

  /* =======================================================
     BUILD JOBS API URL
  ======================================================= */

  function buildJobsApiUrl(
    page
  ) {

    const params =
      new URLSearchParams();


    params.set(
      "feed",
      JOBS_CONFIG.FEED
    );


    params.set(
      "page",
      page
    );


    params.set(
      "limit",
      JOBS_API_PAGE_SIZE
    );


    if (
      currentJobSearch.trim()
    ) {

      params.set(
        "search",
        currentJobSearch.trim()
      );

    }


    if (
      currentJobFilter !== "all"
    ) {

      params.set(
        "filter",
        currentJobFilter
      );

    }


    return (
      JOBS_CONFIG.API_URL +
      "?" +
      params.toString()
    );

  }
  /* =======================================================
     LOAD DATA
  ======================================================= */

    async function loadJobsData() {

    if (jobsLoading) {
      return;
    }


    jobsLoading = true;


    const cached =
      getCachedJobs();


    /*
     * Show cached first page immediately
     * when available.
     */

    if (
      cached &&
      cached.length
    ) {

      jobs = cached;

      currentApiPage = 1;

      renderJobs();

    }


    try {

      const url =
  buildJobsApiUrl(
    1
  );


      const response =
        await fetch(
          url,
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
        !Array.isArray(
          data.items
        )
      ) {

        throw new Error(
          "Invalid Jobs feed response."
        );

      }


      jobs =
        data.items;


      currentApiPage =
        Number(
          data.page || 1
        );


      jobsHasMore =
        Boolean(
          data.hasMore
        );


      jobsTotal =
        Number(
          data.total || jobs.length
        );


      saveCachedJobs(
        jobs
      );


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

    } finally {

      jobsLoading = false;

    }

  }
  
    /* =======================================================
     LOAD MORE JOBS
  ======================================================= */

  /* =======================================================
     LOAD NEXT JOBS PAGE
  ======================================================= */

  async function loadMoreJobs() {

    if (
      jobsLoading ||
      !jobsHasMore
    ) {

      return;

    }


    jobsLoading = true;


    const nextPage =
      currentApiPage + 1;


    const loadMoreButton =
      document.getElementById(
        "jobs-load-more"
      );


    if (loadMoreButton) {

      loadMoreButton.disabled =
        true;


      loadMoreButton.innerHTML = `

        <i class="fa-solid fa-spinner fa-spin"></i>

        Loading jobs...

      `;

    }


    try {

      const url =
        buildJobsApiUrl(
          nextPage
        );


      const response =
        await fetch(
          url,
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
        !Array.isArray(
          data.items
        )
      ) {

        throw new Error(
          "Invalid Jobs pagination response."
        );

      }


      /*
       * IMPORTANT:
       * Replace the current page.
       * Do NOT append the new jobs.
       */

      jobs =
        data.items;


      currentApiPage =
        Number(
          data.page ||
          nextPage
        );


      jobsHasMore =
        Boolean(
          data.hasMore
        );


      jobsTotal =
        Number(
          data.total ||
          jobs.length
        );


      renderJobs();


      scrollJobsToTop();


    } catch (error) {

      console.error(
        "TUPS Jobs: Load next page error:",
        error
      );


      if (loadMoreButton) {

        loadMoreButton.disabled =
          false;


        loadMoreButton.innerHTML = `

          Load More Jobs

          <i class="fa-solid fa-chevron-down"></i>

        `;

      }

    } finally {

      jobsLoading = false;

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


  const filteredJobs =
    jobs;


  if (!filteredJobs.length) {

    container.innerHTML = `

      <div class="jobs-empty">

        <i class="fa-solid fa-magnifying-glass"></i>

        <h3>
          No matching vacancies found.
        </h3>

        <p>
          Try another search term or select
          a different category.
        </p>

      </div>

    `;

    return;

  }


  let html = `

    <div class="jobs-summary">

  <strong>
    ${jobsTotal}
  </strong>

  ${
    currentJobSearch ||
    currentJobFilter !== "all"
      ? "matching vacancies"
      : "vacancies available"
  }

</div>


    <div class="jobs-list">

  `;


  filteredJobs.forEach(
    function (job) {

      html +=
        createJobCard(job);

    }
  );


  html += `

    </div>

  `;


  /*
   * Server-side pagination:
   * show Load More only when the API
   * reports another page exists.
   */

  if (
    jobsHasMore &&
    !currentJobSearch &&
    currentJobFilter === "all"
  ) {

    html += `

      <div class="jobs-load-more-wrap">

        <button
          type="button"
          id="jobs-load-more"
          class="jobs-load-more-button"
        >

          Load More Jobs

          <i class="fa-solid fa-chevron-down"></i>

        </button>

      </div>

    `;

  }


  container.innerHTML =
    html;


  attachJobEvents();

}

/* =======================================================
   SEARCH & CATEGORY FILTERING
======================================================= */





function attachJobsSearchEvents() {

  const searchInput =
    document.getElementById(
      "jobs-search"
    );


  if (searchInput) {

    searchInput.addEventListener(
      "input",
      function () {

        currentJobSearch =
          searchInput.value;


        /*
         * Prevent an API request for
         * every individual keystroke.
         *
         * Example:
         * c
         * cu
         * cus
         * cust
         * customer
         *
         * Only the final search is sent
         * after the user pauses typing.
         */

        clearTimeout(
          jobsSearchTimer
        );


        jobsSearchTimer =
          setTimeout(
            function () {

              currentApiPage =
                1;


              jobsHasMore =
                false;


              loadJobsData();

            },
            450
          );

      }
    );

  }


  const filters =
    document.querySelectorAll(
      "[data-job-filter]"
    );


  filters.forEach(
    function (button) {

      button.addEventListener(
        "click",
        function () {

          currentJobFilter =
            button.dataset.jobFilter;


          filters.forEach(
            function (item) {

              item.classList.remove(
                "active"
              );

            }
          );


          button.classList.add(
            "active"
          );
        
		

          /*
           * Start the selected filter
           * from page 1.
           */

          currentApiPage =
            1;


          jobsHasMore =
            false;


          loadJobsData();

        }
      );

    }
  );

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
     PAGINATION EVENTS
  ======================================================= */

 function attachJobEvents() {

  const loadMoreButton =
    document.getElementById(
      "jobs-load-more"
    );


  if (loadMoreButton) {

    loadMoreButton.addEventListener(
      "click",
      function () {

        loadMoreJobs();

      }
    );

  }

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

      const cacheLimit =
        JOBS_API_PAGE_SIZE * 3;


      const cacheItems =
        Array.isArray(data)
          ? data.slice(
              0,
              cacheLimit
            )
          : [];


      localStorage.setItem(
        JOBS_CONFIG.CACHE_KEY,

        JSON.stringify({

          timestamp:
            Date.now(),

          items:
            cacheItems

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