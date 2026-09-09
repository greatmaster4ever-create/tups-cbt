/* =========================================================
   TUPS TECHNOLOGIES
   PHASE 2 WEBSITE JAVASCRIPT
========================================================= */


/* =========================================================
   GLOBAL ELEMENTS
========================================================= */

const contentArea =
  document.getElementById("content-area");

const navButtons =
  document.querySelectorAll(".nav-button[data-page]");

const schoolButtons =
  document.querySelectorAll(".school-item");

const applicationModal =
  document.getElementById("application-modal");

const applicationForm =
  document.getElementById("application-form");

const selectedApp =
  document.getElementById("selected-app");

const applicationTitle =
  document.getElementById("application-title");

const modalClose =
  document.getElementById("modal-close");

const modalCancel =
  document.getElementById("modal-cancel");

const currentYear =
  document.getElementById("current-year");


/* =========================================================
   YEAR
========================================================= */

if (currentYear) {

  currentYear.textContent =
    new Date().getFullYear();

}



/* =========================================================
   PAGE DATA
========================================================= */

const pages = {


  /* =======================================================
     HOME
  ======================================================== */

  home: `

    <section class="content-page">


      <!-- HERO -->

      <div class="home-hero">


        <div
          class="hero-slide active"
          data-slide="0"
        >

          <div class="hero-content">

            <div class="eyebrow">
              TUPS TECHNOLOGIES
            </div>

            <h1>
              Smart Technology
              <br>
              for Modern Schools
            </h1>

            <p>
              TUPS Technologies develops practical
              digital solutions that help schools
              manage their operations, communicate
              effectively and deliver better
              educational experiences.
            </p>

            <button
              class="hero-button"
              data-page-action="school-management"
            >

              Explore TUPS School Management

              <i class="fa-solid fa-arrow-right"></i>

            </button>

          </div>

        </div>



        <div
          class="hero-slide"
          data-slide="1"
        >

          <div class="hero-content">

            <div class="eyebrow">
              SCHOOL TECHNOLOGY
            </div>

            <h1>
              One Platform.
              <br>
              Smarter School Management.
            </h1>

            <p>
              From students and results to fees,
              communication, advertisements and
              school administration, TUPS helps
              schools bring important operations
              together.
            </p>

            <button
              class="hero-button"
              data-page-action="school-management"
            >

              Discover TUPS

              <i class="fa-solid fa-arrow-right"></i>

            </button>

          </div>

        </div>



        <div
          class="hero-slide"
          data-slide="2"
        >

          <div class="hero-content">

            <div class="eyebrow">
              TUP CBT
            </div>

            <h1>
              Modern Computer
              <br>
              Based Testing
            </h1>

            <p>
              A dedicated CBT environment designed
              to support schools with digital
              examinations and computer-based
              assessment.
            </p>

            <button
              class="hero-button"
              data-page-action="cbt"
            >

              Explore TUP CBT

              <i class="fa-solid fa-arrow-right"></i>

            </button>

          </div>

        </div>



        <div class="hero-dots">

          <button
            class="hero-dot active"
            data-slide-target="0"
          ></button>

          <button
            class="hero-dot"
            data-slide-target="1"
          ></button>

          <button
            class="hero-dot"
            data-slide-target="2"
          ></button>

        </div>


      </div>




      <!-- INTRODUCTION -->

      <div class="section-heading">

        <h3>
          Technology Designed for Schools
        </h3>

        <p>
          TUPS Technologies provides digital
          solutions and creative services for
          schools, organisations and businesses.
        </p>

      </div>




      <!-- SERVICES -->

      <div class="content-grid">


        <article class="content-card">

          <div class="card-icon">

            <i class="fa-solid fa-school"></i>

          </div>

          <h3>
            School Management
          </h3>

          <p>
            Manage important school operations
            through an integrated digital platform.
          </p>

        </article>



        <article class="content-card">

          <div class="card-icon">

            <i class="fa-solid fa-laptop-code"></i>

          </div>

          <h3>
            TUP CBT
          </h3>

          <p>
            Deliver computer-based examinations
            using a dedicated CBT environment.
          </p>

        </article>



        <article class="content-card">

          <div class="card-icon">

            <i class="fa-solid fa-bullhorn"></i>

          </div>

          <h3>
            School Advertising
          </h3>

          <p>
            Promote school activities,
            announcements, events and achievements.
          </p>

        </article>



        <article class="content-card">

          <div class="card-icon">

            <i class="fa-solid fa-globe"></i>

          </div>

          <h3>
            Digital Services
          </h3>

          <p>
            Websites, graphics and digital content
            designed around your organisation.
          </p>

        </article>


      </div>




      <!-- STATS -->

      <div class="stats-grid">


        <div class="stat-card">

          <strong>
            Schools
          </strong>

          <span>
            Growing Partner Network
          </span>

        </div>


        <div class="stat-card">

          <strong>
            TUPS
          </strong>

          <span>
            School Management Platform
          </span>

        </div>


        <div class="stat-card">

          <strong>
            CBT
          </strong>

          <span>
            Computer Based Testing
          </span>

        </div>


        <div class="stat-card">

          <strong>
            24/7
          </strong>

          <span>
            Digital Accessibility
          </span>

        </div>


      </div>




      <!-- WHY TUPS -->

      <div class="section-heading">

        <h3>
          Why Choose TUPS?
        </h3>

        <p>
          We focus on practical technology that
          solves real operational problems.
        </p>

      </div>



      <div class="content-grid">


        <article class="content-card">

          <div class="card-icon">
            <i class="fa-solid fa-bolt"></i>
          </div>

          <h3>
            Practical
          </h3>

          <p>
            Our solutions are designed around
            the everyday needs of schools.
          </p>

        </article>



        <article class="content-card">

          <div class="card-icon">
            <i class="fa-solid fa-shield-halved"></i>
          </div>

          <h3>
            Reliable
          </h3>

          <p>
            We build systems with dependable
            workflows and structured data management.
          </p>

        </article>



        <article class="content-card">

          <div class="card-icon">
            <i class="fa-solid fa-people-group"></i>
          </div>

          <h3>
            School Focused
          </h3>

          <p>
            Our products are developed with
            school administrators, teachers,
            students and parents in mind.
          </p>

        </article>


      </div>




      <!-- TESTIMONIAL -->

      <section class="testimonials-section">

        <div class="section-heading">

          <h3>
            What Our Clients Say
          </h3>

          <p>
            A dedicated space for testimonials
            from TUPS partner schools.
          </p>

        </div>


        <div class="testimonial-card">

          <div class="quote-icon">

            <i class="fa-solid fa-quote-left"></i>

          </div>


          <blockquote>

            "TUPS has helped us embrace
            technology and improve the way
            we manage and communicate our
            school activities."

          </blockquote>


          <div class="testimonial-author">

            — TUPS Partner School

          </div>

        </div>

      </section>




      <!-- CTA -->

      <section class="cta-section">

        <h3>
          Ready to take your school digital?
        </h3>

        <p>
          Talk to TUPS Technologies about our
          School Management App, CBT and other
          digital services.
        </p>

        <button
          class="cta-button application-trigger"
          data-app="School Management App"
        >

          <i class="fa-solid fa-paper-plane"></i>

          Get Started

        </button>

      </section>


    </section>

  `,



  /* =======================================================
     ABOUT
  ======================================================== */

  about: `

    <section class="content-page">

      <h2>
        About Us
      </h2>

      <p>
        TUPS Technologies is a technology and
        digital services brand focused on building
        practical solutions for schools,
        organisations and businesses.
      </p>


      <div class="developer-profile">


        <div class="developer-photo">

          <i class="fa-solid fa-user"></i>

        </div>


        <div class="developer-text">

          <h3>
            Kelvin Obi
          </h3>

          <div class="developer-role">
            Lead Software Developer
          </div>


          <p>
            Kelvin Obi is the lead software developer
            behind TUPS Technologies and the developer
            of the TUPS School Management ecosystem.
          </p>


          <p>
            His work focuses on creating practical
            digital systems that help schools move
            important administrative and academic
            processes from traditional methods into
            efficient digital workflows.
          </p>


          <p>
            TUPS Technologies combines software
            development with web design, graphics,
            content creation and digital advertising
            to provide a broader technology service
            for schools and organisations.
          </p>


          <div class="profile-links">

            <a
              href="#"
              title="LinkedIn"
              aria-label="LinkedIn"
            >

              <i class="fa-brands fa-linkedin-in"></i>

            </a>


            <a
              href="#"
              title="Facebook"
              aria-label="Facebook"
            >

              <i class="fa-brands fa-facebook-f"></i>

            </a>

          </div>


        </div>

      </div>



      <section class="cta-section">

        <h3>
          Building Technology for Better Schools
        </h3>

        <p>
          Our goal is simple: create technology
          that is useful, accessible and relevant
          to the people who use it.
        </p>

      </section>

    </section>

  `,


  /* =======================================================
     SCHOOL MANAGEMENT
  ======================================================== */

  "school-management": `

    <section class="content-page">

      <h2>
        TUPS School Management App
      </h2>

      <p>
        TUPS School Management is a digital
        platform designed to help schools manage
        important administrative, academic and
        communication activities.
      </p>


      <!-- =================================================
           TUPS SCHOOL MANAGEMENT APP
           SCREENSHOT GALLERY
      ================================================== -->

      <section class="tups-app-gallery-section">




        <div class="tups-app-gallery">


          <!-- 1. SCHOOL DASHBOARD -->

          <article class="tups-app-card">

            <div class="tups-app-image">

              <img
                src="images/tups-dashboard.jpg"
                alt="TUPS School Management Dashboard"
                loading="lazy"
                decoding="async"
              >

            </div>

            <div class="tups-app-info">

              <h3>
                School Administration Dashboard
              </h3>

              <p>
                A central dashboard that gives school
                administrators an overview of important
                school activities and management information.
              </p>

            </div>

          </article>


          <!-- 2. STUDENT MANAGEMENT -->

          <article class="tups-app-card">

            <div class="tups-app-image">

              <img
                src="images/tups-student-management.jpg"
                alt="TUPS Student Management"
                loading="lazy"
                decoding="async"
              >

            </div>

            <div class="tups-app-info">

              <h3>
                Student Management
              </h3>

              <p>
                Organise student records and essential
                academic information in a structured
                and easily accessible environment.
              </p>

            </div>

          </article>


          <!-- 3. DEPARTMENT & CLASS MANAGEMENT -->

          <article class="tups-app-card">

            <div class="tups-app-image">

              <img
                src="images/tups-department-class.jpg"
                alt="TUPS Department and Class Management"
                loading="lazy"
                decoding="async"
              >

            </div>

            <div class="tups-app-info">

              <h3>
                Department & Class Management
              </h3>

              <p>
                Organise departments, classes, academic
                levels, and the overall academic structure
                of the school.
              </p>

            </div>

          </article>


          <!-- 4. SUBJECT MANAGEMENT -->

          <article class="tups-app-card">

            <div class="tups-app-image">

              <img
                src="images/tups-subject-management.jpg"
                alt="TUPS Subject Management"
                loading="lazy"
                decoding="async"
              >

            </div>

            <div class="tups-app-info">

              <h3>
                Subject Management
              </h3>

              <p>
                Manage school subjects and associate them
                with the appropriate departments, classes,
                and academic levels.
              </p>

            </div>

          </article>


          <!-- 5. TEACHER & ADMINISTRATIVE ACCESS -->

          <article class="tups-app-card">

            <div class="tups-app-image">

              <img
                src="images/tups-teacher-access.jpg"
                alt="TUPS Teacher and Administrative Access"
                loading="lazy"
                decoding="async"
              >

            </div>

            <div class="tups-app-info">

              <h3>
                Teacher & Administrative Access
              </h3>

              <p>
                Provide authorised teachers and
                administrators with access to functions
                relevant to their responsibilities.
              </p>

            </div>

          </article>


          <!-- 6. SCHOOL FEES -->

          <article class="tups-app-card">

            <div class="tups-app-image">

              <img
                src="images/tups-school-fees.jpg"
                alt="TUPS School Fees Management"
                loading="lazy"
                decoding="async"
              >

            </div>

            <div class="tups-app-info">

              <h3>
                School Fees Management
              </h3>

              <p>
                Organise payment records, monitor
                outstanding balances, and keep school
                fee information properly structured.
              </p>

            </div>

          </article>


          <!-- 7. FINANCIAL ANALYTICS -->

          <article class="tups-app-card">

            <div class="tups-app-image">

              <img
                src="images/tups-financial-analytics.jpg"
                alt="TUPS Financial Analytics and Monitoring"
                loading="lazy"
                decoding="async"
              >

            </div>

            <div class="tups-app-info">

              <h3>
                Financial Analytics & Monitoring
              </h3>

              <p>
                View organised financial information
                to support monitoring, analysis, and
                better school management decisions.
              </p>

            </div>

          </article>


          <!-- 8. RESULTS & BROADSHEET -->

          <article class="tups-app-card">

            <div class="tups-app-image">

              <img
                src="images/tups-results-broadsheet.jpg"
                alt="TUPS Academic Results and Broadsheet Management"
                loading="lazy"
                decoding="async"
              >

            </div>

            <div class="tups-app-info">

              <h3>
                Results & Broadsheet Management
              </h3>

              <p>
                Manage academic results and broadsheet
                records through a structured digital
                academic workflow.
              </p>

            </div>

          </article>


          <!-- 9. AUTOMATED RESULT COMPUTATION -->

          <article class="tups-app-card">

            <div class="tups-app-image">

              <img
                src="images/tups-result-computation.jpg"
                alt="TUPS Automated Result Computation"
                loading="lazy"
                decoding="async"
              >

            </div>

            <div class="tups-app-info">

              <h3>
                Automated Result Computation
              </h3>

              <p>
                Automate calculations such as totals,
                averages, positions, grades, and other
                academic result processes.
              </p>

            </div>

          </article>


          <!-- 10. DIGITAL RESULTS -->

          <article class="tups-app-card">

            <div class="tups-app-image">

              <img
                src="images/tups-digital-results.jpg"
                alt="TUPS Digital Result Generation and Checking"
                loading="lazy"
                decoding="async"
              >

            </div>

            <div class="tups-app-info">

              <h3>
                Digital Result Generation & Checking
              </h3>

              <p>
                Generate digital academic results and
                provide convenient access to student
                performance records.
              </p>

            </div>

          </article>


          <!-- 11. PARENT-TEACHER COMMUNICATION -->

          <article class="tups-app-card">

            <div class="tups-app-image">

              <img
                src="images/tups-parent-teacher.jpg"
                alt="TUPS Parent Teacher Communication"
                loading="lazy"
                decoding="async"
              >

            </div>

            <div class="tups-app-info">

              <h3>
                Parent–Teacher Communication
              </h3>

              <p>
                Support structured communication between
                parents, teachers, and the school through
                a digital communication environment.
              </p>

            </div>

          </article>


          <!-- 12. ANNOUNCEMENTS -->

          <article class="tups-app-card">

            <div class="tups-app-image">

              <img
                src="images/tups-announcements.jpg"
                alt="TUPS School Announcements and Advertising"
                loading="lazy"
                decoding="async"
              >

            </div>

            <div class="tups-app-info">

              <h3>
                Announcements & Advertising
              </h3>

              <p>
                Publish important school announcements,
                notices, information, and internal
                advertising through the school portal.
              </p>

            </div>

          </article>


          <!-- 13. PARENT INFORMATION -->

          <article class="tups-app-card">

            <div class="tups-app-image">

              <img
                src="images/tups-parent-information.jpg"
                alt="TUPS Parent School Information Access"
                loading="lazy"
                decoding="async"
              >

            </div>

            <div class="tups-app-info">

              <h3>
                Parent Information Access
              </h3>

              <p>
                Give parents convenient access to relevant
                school information and communication from
                wherever they are.
              </p>

            </div>

          </article>


        </div>

      </section>


      <section class="cta-section">

        <h3>
          Interested in TUPS School Management?
        </h3>

        <p>
          Contact us to learn how your school
          can become a TUPS partner.
        </p>

        <button
          class="cta-button application-trigger"
          data-app="School Management App"
        >

          Apply for School Management App

        </button>

      </section>

    </section>

  `,




  /* =======================================================
     CBT
  ======================================================== */

  cbt: `

    <section class="content-page">

      <h2>
        TUPS CBT
      </h2>

      <p>
        TUP CBT is our dedicated Computer Based
        Testing platform for schools.
      </p>


      <div class="content-grid">


        <article class="content-card">

          <div class="card-icon">
            <i class="fa-solid fa-file-circle-plus"></i>
          </div>

          <h3>
            Examination Management
          </h3>

          <p>
            Schools can prepare and manage
            computer-based examinations digitally.
          </p>

        </article>


        <article class="content-card">

          <div class="card-icon">
            <i class="fa-solid fa-clock"></i>
          </div>

          <h3>
            Exam Scheduling
          </h3>

          <p>
            Organise examination sessions
            according to school schedules.
          </p>

        </article>


        <article class="content-card">

          <div class="card-icon">
            <i class="fa-solid fa-laptop"></i>
          </div>

          <h3>
            Student Testing
          </h3>

          <p>
            Students can access assigned
            examinations through the CBT system.
          </p>

        </article>


        <article class="content-card">

          <div class="card-icon">
            <i class="fa-solid fa-chart-column"></i>
          </div>

          <h3>
            Digital Assessment
          </h3>

          <p>
            Support modern computer-based
            assessment workflows.
          </p>

        </article>


      </div>


      <section class="cta-section">

        <h3>
          Interested in TUP CBT?
        </h3>

        <p>
          Register your interest and our team
          will contact you.
        </p>

        <button
          class="cta-button application-trigger"
          data-app="TUPS CBT"
        >

          Apply for CBT

        </button>

      </section>

    </section>

  `,



  /* =======================================================
     ADVERTISEMENTS
  ======================================================== */

  advertisements: `

    <section class="content-page">

      <h2>
        Client Schools Advertisements
      </h2>

      <p>
        TUPS provides digital advertising
        opportunities for partner schools to
        showcase activities, events,
        announcements and achievements.
      </p>


      <div class="content-grid">


        <article class="content-card">

          <div class="card-icon">
            <i class="fa-solid fa-image"></i>
          </div>

          <h3>
            School Activities
          </h3>

          <p>
            Showcase school events, celebrations,
            academic activities and special moments.
          </p>

        </article>


        <article class="content-card">

          <div class="card-icon">
            <i class="fa-solid fa-bullhorn"></i>
          </div>

          <h3>
            Promotional Campaigns
          </h3>

          <p>
            Promote admissions, programmes and
            important school announcements.
          </p>

        </article>


        <article class="content-card">

          <div class="card-icon">
            <i class="fa-solid fa-share-nodes"></i>
          </div>

          <h3>
            Digital Exposure
          </h3>

          <p>
            Give your school activities greater
            digital visibility.
          </p>

        </article>


      </div>

    </section>

  `,



  /* =======================================================
     WEB DESIGN
  ======================================================== */

  "web-design": `

    <section class="content-page">

      <h2>
        Web Design
      </h2>

      <p>
        We design modern websites for schools,
        businesses, organisations and personal
        brands.
      </p>


      <div class="content-grid">


        <article class="content-card">

          <div class="card-icon">
            <i class="fa-solid fa-desktop"></i>
          </div>

          <h3>
            Modern Websites
          </h3>

          <p>
            Professional websites designed to
            represent your organisation online.
          </p>

        </article>


        <article class="content-card">

          <div class="card-icon">
            <i class="fa-solid fa-mobile-screen"></i>
          </div>

          <h3>
            Responsive Design
          </h3>

          <p>
            Designs that adapt to different
            screen sizes and devices.
          </p>

        </article>


        <article class="content-card">

          <div class="card-icon">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>

          <h3>
            Online Visibility
          </h3>

          <p>
            Build a professional digital presence
            for your organisation.
          </p>

        </article>


      </div>

    </section>

  `,



  /* =======================================================
     GRAPHICS DESIGN
  ======================================================== */

  "graphics-design": `

    <section class="content-page">

      <h2>
        Graphics Design
      </h2>

      <p>
        Professional visual designs for
        businesses, schools and organisations.
      </p>


      <div class="content-grid">


        <article class="content-card">

          <div class="card-icon">
            <i class="fa-solid fa-id-card"></i>
          </div>

          <h3>
            Branding
          </h3>

          <p>
            Create a consistent visual identity
            for your organisation.
          </p>

        </article>


        <article class="content-card">

          <div class="card-icon">
            <i class="fa-solid fa-file-image"></i>
          </div>

          <h3>
            Flyers & Posters
          </h3>

          <p>
            Promotional graphics for events,
            announcements and campaigns.
          </p>

        </article>


        <article class="content-card">

          <div class="card-icon">
            <i class="fa-solid fa-pen-nib"></i>
          </div>

          <h3>
            Creative Design
          </h3>

          <p>
            Custom visual materials designed
            around your requirements.
          </p>

        </article>


      </div>

    </section>

  `,



  /* =======================================================
     CONTENT CREATION
  ======================================================== */

  "content-creation": `

    <section class="content-page">

      <h2>
        Content Creation
      </h2>

      <p>
        We create digital content that helps
        organisations communicate their message
        effectively.
      </p>


      <div class="content-grid">


        <article class="content-card">

          <div class="card-icon">
            <i class="fa-solid fa-camera"></i>
          </div>

          <h3>
            Visual Content
          </h3>

          <p>
            Content for school activities,
            campaigns and digital platforms.
          </p>

        </article>


        <article class="content-card">

          <div class="card-icon">
            <i class="fa-solid fa-pen"></i>
          </div>

          <h3>
            Written Content
          </h3>

          <p>
            Professional content for websites,
            announcements and promotional material.
          </p>

        </article>


        <article class="content-card">

          <div class="card-icon">
            <i class="fa-solid fa-share-nodes"></i>
          </div>

          <h3>
            Social Content
          </h3>

          <p>
            Content prepared for digital and
            social media communication.
          </p>

        </article>


      </div>

    </section>

  `,


  /* =======================================================
     CONTACT
  ======================================================== */

  contact: `

    <section class="content-page">

      <h2>
        Contact Us
      </h2>

      <p>
        Have a question, need a service or want
        your school to join TUPS? Get in touch.
      </p>


      <div class="content-grid">


        <article class="content-card">

          <div class="card-icon">
            <i class="fa-solid fa-envelope"></i>
          </div>

          <h3>
            Email
          </h3>

          <p>
            tupstechnologies@gmail.com
          </p>

        </article>


        <article class="content-card">

          <div class="card-icon">
            <i class="fa-solid fa-phone"></i>
          </div>

          <h3>
            Phone
          </h3>

          <p>
            Contact TUPS Technologies directly
            for enquiries and support.
          </p>

        </article>


        <article class="content-card">

          <div class="card-icon">
            <i class="fa-solid fa-globe"></i>
          </div>

          <h3>
            School Management Portal
          </h3>

          <p>
            www.tupstechnologies.com
          </p>

        </article>


        <article class="content-card">

          <div class="card-icon">
            <i class="fa-solid fa-location-dot"></i>
          </div>

          <h3>
            Location
          </h3>

          <p>
            TUPS Technologies location and
            interactive map will be displayed here.
          </p>

        </article>


      </div>


      <section class="cta-section">

        <h3>
          Let's Work Together
        </h3>

        <p>
          Tell us what you need and we'll be
          happy to discuss the best solution.
        </p>

        <button
          class="cta-button application-trigger"
          data-app="General Enquiry"
        >

          Send an Enquiry

        </button>

      </section>

    </section>

  `,



  /* =======================================================
     FAQS
  ======================================================== */

  faqs: `

    <section class="content-page">

      <h2>
        Frequently Asked Questions
      </h2>

      <p>
        Find answers to common questions about
        TUPS Technologies, our software and
        digital services.
      </p>


      <div class="faq-list">


        <div class="faq-item">

          <button class="faq-question">

            What is TUPS School Management Software?

            <i class="fa-solid fa-chevron-down"></i>

          </button>

          <div class="faq-answer">

            <div class="faq-answer-inner">

              TUPS School Management is a digital
              school administration platform designed
              to help schools manage student records,
              results, communication, fees and other
              school operations.

            </div>

          </div>

        </div>



        <div class="faq-item">

          <button class="faq-question">

            Who can use TUPS School Management?

            <i class="fa-solid fa-chevron-down"></i>

          </button>

          <div class="faq-answer">

            <div class="faq-answer-inner">

              TUPS is designed for schools and their
              administrators, teachers, students and
              other authorised users.

            </div>

          </div>

        </div>



        <div class="faq-item">

          <button class="faq-question">

            What is TUP CBT?

            <i class="fa-solid fa-chevron-down"></i>

          </button>

          <div class="faq-answer">

            <div class="faq-answer-inner">

              TUP CBT is the Computer Based Testing
              platform developed by TUPS Technologies
              for schools that want to conduct
              computer-based examinations.

            </div>

          </div>

        </div>



        <div class="faq-item">

          <button class="faq-question">

            Can schools advertise their activities
            through TUPS?

            <i class="fa-solid fa-chevron-down"></i>

          </button>

          <div class="faq-answer">

            <div class="faq-answer-inner">

              Yes. TUPS provides advertising
              opportunities for partner schools to
              showcase school activities, events,
              announcements and achievements.

            </div>

          </div>

        </div>



        <div class="faq-item">

          <button class="faq-question">

            Does TUPS design websites?

            <i class="fa-solid fa-chevron-down"></i>

          </button>

          <div class="faq-answer">

            <div class="faq-answer-inner">

              Yes. TUPS provides website design and
              development services for schools,
              businesses and organisations.

            </div>

          </div>

        </div>



        <div class="faq-item">

          <button class="faq-question">

            Does TUPS provide graphics design?

            <i class="fa-solid fa-chevron-down"></i>

          </button>

          <div class="faq-answer">

            <div class="faq-answer-inner">

              Yes. Graphics design services include
              promotional materials, flyers, posters,
              branding and other digital graphics.

            </div>

          </div>

        </div>



        <div class="faq-item">

          <button class="faq-question">

            How can my school subscribe to TUPS?

            <i class="fa-solid fa-chevron-down"></i>

          </button>

          <div class="faq-answer">

            <div class="faq-answer-inner">

              Select "Subscribe to Our Apps" in the
              website header and choose the product
              you are interested in. You can then
              complete the application form.

            </div>

          </div>

        </div>



        <div class="faq-item">

          <button class="faq-question">

            How can I contact TUPS Technologies?

            <i class="fa-solid fa-chevron-down"></i>

          </button>

          <div class="faq-answer">

            <div class="faq-answer-inner">

              You can contact TUPS through the
              Contact Us section, email or the
              available social media channels.

            </div>

          </div>

        </div>


      </div>

    </section>

  `

};



