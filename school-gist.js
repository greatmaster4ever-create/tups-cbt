// ============================================================
// TUPS SCHOOL GIST
// DYNAMIC DISPLAY ENGINE
// NO HARDCODED NEWS
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


    schoolGistItems =
      data.items;


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
// RESET
// ============================================================

function resetGistPages() {

  Object.keys(
    schoolGistPages
  ).forEach(
    function(section) {

      schoolGistPages[section] = 1;

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


  const sections = [

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


  let html = "";


  sections.forEach(
    function(section) {

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
      data-gist-section="${section.key}"
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


  if (totalPages > 1) {

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
    item.image
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
    item.publishedAt
      ? new Date(
          item.publishedAt
        ).toLocaleDateString(
          "en-NG",
          {
            day: "numeric",
            month: "short",
            year: "numeric"
          }
        )
      : "";


  return `

    <article class="school-gist-card">

      ${imageHTML}

      <div class="school-gist-card-content">

        <div class="school-gist-card-meta">

          <span>
            ${escapeGistHTML(item.source || "TUPS")}
          </span>

          <span>
            ${escapeGistHTML(published)}
          </span>

        </div>

        <h3>
          ${escapeGistHTML(item.title)}
        </h3>

        <p>
          ${escapeGistHTML(item.excerpt || "")}
        </p>

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
      data-gist-pagination="${section}"
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
        data-gist-section="${section}"
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


            schoolGistPages[
              section
            ] = page;


            renderSchoolGistFeed();


            const sectionElement =
              document.querySelector(
                `[data-gist-section="${section}"]`
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
        onclick="loadSchoolGist()"
      >
        Try again
      </button>

    </div>

  `;

}


// ============================================================
// ESCAPING
// ============================================================

function escapeGistHTML(value) {

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


function escapeAttribute(value) {

  return escapeGistHTML(
    value
  );

}