/* =========================================================
   TUPS EDUCATION NEWS MODULE
   VERSION 2
   ---------------------------------------------------------
   Real curated education stories.
   Full article remains on the original publisher's website.
========================================================= */


/* =========================================================
   EDUCATION NEWS DATA
========================================================= */

const educationNewsItems = [

  {
    title: "115 Federal Unity Colleges remain shut as schools reopen nationwide",
    category: "Schools & Policy",
    date: "September 14, 2026",
    source: "Punch",
    summary:
      "Workers in 115 Federal Unity Colleges have maintained a shutdown over the controversy surrounding the concession of King's College, Lagos, as schools reopen across the country.",
    url:
      "https://punchng.com/115-unity-colleges-remain-shut-as-schools-reopen-nationwide"
  },

  {
    title: "School fees rise as parents face higher costs at resumption",
    category: "Parents & Schools",
    date: "September 14, 2026",
    source: "Vanguard",
    summary:
      "Parents are facing higher education costs as schools reopen for the 2026/2027 academic session, with school owners citing rising operating expenses.",
    url:
      "https://www.vanguardngr.com/2026/09/school-resumption-parents-lament-as-fees-go-up-40/"
  },

  {
    title: "FG to give students 100MB free data daily from October 1",
    category: "Education Technology",
    date: "September 11, 2026",
    source: "Punch",
    summary:
      "The Federal Government has announced a new initiative to provide students with daily data access for approved educational websites and digital learning platforms.",
    url:
      "https://punchng.com/fg-to-give-students-100mb-free-data-daily-from-october-1/"
  },

  {
    title: "Lagos makes LASRRA registration compulsory for school enrolment",
    category: "Education Policy",
    date: "September 4, 2026",
    source: "Punch",
    summary:
      "Lagos State has introduced compulsory LASRRA registration for learners enrolling in public and private schools as part of efforts to build a reliable learner database.",
    url:
      "https://punchng.com/lagos-makes-lasrra-registration-compulsory-for-school-enrolment/"
  },

  {
    title: "Nigeria must protect the classroom as schools reopen",
    category: "School Safety",
    date: "September 15, 2026",
    source: "Vanguard",
    summary:
      "A new education-focused commentary highlights the importance of protecting students and teachers as Nigerian schools begin the 2026/2027 academic session.",
    url:
      "https://www.vanguardngr.com/2026/09/nigeria-must-protect-the-classroom/"
  },

  {
    title: "More than 5,000 schools destroyed by insurgency, says Zulum",
    category: "Schools & Development",
    date: "September 13, 2026",
    source: "Punch",
    summary:
      "Borno State Governor Babagana Zulum says more than 5,000 school structures have been destroyed during the state's prolonged insurgency.",
    url:
      "https://punchng.com/more-than-5000-schools-destroyed-by-insurgency-zulum/"
  },

  {
    title: "Ondo bans Primary 4 to secondary school promotion",
    category: "Education Policy",
    date: "September 11, 2026",
    source: "Punch",
    summary:
      "Ondo State has introduced a policy preventing pupils from moving directly from Primary 4 into secondary school, citing the need to preserve the established education structure.",
    url:
      "https://punchng.com/ondo-bans-primary-4-to-secondary-school-promotion/"
  },

  {
    title: "One million out-of-school children returned to classrooms in 20 months",
    category: "Education Development",
    date: "September 9, 2026",
    source: "Vanguard",
    summary:
      "The Federal Government says one million out-of-school children have returned to classrooms over the past 20 months as efforts continue to improve access to education.",
    url:
      "https://www.vanguardngr.com/2026/09/one-million-out-of-school-children-return-to-classrooms-in-20-months-fg/"
  },

  {
    title: "Kwara sets September 21 resumption date for 2026/2027 session",
    category: "School Calendar",
    date: "September 14, 2026",
    source: "Punch",
    summary:
      "Kwara State has announced September 21, 2026 as the resumption date for public and private primary and secondary schools for the new academic session.",
    url:
      "https://punchng.com/kwara-sets-september-21-resumption-date-for-2026-2027-academic-session/"
  },

  {
    title: "Oyo reaffirms commitment to quality education as schools resume",
    category: "Schools & Government",
    date: "September 11, 2026",
    source: "Punch",
    summary:
      "The Oyo State Government has renewed its commitment to improving learning outcomes and strengthening teaching and school standards during the new academic session.",
    url:
      "https://punchng.com/makinde-reaffirms-commitment-to-quality-education-as-oyo-schools-resume/"
  }

];


/* =========================================================
   MAIN LOADER
========================================================= */

export function loadEducationNews() {

  const educationNewsContainer =
    document.getElementById("content-area");

  if (!educationNewsContainer) {

    console.warn(
      "TUPS Education News: content-area not found."
    );

    return;
  }


  renderEducationNews(
    educationNewsContainer
  );


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================================================
   RENDER PAGE
========================================================= */

function renderEducationNews(container) {

  const featuredStory =
    educationNewsItems[0];

  const latestStories =
    educationNewsItems.slice(1);


  container.innerHTML = `

    <section class="content-page education-news-page">

      <!-- PAGE HEADER -->
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


      <!-- LATEST NEWS -->
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

          ${latestStories.map(news => `

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

      </section>


      <!-- HUB FOOTER -->
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

}


/* =========================================================
   BASIC HTML ESCAPING
   ---------------------------------------------------------
   Prevents news text from injecting HTML.
========================================================= */

function escapeNewsHTML(value) {

  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

}