/* =========================================================
   SCHOOL DATA
========================================================= */

const schools = {


  "tender-lilies": {

    shortName: "TL",

    name: "Tender Lilies Royal Academy",

    description:
      "Tender Lilies Royal Academy is one of the schools in the TUPS partner network.",

    message:
      "School profile, activities, photographs, announcements and other information will be displayed here once the school content is supplied."

  },


  "tree-hill": {

    shortName: "TH",

    name: "Tree Hill Academy",

    description:
      "Tree Hill Academy is one of the schools in the TUPS partner network.",

    message:
      "School profile, activities, photographs, announcements and other information will be displayed here once the school content is supplied."

  },


  "lead-british": {

    shortName: "LB",

    name: "Lead British International School",

    description:
      "Lead British International School is one of the schools in the TUPS partner network.",

    message:
      "School profile, activities, photographs, announcements and other information will be displayed here once the school content is supplied."

  },


  "more-schools": {

    shortName: "+",

    name: "Our Partner Schools",

    description:
      "More partner schools will be added to the TUPS website progressively.",

    message:
      "School profiles, logos, activities and other information will be added as partner school content becomes available."

  }

};



/* =========================================================
   LOAD PAGE
========================================================= */

function loadPage(pageName) {


  if (!pages[pageName]) {

    pageName = "home";

  }


  contentArea.innerHTML =
    pages[pageName];


  updateNavigation(pageName);


  window.scrollTo({

    top: 0,

    behavior: "smooth"

  });


  initializePageFeatures();

}



