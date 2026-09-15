/* =========================================================
   TUPS SCHOOL GIST & GOSSIP
   Real curated school/student stories
   Loaded only when School Gist is opened
========================================================= */

const SCHOOL_GIST_PER_PAGE = 4;

let schoolGistPages = {
  hot: 1,
  trending: 1,
  achievements: 1,
  sports: 1,
  schoolLife: 1,
  buzz: 1
};


/* =========================================================
   REAL SCHOOL GIST DATA
========================================================= */

const schoolGistItems = [

  {
    id: "destiny-innovators",
    title: "Young Nigerian innovators win big with school technology ideas",
    category: "Achievements",
    section: ["hot", "trending", "achievements"],
    location: "Nigeria",
    date: "September 14, 2026",
    source: "Guardian Nigeria",
    image:
      "https://cdn.guardian.ng/wp-content/uploads/2026/09/Innovators.jpg",
    summary:
      "Secondary school students were rewarded after developing technology solutions for education, school security, food production and other challenges.",
    url:
      "https://guardian.ng/news/ngo-rewards-young-nigerian-tech-innovators/",
    hot: true
  },

  {
    id: "mike-okonkwo",
    title: "Three Nigerian secondary school students collect essay competition prizes",
    category: "Awards",
    section: ["hot", "trending", "achievements"],
    location: "Nigeria",
    date: "September 12, 2026",
    source: "Guardian Nigeria",
    image:
      "https://cdn.guardian.ng/wp-content/uploads/2026/09/Bishop-Mike-Okonkwo-1234.jpg",
    summary:
      "Clinton Chimenem Agburum, Mosorireoluwa Alimi-Adeiga and Oloruntimilehin Elijah Oladipo were rewarded after emerging top three in the 2026 Mike Okonkwo National Essay Competition.",
    url:
      "https://guardian.ng/news/winners-of-mike-okonkwo-essay-competition-get-prizes-3/",
    hot: true
  },

  {
    id: "nema-students",
    title: "Students win NEMA national essay competition prizes",
    category: "Student Achievement",
    section: ["hot", "trending", "achievements"],
    location: "Abuja / Nigeria",
    date: "September 10, 2026",
    source: "Guardian Nigeria",
    image:
      "https://cdn.guardian.ng/wp-content/uploads/2026/05/fast2115.webp",
    summary:
      "Students from Murphy-Tonia Schools, Faith Academy and Government Secondary School, Gwarinpa emerged among the top winners in NEMA's 2026 National Essay Competition.",
    url:
      "https://guardian.ng/news/nema-tasks-youths-on-disaster-risk-reduction/",
    hot: true
  },

  {
    id: "iwerekun-science",
    title: "Iwerekun Community School wins science challenge for the third time",
    category: "STEM / Competition",
    section: ["hot", "trending", "achievements", "sports"],
    location: "Ibeju-Lekki, Lagos",
    date: "July 2, 2026",
    source: "Guardian Nigeria",
    image:
      "https://cdn.guardian.ng/wp-content/uploads/2026/07/Tolaram-Science-Challenge.jpg",
    summary:
      "Iwerekun Community Senior High School defeated Magbon-Alade Senior Grammar School and secured its third consecutive Tolaram Science Challenge title.",
    url:
      "https://guardian.ng/education/iwerekun-community-school-wins-science-challenge/",
    hot: true
  },

  {
    id: "dacurate-quiz",
    title: "Igbeyinadun Primary School takes leadership quiz crown",
    category: "Quiz / Competition",
    section: ["trending", "achievements", "schoolLife"],
    location: "Lagos",
    date: "May 31, 2026",
    source: "Guardian Nigeria",
    image:
      "https://cdn.guardian.ng/wp-content/uploads/2026/05/fast2338.webp",
    summary:
      "Igbeyinadun Primary School defeated 14 other finalists to win the third Dacurate Primary School Leadership Quiz.",
    url:
      "https://guardian.ng/education/igbeyinadun-school-wins-3rd-dacurate-primary-school-leadership-quiz/",
    hot: false
  },

  {
    id: "oregun-spelling",
    title: "Oregun Senior High School wins World Literacy Day spelling bee",
    category: "Spelling Bee",
    section: ["trending", "achievements", "schoolLife"],
    location: "Lagos",
    date: "September 12, 2026",
    source: "Independent Nigeria",
    image:
      "https://independent.ng/wp-content/uploads/2026/09/1-62.png",
    summary:
      "Akinade Oluwaferanmi Eunice of Oregun Senior High School helped her school secure first place in a reading and spelling bee competition.",
    url:
      "https://independent.ng/laureates-say/",
    hot: false
  },

  {
    id: "dairy-farm",
    title: "Dairy Farm Senior Secondary School finishes second in spelling bee",
    category: "Spelling Bee",
    section: ["trending", "achievements", "schoolLife"],
    location: "Lagos",
    date: "September 12, 2026",
    source: "Independent Nigeria",
    image:
      "https://independent.ng/wp-content/uploads/2026/09/1-63.png",
    summary:
      "Dairy Farm Senior Secondary School came second in the World Literacy Day reading and spelling bee competition organised by Lions International District 404B6 Nigeria.",
    url:
      "https://independent.ng/laureates-say/",
    hot: false
  },

  {
    id: "state-grammar",
    title: "State Senior Grammar School (Special) takes third place",
    category: "Spelling Bee",
    section: ["trending", "achievements", "schoolLife"],
    location: "Lagos",
    date: "September 12, 2026",
    source: "Independent Nigeria",
    image:
      "https://independent.ng/wp-content/uploads/2026/09/1-64.png",
    summary:
      "State Senior Grammar School (Special) secured third place and is already looking ahead to next year's competition.",
    url:
      "https://independent.ng/laureates-say/",
    hot: false
  },

  {
    id: "premiere-energy",
    title: "Abuja's Premiere Academy wins Battle of the Energy Titans",
    category: "STEM / Innovation",
    section: ["hot", "trending", "achievements", "sports"],
    location: "Abuja, FCT",
    date: "June 16, 2026",
    source: "Guardian Nigeria",
    image:
      "https://cdn.guardian.ng/wp-content/uploads/2026/06/fast2835.webp",
    summary:
      "Premiere Academy defeated 11 other finalists to win the 2026 Battle of the Energy Titans competition at the Youth Energy STEAM Festival.",
    url:
      "https://guardian.ng/education/premiere-academy-emerges-winner-of-2026-battle-of-the-energy-titans-competition/",
    hot: true
  },

  {
    id: "lasu-first-class",
    title: "From missing UI admission to LASU First Class triumph",
    category: "Student Story",
    section: ["trending", "achievements", "schoolLife"],
    location: "Lagos",
    date: "September 3, 2026",
    source: "Teen Trust",
    image:
      "https://teentrust.ng/wp-content/uploads/2026/09/d9e7ca7dfad749c3.jpeg",
    summary:
      "Faith Oluwasegun Olateju's unexpected university journey ended with First Class Honours in Economics from Lagos State University.",
    url:
      "https://teentrust.ng/from-missing-ui-admission-to-lasu-first-class-triumph-in-three-years/",
    hot: false
  },

  {
    id: "pearl-quiz",
    title: "Notre Dame College wins PEARLs Quiz after 476 schools compete",
    category: "Quiz / Competition",
    section: ["trending", "achievements", "sports"],
    location: "Delta State",
    date: "July 6, 2026",
    source: "Independent Nigeria",
    image:
      "https://cdn.guardian.ng/wp-content/uploads/2026/07/Tolaram-Science-Challenge.jpg",
    summary:
      "Notre Dame College, Ozoro emerged overall winner of the 2026 PEARLs Quiz, while the competition also featured a STEAM Innovation Showcase.",
    url:
      "https://independent.ng/nepl-seplat-energy-jv-celebrates-academic-excellence-as-pearls-quiz-impacts-57000-students/",
    hot: false
  },

  {
    id: "lagos-arts",
    title: "Lagos students shine at Eko Schools Arts and Crafts competition",
    category: "Arts / Creativity",
    section: ["trending", "schoolLife", "achievements"],
    location: "Lagos",
    date: "June 27, 2026",
    source: "Independent Nigeria",
    image:
      "https://cdn.guardian.ng/wp-content/uploads/2026/05/fast2338.webp",
    summary:
      "Hundreds of students participated in the Eko Schools Arts and Crafts competition, with nine students emerging winners across junior, senior and tertiary categories.",
    url:
      "https://independent.ng/lagos-hosts-second-eko-schools-arts-and-crafts-competition-rewards-outstanding-students/",
    hot: false
  }

];


