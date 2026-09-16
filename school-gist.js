// ============================================================
// TUPS SCHOOL GIST
// DYNAMIC DISPLAY ENGINE
// NO HARDCODED NEWS
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
// ============================================================


const TUPS_GIST_FEED_URL =
  "https://script.google.com/macros/s/AKfycbxW-qt2N1ggueT8Y5eZGLM9ltM8mGbOiKBKRYx6ZxD0X00rqw23nNJotkO1L2ueEF-E/exec";


const SCHOOL_GIST_PER_PAGE = 4;


const schoolGistPages = {

  hot: 1,
  trending: 1,
  achievements: 1,
  sports: 1,
  schoolLife: 1,
  social: 1,
  buzz: 1

};


let schoolGistItems = [];


// ============================================================
// SECTION DEFINITIONS
// ============================================================

const SCHOOL_GIST_SECTIONS = [

  {
    key: "hot",
    title: "🔥 HOT RIGHT NOW"
  },

  {
    key: "trending",
    title: "👀 TRENDING SCHOOL GIST"
  },

  {
    key: "achievements",
    title: "🏆 ACHIEVEMENTS & AWARDS"
  },

  {
    key: "sports",
    title: "⚽ SPORTS & COMPETITIONS"
  },

  {
    key: "schoolLife",
    title: "📸 SCHOOL LIFE"
  },

  {
    key: "social",
    title: "📱 SOCIAL SCHOOL POSTS"
  },

  {
    key: "buzz",
    title: "😂 BUZZ & GOSSIP"
  }

];


// ============================================================
// LOAD
// ============================================================

export async function loadSchoolGist() {

  if (!contentArea) return;


  contentArea.innerHTML = `

    <section class="school-gist-page">

      <div class="school-gist-header">

        <div class="school-gist-kicker">
          🔥 SCHOOL GIST & GOSSIP
        </div>

        <h1>
          What's happening around schools?
        </h1>

        <p>
          Fresh school stories, achievements,
          competitions, events and student buzz.
        </p>

      </div>


      <div
        class="school-gist-topic-bar"
        id="schoolGistTopicBar">
      </div>


      <div
        id="schoolGistContent">

        <div class="school-gist-empty">
          Loading fresh school gist...
        </div>

      </div>

    </section>

  `;


  try {

    const response =
      await fetch(
        TUPS_GIST_FEED_URL +
        "?t=" +
        Date.now(),
        {
          cache: "no-store"
        }
      );


    if (!response.ok) {

      throw new Error(
        "Gist feed returned HTTP " +
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
        "Invalid TUPS Gist feed"
      );

    }


    /*
     * Normalise the JSON returned by the
     * School Gist Apps Script.
     *
     * Database fields:
     *
     * id
     * title
     * url
     * source
     * sourceType
     * publishedAt
     * discoveredAt
     * image
     * excerpt
     * section
     * status
     */

    schoolGistItems =
      normaliseGistItems(
        data.items
      );


    resetGistPages();


    renderSchoolGistFeed();


  } catch (error) {

    console.error(
      "TUPS School Gist feed error:",
      error
    );


    renderSchoolGistError();

  }

}


// ============================================================
// NORMALISE GIST DATA
// ============================================================

function normaliseGistItems(items) {

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
          ).trim().toLowerCase()

      };


      /*
       * Only active stories should appear.
       *
       * If status is missing, retain the item
       * for backward compatibility with a feed
       * that may not yet expose the field.
       */

      if (
        item.status &&
        item.status !== "active"
      ) {

        return;

      }


      /*
       * A story needs a title and a valid
       * HTTP/HTTPS source URL.
       */

      if (
        !item.title ||
        !isSafeGistURL(
          item.url
        )
      ) {

        return;

      }


      /*
       * Every story must have exactly
       * one recognised section.
       */

      const validSection =
        SCHOOL_GIST_SECTIONS.some(
          function(section) {

            return (
              section.key ===
              item.section
            );

          }
        );


      if (!validSection) {

        return;

      }


      /*
       * Deduplicate by database ID first.
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
       * Also deduplicate by URL.
       *
       * This protects the page if the same
       * story somehow appears twice in JSON
       * under different IDs.
       */

      const normalisedURL =
        normaliseGistURL(
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


  return validItems;

}


// ============================================================
// SAFE URL CHECK
// ============================================================