/* =========================================================
   NAVIGATION STATE
========================================================= */

function updateNavigation(pageName) {


  navButtons.forEach(button => {

    button.classList.remove("active");

  });


  const activeButton =
    document.querySelector(
      `.nav-button[data-page="${pageName}"]`
    );


  if (activeButton) {

    activeButton.classList.add("active");

  }


  schoolButtons.forEach(button => {

    button.classList.remove("active");

  });

}



/* =========================================================
   NAV BUTTON EVENTS
========================================================= */

navButtons.forEach(button => {


  button.addEventListener(
    "click",
    function () {

      const page =
        this.dataset.page;

      loadPage(page);

    }
  );


});



/* =========================================================
   SCHOOL BUTTON EVENTS
========================================================= */

schoolButtons.forEach(button => {


  button.addEventListener(
    "click",
    function () {

      const schoolId =
        this.dataset.school;

      loadSchool(schoolId);

    }
  );


});

/* =========================================================
   SERVICE MENU BUTTON EVENTS
========================================================= */

document
  .querySelectorAll(
    ".service-menu button[data-page]"
  )
  .forEach(button => {

    button.addEventListener(
      "click",
      function () {

        const page =
          this.dataset.page;

        loadPage(page);

      }
    );

  });

/* =========================================================
   LOAD SCHOOL
========================================================= */

