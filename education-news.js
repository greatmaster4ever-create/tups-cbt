/* =========================================================
   TUPS EDUCATION NEWS MODULE
   ========================================================= */

const educationNewsContainer = document.getElementById("content-area");


/* =========================================================
   NEWS DATA
   ---------------------------------------------------------
   Temporary local structure.

   IMPORTANT:
   Do not put fabricated "latest news" here.
   Real news will be connected through the TUPS news source
   layer after the module interface is confirmed.
========================================================= */

const educationNewsItems = [

  {
    title: "Education News",
    category: "Education",
    date: "",
    summary:
      "Latest education-sector developments, announcements and important stories will appear here.",
    source: "TUPS Education Hub"
  }

];


/* =========================================================
   LOAD EDUCATION NEWS
========================================================= */

export function loadEducationNews() {

  if (!educationNewsContainer) {

    console.warn(
      "TUPS Education News: content-area not found."
    );

    return;

  }


  renderEducationNews();

  window.scrollTo({

    top: 0,

    behavior: "smooth"

  });

}


/* =========================================================
   RENDER NEWS PAGE
========================================================= */

function renderEducationNews() {

  educationNewsContainer.innerHTML = `

    <section class="content-page education-news-page">

      <div class="school-page-header">

        <div class="large-school-logo">

          <i class="fa-solid fa-newspaper"></i>

        </div>

        <div>

          <h2>
            Education News
          </h2>

          <p>
            Latest developments, announcements and
            important stories from the education sector.
          </p>

        </div>

      </div>


      <div class="content-grid education-news-grid">

        ${educationNewsItems
          .map(
            news => `

              <article class="content-card education-news-card">

                <div class="card-icon">

                  <i class="fa-solid fa-newspaper"></i>

                </div>


                <div class="education-news-meta">

                  ${
                    news.category
                      ? `<span>${news.category}</span>`
                      : ""
                  }

                  ${
                    news.date
                      ? `<span>${news.date}</span>`
                      : ""
                  }

                </div>


                <h3>
                  ${news.title}
                </h3>


                <p>
                  ${news.summary}
                </p>


                <small>
                  ${news.source}
                </small>

              </article>

            `
          )
          .join("")}

      </div>


      <section class="cta-section">

        <h3>
          TUPS Education Hub
        </h3>

        <p>
          Useful education information, resources and
          opportunities for schools, teachers, students
          and parents.
        </p>

      </section>

    </section>

  `;

}