/* =========================================================
   MAIN LOADER
========================================================= */

export function loadSchoolGist() {

  const contentArea =
    document.getElementById("content-area");

  if (!contentArea) {
    console.error(
      "TUPS School Gist: #content-area not found."
    );
    return;
  }

  schoolGistPages = {
    hot: 1,
    trending: 1,
    achievements: 1,
    sports: 1,
    schoolLife: 1,
    buzz: 1
  };

  renderSchoolGist(contentArea);
}


/* =========================================================
   PAGE RENDER
========================================================= */

function renderSchoolGist(contentArea) {

  contentArea.innerHTML = `
    <section class="school-gist-page">

      <header class="school-gist-header">

        <div class="school-gist-title-row">

          <div>
            <span class="school-gist-kicker">
              TUPS STUDENT HUB
            </span>

            <h1>
              🔥 SCHOOL GIST &amp; GOSSIP
            </h1>

            <p>
              What's happening in Nigerian schools?
              Who's winning? What's trending?
              What is everyone talking about?
            </p>
          </div>

        </div>

        <div class="school-gist-topic-bar">
          <span>🔥 HOT</span>
          <span>👀 TRENDING</span>
          <span>🏆 AWARDS</span>
          <span>⚽ COMPETITIONS</span>
          <span>📸 SCHOOL LIFE</span>
          <span>😂 BUZZ</span>
        </div>

      </header>


      <section
        class="school-gist-section school-gist-hot"
        data-gist-section="hot">
      </section>


      <section
        class="school-gist-section"
        data-gist-section="trending">
      </section>


      <section
        class="school-gist-section"
        data-gist-section="achievements">
      </section>


      <section
        class="school-gist-section"
        data-gist-section="sports">
      </section>


      <section
        class="school-gist-section"
        data-gist-section="schoolLife">
      </section>


      <section
        class="school-gist-section school-gist-buzz"
        data-gist-section="buzz">
      </section>


      <div class="school-gist-source-note">

        <i class="fa-solid fa-circle-info"></i>

        School Gist features publicly reported school,
        student and education stories from Nigerian
        media and public sources. TUPS links readers
        back to the original source.

      </div>

    </section>
  `;


  renderAllGistSections();
}


