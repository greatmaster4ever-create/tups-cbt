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


     <!-- HOME PROMO CARD -->

<div class="home-promo-card">

  <!-- LEFT: PROMOTIONAL SLIDER -->
  <div class="home-promo-slider">

    <div
  class="home-promo-slide active"
  data-promo-slide="0"
>
  <video
    class="home-promo-video"
    autoplay
    muted
    loop
    playsinline
    preload="metadata"
  >
    <source
      src="videos/home_demo.mp4"
      type="video/mp4"
    >
  </video>
</div>


   <!--
<div
  class="home-promo-slide"
  data-promo-slide="1"
>
  <div class="home-promo-placeholder">
    <span>TUPS TECHNOLOGIES</span>
    <h2>Smart Technology for Modern Schools</h2>
    <p>
      Promotional content placeholder.
    </p>
  </div>
</div>
-->


<!--
<div
  class="home-promo-slide"
  data-promo-slide="2"
>
  <div class="home-promo-placeholder">
    <span>TUPS SCHOOL MANAGEMENT</span>
    <h2>One Platform. Smarter School Management.</h2>
    <p>
      Promotional content placeholder.
    </p>
  </div>
</div>
-->
    <div class="home-promo-dots">

      <button
        class="home-promo-dot active"
        data-promo-target="0"
        aria-label="Show promotion 1"
      ></button>

      <button
        class="home-promo-dot"
        data-promo-target="1"
        aria-label="Show promotion 2"
      ></button>

      <button
        class="home-promo-dot"
        data-promo-target="2"
        aria-label="Show promotion 3"
      ></button>

    </div>

  </div>


  <!-- RIGHT: STATIC TUPS APP IMAGE -->

  <div class="home-promo-app">

    <img
      src="images/mobile.jpg"
      alt="TUPS School Management App"
      loading="eager"
      decoding="async"
    >

  </div>

</div>

      <!-- =====================================================
           PARTNER SCHOOLS PUBLICITY CAROUSEL
      ====================================================== -->

      <section class="partner-carousel-section">

        <div class="partner-carousel-heading">

          <span class="partner-carousel-kicker">
            OUR PARTNER SCHOOLS
          </span>

          <h2>
            Partner School's Activities &amp; Publicity
          </h2>

          <p>
            Discover activities, events and special moments
            from schools powered and supported by TUPS Technologies.
          </p>

        </div>


        <div class="partner-carousel">

          <button
            class="partner-carousel-btn partner-carousel-prev"
            type="button"
            aria-label="Previous partner school"
          >
            <i class="fa-solid fa-chevron-left"></i>
          </button>


          <div class="partner-carousel-viewport">

            <div
              class="partner-carousel-track"
              id="partner-carousel-track"
            >

              <!-- CARD 1 -->

              <article class="partner-school-card">

                <div class="partner-school-image">

                  <img
                    src="images/lbis_admission.jpg"
                    alt="Tender Lilies Royal Academy - Inter-House Sports 2026"
                    loading="lazy"
                    decoding="async"
                  >

                </div>

                <div class="partner-school-info">

                  <h3>
                    Lead British International School, Abuja.
                  </h3>

                  <p>
                    Admission in Progress.
                  </p>

                </div>

              </article>


              <!-- CARD 2 -->

              <article class="partner-school-card">

                <div class="partner-school-image">

                  <img
                    src="images/cwa.jpg"
                    alt="Children's World Academy"
                    loading="lazy"
                    decoding="async"
                  >

                </div>

                <div class="partner-school-info">

                  <h3>
                    Children's World Academy Gwarinpa, Abuja.
                  </h3>

                  <p>
                    Our Services.
                  </p>

                </div>

              </article>


              <!-- CARD 3 -->

              <article class="partner-school-card">

                <div class="partner-school-image">

                  <img
                    src="angelite.jpg"
                    alt="Angelite International School"
                    loading="lazy"
                    decoding="async"
                  >

                </div>

                <div class="partner-school-info">

                  <h3>
                    Angelite International School
                  </h3>

                  <p>
                    School Admission 2026.
                  </p>

                </div>

              </article>


              <!-- CARD 4 -->

              <article class="partner-school-card">

                <div class="partner-school-image">

                  <img
                    src="images/partner-school-4.jpg"
                    alt="Partner School - Academic Excellence Awards 2026"
                    loading="lazy"
                    decoding="async"
                  >

                </div>

                <div class="partner-school-info">

                  <h3>
                    Partner School
                  </h3>

                  <p>
                    Academic Excellence Awards 2026
                  </p>

                </div>

              </article>


            </div>

          </div>


          <button
            class="partner-carousel-btn partner-carousel-next"
            type="button"
            aria-label="Next partner school"
          >
            <i class="fa-solid fa-chevron-right"></i>
          </button>


        </div>


        <div
          class="partner-carousel-dots"
          aria-label="Partner school carousel navigation"
        >

          <button
            class="partner-carousel-dot active"
            type="button"
            data-partner-slide="0"
            aria-label="Show partner schools 1 and 2"
          ></button>

          <button
            class="partner-carousel-dot"
            type="button"
            data-partner-slide="1"
            aria-label="Show partner schools 2 and 3"
          ></button>

          <button
            class="partner-carousel-dot"
            type="button"
            data-partner-slide="2"
            aria-label="Show partner schools 3 and 4"
          ></button>

        </div>

      </section>

	   <!-- TECHNOLOGY DESIGNED FOR SCHOOLS -->
       <div class="technology-schools-wrapper">
      
	  <!-- INTRODUCTION -->
      
	  <div class="section-heading technology-schools-section">

      

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
</div>