function loadSchool(schoolId) {


  const school =
    schools[schoolId];


  if (!school) return;


  schoolButtons.forEach(button => {

    button.classList.remove("active");

  });


  const selectedSchool =
    document.querySelector(
      `.school-item[data-school="${schoolId}"]`
    );


  if (selectedSchool) {

    selectedSchool.classList.add("active");

  }


  navButtons.forEach(button => {

    button.classList.remove("active");

  });


  contentArea.innerHTML = `

    <section class="content-page">


      <div class="school-page-header">


        <div class="large-school-logo">

          ${school.shortName}

        </div>


        <div>

          <h2>
            ${school.name}
          </h2>

          <p>
            ${school.description}
          </p>

        </div>


      </div>



      <div class="content-grid">


        <article class="content-card">

          <div class="card-icon">

            <i class="fa-solid fa-school"></i>

          </div>

          <h3>
            About the School
          </h3>

          <p>
            ${school.message}
          </p>

        </article>



        <article class="content-card">

          <div class="card-icon">

            <i class="fa-solid fa-calendar-days"></i>

          </div>

          <h3>
            School Activities
          </h3>

          <p>
            School activities, events and
            important dates will appear here.
          </p>

        </article>



        <article class="content-card">

          <div class="card-icon">

            <i class="fa-solid fa-bullhorn"></i>

          </div>

          <h3>
            Latest News
          </h3>

          <p>
            School announcements and news
            will be displayed here.
          </p>

        </article>


      </div>



      <section class="cta-section">

        <h3>
          Powered by TUPS Technologies
        </h3>

        <p>
          Smart technology supporting modern
          school administration.
        </p>

      </section>


    </section>

  `;


  window.scrollTo({

    top: 0,

    behavior: "smooth"

  });

}



