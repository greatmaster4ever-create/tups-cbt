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
    title: "115 Federal Unity Colleges remain shut as schools reopen nationwide",
    category: "Schools & Policy",
    date: "September 14, 2026",
    source: "Punch",
    summary:
      "Workers in Federal Unity Colleges have maintained a shutdown over the controversy surrounding the concession of King's College as schools reopen across the country.",
    url:
      "https://punchng.com/115-unity-colleges-remain-shut-as-schools-reopen-nationwide"
  },

  {
    title: "School fees rise as parents face higher costs at resumption",
    category: "Parents & Schools",
    date: "September 14, 2026",
    source: "Vanguard",
    summary:
      "Parents are facing higher education costs as schools reopen for the 2026/2027 academic session, with many private schools increasing fees amid rising operating costs.",
    url:
      "https://www.vanguardngr.com/2026/09/school-resumption-parents-lament-as-fees-go-up-40-2/"
  },

  {
    title: "FG reaffirms Federal Unity Colleges resumption plans",
    category: "Education Policy",
    date: "September 11, 2026",
    source: "Punch",
    summary:
      "The Federal Ministry of Education reaffirmed plans for Federal Unity Colleges to resume academic activities as scheduled for the new academic session.",
    url:
      "https://punchng.com/federal-unity-colleges-to-resume-monday-education-ministry/"
  },

  {
    title: "Lagos releases 2026/2027 academic calendar",
    category: "School Calendar",
    date: "July 16, 2026",
    source: "Punch",
    summary:
      "Lagos State released its harmonised academic calendar for public and private primary and secondary schools, with September 14 fixed as the resumption date.",
    url:
      "https://punchng.com/lagos-releases-2026-2027-academic-calendar-fixes-september-14-resumption/"
  },

  {
    title: "Parents face rising costs of fees, books and school expenses",
    category: "Parents & Schools",
    date: "September 10, 2026",
    source: "Vanguard",
    summary:
      "Parents and guardians are dealing with higher tuition, textbook and accommodation costs as children return to school for the new academic session.",
    url:
      "https://www.vanguardngr.com/2026/09/new-academic-session-parents-face-hurdles-as-fees-cost-of-books-others-escalate/"
  },

  {
    title: "WAEC verification fee faces criticism",
    category: "Exams",
    date: "September 9, 2026",
    source: "Punch",
    summary:
      "A Punch editorial has criticised the proposed N4,000 WAEC and NECO result verification charge and questioned the additional financial burden on students.",
    url:
      "https://punchng.com/tinubu-cancel-waec-verification-fees/"
  },

  {
    title: "WAEC faces scrutiny over 2026 results",
    category: "Exams",
    date: "August 18, 2026",
    source: "Punch",
    summary:
      "Schools and education stakeholders have raised concerns about alleged grading anomalies and technical issues surrounding the 2026 WASSCE results.",
    url:
      "https://punchng.com/waec-under-fire-over-2026-results-alleged-grading-anomalies/"
  },

  {
    title: "JAMB explains admission position for under-16 candidates",
    category: "Admissions",
    date: "August 2026",
    source: "Vanguard",
    summary:
      "JAMB clarified that underage candidates who meet the required benchmark are eligible for consideration but are not automatically guaranteed admission.",
    url:
      "https://www.vanguardngr.com/2026/08/jamb-why-scoring-80-may-not-secure-admission-for-under-16-candidates/"
  },

  {
    title: "FG says one million out-of-school children returned to classrooms",
    category: "Education Development",
    date: "September 2026",
    source: "Vanguard",
    summary:
      "The Federal Government says one million out-of-school children have returned to classrooms over a 20-month period as efforts continue to improve access to education.",
    url:
      "https://www.vanguardngr.com/2026/09/one-million-out-of-school-children-return-to-classrooms-in-20-months-fg/"
  },

  {
    title: "Kwara sets September 21 resumption date",
    category: "School Calendar",
    date: "September 14, 2026",
    source: "Punch",
    summary:
      "Kwara State announced September 21, 2026 as the resumption date for public and private primary and secondary schools for the new academic session.",
    url:
      "https://punchng.com/kwara-sets-september-21-resumption-date-for-2026-2027-academic-session/"
  },

  {
    title: "Oyo reaffirms commitment to quality education",
    category: "Schools & Government",
    date: "September 2026",
    source: "Punch",
    summary:
      "The Oyo State Government renewed its commitment to improving learning outcomes and strengthening teaching and school standards.",
    url:
      "https://punchng.com/makinde-reaffirms-commitment-to-quality-education-as-oyo-schools-resume/"
  },

  {
    title: "Education unions suspend resumption in Federal Unity Colleges",
    category: "Schools & Policy",
    date: "September 11, 2026",
    source: "Vanguard",
    summary:
      "Education unions announced a suspension of student resumption in Federal Unity Colleges in protest over the concession of King's College, Lagos.",
    url:
      "https://www.vanguardngr.com/2026/09/education-unions-suspend-resumption-in-federal-unity-colleges-nationwide/"
  },

  {
    title: "King's College concession dispute stalls Unity Colleges",
    category: "Schools & Policy",
    date: "September 14, 2026",
    source: "Vanguard",
    summary:
      "The dispute over the concession of King's College, Lagos has affected resumption at Federal Unity Colleges, with parents and unions opposing the arrangement.",
    url:
      "https://www.vanguardngr.com/2026/09/protest-over-concession-of-kings-college-stalls-resumption-of-unity-colleges/"
  },

  {
    title: "Ondo changes primary-to-secondary school progression policy",
    category: "Education Policy",
    date: "September 2026",
    source: "Punch",
    summary:
      "Ondo State introduced a policy affecting the progression of pupils from primary school into secondary education.",
    url:
      "https://punchng.com/ondo-bans-primary-4-to-secondary-school-promotion/"
  },

  {
    title: "Nigeria continues push to bring more children into school",
    category: "Education Development",
    date: "September 2026",
    source: "Punch",
    summary:
      "Education stakeholders continue to focus on reducing Nigeria's large out-of-school population through enrolment and education-support programmes.",
    url:
      "https://punchng.com/more-than-5000-schools-destroyed-by-insurgency-zulum/"
  },

  {
    title: "WAEC promotes CBT to combat examination malpractice",
    category: "Exams",
    date: "August 2026",
    source: "Punch",
    summary:
      "A WAEC official has advocated stronger computer-based testing as a way of tackling examination malpractice and so-called miracle centres.",
    url:
      "https://punchng.com/cbt-best-way-to-curb-miracle-centres-examination-malpractice-waec-official/"
  },

  {
    title: "Education technology continues to reshape learning",
    category: "Education Technology",
    date: "2026",
    source: "Punch",
    summary:
      "Digital learning platforms and education technology continue to provide Nigerian students with additional ways to prepare for examinations and access learning materials.",
    url:
      "https://punchng.com/firm-unveils-learning-platform-for-students/"
  },

  {
    title: "High school fees do not always mean better academic performance",
    category: "Parents & Schools",
    date: "August 2026",
    source: "Vanguard",
    summary:
      "A report examines whether increasingly expensive private-school fees necessarily translate into stronger academic outcomes for students.",
    url:
      "https://www.vanguardngr.com/2026/08/education-when-high-fee-doesnt-mean-better-academic-performance/"
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