<!-- WHY TUPS -->
<div class="why-tups-wrapper">

  <div class="section-heading why-tups-section">

    <h3>
      Why Choose TUPS?
    </h3>

    <p>
      Explore the powerful modules that make
      TUPS a complete digital solution for schools.
    </p>

  </div>


  <div class="tups-modules-grid">


    <!-- ATTENDANCE -->
    <article class="tups-module-card">

      <div class="tups-module-image">
        <img
          src="images/attendance.jpg"
          alt="TUPS Attendance Module"
          loading="lazy"
          decoding="async"
        >
      </div>

      <div class="tups-module-content">

        <h3>
          Attendance
        </h3>

        <p>
          Mark and track student attendance efficiently
          as parents receive instant message alerts on
          arrival and departure of their wards, while
          keeping accurate daily attendance records.
        </p>

      </div>

    </article>


    <!-- SCHOOL CALENDAR -->
    <article class="tups-module-card">

      <div class="tups-module-image">
        <img
          src="images/calendar.jpg"
          alt="TUPS School Calendar"
          loading="lazy"
          decoding="async"
        >
      </div>

      <div class="tups-module-content">

        <h3>
          School Calendar
        </h3>

        <p>
          Organise school events, activities,
          important dates and academic schedules,
          all available through the Parents Portal.
        </p>

      </div>

    </article>


    <!-- COMMUNICATION BOOK -->
    <article class="tups-module-card">

      <div class="tups-module-image">
        <img
          src="images/communication book.jpg"
          alt="TUPS Communication Book"
          loading="lazy"
          decoding="async"
        >
      </div>

      <div class="tups-module-content">

        <h3>
          Communication Book
        </h3>

        <p>
          Connect teachers, parents and school
          administrators through digital communication.
          A three-way communication channel between
          parents, teachers and the school.
        </p>

      </div>

    </article>


    <!-- ONLINE RESULT CHECKER -->
    <article class="tups-module-card">

      <div class="tups-module-image">
        <img
          src="images/result checker.jpg"
          alt="TUPS Online Result Checker"
          loading="lazy"
          decoding="async"
        >
      </div>

      <div class="tups-module-content">

        <h3>
          Online Result Checker
        </h3>

        <p>
          Give students and parents secure access
          to check academic results online from
          anywhere and at any time.
        </p>

      </div>

    </article>


    <!-- STUDENTS / PARENTS PORTAL -->
    <article class="tups-module-card">

      <div class="tups-module-image">
        <img
          src="images/tups-students-parents-portal.jpg"
          alt="TUPS Students and Parents Portal"
          loading="lazy"
          decoding="async"
        >
      </div>

      <div class="tups-module-content">

        <h3>
          Students / Parents Portal
        </h3>

        <p>
          Provide convenient access to results,
          school information and important updates
          through a dedicated online portal.
        </p>

      </div>

    </article>


    <!-- TEACHER'S PORTAL -->
    <article class="tups-module-card">

      <div class="tups-module-image">
        <img
          src="images/tups-teachers-portal.jpg"
          alt="TUPS Teacher's Portal"
          loading="lazy"
          decoding="async"
        >
      </div>

      <div class="tups-module-content">

        <h3>
          Teacher's Portal
        </h3>

        <p>
          Equip teachers with tools for academic
          records, results, classroom activities
          and effective school management.
        </p>

      </div>

    </article>


    <!-- ADMIN PORTAL -->
    <article class="tups-module-card">

      <div class="tups-module-image">
        <img
          src="images/tups-admin-portal.jpg"
          alt="TUPS Admin Portal"
          loading="lazy"
          decoding="async"
        >
      </div>

      <div class="tups-module-content">

        <h3>
          Admin Portal
        </h3>

        <p>
          Manage school operations, users, records,
          resources and important administrative
          activities from one central platform.
        </p>

      </div>

    </article>


    <!-- PROGRAMMED RESULTS GRADING -->
    <article class="tups-module-card">

      <div class="tups-module-image">
        <img
          src="images/tups-programmed-results.jpg"
          alt="TUPS Programmed Results Grading System"
          loading="lazy"
          decoding="async"
        >
      </div>

      <div class="tups-module-content">

        <h3>
          Programmed Results Grading System
        </h3>

        <p>
          Automate result computation and grading
          using programmed academic assessment rules
          for accurate and consistent results.
        </p>

      </div>

    </article>

    <!-- ANNOUNCEMENT DASHBOARD -->
    <article class="tups-module-card">

      <div class="tups-module-image">
        <img
          src="images/announcement.jpg"
          alt="TUPS Programmed Results Grading System"
          loading="lazy"
          decoding="async"
        >
      </div>

      <div class="tups-module-content">

        <h3>
          School Announcements
        </h3>

        <p>
         All School announcements displays on the parent/students 
		 portal for parents to be always updated.
        </p>

      </div>

    </article>


    <!-- CBT SOFTWARE -->
    <article class="tups-module-card">

      <div class="tups-module-image">
        <img
          src="images/tups-cbt-software.jpg"
          alt="TUPS CBT Software"
          loading="lazy"
          decoding="async"
        >
      </div>

      <div class="tups-module-content">

        <h3>
          CBT Software
        </h3>

        <p>
          Deliver computer-based examinations through
          a dedicated and structured CBT environment
          designed for modern schools.
        </p>

      </div>

    </article>


  </div>

