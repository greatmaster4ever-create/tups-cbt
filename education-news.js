/* =========================================================
   TUPS EDUCATION NEWS MODULE
   VERSION 3
   ---------------------------------------------------------
   - Education News page
   - Sidebar latest-news preview
   - Pagination
   - Original-source links
========================================================= */


/* =========================================================
   NEWS DATA
========================================================= */

const educationNewsItems = [

  {
    title: "JAMB to Take Over HND Admissions Nationwide",
    category: "JAMB / Admissions",
    date: "September 2026",
    summary:
      "The Federal Government has approved a centralised process under which JAMB will take over HND admissions in polytechnics, colleges of nursing sciences and other affected institutions from the current admission session.",
    source: "The Sun",
    url: "https://thesun.ng/jamb-takes-over-hnd-admissions-as-fg-moves-to-curb-irregularities/"
  },

  {
    title: "Resumption Halted in Federal Unity Colleges Amid Dispute",
    category: "Schools / Education Policy",
    date: "September 15, 2026",
    summary:
      "Education unions and workers have halted resumption activities in several Federal Unity Colleges as the dispute surrounding the concession of King's College, Lagos, continues.",
    source: "Premium Times",
    url: "https://www.premiumtimesng.com/news/top-news/909562-strike-resumption-halted-in-federal-unity-colleges-in-anambra-ebonyi-enugu.html"
  },

  {
    title: "Nigeria's Safe-School Programme Faces Fresh Security Concerns",
    category: "School Safety",
    date: "September 14, 2026",
    summary:
      "A Guardian report examines continuing security concerns around Nigerian schools as pupils return, including the number of schools still lacking adequate protection and recent attacks affecting students and teachers.",
    source: "Guardian Nigeria",
    url: "https://guardian.ng/news/nigerias-n144bn-safe-school-plan-fails-to-calm-security-fears-as-pupils-return/"
  },

  {
    title: "Zamfara Targets More Than 453,000 Out-of-School Children",
    category: "Basic Education",
    date: "September 14, 2026",
    summary:
      "Zamfara has launched a campaign aimed at enrolling hundreds of thousands of out-of-school children, with authorities saying the focus is shifting from simply counting children to getting them into classrooms.",
    source: "Channels Television",
    url: "https://www.channelstv.com/2026/09/14/zamfara-targets-453602-out-of-school-children-for-enrolment/"
  },

  {
    title: "WAEC Releases Selected Texts for 2026–2030 WASSCE",
    category: "WAEC / Examinations",
    date: "2026",
    summary:
      "WAEC has published selected texts for several WASSCE subjects, including Arabic, Edo, Efik, Hausa, Ibibio, Igbo, Literature-in-English and Yoruba for the 2026–2030 examination cycle.",
    source: "WAEC Nigeria",
    url: "https://www.waecnigeria.org/article/list-selected-texts-wassce-arabic-edo-efik-hausa-ibibio-igbo-literature-english-and-yoruba"
  },

  {
    title: "JAMB Extends Deadline for Candidates to Accept or Reject Old Admissions",
    category: "JAMB / Admissions",
    date: "August 30, 2026",
    summary:
      "JAMB extended the deadline for candidates with admission offers from 2021 onward to accept or reject those offers, giving affected candidates until September 30, 2026.",
    source: "JAMB",
    url: "https://jamb.gov.ng/bulletins"
  },

  {
    title: "JAMB 2026/2027 Admissions Continue on CAPS",
    category: "JAMB / Admissions",
    date: "September 2026",
    summary:
      "JAMB's Central Admissions Processing System continues to record admissions activity for the 2026/2027 academic session, with candidates and institutions processing admissions through CAPS.",
    source: "JAMB",
    url: "https://caps.jamb.gov.ng/dashboard.aspx"
  },

  {
    title: "NERDC Continues Curriculum Development and Basic Education Reform",
    category: "Curriculum / NERDC",
    date: "September 2026",
    summary:
      "NERDC continues its work on curriculum development, including the implementation and dissemination of Nigeria's adapted basic education curriculum and related education policy documents.",
    source: "NERDC",
    url: "https://www.nerdc.gov.ng/"
  },

  {
    title: "Schools Face Higher Costs as Fees Rise for New Academic Session",
    category: "Schools / Parents",
    date: "September 14, 2026",
    summary:
      "Parents and guardians are facing increased education costs as many private schools raise fees and other school-related expenses for the new academic session.",
    source: "Vanguard",
    url: "https://www.vanguardngr.com/category/education-2/"
  },

  {
    title: "JAMB Admission Status: Candidates Urged to Check CAPS",
    category: "JAMB / Students",
    date: "August 29, 2026",
    summary:
      "Candidates seeking admission for the 2026/2027 academic session have been advised to regularly check their JAMB CAPS profiles and promptly accept or reject admission offers.",
    source: "TVC News",
    url: "https://www.tvcnews.tv/explainer-how-to-check-jamb-admission-status/"
  },

  {
    title: "Teen Trust Highlights NABTEB Examination Registration Deadline",
    category: "Examinations / Students",
    date: "August 31, 2026",
    summary:
      "Teen Trust reported on NABTEB's registration deadline for the 2026 November and December certificate examinations, providing useful information for students and schools preparing candidates.",
    source: "Teen Trust",
    url: "https://teentrust.ng/nabteb-sets-september-10-deadline-for-2026-november-and-december-exams/"
  },

  {
    title: "Federal Government Pushes Measures Against Examination Malpractice",
    category: "Education Policy / Examinations",
    date: "2026",
    summary:
      "Recent government and examination-sector measures continue to focus on improving examination integrity and reducing malpractice across Nigeria's education system.",
    source: "Channels Television",
    url: "https://www.channelstv.com/"
  }

];


