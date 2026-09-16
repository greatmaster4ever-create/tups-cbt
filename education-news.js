/* =========================================================
   TUPS EDUCATION NEWS
   DYNAMIC FEED VERSION 2.0
========================================================= */

const TUPS_NEWS_FEED_URL =
  "https://script.google.com/macros/s/AKfycbxW-qt2N1ggueT8Y5eZGLM9ltM8mGbOiKBKRYx6ZxD0X00rqw23nNJotkO1L2ueEF-E/exec";

const EDUCATION_NEWS_PER_PAGE = 6;

let educationNewsItems = [];
let educationNewsCurrentPage = 1;


/* =========================================================
   LOAD EDUCATION NEWS
========================================================= */

export async function loadEducationNews() {

  if (!contentArea) return;

  contentArea.innerHTML = `
    <section class="content-page education-news-page">

      <div class="content-card education-news-loading">

        <div class="card-icon">
          <i class="fa-solid fa-newspaper"></i>
        </div>

        <h2>Education News</h2>

        <p>
          Loading the latest education news...
        </p>

      </div>

    </section>
  `;

  try {

    const response = await fetch(
      `${TUPS_NEWS_FEED_URL}?feed=news&t=${Date.now()}`,
      {
        method: "GET",
        cache: "no-store"
      }
    );

    if (!response.ok) {
      throw new Error(
        `Education News request failed: HTTP ${response.status}`
      );
    }

    const data = await response.json();

    if (
      !data ||
      data.success !== true ||
      !Array.isArray(data.items)
    ) {
      throw new Error(
        "Education News feed returned an invalid response."
      );
    }

    educationNewsItems = normalizeEducationNews(data.items);

    educationNewsCurrentPage = 1;

    renderEducationNews();

  } catch (error) {

    console.error(
      "TUPS Education News failed to load:",
      error
    );

    renderEducationNewsError();

  }

}


/* =========================================================
   NORMALIZE DATABASE STORIES
========================================================= */

function normalizeEducationNews(items) {

  const seenIds = new Set();
  const seenUrls = new Set();

  const normalized = [];

  items.forEach((item) => {

    if (!item || typeof item !== "object") return;

    const id =
      String(item.id || "").trim();

    const title =
      String(item.title || "").trim();

    const url =
      String(item.url || "").trim();

    const source =
      String(item.source || "").trim();

    const image =
      String(item.image || "").trim();

    const excerpt =
      String(item.excerpt || "").trim();

    const section =
      String(item.section || "").trim();

    const contentType =
      String(item.contentType || "").trim().toLowerCase();

    const status =
      String(item.status || "").trim().toLowerCase();

    if (!title || !url) return;

    /* -----------------------------------------------------
       Only education-news records
    ----------------------------------------------------- */

    if (
      contentType &&
      contentType !== "news"
    ) {
      return;
    }

    /* -----------------------------------------------------
       Ignore inactive records
    ----------------------------------------------------- */

    if (
      status &&
      status !== "active"
    ) {
      return;
    }

    /* -----------------------------------------------------
       Basic URL validation
    ----------------------------------------------------- */

    let validUrl = "";

    try {

      const parsedUrl =
        new URL(url);

      if (
        parsedUrl.protocol !== "http:" &&
        parsedUrl.protocol !== "https:"
      ) {
        return;
      }

      validUrl = parsedUrl.href;

    } catch (error) {

      return;

    }

    /* -----------------------------------------------------
       Deduplicate by ID
    ----------------------------------------------------- */

    if (id) {

      if (seenIds.has(id)) {
        return;
      }

      seenIds.add(id);

    }

    /* -----------------------------------------------------
       Deduplicate by URL
    ----------------------------------------------------- */

    const normalizedUrl =
      validUrl.toLowerCase().replace(/\/$/, "");

    if (seenUrls.has(normalizedUrl)) {
      return;
    }

    seenUrls.add(normalizedUrl);

    normalized.push({

      id:
        id ||
        normalizedUrl,

      title,

      url:
        validUrl,

      source:
        source ||
        "Education Source",

      sourceType:
        String(item.sourceType || "").trim(),

      publishedAt:
        item.publishedAt ||
        item.discoveredAt ||
        "",

      discoveredAt:
        item.discoveredAt ||
        "",

      image,

      excerpt,

      section:
        section ||
        "education",

      status:
        status ||
        "active",

      contentType:
        "news"

    });

  });

  /* -------------------------------------------------------
     Newest first
  ------------------------------------------------------- */

  normalized.sort((a, b) => {

    const dateA =
      new Date(a.publishedAt || 0).getTime();

    const dateB =
      new Date(b.publishedAt || 0).getTime();

    return dateB - dateA;

  });

  return normalized;

}