/* =========================================================
   PAGE-SPECIFIC FEATURES
========================================================= */

function initializePageFeatures() {


  initializeHeroSlider();

  initializeHeroButtons();

  initializeFAQ();

  initializeApplicationButtons();

}



/* =========================================================
   HERO SLIDER
========================================================= */

let heroInterval;


function initializeHeroSlider() {


  clearInterval(heroInterval);


  const slides =
    document.querySelectorAll(".hero-slide");


  const dots =
    document.querySelectorAll(".hero-dot");


  if (!slides.length) return;


  let currentSlide = 0;


  function showSlide(index) {


    slides.forEach(
      slide =>
        slide.classList.remove("active")
    );


    dots.forEach(
      dot =>
        dot.classList.remove("active")
    );


    slides[index].classList.add("active");


    if (dots[index]) {

      dots[index].classList.add("active");

    }


    currentSlide = index;

  }


  dots.forEach(
    (dot, index) => {

      dot.addEventListener(
        "click",
        () => {

          showSlide(index);

        }
      );

    }
  );


  heroInterval =
    setInterval(
      () => {

        currentSlide =
          (currentSlide + 1) %
          slides.length;

        showSlide(currentSlide);

      },
      6500
    );

}



/* =========================================================
   HERO BUTTONS
========================================================= */

