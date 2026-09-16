// ============================================================
// TUPS EDUCATION NEWS
// DYNAMIC DISPLAY ENGINE
// SHARES SCHOOL GIST VISUAL SYSTEM
//
// DATABASE / JSON FIELDS USED:
// id
// title
// url
// source
// sourceType
// publishedAt
// discoveredAt
// image
// excerpt
// section
// status
// contentType
//
// CONTENT TYPE:
// news
//
// PERFORMANCE:
// Cache-first display + background refresh
// ============================================================


const TUPS_NEWS_FEED_URL =
  "https://script.google.com/macros/s/AKfycbxW-qt2N1ggueT8Y5eZGLM9ltM8mGbOiKBKRYx6ZxD0X00rqw23nNJotkO1L2ueEF-E/exec";


const EDUCATION_NEWS_PER_PAGE = 12;


/*
 * Browser cache settings.
 *
 * The visitor sees cached news immediately.
 * A fresh feed is then requested in the background.
 *
 * 30 minutes is long enough to avoid unnecessary
 * repeated requests while still keeping the feed fresh.
 */

const EDUCATION_NEWS_CACHE_KEY =
  "tups_education_news_cache_v1";

const EDUCATION_NEWS_CACHE_MAX_AGE =
  30 * 60 * 1000;


let educationNewsItems = [];

let educationNewsPage = 1;


// ============================================================
// LOAD EDUCATION NEWS
// ============================================================

export async function loadEducationNews() {

  if (!contentArea) return;


  /*
   * First check browser cache.
   *
   * If valid cached data exists, display it immediately.
   */

  const cachedItems =
    readEducationNewsCache();


  if (
    cachedItems &&
    cachedItems.length
  ) {

    educationNewsItems =
      cachedItems;

    educationNewsPage = 1;

    renderEducationNews();

    /*
     * Refresh quietly in the background.
     */

    refreshEducationNewsInBackground();

    return;

  }


  /*
   * No cache available.
   *
   * Show loading state while making the
   * first network request.
   */

  renderEducationNewsLoading();


  try {

    const freshItems =
      await fetchEducationNews();


    educationNewsItems =
      freshItems;

    educationNewsPage = 1;


    saveEducationNewsCache(
      freshItems
    );


    renderEducationNews();


  } catch (error) {

    console.error(
      "TUPS Education News feed error:",
      error
    );


    renderEducationNewsError();

  }

}


// ============================================================
// BACKGROUND REFRESH
// ============================================================

async function refreshEducationNewsInBackground() {

  try {

    const freshItems =
      await fetchEducationNews();


    /*
     * Only replace the displayed feed if
     * the fresh request returned successfully.
     */

    if (
      Array.isArray(
        freshItems
      )
    ) {

      educationNewsItems =
        freshItems;


      saveEducationNewsCache(
        freshItems
      );


      /*
       * Return to page 1 because the dataset
       * may have changed since the cached version.
       */

      educationNewsPage = 1;


      renderEducationNews();

    }

  } catch (error) {

    /*
     * Background refresh failure should NOT
     * destroy working cached content.
     */

    console.warn(
      "TUPS Education News background refresh failed:",
      error
    );

  }

}


// ============================================================
// FETCH
// ============================================================

async function fetchEducationNews() {

  const response =
    await fetch(
      TUPS_NEWS_FEED_URL +
      "?feed=news&t=" +
      Date.now(),
      {
        method: "GET",
        cache: "no-store"
      }
    );


  if (!response.ok) {

    throw new Error(
      "Education News feed returned HTTP " +
      response.status
    );

  }


  const data =
    await response.json();


  if (
    !data ||
    data.success !== true ||
    !Array.isArray(data.items)
  ) {

    throw new Error(
      "Invalid TUPS Education News feed"
    );

  }


  return normaliseEducationNews(
    data.items
  );

}


// ============================================================
// NORMALISE NEWS DATA
// ============================================================