/* =========================================================
   RENDER EDUCATION NEWS
========================================================= */

function renderEducationNews() {

  if (!contentArea) return;

  if (!educationNewsItems.length) {

    contentArea.innerHTML = `
      <section class="content-page education-news-page">

        <div class="content-card">

          <div class="card-icon">
            <i class="fa-solid fa-newspaper"></i>
          </div>

          <h2>Education News</h2>

          <p>
            No education news is currently available.
          </p>

          <button
            type="button"
            class="hub-more-button"
            id="educationNewsRetry"
          >
            Try again
            <i class="fa-solid fa-rotate-right"></i>
          </button>

        </div>

      </section>
    `;

    const retryButton =
      document.getElementById(
        "educationNewsRetry"
      );

    if (retryButton) {

      retryButton.addEventListener(
        "click",
        loadEducationNews
      );

    }

    return;

  }

  const totalPages =
    Math.ceil(
      educationNewsItems.length /
      EDUCATION_NEWS_PER_PAGE
    );

  if (
    educationNewsCurrentPage >
    totalPages
  ) {
    educationNewsCurrentPage =
      totalPages;
  }

  const startIndex =
    (educationNewsCurrentPage - 1) *
    EDUCATION_NEWS_PER_PAGE;

  const pageItems =
    educationNewsItems.slice(
      startIndex,
      startIndex +
      EDUCATION_NEWS_PER_PAGE
    );

  const featured =
    educationNewsItems[0];

  const latestItems =
    pageItems;

  contentArea.innerHTML = `

    <section class="content-page education-news-page">

      <div class="education-news-header">

        <div class="education-news-kicker">
          EDUCATION NEWS
        </div>

        <h1>
          Latest Nigerian Education News
        </h1>

        <p>
          Important updates, announcements and
          developments across Nigeria's education sector.
        </p>

      </div>


      <!-- FEATURED STORY -->

      ${
        educationNewsCurrentPage === 1
          ? renderFeaturedStory(featured)
          : ""
      }


      <!-- LATEST STORIES -->

      <section class="education-news-section">

        <div class="education-news-section-heading">

          <h2>
            <i class="fa-solid fa-newspaper"></i>
            Latest Education News
          </h2>

        </div>

        <div class="education-news-grid">

          ${
            latestItems
              .map(renderNewsCard)
              .join("")
          }

        </div>

      </section>


      <!-- PAGINATION -->

      ${
        totalPages > 1
          ? renderNewsPagination(totalPages)
          : ""
      }


      <div class="education-news-source-note">

        <i class="fa-solid fa-circle-info"></i>

        News stories are sourced from publicly available
        education and news publications. Read the original
        story through the source link provided.

      </div>

    </section>

  `;

  attachEducationNewsEvents();

}


/* =========================================================
   FEATURED STORY
========================================================= */

function renderFeaturedStory(item) {

  if (!item) return "";

  return `

    <article class="education-news-featured">

      ${
        item.image
          ? `
            <a
              href="${escapeAttribute(item.url)}"
              target="_blank"
              rel="noopener noreferrer"
              class="education-news-featured-image"
            >

              <img
                src="${escapeAttribute(item.image)}"
                alt="${escapeAttribute(item.title)}"
                loading="lazy"
              >

            </a>
          `
          : ""
      }

      <div class="education-news-featured-content">

        <div class="education-news-meta">

          <span>
            ${escapeHtml(item.source)}
          </span>

          ${
            formatNewsDate(item.publishedAt)
              ? `
                <span>
                  ${formatNewsDate(item.publishedAt)}
                </span>
              `
              : ""
          }

        </div>

        <h2>
          ${escapeHtml(item.title)}
        </h2>

        ${
          item.excerpt
            ? `
              <p>
                ${escapeHtml(item.excerpt)}
              </p>
            `
            : ""
        }

        <a
          href="${escapeAttribute(item.url)}"
          target="_blank"
          rel="noopener noreferrer"
          class="education-news-read-more"
        >
          Read original story
          <i class="fa-solid fa-arrow-right"></i>
        </a>

      </div>

    </article>

  `;

}


/* =========================================================
   NEWS CARD
========================================================= */