function initializeHeroButtons() {


  document
    .querySelectorAll(
      "[data-page-action]"
    )
    .forEach(button => {


      button.addEventListener(
        "click",
        () => {

          loadPage(
            button.dataset.pageAction
          );

        }
      );


    });

}



/* =========================================================
   FAQ ACCORDION
========================================================= */

function initializeFAQ() {


  const faqItems =
    document.querySelectorAll(
      ".faq-item"
    );


  faqItems.forEach(item => {


    const question =
      item.querySelector(
        ".faq-question"
      );


    const answer =
      item.querySelector(
        ".faq-answer"
      );


    question.addEventListener(
      "click",
      () => {


        const isOpen =
          item.classList.contains(
            "open"
          );


        faqItems.forEach(otherItem => {

          otherItem.classList.remove(
            "open"
          );


          const otherAnswer =
            otherItem.querySelector(
              ".faq-answer"
            );


          if (otherAnswer) {

            otherAnswer.style.maxHeight =
              null;

          }

        });


        if (!isOpen) {


          item.classList.add(
            "open"
          );


          answer.style.maxHeight =
            answer.scrollHeight +
            "px";


        }


      }
    );


  });

}



/* =========================================================
   APPLICATION BUTTONS
========================================================= */

function initializeApplicationButtons() {


  document
    .querySelectorAll(
      ".application-trigger"
    )
    .forEach(button => {


      button.addEventListener(
        "click",
        () => {

          openApplicationModal(
            button.dataset.app
          );

        }
      );


    });

}



/* =========================================================
   OPEN APPLICATION MODAL
========================================================= */

function openApplicationModal(
  appName
) {


  selectedApp.value =
    appName;


  applicationTitle.textContent =
    appName;


  applicationModal.classList.add(
    "show"
  );


  document.body.style.overflow =
    "hidden";

}



/* =========================================================
   CLOSE APPLICATION MODAL
========================================================= */

function closeApplicationModal() {


  applicationModal.classList.remove(
    "show"
  );


  document.body.style.overflow =
    "";

}



/* =========================================================
   MODAL BUTTONS
========================================================= */

if (modalClose) {

  modalClose.addEventListener(
    "click",
    closeApplicationModal
  );

}


if (modalCancel) {

  modalCancel.addEventListener(
    "click",
    closeApplicationModal
  );

}



