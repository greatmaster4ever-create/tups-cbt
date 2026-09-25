
/* =========================================================
   TUPS TIMETABLE GENERATOR
   PHASE 2B — TIMETABLE SETUP
   ---------------------------------------------------------
   Performance rule:
   This file contains only the timetable setup interface.

   Scheduling engine will be added later and loaded only
   when the user actually starts timetable generation.

   Current setup stages:

   1. School Setup
   2. Classes
   3. Teachers

   Future stages:

   4. Subjects
   5. Teacher Assignments
   6. Period Structure
   7. Subject Requirements
   8. Review / Generate
========================================================= */


export function loadTimetableGenerator() {

  const contentArea =
    document.getElementById("content-area");


  if (!contentArea) {

    console.error(
      "TUPS Timetable: content-area was not found."
    );

    return;

  }


  contentArea.innerHTML = `

    <section class="content-page timetable-page">


      <!-- =====================================================
           PAGE HEADER
      ====================================================== -->

      <div class="timetable-page-header">

        <div class="timetable-page-icon">

          <i class="fa-solid fa-calendar-days"></i>

        </div>


        <div>

          <h2>
            Timetable Generator
          </h2>

          <p>
            Create a structured school timetable
            with classes, teachers, subjects and
            periods.
          </p>

        </div>

      </div>



      <div class="timetable-shell">


        <!-- ===================================================
             STEP 1 — SCHOOL SETUP
        ==================================================== -->

        <section
          class="timetable-step active"
          id="timetable-school-step"
        >

          <div class="timetable-step-heading">

            <span class="timetable-step-number">
              1
            </span>


            <div>

              <h3>
                School Setup
              </h3>

              <p>
                Start with the basic information
                for your timetable.
              </p>

            </div>

          </div>



          <div class="timetable-form-grid">


            <label class="timetable-field">

              <span>
                School Name
              </span>


              <input
                type="text"
                id="timetable-school-name"
                placeholder="Enter school name"
                autocomplete="organization"
              >

            </label>



            <label class="timetable-field">

              <span>
                Timetable Title
              </span>


              <input
                type="text"
                id="timetable-title"
                placeholder="e.g. First Term Timetable"
              >

            </label>



            <label class="timetable-field">

              <span>
                Number of School Days
              </span>


              <select id="timetable-school-days">

                <option value="5">
                  5 Days — Monday to Friday
                </option>

                <option value="4">
                  4 Days
                </option>

                <option value="6">
                  6 Days
                </option>

              </select>

            </label>


          </div>



          <div class="timetable-actions">

            <button
              type="button"
              class="timetable-primary-button"
              id="timetable-start-button"
            >

              Continue

              <i class="fa-solid fa-arrow-right"></i>

            </button>

          </div>

        </section>



        <!-- ===================================================
             STEP 2 — CLASSES
        ==================================================== -->

        <section
          class="timetable-step"
          id="timetable-classes-step"
          hidden
        >

          <div class="timetable-step-heading">

            <span class="timetable-step-number">
              2
            </span>


            <div>

              <h3>
                Classes
              </h3>

              <p>
                Add the classes that will appear
                on the timetable.
              </p>

            </div>

          </div>



          <div class="timetable-form-grid">


            <label class="timetable-field">

              <span>
                Class Name
              </span>


              <input
                type="text"
                id="timetable-class-name"
                placeholder="e.g. JSS 1"
                autocomplete="off"
              >

            </label>



            <label class="timetable-field">

              <span>
                Level / Section
              </span>


              <select id="timetable-class-section">

                <option value="Creche">
                  Creche
                </option>

                <option value="Nursery">
                  Nursery
                </option>

                <option value="Primary">
                  Primary
                </option>

                <option value="Secondary">
                  Secondary
                </option>

                <option value="Other">
                  Other
                </option>

              </select>

            </label>


          </div>



          <div class="timetable-actions">

            <button
              type="button"
              class="timetable-primary-button"
              id="timetable-add-class-button"
            >

              <i class="fa-solid fa-plus"></i>

              Add Class

            </button>

          </div>



          <div
            class="timetable-class-list"
            id="timetable-class-list"
            aria-live="polite"
          >

            <div class="timetable-empty-state">

              <i class="fa-solid fa-school"></i>

              <p>
                No classes added yet.
              </p>

            </div>

          </div>



          <div class="timetable-actions">


            <button
              type="button"
              class="timetable-secondary-button"
              id="timetable-back-school-button"
            >

              <i class="fa-solid fa-arrow-left"></i>

              Back

            </button>



            <button
              type="button"
              class="timetable-primary-button"
              id="timetable-continue-classes-button"
              disabled
            >

              Continue

              <i class="fa-solid fa-arrow-right"></i>

            </button>


          </div>

        </section>



        <!-- ===================================================
             STEP 3 — TEACHERS
        ==================================================== -->

        <section
          class="timetable-step"
          id="timetable-teachers-step"
          hidden
        >

          <div class="timetable-step-heading">

            <span class="timetable-step-number">
              3
            </span>


            <div>

              <h3>
                Teachers
              </h3>

              <p>
                Add the teachers who will be assigned
                to subjects and classes.
              </p>

            </div>

          </div>



          <div class="timetable-form-grid">


            <label class="timetable-field">

              <span>
                Teacher Name
              </span>


              <input
                type="text"
                id="timetable-teacher-name"
                placeholder="e.g. Mr John Smith"
                autocomplete="name"
              >

            </label>


          </div>



          <div class="timetable-actions">

            <button
              type="button"
              class="timetable-primary-button"
              id="timetable-add-teacher-button"
            >

              <i class="fa-solid fa-plus"></i>

              Add Teacher

            </button>

          </div>



          <div
            class="timetable-teacher-list"
            id="timetable-teacher-list"
            aria-live="polite"
          >

            <div class="timetable-empty-state">

              <i class="fa-solid fa-chalkboard-user"></i>

              <p>
                No teachers added yet.
              </p>

            </div>

          </div>



          <div class="timetable-actions">


            <button
              type="button"
              class="timetable-secondary-button"
              id="timetable-back-classes-button"
            >

              <i class="fa-solid fa-arrow-left"></i>

              Back

            </button>



            <button
              type="button"
              class="timetable-primary-button"
              id="timetable-continue-teachers-button"
              disabled
            >

              Continue

              <i class="fa-solid fa-arrow-right"></i>

            </button>


          </div>

        </section>


      </div>

    </section>

  `;


  initializeTimetableShell();

}



