/* =========================================================
   TUPS WEBSITE
   MAIN APPLICATION
========================================================= */


/* =========================================================
   CONTENT
========================================================= */

const pages = {

  about: `
    <section class="content-page">

      <h2>About Us</h2>

      <p>
        Welcome to TUPS Technologies.
      </p>

      <p>
        TUPS Technologies provides technology-driven solutions
        designed to help schools operate more efficiently,
        communicate better and provide improved digital
        experiences for students, parents, teachers and
        school administrators.
      </p>

      <p>
        Our goal is to make technology practical, accessible
        and useful for modern educational institutions.
      </p>

      <div class="content-grid">

        <div class="content-card">
          <h3>Innovation</h3>
          <p>
            We develop practical technology solutions
            around real educational needs.
          </p>
        </div>

        <div class="content-card">
          <h3>Reliability</h3>
          <p>
            We build systems designed to support the
            day-to-day operations of schools.
          </p>
        </div>

        <div class="content-card">
          <h3>Partnership</h3>
          <p>
            We work closely with schools to continually
            improve their digital experience.
          </p>
        </div>

      </div>

    </section>
  `,


  services: `
    <section class="content-page">

      <h2>Our Services</h2>

      <p>
        TUPS Technologies provides digital solutions
        for educational institutions and other organizations.
      </p>

      <div class="content-grid">

        <div class="content-card">
          <h3>School Management</h3>
          <p>
            Digital tools that help schools manage
            their daily academic and administrative activities.
          </p>
        </div>

        <div class="content-card">
          <h3>CBT Solutions</h3>
          <p>
            Computer-based testing solutions for
            modern educational institutions.
          </p>
        </div>

        <div class="content-card">
          <h3>Web Development</h3>
          <p>
            Professional websites and web applications
            designed around your organization's needs.
          </p>
        </div>

        <div class="content-card">
          <h3>ICT Solutions</h3>
          <p>
            Technology solutions that help organizations
            improve their digital operations.
          </p>
        </div>

      </div>

    </section>
  `,


  clients: `
    <section class="content-page">

      <h2>Clients &amp; Products</h2>

      <p>
        We are proud to work with schools and organizations
        that trust TUPS Technologies to support their
        technology needs.
      </p>

      <div class="content-grid">

        <div class="content-card">
          <h3>School Technology</h3>
          <p>
            Digital platforms and tools designed
            specifically for schools.
          </p>
        </div>

        <div class="content-card">
          <h3>TUPS School Portal</h3>
          <p>
            Our school technology platform connecting
            school administration, teachers, students
            and parents.
          </p>
        </div>

        <div class="content-card">
          <h3>TUP CBT</h3>
          <p>
            Our computer-based testing platform for
            educational institutions.
          </p>
        </div>

      </div>

    </section>
  `,


  faqs: `
    <section class="content-page">

      <h2>Frequently Asked Questions</h2>

      <div class="content-grid">

        <div class="content-card">
          <h3>What is TUPS Technologies?</h3>
          <p>
            TUPS Technologies is a technology company
            providing digital solutions for schools
            and organizations.
          </p>
        </div>

        <div class="content-card">
          <h3>Who can use TUPS solutions?</h3>
          <p>
            Our solutions are primarily designed for
            schools and educational institutions.
          </p>
        </div>

        <div class="content-card">
          <h3>How can my school become a partner?</h3>
          <p>
            Contact TUPS Technologies and our team
            will discuss the appropriate solution
            for your school.
          </p>
        </div>

      </div>

    </section>
  `

};



/* =========================================================
   PARTNER SCHOOL CONTENT
========================================================= */

const schools = {

  "tender-lilies": {
    initials: "TL",
    name: "Tender Lilies Royal Academy",

    content: `
      <section class="content-page">

        <div class="school-page-header">

          <div class="large-school-logo">
            TL
          </div>

          <div>
            <h2>Tender Lilies Royal Academy</h2>
          </div>

        </div>

        <p>
          Welcome to the Tender Lilies Royal Academy
          partner school page.
        </p>

        <p>
          School information, announcements, events,
          gallery and other content can be added here
          progressively.
        </p>

      </section>
    `
  },


  "tree-hill": {
    initials: "TH",
    name: "Tree Hill Academy",

    content: `
      <section class="content-page">

        <div class="school-page-header">

          <div class="large-school-logo">
            TH
          </div>

          <div>
            <h2>Tree Hill Academy</h2>
          </div>

        </div>

        <p>
          Welcome to the Tree Hill Academy
          partner school page.
        </p>

        <p>
          School information, announcements, events,
          gallery and other content can be added here
          progressively.
        </p>

      </section>
    `
  },


  "lead-british": {
    initials: "LB",
    name: "Lead British International School",

    content: `
      <section class="content-page">

        <div class="school-page-header">

          <div class="large-school-logo">
            LB
          </div>

          <div>
            <h2>Lead British International School</h2>
          </div>

        </div>

        <p>
          Welcome to the Lead British International
          School partner page.
        </p>

        <p>
          School information, announcements, events,
          gallery and other content can be added here
          progressively.
        </p>

      </section>
    `
  },


  "future-school": {
    initials: "+",
    name: "More Partner Schools",

    content: `
      <section class="content-page">

        <h2>Our Partner Schools</h2>

        <p>
          More TUPS partner schools will be featured
          here as our network continues to grow.
        </p>

      </section>
    `
  }

};



/* =========================================================
   DOM ELEMENTS
========================================================= */

const contentArea =
  document.getElementById("content-area");

const navButtons =
  document.querySelectorAll(".nav-button");

const schoolItems =
  document.querySelectorAll(".school-item");

const currentYear =
  document.getElementById("current-year");



/* =========================================================
   LOAD HEADER PAGE
========================================================= */

function loadPage(pageName) {

  if (!pages[pageName]) {
    return;
  }


  contentArea.innerHTML =
    pages[pageName];


  /* Remove school selection */

  schoolItems.forEach(item => {
    item.classList.remove("active");
  });


  /* Activate correct header button */

  navButtons.forEach(button => {

    button.classList.toggle(
      "active",
      button.dataset.page === pageName
    );

  });

}



/* =========================================================
   LOAD SCHOOL
========================================================= */

function loadSchool(schoolId) {

  const school =
    schools[schoolId];


  if (!school) {
    return;
  }


  contentArea.innerHTML =
    school.content;


  /* Remove header selection */

  navButtons.forEach(button => {
    button.classList.remove("active");
  });


  /* Activate school */

  schoolItems.forEach(item => {

    item.classList.toggle(
      "active",
      item.dataset.school === schoolId
    );

  });

}



/* =========================================================
   HEADER NAVIGATION
========================================================= */

navButtons.forEach(button => {

  button.addEventListener(
    "click",
    () => {

      const page =
        button.dataset.page;

      loadPage(page);

    }
  );

});



/* =========================================================
   SCHOOL NAVIGATION
========================================================= */

schoolItems.forEach(item => {

  item.addEventListener(
    "click",
    () => {

      const school =
        item.dataset.school;

      loadSchool(school);

    }
  );

});



/* =========================================================
   CBT BUTTON
========================================================= */

const cbtButton =
  document.querySelector(".cbt-button");


cbtButton.addEventListener(
  "click",
  () => {

    alert(
      "The TUP CBT Portal is currently being prepared. Please check back soon."
    );

  }
);



/* =========================================================
   FOOTER YEAR
========================================================= */

currentYear.textContent =
  new Date().getFullYear();



/* =========================================================
   INITIAL PAGE
========================================================= */

loadPage("about");