function renderNewsCard(item) {

  return `

    <article class="education-news-card">

      ${
        item.image
          ? `
            <a
              href="${escapeAttribute(item.url)}"
              target="_blank"
              rel="noopener noreferrer"
              class="education-news-card-image"
            >

              <img
                src="${escapeAttribute(item.image)}"
                alt="${escapeAttribute(item.title)}"
                loading="lazy"
              >

            </a>
          `
          : `
            <div class="education-news-card-image education-news-no-image">

              <i class="fa-solid fa-newspaper"></i>

            </div>
          `
      }


      <div class="education-news-card-content">

        <div class="education-news-card-meta">

          <span>
            ${escapeHtml(item.source)}
          </span>

          ${
            formatNewsDate(item.publishedAt)
              ? `
                <span>
                  ${formatNewsDate(item.publishedAt)}
                </span>
              `
              : ""
          }

        </div>


        <h3>
          ${escapeHtml(item.title)}
        </h3>


        ${
          item.excerpt
            ? `
              <p>
                ${escapeHtml(item.excerpt)}
              </p>
            `
            : ""
        }


        <div class="education-news-card-footer">

          <a
            href="${escapeAttribute(item.url)}"
            target="_blank"
            rel="noopener noreferrer"
            class="education-news-read-more"
          >
            Read story
            <i class="fa-solid fa-arrow-right"></i>
          </a>

        </div>

      </div>

    </article>

  `;

}


/* =========================================================
   PAGINATION
========================================================= */

function renderNewsPagination(totalPages) {

  let html = `
    <div class="education-news-pagination">
  `;

  html += `

    <button
      type="button"
      class="education-news-page-button"
      data-news-page="${educationNewsCurrentPage - 1}"
      ${educationNewsCurrentPage === 1 ? "disabled" : ""}
      aria-label="Previous page"
    >
      <i class="fa-solid fa-chevron-left"></i>
    </button>

  `;


  for (
    let page = 1;
    page <= totalPages;
    page++
  ) {

    html += `

      <button
        type="button"
        class="education-news-page-button ${
          page === educationNewsCurrentPage
            ? "active"
            : ""
        }"
        data-news-page="${page}"
      >
        ${page}
      </button>

    `;

  }


  html += `

    <button
      type="button"
      class="education-news-page-button"
      data-news-page="${educationNewsCurrentPage + 1}"
      ${
        educationNewsCurrentPage === totalPages
          ? "disabled"
          : ""
      }
      aria-label="Next page"
    >
      <i class="fa-solid fa-chevron-right"></i>
    </button>

  `;


  html += `
    </div>
  `;

  return html;

}


/* =========================================================
   EVENTS
========================================================= */

function attachEducationNewsEvents() {

  const paginationButtons =
    document.querySelectorAll(
      "[data-news-page]"
    );

  paginationButtons.forEach(
    (button) => {

      button.addEventListener(
        "click",
        () => {

          const page =
            Number(
              button.dataset.newsPage
            );

          if (!page || page < 1) {
            return;
          }

          const totalPages =
            Math.ceil(
              educationNewsItems.length /
              EDUCATION_NEWS_PER_PAGE
            );

          if (page > totalPages) {
            return;
          }

          educationNewsCurrentPage =
            page;

          renderEducationNews();

          if (contentArea) {

            contentArea.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });

          }

        }
      );

    }
  );

}


/* =========================================================
   ERROR DISPLAY
========================================================= */

function renderEducationNewsError() {

  if (!contentArea) return;

  contentArea.innerHTML = `

    <section class="content-page education-news-page">

      <div class="content-card">

        <div class="card-icon">
          <i class="fa-solid fa-triangle-exclamation"></i>
        </div>

        <h2>
          Education News
        </h2>

        <p>
          The Education News service could not be
          loaded at this time. Please try again.
        </p>

        <button
          type="button"
          class="hub-more-button"
          id="educationNewsRetry"
        >
          Try again
          <i class="fa-solid fa-rotate-right"></i>
        </button>

      </div>

    </section>

  `;

  const retryButton =
    document.getElementById(
      "educationNewsRetry"
    );

  if (retryButton) {

    retryButton.addEventListener(
      "click",
      loadEducationNews
    );

  }

}


/* =========================================================
   DATE FORMATTER
========================================================= */

function formatNewsDate(value) {

  if (!value) return "";

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


/* =========================================================
   HTML SAFETY
========================================================= */

function escapeHtml(value) {

  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

}


function escapeAttribute(value) {

  return escapeHtml(value);

}