/* =========================================================
   SECTION DEFINITIONS
========================================================= */

const gistSections = {

  hot: {
    title: "🔥 HOT RIGHT NOW",
    subtitle:
      "The stories students are most likely to be talking about."
  },

  trending: {
    title: "👀 TRENDING SCHOOL GIST",
    subtitle:
      "Fresh stories, achievements and school moments."
  },

  achievements: {
    title: "🏆 ACHIEVEMENTS & AWARDS",
    subtitle:
      "Students and schools doing remarkable things."
  },

  sports: {
    title: "⚽ SPORTS & COMPETITIONS",
    subtitle:
      "Quiz battles, STEM contests, sports and school competitions."
  },

  schoolLife: {
    title: "📸 SCHOOL LIFE",
    subtitle:
      "The people, moments and activities behind school life."
  },

  buzz: {
    title: "😂 BUZZ & GOSSIP",
    subtitle:
      "Interesting public school stories getting people talking."
  }

};


/* =========================================================
   RENDER ALL SECTIONS
========================================================= */

function renderAllGistSections() {

  Object.keys(gistSections).forEach(sectionName => {

    renderGistSection(sectionName);

  });

}


/* =========================================================
   RENDER INDIVIDUAL SECTION
========================================================= */

function renderGistSection(sectionName) {

  const container =
    document.querySelector(
      `[data-gist-section="${sectionName}"]`
    );

  if (!container) return;

  const config =
    gistSections[sectionName];

  let items =
    schoolGistItems.filter(item =>
      item.section.includes(sectionName)
    );

  /*
     Buzz currently uses the most interesting
     stories until we begin receiving dedicated
     social-media buzz submissions.
  */

  if (sectionName === "buzz") {

    items =
      schoolGistItems
        .filter(item =>
          item.hot ||
          item.category.includes("Student") ||
          item.category.includes("School")
        )
        .slice(0, 8);

  }

  const totalPages =
    Math.max(
      1,
      Math.ceil(
        items.length /
        SCHOOL_GIST_PER_PAGE
      )
    );

  if (schoolGistPages[sectionName] > totalPages) {
    schoolGistPages[sectionName] = 1;
  }

  const currentPage =
    schoolGistPages[sectionName];

  const start =
    (currentPage - 1) *
    SCHOOL_GIST_PER_PAGE;

  const visibleItems =
    items.slice(
      start,
      start + SCHOOL_GIST_PER_PAGE
    );


  container.innerHTML = `

    <div class="school-gist-section-heading">

      <div>

        <span class="school-gist-section-kicker">
          SCHOOL GIST
        </span>

        <h2>
          ${config.title}
        </h2>

        <p>
          ${config.subtitle}
        </p>

      </div>

      <span class="school-gist-count">
        ${items.length} stories
      </span>

    </div>


    <div class="school-gist-grid">

      ${
        visibleItems.length
          ? visibleItems
              .map(renderGistCard)
              .join("")
          : `
            <div class="school-gist-empty">
              New stories coming soon.
            </div>
          `
      }

    </div>


    ${
      totalPages > 1
        ? renderGistPagination(
            sectionName,
            currentPage,
            totalPages
          )
        : ""
    }

  `;


  attachGistPaginationEvents(container);

}