applicationModal.addEventListener(
  "click",
  function (event) {


    if (
      event.target ===
      applicationModal
    ) {

      closeApplicationModal();

    }

  }
);



/* =========================================================
   APPLICATION FORM
========================================================= */

if (applicationForm) {


  applicationForm.addEventListener(
    "submit",
    function (event) {


      event.preventDefault();


      const app =
        selectedApp.value;


      const name =
        document.getElementById(
          "visitor-name"
        ).value.trim();


      const phone =
        document.getElementById(
          "visitor-phone"
        ).value.trim();


      const email =
        document.getElementById(
          "visitor-email"
        ).value.trim();


      const message =
        document.getElementById(
          "visitor-message"
        ).value.trim();


      if (
        !name ||
        !phone ||
        !email ||
        !message
      ) {

        alert(
          "Please complete all required fields."
        );

        return;

      }


      /*
        EMAIL SUBMISSION WILL BE CONNECTED
        SECURELY IN THE NEXT DEVELOPMENT STEP.

        We intentionally do NOT put email
        credentials inside this public file.
      */


      alert(
        "Thank you, " +
        name +
        ". Your interest in " +
        app +
        " has been recorded. " +
        "The secure email submission service will be connected shortly."
      );


      applicationForm.reset();


      closeApplicationModal();


    }
  );


}



/* =========================================================
   CBT PORTAL BUTTON
========================================================= */

const cbtPortalButton =
  document.querySelector(
    ".cbt-button"
  );


if (cbtPortalButton) {


  cbtPortalButton.addEventListener(
    "click",
    () => {

      alert(
        "TUP CBT Portal link will be connected when the CBT website is ready."
      );

    }
  );

}

/* =========================================================
   DEMO SYSTEM
   TUPS TECHNOLOGIES
========================================================= */


/*
   NEW DEMO APPS SCRIPT WEB APP URL

   We will put the URL here after creating
   the NEW Apps Script for this website.
*/

const DEMO_API_URL =
  "https://script.google.com/macros/s/AKfycbxTYxzMNezqeAUF03_YvhEx5jHWvRtU9vsQQwkbWCFZActZwY-AMPQAaKluepyPo3svSw/exec";



/* =========================================================
   DEMO CATEGORY INFORMATION
========================================================= */

const DEMO_CATEGORIES = {

  school: {

    title:
      "TUPS School Management App",

    subtitle:
      "Explore our School Management App through these demonstration videos."

  },


  cbt: {

    title:
      "TUPS CBT",

    subtitle:
      "Explore TUPS CBT through our demonstration videos."

  }

};



/* =========================================================
   DEMO NAVIGATION
========================================================= */

function initializeDemoNavigation() {


  const demoButtons =
    document.querySelectorAll(
      ".demo-category-button"
    );


  demoButtons.forEach(button => {


    button.addEventListener(
      "click",
      function () {


        const category =
          this.dataset.demoCategory;


        loadDemoCategory(category);


      }
    );


  });

}


/* =========================================================
   LOAD DEMO CATEGORY
========================================================= */

function loadDemoCategory(category) {


  const categoryInfo =
    DEMO_CATEGORIES[category];


  if (!categoryInfo) return;


  /*
    Mark Watch Demo as active
  */

  document
    .querySelectorAll(".nav-button")
    .forEach(button => {

      button.classList.remove("active");

    });


  const demoTrigger =
    document.querySelector(
      ".demo-nav-button"
    );


  if (demoTrigger) {

    demoTrigger.classList.add("active");

  }
document
  .querySelectorAll(
    ".demo-category-button"
  )
  .forEach(button => {

    button.classList.remove("active");

  });


const selectedDemoButton =
  document.querySelector(
    `.demo-category-button[data-demo-category="${category}"]`
  );


if (selectedDemoButton) {

  selectedDemoButton.classList.add("active");

}

  /*
    Display loading page
  */

  contentArea.innerHTML = `

    <section class="content-page demo-page">


      <div class="demo-page-header">

        <div class="demo-page-icon">

          <i class="fa-solid fa-circle-play"></i>

        </div>


        <div>

          <h2>
            ${categoryInfo.title}
          </h2>

          <p>
            ${categoryInfo.subtitle}
          </p>

        </div>

      </div>



      <div
        id="demo-gallery"
        class="demo-gallery"
      >

        <div class="demo-loading">

          <i class="fa-solid fa-spinner fa-spin"></i>

          <span>
            Loading demonstration videos...
          </span>

        </div>

      </div>


    </section>

  `;


  window.scrollTo({

    top: 0,

    behavior: "smooth"

  });


  fetchDemoVideos(category);

}



/* =========================================================
   FETCH DEMO VIDEOS
========================================================= */

function fetchDemoVideos(category) {


  const gallery =
    document.getElementById(
      "demo-gallery"
    );


  if (!gallery) return;


  /*
    Make sure Apps Script URL has been
    configured.
  */

  if (
  !DEMO_API_URL ||
  DEMO_API_URL ===
  "PASTE_DEMO_APPS_SCRIPT_URL_HERE"
) {

  gallery.innerHTML = `

    <div class="demo-message">

      <i class="fa-solid fa-circle-info"></i>

      <h3>
        Demo Videos
      </h3>

      <p>
        The demonstration video service
        is being connected.
      </p>

    </div>

  `;

  return;

}


  /*
    JSONP callback name
  */

  const callbackName =
    "tupsDemoCallback_" +
    Date.now();



  window[callbackName] =
    function (response) {


      /*
        Remove callback
      */

      delete window[callbackName];


      /*
        Remove script element
      */

      const script =
        document.getElementById(
          callbackName
        );


      if (script) {

        script.remove();

      }


      /*
        Handle server error
      */

      if (
        !response ||
        response.success !== true
      ) {


        renderDemoError(
          gallery,
          response &&
          response.message
            ? response.message
            : "Unable to load demonstration videos."
        );


        return;

      }


      /*
        Render returned videos
      */

      renderDemoGallery(
        gallery,
        response.videos || []
      );


    };



  /*
    Create JSONP request
  */

  const script =
    document.createElement("script");


  script.id =
    callbackName;


  script.src =
    DEMO_API_URL +
    "?category=" +
    encodeURIComponent(category) +
    "&callback=" +
    encodeURIComponent(callbackName);



  script.onerror =
    function () {


      delete window[callbackName];


      script.remove();


      renderDemoError(
        gallery,
        "The demonstration video service could not be reached."
      );


    };


  document
    .body
    .appendChild(script);

}