</div>


<!-- TESTIMONIAL -->
	  

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

            "TUPS has helped
	  us embrace
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


          <!-- 1. SCHOOL LOGIN DASHBOARD -->

          <article class="tups-app-card">

            <div class="tups-app-image">

              <img
                src="images/Login.jpg"
                alt="TUPS School Login Dashboard"
                loading="lazy"
                decoding="async"
              >

            </div>

            <div class="tups-app-info">

              <h3>
                School Login Dashboard
              </h3>

              <p>
                A central dashboard that gives schools and Parents
                access to the secured TUPS login Portal.
              </p>

            </div>

          </article>

          <!-- 2. SCHOOL MANAGEMENT DASHBOARD-->

          <article class="tups-app-card">

            <div class="tups-app-image">

              <img
                src="images/Dashboard.jpg"
                alt="TUPS School Management Dashboard"
                loading="lazy"
                decoding="async"
              >

            </div>

            <div class="tups-app-info">

              <h3>
                School Management Dashboard
              </h3>

              <p>
                A seperated and organized Dashboard that isolates Teacher's Portal from Admin's Portal with well loaded require features.
              </p>

            </div>

          </article>


 <!-- 3. STUDENT DASHBOARD -->

          <article class="tups-app-card">

            <div class="tups-app-image">

              <img
                src="images/students_portal.JPG"
                alt="TUPS Student Dashboard"
                loading="lazy"
                decoding="async"
              >

            </div>

            <div class="tups-app-info">

              <h3>
                Student Dashboard
              </h3>

              <p>
                Organise student records and essential
                academic information in a structured
                and easily accessible environmen for parents
				to view their wards information and see school 
				activities such as school calendar, Announcements,
				 Addverts, communication book, etc.
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
                src="images/announcements.jpg"
                alt="TUPS School Announcements and Advertising"
                loading="lazy"
                decoding="async"
              >

            </div>

            <div class="tups-app-info">

              <h3>
                Announcements & Parent-Teacher-Admin Communication
              </h3>

              <p>
                Publish important school announcements,
                notices, information, and a 3-way communication betwen Teacher, Parentand School Admin.
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

  initializeHomePromoSlider();

  initializePartnerSchoolsCarousel();

  initializeHeroButtons();

  initializeFAQ();

  initializeApplicationButtons();

}



/* =========================================================
   HOME PROMO SLIDER
========================================================= */

let homePromoInterval;


function initializeHomePromoSlider() {

  clearInterval(homePromoInterval);


  const slides =
    document.querySelectorAll(
      ".home-promo-slide"
    );


  const dots =
    document.querySelectorAll(
      ".home-promo-dot"
    );


  if (!slides.length) return;


  let currentSlide = 0;


  function showPromoSlide(index) {

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

          showPromoSlide(index);

        }
      );

    }
  );


  homePromoInterval =
    setInterval(
      () => {

        currentSlide =
          (currentSlide + 1) %
          slides.length;

        showPromoSlide(currentSlide);

      },
      5000
    );

}