function normaliseEducationNews(
  items
) {

  const seenIds =
    new Set();

  const seenUrls =
    new Set();


  const validItems =
    [];


  items.forEach(
    function(rawItem) {

      if (!rawItem) return;


      const item = {

        id:
          String(
            rawItem.id || ""
          ).trim(),

        title:
          String(
            rawItem.title || ""
          ).trim(),

        url:
          String(
            rawItem.url || ""
          ).trim(),

        source:
          String(
            rawItem.source || "TUPS"
          ).trim(),

        sourceType:
          String(
            rawItem.sourceType || ""
          ).trim(),

        publishedAt:
          String(
            rawItem.publishedAt || ""
          ).trim(),

        discoveredAt:
          String(
            rawItem.discoveredAt || ""
          ).trim(),

        image:
          String(
            rawItem.image || ""
          ).trim(),

        excerpt:
          String(
            rawItem.excerpt || ""
          ).trim(),

        section:
          String(
            rawItem.section || ""
          ).trim(),

        status:
          String(
            rawItem.status || ""
          ).trim().toLowerCase(),

        contentType:
          String(
            rawItem.contentType || ""
          ).trim().toLowerCase()

      };


      /*
       * IMPORTANT:
       *
       * Education News accepts ONLY records
       * classified as contentType = "news".
       *
       * This mirrors the backend:
       *
       * ?feed=news
       *
       * and protects the frontend against
       * accidental cross-feed records.
       */

      if (
        item.contentType !== "news"
      ) {

        return;

      }


      /*
       * Only active stories should appear.
       *
       * If status is missing, retain the item
       * for backward compatibility.
       */

      if (
        item.status &&
        item.status !== "active"
      ) {

        return;

      }


      /*
       * A story requires a title and valid
       * HTTP/HTTPS source URL.
       */

      if (
        !item.title ||
        !isSafeNewsURL(
          item.url
        )
      ) {

        return;

      }


      /*
       * Deduplicate by database ID.
       */

      if (
        item.id &&
        seenIds.has(
          item.id
        )
      ) {

        return;

      }


      /*
       * Deduplicate by URL as a second
       * layer of protection.
       */

      const normalisedURL =
        normaliseNewsURL(
          item.url
        );


      if (
        seenUrls.has(
          normalisedURL
        )
      ) {

        return;

      }


      if (item.id) {

        seenIds.add(
          item.id
        );

      }


      seenUrls.add(
        normalisedURL
      );


      validItems.push(
        item
      );

    }
  );


  /*
   * Newest stories first.
   */

  validItems.sort(
    function(a, b) {

      const dateA =
        new Date(
          a.publishedAt ||
          a.discoveredAt ||
          0
        ).getTime();


      const dateB =
        new Date(
          b.publishedAt ||
          b.discoveredAt ||
          0
        ).getTime();


      return dateB - dateA;

    }
  );


  return validItems;

}


// ============================================================
// CACHE — READ
// ============================================================

function readEducationNewsCache() {

  try {

    const raw =
      localStorage.getItem(
        EDUCATION_NEWS_CACHE_KEY
      );


    if (!raw) {

      return null;

    }


    const cache =
      JSON.parse(
        raw
      );


    if (
      !cache ||
      !Array.isArray(
        cache.items
      ) ||
      !cache.timestamp
    ) {

      localStorage.removeItem(
        EDUCATION_NEWS_CACHE_KEY
      );

      return null;

    }


    const age =
      Date.now() -
      Number(
        cache.timestamp
      );


    /*
     * Expired cache is discarded.
     */

    if (
      age >
      EDUCATION_NEWS_CACHE_MAX_AGE
    ) {

      localStorage.removeItem(
        EDUCATION_NEWS_CACHE_KEY
      );

      return null;

    }


    return cache.items;

  } catch (error) {

    console.warn(
      "TUPS Education News cache read failed:",
      error
    );


    return null;

  }

}


// ============================================================
// CACHE — SAVE
// ============================================================

function saveEducationNewsCache(
  items
) {

  try {

    localStorage.setItem(
      EDUCATION_NEWS_CACHE_KEY,
      JSON.stringify({

        timestamp:
          Date.now(),

        items:
          items

      })
    );

  } catch (error) {

    /*
     * Storage errors must never break
     * the Education News module.
     */

    console.warn(
      "TUPS Education News cache save failed:",
      error
    );

  }

}


// ============================================================
// LOADING STATE
// ============================================================

function renderEducationNewsLoading() {

  if (!contentArea) return;


  contentArea.innerHTML = `

    <section class="school-gist-page">

      <div class="school-gist-header">

        <div class="school-gist-kicker">
          📰 EDUCATION NEWS
        </div>

        <h1>
          What's happening in Nigerian education?
        </h1>

        <p>
          Latest education updates, examinations,
          admissions, policies and important developments.
        </p>

      </div>


      <div class="school-gist-empty">

        Loading the latest education news...

      </div>

    </section>

  `;

}