/* =========================================================
   SETTINGS
========================================================= */

const NEWS_PER_PAGE = 6;

let currentNewsPage = 1;


/* =========================================================
   MAIN LOADER
========================================================= */

export function loadEducationNews() {

  const contentArea =
    document.getElementById("content-area");

  if (!contentArea) {

    console.warn(
      "TUPS Education News: content-area not found."
    );

    return;
  }


  currentNewsPage = 1;

  renderEducationNews(contentArea);

  updateEducationNewsSidebar();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================================================
   RENDER MAIN NEWS PAGE
========================================================= */

function renderEducationNews(container) {

  const featuredStory =
    educationNewsItems[0];

  const totalPages =
    Math.ceil(
      educationNewsItems.length /
      NEWS_PER_PAGE
    );


  const startIndex =
    (currentNewsPage - 1) *
    NEWS_PER_PAGE;

  const endIndex =
    startIndex + NEWS_PER_PAGE;

  const pageStories =
    educationNewsItems.slice(
      startIndex,
      endIndex
    );


  container.innerHTML = `

    <section class="content-page education-news-page">

      <!-- HEADER -->

      <div class="school-page-header">

        <div class="large-school-logo">
          <i class="fa-solid fa-newspaper"></i>
        </div>

        <div>

          <h2>Education News</h2>

          <p>
            Important education stories, school developments,
            policies and opportunities from Nigeria and beyond.
          </p>

        </div>

      </div>


      <!-- FEATURED STORY -->

      <section class="education-news-featured">

        <div class="education-news-featured-label">
          <i class="fa-solid fa-star"></i>
          Featured Education Story
        </div>

        <article class="education-news-featured-card">

          <div class="education-news-card-content">

            <div class="education-news-meta">

              <span>
                ${escapeNewsHTML(featuredStory.category)}
              </span>

              <span>
                ${escapeNewsHTML(featuredStory.date)}
              </span>

            </div>

            <h3>
              ${escapeNewsHTML(featuredStory.title)}
            </h3>

            <p>
              ${escapeNewsHTML(featuredStory.summary)}
            </p>

            <div class="education-news-source">

              <span>
                Source:
                <strong>
                  ${escapeNewsHTML(featuredStory.source)}
                </strong>
              </span>

              <a
                href="${featuredStory.url}"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Full Story
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>

            </div>

          </div>

        </article>

      </section>


      <!-- LATEST -->

      <section class="education-news-latest">

        <div class="education-news-section-heading">

          <div>

            <span class="education-news-kicker">
              TUPS EDUCATION HUB
            </span>

            <h3>Latest Education News</h3>

          </div>

          <span class="education-news-count">
            ${educationNewsItems.length} stories
          </span>

        </div>


        <div class="content-grid education-news-grid">

          ${pageStories.map(news => `

            <article class="content-card education-news-card">

              <div class="card-icon">
                <i class="fa-solid fa-graduation-cap"></i>
              </div>

              <div class="education-news-meta">

                <span>
                  ${escapeNewsHTML(news.category)}
                </span>

                <span>
                  ${escapeNewsHTML(news.date)}
                </span>

              </div>

              <h3>
                ${escapeNewsHTML(news.title)}
              </h3>

              <p>
                ${escapeNewsHTML(news.summary)}
              </p>

              <div class="education-news-card-footer">

                <small>
                  ${escapeNewsHTML(news.source)}
                </small>

                <a
                  href="${news.url}"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                  <i class="fa-solid fa-arrow-right"></i>
                </a>

              </div>

            </article>

          `).join("")}

        </div>


        <!-- PAGINATION -->

        ${renderPagination(totalPages)}

      </section>


      <!-- HUB CTA -->

      <section class="cta-section education-news-cta">

        <div class="card-icon">
          <i class="fa-solid fa-lightbulb"></i>
        </div>

        <h3>
          More from the TUPS Education Hub
        </h3>

        <p>
          Stay informed about schools, teachers,
          students, education policy, opportunities
          and developments across Nigeria.
        </p>

      </section>


      <!-- SOURCE NOTE -->

      <div class="education-news-source-note">

        <i class="fa-solid fa-circle-info"></i>

        <span>
          TUPS Education News provides short summaries
          and links to original publishers. Full stories
          remain on their respective websites.
        </span>

      </div>

    </section>

  `;


  attachPaginationEvents();

}


/* =========================================================
   PAGINATION HTML
========================================================= */

function renderPagination(totalPages) {

  if (totalPages <= 1) {
    return "";
  }


  let html = `
    <nav
      class="education-news-pagination"
      aria-label="Education news pagination"
    >
  `;


  /* Previous */

  html += `

    <button
      type="button"
      class="education-news-page-button education-news-prev"
      data-page="${currentNewsPage - 1}"
      ${currentNewsPage === 1 ? "disabled" : ""}
      aria-label="Previous page"
    >
      <i class="fa-solid fa-chevron-left"></i>
    </button>

  `;


  /* Page numbers */

  for (
    let page = 1;
    page <= totalPages;
    page++
  ) {

    html += `

      <button
        type="button"
        class="education-news-page-button ${
          page === currentNewsPage
            ? "active"
            : ""
        }"
        data-page="${page}"
        aria-label="Page ${page}"
        ${
          page === currentNewsPage
            ? 'aria-current="page"'
            : ""
        }
      >
        ${page}
      </button>

    `;

  }


  /* Next */

  html += `

    <button
      type="button"
      class="education-news-page-button education-news-next"
      data-page="${currentNewsPage + 1}"
      ${
        currentNewsPage === totalPages
          ? "disabled"
          : ""
      }
      aria-label="Next page"
    >
      <i class="fa-solid fa-chevron-right"></i>
    </button>

  `;


  html += `
    </nav>
  `;


  return html;

}


/* =========================================================
   PAGINATION EVENTS
========================================================= */

function attachPaginationEvents() {

  document
    .querySelectorAll(
      ".education-news-page-button"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        function () {

          const requestedPage =
            Number(
              this.dataset.page
            );


          if (
            !requestedPage ||
            requestedPage === currentNewsPage
          ) {
            return;
          }


          const totalPages =
            Math.ceil(
              educationNewsItems.length /
              NEWS_PER_PAGE
            );


          if (
            requestedPage < 1 ||
            requestedPage > totalPages
          ) {
            return;
          }


          currentNewsPage =
            requestedPage;


          const contentArea =
            document.getElementById(
              "content-area"
            );


          if (contentArea) {

            renderEducationNews(
              contentArea
            );

            window.scrollTo({
              top: 0,
              behavior: "smooth"
            });

          }

        }
      );

    });

}


/* =========================================================
   SIDEBAR NEWS PREVIEW
========================================================= */

function updateEducationNewsSidebar() {

  const preview =
    document.querySelector(
      ".news-module .hub-preview"
    );


  if (!preview) {
    return;
  }


  const latestStories =
    educationNewsItems.slice(
      0,
      3
    );


  preview.innerHTML = `

    ${latestStories.map(news => `

      <button
        type="button"
        class="education-news-sidebar-item"
        data-news-url="${news.url}"
      >

        <strong>
          ${escapeNewsHTML(news.title)}
        </strong>

        <span>
          ${escapeNewsHTML(news.source)}
          ·
          ${escapeNewsHTML(news.date)}
        </span>

      </button>

    `).join("")}

  `;


  preview
    .querySelectorAll(
      ".education-news-sidebar-item"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        function () {

          const url =
            this.dataset.newsUrl;

          if (url) {

            window.open(
              url,
              "_blank",
              "noopener,noreferrer"
            );

          }

        }
      );

    });

}


/* =========================================================
   HTML ESCAPING
========================================================= */

function escapeNewsHTML(value) {

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