function isSafeGistURL(url) {

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

function normaliseGistURL(url) {

  try {

    const parsed =
      new URL(
        url
      );


    /*
     * Remove trailing slash so these are
     * treated as the same story:
     *
     * example.com/story
     * example.com/story/
     */

    parsed.pathname =
      parsed.pathname.replace(
        /\/+$/,
        ""
      );


    return (
      parsed.href
        .toLowerCase()
    );

  } catch {

    return String(
      url || ""
    ).trim().toLowerCase();

  }

}


// ============================================================
// RESET
// ============================================================

function resetGistPages() {

  Object.keys(
    schoolGistPages
  ).forEach(
    function(section) {

      schoolGistPages[
        section
      ] = 1;

    }
  );

}


// ============================================================
// RENDER
// ============================================================

function renderSchoolGistFeed() {

  const container =
    document.getElementById(
      "schoolGistContent"
    );


  if (!container) return;


  let html = "";


  SCHOOL_GIST_SECTIONS.forEach(
    function(section) {

      /*
       * IMPORTANT:
       *
       * A story belongs to exactly ONE section.
       *
       * We deliberately use strict equality
       * rather than assigning/recycling stories
       * across multiple sections.
       */

      const items =
        schoolGistItems.filter(
          function(item) {

            return (
              item.section ===
              section.key
            );

          }
        );


      if (!items.length) {

        return;

      }


      html +=
        renderGistSection(
          section,
          items
        );

    }
  );


  if (!html) {

    html = `

      <div class="school-gist-empty">

        No fresh school gist is available
        right now. Please check again soon.

      </div>

    `;

  }


  container.innerHTML =
    html;


  attachGistPaginationEvents();

}


// ============================================================
// SECTION
// ============================================================

function renderGistSection(
  section,
  items
) {

  const page =
    schoolGistPages[
      section.key
    ] || 1;


  const start =
    (
      page - 1
    ) *
    SCHOOL_GIST_PER_PAGE;


  const pageItems =
    items.slice(
      start,
      start +
      SCHOOL_GIST_PER_PAGE
    );


  let html = `

    <section
      class="school-gist-section"
      data-gist-section="${escapeAttribute(section.key)}"
    >

      <div class="school-gist-section-heading">

        <h2>
          ${escapeGistHTML(section.title)}
        </h2>

        <span>
          ${items.length}
        </span>

      </div>


      <div class="school-gist-grid">

  `;


  pageItems.forEach(
    function(item) {

      html +=
        renderGistCard(
          item
        );

    }
  );


  html += `

      </div>

  `;


  const totalPages =
    Math.ceil(
      items.length /
      SCHOOL_GIST_PER_PAGE
    );


  if (
    totalPages > 1
  ) {

    html +=
      renderGistPagination(
        section.key,
        page,
        totalPages
      );

  }


  html += `

    </section>

  `;


  return html;

}


// ============================================================
// CARD
// ============================================================

function renderGistCard(item) {

  const imageHTML =
    item.image &&
    isSafeGistURL(
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
    formatGistDate(
      item.publishedAt
    );


  return `

    <article
      class="school-gist-card"
      data-gist-id="${escapeAttribute(item.id)}"
    >

      ${imageHTML}


      <div class="school-gist-card-content">


        <div class="school-gist-card-meta">

          <span>
            ${escapeGistHTML(
              item.source || "TUPS"
            )}
          </span>


          <span>
            ${escapeGistHTML(
              published
            )}
          </span>

        </div>


        <h3>
          ${escapeGistHTML(
            item.title
          )}
        </h3>


        ${
          item.excerpt
            ? `
              <p>
                ${escapeGistHTML(
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

            Read story

            <i class="fa-solid fa-arrow-right"></i>

          </a>

        </div>


      </div>

    </article>

  `;

}


// ============================================================
// DATE FORMAT
// ============================================================

function formatGistDate(
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
// PAGINATION
// ============================================================

function renderGistPagination(
  section,
  currentPage,
  totalPages
) {

  let html = `

    <div
      class="school-gist-pagination"
      data-gist-pagination="${escapeAttribute(section)}"
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
        data-gist-page="${i}"
        data-gist-section="${escapeAttribute(section)}"
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

function attachGistPaginationEvents() {

  document
    .querySelectorAll(
      "[data-gist-page]"
    )
    .forEach(
      function(button) {

        button.addEventListener(
          "click",
          function() {

            const section =
              button.dataset
                .gistSection;


            const page =
              Number(
                button.dataset
                  .gistPage
              );


            if (
              !schoolGistPages
                .hasOwnProperty(
                  section
                )
            ) {

              return;

            }


            if (
              !Number.isInteger(
                page
              ) ||
              page < 1
            ) {

              return;

            }


            schoolGistPages[
              section
            ] = page;


            renderSchoolGistFeed();


            const sectionElement =
              document.querySelector(
                `[data-gist-section="${CSS.escape(section)}"]`
              );


            if (
              sectionElement
            ) {

              sectionElement
                .scrollIntoView({
                  behavior: "smooth",
                  block: "start"
                });

            }

          }
        );

      }
    );

}


// ============================================================
// ERROR
// ============================================================

function renderSchoolGistError() {

  const container =
    document.getElementById(
      "schoolGistContent"
    );


  if (!container) return;


  container.innerHTML = `

    <div class="school-gist-empty">

      <i
        class="fa-solid fa-triangle-exclamation">
      </i>


      <p>
        Fresh School Gist could not be loaded
        right now.
      </p>


      <button
        type="button"
        id="schoolGistRetryButton"
      >

        Try again

      </button>

    </div>

  `;


  const retryButton =
    document.getElementById(
      "schoolGistRetryButton"
    );


  if (retryButton) {

    retryButton.addEventListener(
      "click",
      function() {

        loadSchoolGist();

      }
    );

  }

}


// ============================================================
// ESCAPING
// ============================================================

function escapeGistHTML(
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

  return escapeGistHTML(
    value
  );

}