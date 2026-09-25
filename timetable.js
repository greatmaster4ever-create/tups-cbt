/* =========================================================
   TUPS TIMETABLE GENERATOR
   PHASE 1 — LIGHTWEIGHT MODULE SHELL
   ---------------------------------------------------------
   Performance rule:
   This file contains only the timetable interface shell.

   Scheduling engine will be added later and loaded only
   when the user actually starts timetable generation.
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


        <!-- STEP 1 -->

        <section class="timetable-step active">

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


        <!-- FUTURE STEPS -->

               <!-- STEP 2 -->

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


      </div>

    </section>

  `;


  initializeTimetableShell();

}


/* =========================================================
   INITIAL SHELL
========================================================= */

/* =========================================================
   INITIAL SHELL
========================================================= */

function initializeTimetableShell() {

  const startButton =
    document.getElementById(
      "timetable-start-button"
    );


  const schoolSetup =
    document.querySelector(
      ".timetable-step.active"
    );


  const classesStep =
    document.getElementById(
      "timetable-classes-step"
    );


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


  if (
    !startButton ||
    !schoolSetup ||
    !classesStep
  ) {
    return;
  }


  /* ---------------------------------------------------------
     TIMETABLE STATE
  --------------------------------------------------------- */

  const timetableState = {

    school: {
      name: "",
      title: "",
      days: 5
    },

    classes: []

  };


  /* ---------------------------------------------------------
     SCHOOL SETUP → CLASSES
  --------------------------------------------------------- */

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


      if (!schoolName) {

        document
          .getElementById(
            "timetable-school-name"
          )
          ?.focus();

        return;
      }


      timetableState.school.name =
        schoolName;


      timetableState.school.title =
        timetableTitle ||
        "School Timetable";


      timetableState.school.days =
        schoolDays;


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


  /* ---------------------------------------------------------
     ADD CLASS
  --------------------------------------------------------- */

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


      if (!className) {

        classNameInput?.focus();

        return;
      }


      /* Prevent duplicate class names */

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


  /* ---------------------------------------------------------
     RENDER CLASSES
  --------------------------------------------------------- */

  function renderClasses() {

    if (!classList) {
      return;
    }


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


  /* ---------------------------------------------------------
     REMOVE CLASS
  --------------------------------------------------------- */

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

            return item.id !== classId;

          }
        );


      renderClasses();

    }
  );


  /* ---------------------------------------------------------
     BACK TO SCHOOL SETUP
  --------------------------------------------------------- */

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

    }
  );


  /* ---------------------------------------------------------
     CONTINUE FROM CLASSES
     
     Phase 2B will connect this button
     to the Teachers step.
  --------------------------------------------------------- */

  continueClassesButton?.addEventListener(
    "click",
    function () {

      if (
        timetableState.classes.length ===
        0
      ) {
        return;
      }


      console.log(
        "TUPS Timetable: Classes setup accepted.",
        timetableState.classes
      );

    }
  );

}


/* =========================================================
   BASIC HTML SAFETY
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