/* =========================================================
   RENDER DEMO GALLERY
========================================================= */

function renderDemoGallery(
  gallery,
  videos
) {


  if (!videos.length) {


    gallery.innerHTML = `

      <div class="demo-message">

        <i class="fa-solid fa-video-slash"></i>

        <h3>
          No Demo Videos Yet
        </h3>

        <p>
          Demonstration videos for this
          section will be available soon.
        </p>

      </div>

    `;


    return;

  }



  gallery.innerHTML =
    videos
      .map(video => `

        <article
          class="demo-card"
          data-video-id="${escapeDemoHTML(video.id)}"
          data-video-title="${escapeDemoHTML(video.name)}"
        >


          <div class="demo-thumbnail">


            <img
              src="${escapeDemoHTML(video.thumbnailUrl)}"
              alt="${escapeDemoHTML(video.name)}"
              loading="lazy"
            >


            <div class="demo-play-overlay">

              <span>

                <i class="fa-solid fa-play"></i>

              </span>

            </div>


          </div>



          <div class="demo-card-content">


            <h3>
              ${escapeDemoHTML(video.name)}
            </h3>


            <button
              type="button"
              class="demo-watch-button"
              data-video-id="${escapeDemoHTML(video.id)}"
              data-video-title="${escapeDemoHTML(video.name)}"
            >

              <i class="fa-solid fa-circle-play"></i>

              Watch Demo

            </button>


          </div>


        </article>

      `)
      .join("");


  /*
    Attach video click events
  */

  gallery
    .querySelectorAll(
      ".demo-card, .demo-watch-button"
    )
    .forEach(element => {


      element.addEventListener(
        "click",
        function (event) {


          /*
            Prevent card click from firing twice
          */

          if (
            event.target.closest(
              ".demo-watch-button"
            )
          ) {

            event.stopPropagation();

          }


          const videoId =
            this.dataset.videoId;


          const videoTitle =
            this.dataset.videoTitle;


          if (
            videoId &&
            videoTitle
          ) {

            openDemoVideo(
              videoId,
              videoTitle
            );

          }

        }
      );


    });

}



/* =========================================================
   DEMO ERROR
========================================================= */

function renderDemoError(
  gallery,
  message
) {


  gallery.innerHTML = `

    <div class="demo-message demo-error">

      <i class="fa-solid fa-triangle-exclamation"></i>

      <h3>
        Demo Videos Unavailable
      </h3>

      <p>
        ${escapeDemoHTML(message)}
      </p>

      <button
        type="button"
        class="demo-retry-button"
        onclick="loadDemoCategory(
          document.querySelector('.demo-category-button.active')?.dataset.demoCategory || 'school'
        )"
      >

        <i class="fa-solid fa-rotate-right"></i>

        Try Again

      </button>

    </div>

  `;

}



/* =========================================================
   OPEN DEMO VIDEO
========================================================= */

function openDemoVideo(
  videoId,
  videoTitle
) {


  /*
    Remove any existing demo modal
  */

  closeDemoVideo();



  const overlay =
    document.createElement("div");


  overlay.id =
    "demo-video-modal";


  overlay.className =
    "demo-video-modal";


  overlay.innerHTML = `

    <div
      class="demo-video-dialog"
      role="dialog"
      aria-modal="true"
      aria-label="${escapeDemoHTML(videoTitle)}"
    >


      <button
        type="button"
        class="demo-video-close"
        aria-label="Close video"
      >

        <i class="fa-solid fa-xmark"></i>

      </button>



      <div class="demo-video-header">

        <h3>
          ${escapeDemoHTML(videoTitle)}
        </h3>

      </div>



      <div class="demo-video-frame">

        <iframe
          src="https://drive.google.com/file/d/${encodeURIComponent(videoId)}/preview"
          title="${escapeDemoHTML(videoTitle)}"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>

      </div>


    </div>

  `;


  document.body.appendChild(
    overlay
  );


  document.body.style.overflow =
    "hidden";


  /*
    Close button
  */

  const closeButton =
    overlay.querySelector(
      ".demo-video-close"
    );


  closeButton.addEventListener(
    "click",
    closeDemoVideo
  );


  /*
    Close when clicking outside
  */

  overlay.addEventListener(
    "click",
    function (event) {


      if (
        event.target === overlay
      ) {

        closeDemoVideo();

      }

    }
  );


  /*
    ESC key
  */

  document.addEventListener(
    "keydown",
    demoEscapeHandler
  );

}



/* =========================================================
   CLOSE DEMO VIDEO
========================================================= */

function closeDemoVideo() {


  const modal =
    document.getElementById(
      "demo-video-modal"
    );


  if (modal) {

    modal.remove();

  }


  document.body.style.overflow =
    "";


  document.removeEventListener(
    "keydown",
    demoEscapeHandler
  );

}



/* =========================================================
   ESC KEY
========================================================= */

function demoEscapeHandler(event) {


  if (
    event.key === "Escape"
  ) {

    closeDemoVideo();

  }

}



/* =========================================================
   HTML ESCAPE
========================================================= */

function escapeDemoHTML(value) {


  return String(value || "")
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



/* =========================================================
   INITIALIZE DEMO NAVIGATION
========================================================= */

initializeDemoNavigation();

/* =========================================================
   INITIAL PAGE
========================================================= */

loadPage("home");