// ============================================================
// MAIN RENDER
// ============================================================

function renderEducationNews() {

  if (!contentArea) return;


  if (
    !educationNewsItems.length
  ) {

    renderEducationNewsEmpty();

    return;

  }


  const totalPages =
    Math.ceil(
      educationNewsItems.length /
      EDUCATION_NEWS_PER_PAGE
    );


  if (
    educationNewsPage >
    totalPages
  ) {

    educationNewsPage =
      totalPages;

  }


  const start =
    (
      educationNewsPage - 1
    ) *
    EDUCATION_NEWS_PER_PAGE;


  const pageItems =
    educationNewsItems.slice(
      start,
      start +
      EDUCATION_NEWS_PER_PAGE
    );


  contentArea.innerHTML = `

    <section class="school-gist-page">

      <!-- HEADER -->

      <div class="school-gist-header">

        <div class="school-gist-kicker">
          📰 EDUCATION NEWS
        </div>

        <h1>
          What's happening in Nigerian education?
        </h1>

        <p>
          Latest education updates, examinations,
          admissions, policies and important developments.
        </p>


        <div
          class="school-gist-topic-bar"
          id="educationNewsTopicBar"
        >

          <span>
            JAMB & Admissions
          </span>

          <span>
            WAEC & Examinations
          </span>

          <span>
            Education Policy
          </span>

          <span>
            Schools & Universities
          </span>

          <span>
            Scholarships
          </span>

        </div>

      </div>


      <!-- NEWS SECTION -->

      <section class="school-gist-section">

        <div class="school-gist-section-heading">

          <div>

            <span class="school-gist-section-kicker">
              TUPS EDUCATION HUB
            </span>

            <h2>
              📰 LATEST EDUCATION NEWS
            </h2>

            <p>
              Important developments from across
              Nigeria's education sector.
            </p>

          </div>


          <span class="school-gist-count">
            ${educationNewsItems.length}
          </span>

        </div>


        <div class="school-gist-grid">

          ${
            pageItems
              .map(
                renderEducationNewsCard
              )
              .join("")
          }

        </div>


        ${
          totalPages > 1
            ? renderEducationNewsPagination(
                educationNewsPage,
                totalPages
              )
            : ""
        }

      </section>


      <!-- SOURCE NOTE -->

      <div class="school-gist-source-note">

        <i class="fa-solid fa-circle-info"></i>

        <span>
          Education News is collected from publicly
          available education and news sources.
          Open the original story to read the full report.
        </span>

      </div>

    </section>

  `;


  attachEducationNewsPagination();

}


// ============================================================
// NEWS CARD
// ============================================================

function renderEducationNewsCard(
  item
) {

  const imageHTML =
    item.image &&
    isSafeNewsURL(
      item.image
    )
      ? `

        <a
          class="school-gist-image-link"
          href="${escapeAttribute(item.url)}"
          target="_blank"
          rel="noopener noreferrer"
        >

          <img
            src="${escapeAttribute(item.image)}"
            alt="${escapeAttribute(item.title)}"
            loading="lazy"
          >

        </a>

      `
      : "";


  const published =
    formatEducationNewsDate(
      item.publishedAt ||
      item.discoveredAt
    );


  return `

    <article
      class="school-gist-card"
      data-news-id="${escapeAttribute(item.id)}"
    >

      ${imageHTML}


      <div class="school-gist-card-content">


        <div class="school-gist-card-meta">

          <span>
            ${escapeEducationNewsHTML(
              item.source || "TUPS"
            )}
          </span>


          <span>
            ${escapeEducationNewsHTML(
              published
            )}
          </span>

        </div>


        <h3>
          ${escapeEducationNewsHTML(
            item.title
          )}
        </h3>


        ${
          item.excerpt
            ? `
              <p>
                ${escapeEducationNewsHTML(
                  item.excerpt
                )}
              </p>
            `
            : ""
        }


        <div class="school-gist-card-footer">

          <a
            class="school-gist-read-more"
            href="${escapeAttribute(item.url)}"
            target="_blank"
            rel="noopener noreferrer"
          >

            Read original story

            <i class="fa-solid fa-arrow-right"></i>

          </a>

        </div>


      </div>

    </article>

  `;

}


