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
        JOBS_CONFIG.API_URL +
        "?feed=" +
        encodeURIComponent(
          JOBS_CONFIG.FEED
        ) +
        "&page=1" +
        "&limit=" +
        JOBS_API_PAGE_SIZE;


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

        Loading more jobs...

      `;

    }


    try {

      const url =
        JOBS_CONFIG.API_URL +
        "?feed=" +
        encodeURIComponent(
          JOBS_CONFIG.FEED
        ) +
        "&page=" +
        nextPage +
        "&limit=" +
        JOBS_API_PAGE_SIZE;


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
       * Append new jobs instead of replacing
       * the jobs already displayed.
       */

      const existingIds =
        new Set(
          jobs.map(
            function(job) {
              return String(
                job.id || ""
              );
            }
          )
        );


      data.items.forEach(
        function(job) {

          const id =
            String(
              job.id || ""
            );


          if (
            !existingIds.has(id)
          ) {

            jobs.push(
              job
            );

            existingIds.add(
              id
            );

          }

        }
      );


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
          jobsTotal
        );


      /*
       * Save the accumulated jobs.
       * This gives the next visit a useful
       * cached starting point.
       */

      saveCachedJobs(
        jobs
      );


      renderJobs();


    } catch (error) {

      console.error(
        "TUPS Jobs: Load more error:",
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
    getFilteredJobs();


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
        ${filteredJobs.length}
      </strong>

      ${

        currentJobSearch ||
        currentJobFilter !== "all"

          ? "matching vacancies"

          : (
              jobsTotal
                ? "vacancies available"
                : "vacancies"
            )

      }

      ${
        jobsTotal > jobs.length
          ? `
            <span class="jobs-loaded-count">
              • ${jobs.length} loaded
            </span>
          `
          : ""
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

function getFilteredJobs() {

  const search =
    currentJobSearch
      .trim()
      .toLowerCase();


  return jobs.filter(
    function (job) {

      const searchableText = [

        job.title,
        job.company,
        job.location,
        job.area,
        job.state,
        job.category,
        job.sector,
        job.employmentType,
        job.source

      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();


      if (
        search &&
        !searchableText.includes(search)
      ) {

        return false;

      }


      return matchesJobFilter(
        job,
        currentJobFilter
      );

    }
  );

}


function matchesJobFilter(job, filter) {

  if (filter === "all") {
    return true;
  }

  const title =
    String(job.title || "").toLowerCase();

  const company =
    String(job.company || "").toLowerCase();

  const location =
    String(job.location || "").toLowerCase();

  const area =
    String(job.area || "").toLowerCase();

  const state =
    String(job.state || "").toLowerCase();

  const category =
    String(job.category || "").toLowerCase();

  const sector =
    String(job.sector || "").toLowerCase();

  const employmentType =
    String(job.employmentType || "").toLowerCase();

  const text = [
    title,
    company,
    location,
    area,
    state,
    category,
    sector,
    employmentType
  ]
    .filter(Boolean)
    .join(" ");

  /*
   * NIGERIA FILTER
   */

  if (filter === "nigeria") {

    const nigeriaKeywords = [

      "nigeria",
      "abuja",
      "fct",
      "lagos",
      "kano",
      "kaduna",
      "rivers",
      "port harcourt",
      "oyo",
      "ibadan",
      "enugu",
      "anambra",
      "delta",
      "kwara",
      "plateau",
      "benue",
      "osun",
      "ogun",
      "ondo",
      "ekiti",
      "imo",
      "abia",
      "cross river",
      "akwa ibom",
      "bayelsa",
      "nasarawa",
      "kogi",
      "sokoto",
      "katsina",
      "jigawa",
      "borno",
      "yobe",
      "zamfara",
      "gombe",
      "taraba",
      "bauchi",
      "ebonyi",
      "edo",
      "ondo"
    ];

    return nigeriaKeywords.some(function(keyword) {

      return text.includes(keyword);

    });

  }


  /*
   * ABUJA / FCT FILTER
   */

  if (filter === "abuja") {

    const abujaKeywords = [

      "abuja",
      "fct",
      "federal capital territory",

      // Abuja districts and areas
      "gwarinpa",
      "kubwa",
      "jabi",
      "wuse",
      "wuse 2",
      "maitama",
      "asokoro",
      "utako",
      "lugbe",
      "lokogoma",
      "galadimawa",
      "life camp",
      "lifecamp",
      "karsana",
      "katampe",
      "jikwoyi",
      "nyanya",
      "karu",
      "kurudu",
      "apo",
      "garki",
      "gudu",
      "durumi",
      "dakibiyu",
      "wuye",
      "airport road",
      " kubwa"
    ];

    return abujaKeywords.some(function(keyword) {

      return text.includes(keyword.trim());

    });

  }


  /*
   * CATEGORY FILTERS
   */

  const filterMap = {

    education: [

      "education",
      "teacher",
      "teaching",
      "school",
      "lecturer",
      "academic",
      "tutor",
      "principal",
      "head teacher",
      "school administrator",
      "early years",
      "primary education",
      "secondary education"

    ],

    technology: [

      "technology",
      "software",
      "developer",
      "programmer",
      "programming",
      "web development",
      "mobile development",
      "ict",
      "information technology",
      "cybersecurity",
      "cyber security",
      "network administrator",
      "cloud",
      "database",
      "data analyst",
      "data science",
      "artificial intelligence",
      "machine learning",
      "devops",
      "technical support"

    ],

    finance: [

      "finance",
      "accounting",
      "accountant",
      "bank",
      "banking",
      "audit",
      "auditor",
      "financial",
      "treasury",
      "tax",
      "payroll",
      "investment"

    ],

    healthcare: [

      "health",
      "healthcare",
      "medical",
      "nurse",
      "nursing",
      "doctor",
      "pharmacy",
      "pharmacist",
      "hospital",
      "clinical",
      "laboratory",
      "health officer"

    ],

    engineering: [

      "engineering",
      "engineer",
      "mechanical",
      "electrical",
      "civil engineer",
      "chemical engineer",
      "construction",
      "structural",
      "maintenance engineer",
      "project engineer"

    ],

    administration: [

      "administration",
      "administrative",
      "office",
      "secretary",
      "receptionist",
      "operations",
      "human resources",
      "hr officer",
      "personal assistant",
      "executive assistant",
      "front desk"

    ],

    sales: [

      "sales",
      "marketing",
      "business development",
      "commercial",
      "customer service",
      "account manager",
      "brand manager",
      "sales representative",
      "business development officer"

    ],

    creative: [

      "creative",
      "media",
      "content",
      "designer",
      "design",
      "graphics",
      "graphic designer",
      "video",
      "photographer",
      "writer",
      "copywriter",
      "animation",
      "public relations"

    ],

    internship: [

      "internship",
      "intern",
      "graduate",
      "graduate trainee",
      "trainee",
      "entry level",
      "entry-level",
      "nysc",
      "national youth service"

    ],

    remote: [

      "remote",
      "work from home",
      "work-from-home",
      "worldwide",
      "anywhere",
      "distributed team"

    ]

  };


  const keywords =
    filterMap[filter] || [];


  return keywords.some(function(keyword) {

    return text.includes(keyword);

  });

}


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


        renderJobs();

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


          renderJobs();

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