/* =========================================================
   PARTNER SCHOOLS CAROUSEL
========================================================= */

let partnerCarouselInterval;


function initializePartnerSchoolsCarousel() {

  clearInterval(partnerCarouselInterval);


  const track =
    document.getElementById(
      "partner-carousel-track"
    );


  const viewport =
    document.querySelector(
      ".partner-carousel-viewport"
    );


  const cards =
    document.querySelectorAll(
      ".partner-school-card"
    );


  const prevButton =
    document.querySelector(
      ".partner-carousel-prev"
    );


  const nextButton =
    document.querySelector(
      ".partner-carousel-next"
    );


  const dots =
    document.querySelectorAll(
      ".partner-carousel-dot"
    );


  if (
    !track ||
    !viewport ||
    !cards.length
  ) {

    return;

  }


  let currentSlide = 0;

  let cardsPerView = 2;

  let autoSlidePaused = false;


  function updateCardsPerView() {

    cardsPerView =
      window.innerWidth <= 600
        ? 1
        : 2;

  }


  function showPartnerSlide(index) {

    updateCardsPerView();


    const maxSlide =
      Math.max(
        0,
        cards.length -
        cardsPerView
      );


    currentSlide =
      Math.max(
        0,
        Math.min(index, maxSlide)
      );


    const cardWidth =
      cards[0].getBoundingClientRect().width;


    const gap =
      parseFloat(
        getComputedStyle(track).gap
      ) || 0;


    const offset =
      currentSlide *
      (cardWidth + gap);


    track.style.transform =
      `translate3d(-${offset}px, 0, 0)`;


    dots.forEach(
      dot => {

        dot.classList.remove(
          "active"
        );

      }
    );


    const dotIndex =
      Math.min(
        currentSlide,
        dots.length - 1
      );


    if (dots[dotIndex]) {

      dots[dotIndex].classList.add(
        "active"
      );

    }

  }


  function nextPartnerSlide() {

    updateCardsPerView();


    const maxSlide =
      Math.max(
        0,
        cards.length -
        cardsPerView
      );


    if (
      currentSlide >= maxSlide
    ) {

      showPartnerSlide(0);

    } else {

      showPartnerSlide(
        currentSlide + 1
      );

    }

  }


  function startAutoSlide() {

    clearInterval(
      partnerCarouselInterval
    );


    partnerCarouselInterval =
      setInterval(
        () => {

          if (!autoSlidePaused) {

            nextPartnerSlide();

          }

        },
        5000
      );

  }


  if (prevButton) {

    prevButton.addEventListener(
      "click",
      () => {

        showPartnerSlide(
          currentSlide - 1 < 0
            ? cards.length - cardsPerView
            : currentSlide - 1
        );

        startAutoSlide();

      }
    );

  }


  if (nextButton) {

    nextButton.addEventListener(
      "click",
      () => {

        nextPartnerSlide();

        startAutoSlide();

      }
    );

  }


  dots.forEach(
    (dot, index) => {

      dot.addEventListener(
        "click",
        () => {

          showPartnerSlide(index);

          startAutoSlide();

        }
      );

    }
  );


  const carousel =
    document.querySelector(
      ".partner-carousel-section"
    );


  if (carousel) {

    carousel.addEventListener(
      "mouseenter",
      () => {

        autoSlidePaused = true;

      }
    );


    carousel.addEventListener(
      "mouseleave",
      () => {

        autoSlidePaused = false;

      }
    );

  }


  /* =======================================================
     TOUCH / SWIPE SUPPORT
  ======================================================== */

  let touchStartX = 0;

  let touchEndX = 0;


  viewport.addEventListener(
    "touchstart",
    event => {

      touchStartX =
        event.changedTouches[0].screenX;

    },
    { passive: true }
  );


  viewport.addEventListener(
    "touchend",
    event => {

      touchEndX =
        event.changedTouches[0].screenX;


      const swipeDistance =
        touchStartX - touchEndX;


      if (
        Math.abs(swipeDistance) < 45
      ) {

        return;

      }


      if (swipeDistance > 0) {

        nextPartnerSlide();

      } else {

        showPartnerSlide(
          currentSlide - 1 < 0
            ? cards.length - cardsPerView
            : currentSlide - 1
        );

      }


      startAutoSlide();

    },
    { passive: true }
  );


  window.addEventListener(
    "resize",
    () => {

      showPartnerSlide(
        currentSlide
      );

    }
  );


  updateCardsPerView();

  showPartnerSlide(0);

  startAutoSlide();

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