/* =========================================================
   INITIAL TIMETABLE SETUP
========================================================= */

function initializeTimetableShell() {


  /* =======================================================
     STEP ELEMENTS
  ====================================================== */

  const schoolSetup =
    document.getElementById(
      "timetable-school-step"
    );


  const classesStep =
    document.getElementById(
      "timetable-classes-step"
    );


  const teachersStep =
    document.getElementById(
      "timetable-teachers-step"
    );



  /* =======================================================
     SCHOOL SETUP ELEMENTS
  ====================================================== */

  const startButton =
    document.getElementById(
      "timetable-start-button"
    );



  /* =======================================================
     CLASS ELEMENTS
  ====================================================== */

  const addClassButton =
    document.getElementById(
      "timetable-add-class-button"
    );


  const backSchoolButton =
    document.getElementById(
      "timetable-back-school-button"
    );


  const continueClassesButton =
    document.getElementById(
      "timetable-continue-classes-button"
    );


  const classNameInput =
    document.getElementById(
      "timetable-class-name"
    );


  const classSectionSelect =
    document.getElementById(
      "timetable-class-section"
    );


  const classList =
    document.getElementById(
      "timetable-class-list"
    );



  /* =======================================================
     TEACHER ELEMENTS
  ====================================================== */

  const addTeacherButton =
    document.getElementById(
      "timetable-add-teacher-button"
    );


  const backClassesButton =
    document.getElementById(
      "timetable-back-classes-button"
    );


  const continueTeachersButton =
    document.getElementById(
      "timetable-continue-teachers-button"
    );


  const teacherNameInput =
    document.getElementById(
      "timetable-teacher-name"
    );


  const teacherList =
    document.getElementById(
      "timetable-teacher-list"
    );



  /* =======================================================
     BASIC SAFETY CHECK
  ====================================================== */

  if (
    !schoolSetup ||
    !classesStep ||
    !teachersStep ||
    !startButton
  ) {

    console.error(
      "TUPS Timetable: Required setup elements were not found."
    );

    return;

  }



  /* =========================================================
     TIMETABLE STATE

     This object holds the information collected during
     setup. It remains in memory while the generator is open.

     Later, this same structure can be passed to the
     scheduling engine.
  ========================================================= */

  const timetableState = {

    school: {

      name: "",

      title: "",

      days: 5

    },


    classes: [],


    teachers: []

  };



  /* =========================================================
     STEP 1
     SCHOOL SETUP → CLASSES
  ========================================================= */

  startButton.addEventListener(
    "click",
    function () {


      const schoolName =
        document.getElementById(
          "timetable-school-name"
        )?.value.trim();


      const timetableTitle =
        document.getElementById(
          "timetable-title"
        )?.value.trim();


      const schoolDays =
        Number(
          document.getElementById(
            "timetable-school-days"
          )?.value || 5
        );



      /* -----------------------------------------------------
         SCHOOL NAME IS REQUIRED
      ----------------------------------------------------- */

      if (!schoolName) {

        document
          .getElementById(
            "timetable-school-name"
          )
          ?.focus();

        return;

      }



      /* -----------------------------------------------------
         SAVE SCHOOL INFORMATION
      ----------------------------------------------------- */

      timetableState.school.name =
        schoolName;


      timetableState.school.title =
        timetableTitle ||
        "School Timetable";


      timetableState.school.days =
        schoolDays;



      /* -----------------------------------------------------
         MOVE TO CLASSES
      ----------------------------------------------------- */

      schoolSetup.hidden =
        true;


      schoolSetup.classList.remove(
        "active"
      );


      classesStep.hidden =
        false;


      classesStep.classList.add(
        "active"
      );


      classNameInput?.focus();



      console.log(
        "TUPS Timetable: School setup saved.",
        timetableState.school
      );

    }
  );



  /* =========================================================
     STEP 2
     ADD CLASS
  ========================================================= */

  addClassButton?.addEventListener(
    "click",
    function () {


      const className =
        classNameInput
          ?.value
          .trim();


      const section =
        classSectionSelect
          ?.value ||
        "Other";



      /* -----------------------------------------------------
         CLASS NAME IS REQUIRED
      ----------------------------------------------------- */

      if (!className) {

        classNameInput?.focus();

        return;

      }



      /* -----------------------------------------------------
         PREVENT DUPLICATE CLASS NAMES
      ----------------------------------------------------- */

      const duplicate =
        timetableState.classes.some(
          function (item) {

            return (
              item.name.toLowerCase() ===
              className.toLowerCase()
            );

          }
        );


      if (duplicate) {

        classNameInput.focus();

        return;

      }



      /* -----------------------------------------------------
         CREATE CLASS RECORD
      ----------------------------------------------------- */

      const newClass = {

        id:
          "class_" +
          Date.now(),

        name:
          className,

        section:
          section

      };



      timetableState.classes.push(
        newClass
      );



      /* -----------------------------------------------------
         CLEAR INPUT
      ----------------------------------------------------- */

      classNameInput.value =
        "";



      renderClasses();


      classNameInput.focus();



      console.log(
        "TUPS Timetable: Class added.",
        newClass
      );

    }
  );



  /* =========================================================
     RENDER CLASSES
  ========================================================= */

  function renderClasses() {


    if (!classList) {
      return;
    }



    /* -----------------------------------------------------
       EMPTY STATE
    ----------------------------------------------------- */

    if (
      timetableState.classes.length ===
      0
    ) {

      classList.innerHTML = `

        <div class="timetable-empty-state">

          <i class="fa-solid fa-school"></i>

          <p>
            No classes added yet.
          </p>

        </div>

      `;


      if (continueClassesButton) {

        continueClassesButton.disabled =
          true;

      }


      return;

    }



    /* -----------------------------------------------------
       CLASS LIST
    ----------------------------------------------------- */

    classList.innerHTML =
      timetableState.classes
        .map(
          function (item) {

            return `

              <div
                class="timetable-class-item"
                data-class-id="${item.id}"
              >

                <div>

                  <strong>
                    ${escapeTimetableText(
                      item.name
                    )}
                  </strong>

                  <span>
                    ${escapeTimetableText(
                      item.section
                    )}
                  </span>

                </div>


                <button
                  type="button"
                  class="timetable-remove-class"
                  data-class-id="${item.id}"
                  aria-label="Remove ${escapeTimetableText(
                    item.name
                  )}"
                >

                  <i class="fa-solid fa-xmark"></i>

                </button>

              </div>

            `;

          }
        )
        .join("");



    if (continueClassesButton) {

      continueClassesButton.disabled =
        false;

    }

  }



  /* =========================================================
     REMOVE CLASS
  ========================================================= */

  classList?.addEventListener(
    "click",
    function (event) {


      const removeButton =
        event.target.closest(
          ".timetable-remove-class"
        );


      if (!removeButton) {
        return;
      }



      const classId =
        removeButton.dataset.classId;



      timetableState.classes =
        timetableState.classes.filter(
          function (item) {

            return (
              item.id !==
              classId
            );

          }
        );



      renderClasses();

    }
  );



  /* =========================================================
     CLASSES → SCHOOL SETUP
  ========================================================= */

  backSchoolButton?.addEventListener(
    "click",
    function () {


      classesStep.hidden =
        true;


      classesStep.classList.remove(
        "active"
      );


      schoolSetup.hidden =
        false;


      schoolSetup.classList.add(
        "active"
      );


      document
        .getElementById(
          "timetable-school-name"
        )
        ?.focus();

    }
  );



  /* =========================================================
     CLASSES → TEACHERS
  ========================================================= */

  continueClassesButton?.addEventListener(
    "click",
    function () {


      if (
        timetableState.classes.length ===
        0
      ) {

        return;

      }



      classesStep.hidden =
        true;


      classesStep.classList.remove(
        "active"
      );


      teachersStep.hidden =
        false;


      teachersStep.classList.add(
        "active"
      );


      teacherNameInput?.focus();



      console.log(
        "TUPS Timetable: Classes setup accepted.",
        timetableState.classes
      );

    }
  );



  /* =========================================================
     STEP 3
     ADD TEACHER
  ========================================================= */

  addTeacherButton?.addEventListener(
    "click",
    function () {


      const teacherName =
        teacherNameInput
          ?.value
          .trim();



      /* -----------------------------------------------------
         TEACHER NAME IS REQUIRED
      ----------------------------------------------------- */

      if (!teacherName) {

        teacherNameInput?.focus();

        return;

      }



      /* -----------------------------------------------------
         PREVENT DUPLICATE TEACHER NAMES
      ----------------------------------------------------- */

      const duplicate =
        timetableState.teachers.some(
          function (teacher) {

            return (
              teacher.name.toLowerCase() ===
              teacherName.toLowerCase()
            );

          }
        );


      if (duplicate) {

        teacherNameInput.focus();

        return;

      }



      /* -----------------------------------------------------
         CREATE TEACHER RECORD

         Availability is prepared now but will be
         configured properly in the later availability
         stage after the period structure is known.
      ----------------------------------------------------- */

      const newTeacher = {

        id:
          "teacher_" +
          Date.now(),

        name:
          teacherName,

        availability: {

          days: [],

          periods: []

        }

      };



      timetableState.teachers.push(
        newTeacher
      );



      /* -----------------------------------------------------
         CLEAR INPUT
      ----------------------------------------------------- */

      teacherNameInput.value =
        "";



      renderTeachers();


      teacherNameInput.focus();



      console.log(
        "TUPS Timetable: Teacher added.",
        newTeacher
      );

    }
  );



  /* =========================================================
     RENDER TEACHERS
  ========================================================= */

  function renderTeachers() {


    if (!teacherList) {
      return;
    }



    /* -----------------------------------------------------
       EMPTY STATE
    ----------------------------------------------------- */

    if (
      timetableState.teachers.length ===
      0
    ) {

      teacherList.innerHTML = `

        <div class="timetable-empty-state">

          <i class="fa-solid fa-chalkboard-user"></i>

          <p>
            No teachers added yet.
          </p>

        </div>

      `;


      if (continueTeachersButton) {

        continueTeachersButton.disabled =
          true;

      }


      return;

    }



    /* -----------------------------------------------------
       TEACHER LIST
    ----------------------------------------------------- */

    teacherList.innerHTML =
      timetableState.teachers
        .map(
          function (teacher) {

            return `

              <div
                class="timetable-teacher-item"
                data-teacher-id="${teacher.id}"
              >

                <div>

                  <strong>
                    ${escapeTimetableText(
                      teacher.name
                    )}
                  </strong>

                  <span>
                    Availability will be configured later
                  </span>

                </div>


                <button
                  type="button"
                  class="timetable-remove-teacher"
                  data-teacher-id="${teacher.id}"
                  aria-label="Remove ${escapeTimetableText(
                    teacher.name
                  )}"
                >

                  <i class="fa-solid fa-xmark"></i>

                </button>

              </div>

            `;

          }
        )
        .join("");



    if (continueTeachersButton) {

      continueTeachersButton.disabled =
        false;

    }

  }



  /* =========================================================
     REMOVE TEACHER
  ========================================================= */

  teacherList?.addEventListener(
    "click",
    function (event) {


      const removeButton =
        event.target.closest(
          ".timetable-remove-teacher"
        );


      if (!removeButton) {
        return;
      }



      const teacherId =
        removeButton.dataset.teacherId;



      timetableState.teachers =
        timetableState.teachers.filter(
          function (teacher) {

            return (
              teacher.id !==
              teacherId
            );

          }
        );



      renderTeachers();

    }
  );



  /* =========================================================
     TEACHERS → CLASSES
  ========================================================= */

  backClassesButton?.addEventListener(
    "click",
    function () {


      teachersStep.hidden =
        true;


      teachersStep.classList.remove(
        "active"
      );


      classesStep.hidden =
        false;


      classesStep.classList.add(
        "active"
      );


      classNameInput?.focus();

    }
  );



  /* =========================================================
     TEACHERS → NEXT STAGE

     Phase 2C will connect this button to Subjects.
  ========================================================= */

  continueTeachersButton?.addEventListener(
    "click",
    function () {


      if (
        timetableState.teachers.length ===
        0
      ) {

        return;

      }



      console.log(
        "TUPS Timetable: Teachers setup accepted.",
        timetableState.teachers
      );

    }
  );

}



/* =========================================================
   BASIC HTML SAFETY
   ---------------------------------------------------------
   User-entered names are escaped before being inserted
   into dynamically generated HTML.
========================================================= */

function escapeTimetableText(value) {

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