// ============================================================
// PAGINATION
// ============================================================

function renderEducationNewsPagination(
  currentPage,
  totalPages
) {

  let html = `

    <div
      class="school-gist-pagination"
      data-news-pagination="education"
    >

  `;


  for (
    let i = 1;
    i <= totalPages;
    i++
  ) {

    html += `

      <button
        type="button"
        class="school-gist-page-button ${
          i === currentPage
            ? "active"
            : ""
        }"
        data-news-page="${i}"
      >

        ${i}

      </button>

    `;

  }


  html += `

    </div>

  `;


  return html;

}


// ============================================================
// PAGINATION EVENTS
// ============================================================

function attachEducationNewsPagination() {

  document
    .querySelectorAll(
      "[data-news-page]"
    )
    .forEach(
      function(button) {

        button.addEventListener(
          "click",
          function() {

            const page =
              Number(
                button.dataset.newsPage
              );


            if (
              !Number.isInteger(
                page
              ) ||
              page < 1
            ) {

              return;

            }


            const totalPages =
              Math.ceil(
                educationNewsItems.length /
                EDUCATION_NEWS_PER_PAGE
              );


            if (
              page > totalPages
            ) {

              return;

            }


            educationNewsPage =
              page;


            renderEducationNews();


            const newsSection =
              document.querySelector(
                "[data-news-pagination]"
              );


            if (
              newsSection
            ) {

              newsSection.scrollIntoView({
                behavior: "smooth",
                block: "center"
              });

            }

          }
        );

      }
    );

}


// ============================================================
// EMPTY STATE
// ============================================================

function renderEducationNewsEmpty() {

  if (!contentArea) return;


  contentArea.innerHTML = `

    <section class="school-gist-page">

      <div class="school-gist-header">

        <div class="school-gist-kicker">
          📰 EDUCATION NEWS
        </div>

        <h1>
          What's happening in Nigerian education?
        </h1>

        <p>
          Latest education updates, examinations,
          admissions, policies and important developments.
        </p>

      </div>


      <div class="school-gist-empty">

        No fresh education news is available
        right now. Please check again soon.

      </div>

    </section>

  `;

}


// ============================================================
// ERROR
// ============================================================

function renderEducationNewsError() {

  if (!contentArea) return;


  contentArea.innerHTML = `

    <section class="school-gist-page">

      <div class="school-gist-header">

        <div class="school-gist-kicker">
          📰 EDUCATION NEWS
        </div>

        <h1>
          What's happening in Nigerian education?
        </h1>

        <p>
          Latest education updates, examinations,
          admissions, policies and important developments.
        </p>

      </div>


      <div class="school-gist-empty">

        <i
          class="fa-solid fa-triangle-exclamation">
        </i>

        <p>
          Education News could not be loaded
          right now.
        </p>


        <button
          type="button"
          id="educationNewsRetryButton"
        >

          Try again

        </button>

      </div>

    </section>

  `;


  const retryButton =
    document.getElementById(
      "educationNewsRetryButton"
    );


  if (retryButton) {

    retryButton.addEventListener(
      "click",
      function() {

        loadEducationNews();

      }
    );

  }

}


// ============================================================
// DATE FORMAT
// ============================================================

function formatEducationNewsDate(
  value
) {

  if (!value) {

    return "";

  }


  const date =
    new Date(
      value
    );


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


// ============================================================
// SAFE URL CHECK
// ============================================================

function isSafeNewsURL(
  url
) {

  try {

    const parsed =
      new URL(
        url
      );


    return (
      parsed.protocol ===
        "https:" ||
      parsed.protocol ===
        "http:"
    );

  } catch {

    return false;

  }

}


// ============================================================
// NORMALISE URL
// ============================================================

function normaliseNewsURL(
  url
) {

  try {

    const parsed =
      new URL(
        url
      );


    parsed.pathname =
      parsed.pathname.replace(
        /\/+$/,
        ""
      );


    return parsed.href
      .toLowerCase();

  } catch {

    return String(
      url || ""
    ).trim().toLowerCase();

  }

}


// ============================================================
// ESCAPING
// ============================================================

function escapeEducationNewsHTML(
  value
) {

  return String(
    value || ""
  )
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


function escapeAttribute(
  value
) {

  return escapeEducationNewsHTML(
    value
  );

}