/* =========================================================
   STORY CARD
========================================================= */

function renderGistCard(item) {

  return `

    <article class="school-gist-card">

      <a
        class="school-gist-image-link"
        href="${item.url}"
        target="_blank"
        rel="noopener noreferrer"
      >

        <img
          src="${item.image}"
          alt="${escapeGistHTML(item.title)}"
          loading="lazy"
          decoding="async"
        >

        ${
          item.hot
            ? `
              <span class="school-gist-hot-badge">
                🔥 HOT
              </span>
            `
            : ""
        }

      </a>


      <div class="school-gist-card-content">

        <div class="school-gist-card-meta">

          <span>
            ${escapeGistHTML(item.category)}
          </span>

          <span>
            ${escapeGistHTML(item.date)}
          </span>

        </div>


        <h3>
          ${escapeGistHTML(item.title)}
        </h3>


        <p>
          ${escapeGistHTML(item.summary)}
        </p>


        <div class="school-gist-card-footer">

          <span>
            <i class="fa-solid fa-location-dot"></i>
            ${escapeGistHTML(item.location)}
          </span>

          <span>
            ${escapeGistHTML(item.source)}
          </span>

        </div>


        <a
          class="school-gist-read-more"
          href="${item.url}"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read the gist
          <i class="fa-solid fa-arrow-right"></i>
        </a>

      </div>

    </article>

  `;

}


/* =========================================================
   PAGINATION
========================================================= */

function renderGistPagination(
  sectionName,
  currentPage,
  totalPages
) {

  let buttons = "";

  buttons += `
    <button
      type="button"
      class="school-gist-page-button"
      data-gist-section-name="${sectionName}"
      data-gist-page="${currentPage - 1}"
      ${currentPage === 1 ? "disabled" : ""}
    >
      <i class="fa-solid fa-chevron-left"></i>
      Previous
    </button>
  `;


  for (
    let page = 1;
    page <= totalPages;
    page++
  ) {

    buttons += `
      <button
        type="button"
        class="school-gist-page-button ${
          page === currentPage
            ? "active"
            : ""
        }"
        data-gist-section-name="${sectionName}"
        data-gist-page="${page}"
      >
        ${page}
      </button>
    `;

  }


  buttons += `
    <button
      type="button"
      class="school-gist-page-button"
      data-gist-section-name="${sectionName}"
      data-gist-page="${currentPage + 1}"
      ${currentPage === totalPages ? "disabled" : ""}
    >
      Next
      <i class="fa-solid fa-chevron-right"></i>
    </button>
  `;


  return `
    <div class="school-gist-pagination">
      ${buttons}
    </div>
  `;

}


/* =========================================================
   PAGINATION EVENTS
========================================================= */

function attachGistPaginationEvents(container) {

  container
    .querySelectorAll(
      ".school-gist-page-button"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        function () {

          const sectionName =
            this.dataset.gistSectionName;

          const page =
            Number(
              this.dataset.gistPage
            );

          if (!sectionName || !page) {
            return;
          }

          schoolGistPages[
            sectionName
          ] = page;

          renderGistSection(
            sectionName
          );

          const section =
            document.querySelector(
              `[data-gist-section="${sectionName}"]`
            );

          if (section) {

            const top =
              section.getBoundingClientRect().top +
              window.scrollY -
              90;

            window.scrollTo({
              top,
              behavior: "smooth"
            });

          }

        }
      );

    });

}


/* =========================================================
   HTML ESCAPE
========================================================= */

function escapeGistHTML(value) {

  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

}
