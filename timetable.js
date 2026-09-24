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

        <section
          class="timetable-coming-soon"
          aria-live="polite"
        >

          <i class="fa-solid fa-layer-group"></i>

          <div>

            <strong>
              Timetable setup will continue here
            </strong>

            <p>
              Classes, teachers, subjects, teacher
              assignments, periods, breaks and subject
              requirements will be added progressively.
            </p>

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

function initializeTimetableShell() {

  const startButton =
    document.getElementById(
      "timetable-start-button"
    );


  if (!startButton) {
    return;
  }


  startButton.addEventListener(
    "click",
    function () {

      const schoolName =
        document.getElementById(
          "timetable-school-name"
        )?.value.trim();


      if (!schoolName) {

        const field =
          document.getElementById(
            "timetable-school-name"
          );

        field?.focus();

        return;
      }


      console.log(
        "TUPS Timetable: Phase 1 setup accepted."
      );

    }
  );

}
