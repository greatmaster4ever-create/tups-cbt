/* =========================================================
   TUPS TIMETABLE GENERATOR
   PHASE 2E — PERIOD STRUCTURE
========================================================= */


/* =========================================================
   PUBLIC LOADER
========================================================= */

export function loadTimetableGenerator() {

  const contentArea =
    document.querySelector(".content-area");

  if (!contentArea) {

    console.warn(
      "TUPS Timetable: .content-area not found."
    );

    return;

  }

  contentArea.innerHTML = "";

  initializeTimetableShell(
    contentArea
  );

}


/* =========================================================
   TIMETABLE STATE
========================================================= */

const timetableState = {

  school: {

    name: "",
    title: "",
    days: 5

  },

  classes: [],

  teachers: [],

  subjects: [],

  assignments: [],

  periodStructure: {

    activeDays: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],

    entries: []

  }

};


/* =========================================================
   CONSTANTS
========================================================= */

const SCHOOL_DAYS = [

  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"

];


const PERIOD_TYPES = [

  {
    value: "teaching",
    label: "Teaching"
  },

  {
    value: "break",
    label: "Break"
  },

  {
    value: "lunch",
    label: "Lunch"
  },

  {
    value: "assembly",
    label: "Assembly"
  },

  {
    value: "other",
    label: "Other"

  }

];


/* =========================================================
   INITIAL SHELL
========================================================= */

function initializeTimetableShell(
  contentArea
) {

  contentArea.innerHTML = `

    <section
      class="content-page timetable-page"
    >

      <div class="timetable-header">

        <div>

          <h2>
            Timetable Generator
          </h2>

          <p>
            Create a structured school timetable
            with classes, teachers, subjects
            and periods.
          </p>

        </div>

      </div>


      <div
        class="timetable-steps"
        aria-label="Timetable setup progress"
      >

        <div
          class="timetable-step active"
          data-step="1"
        >
          <span>1</span>
          <small>School</small>
        </div>

        <div
          class="timetable-step"
          data-step="2"
        >
          <span>2</span>
          <small>Classes</small>
        </div>

        <div
          class="timetable-step"
          data-step="3"
        >
          <span>3</span>
          <small>Teachers</small>
        </div>

        <div
          class="timetable-step"
          data-step="4"
        >
          <span>4</span>
          <small>Subjects</small>
        </div>

        <div
          class="timetable-step"
          data-step="5"
        >
          <span>5</span>
          <small>Assignments</small>
        </div>

        <div
          class="timetable-step"
          data-step="6"
        >
          <span>6</span>
          <small>Periods</small>
        </div>

        <div
          class="timetable-step"
          data-step="7"
        >
          <span>7</span>
          <small>Requirements</small>
        </div>

        <div
          class="timetable-step"
          data-step="8"
        >
          <span>8</span>
          <small>Generate</small>
        </div>

      </div>


      <div
        class="timetable-workspace"
      >

        <!-- =========================================
             STEP 1 — SCHOOL SETUP
        ========================================== -->

        <div
          class="timetable-panel active"
          data-panel="school"
        >

          <div class="timetable-panel-heading">

            <span class="timetable-panel-icon">
              <i class="fa-solid fa-school"></i>
            </span>

            <div>

              <h3>
                School Setup
              </h3>

              <p>
                Start by entering the basic
                information for the timetable.
              </p>

            </div>

          </div>


          <form
            id="timetable-school-form"
            class="timetable-form"
          >

            <div
              class="timetable-form-group"
            >

              <label
                for="timetable-school-name"
              >
                School Name
              </label>

              <input
                type="text"
                id="timetable-school-name"
                placeholder="Enter school name"
                required
              >

            </div>


            <div
              class="timetable-form-group"
            >

              <label
                for="timetable-school-title"
              >
                Timetable Title
              </label>

              <input
                type="text"
                id="timetable-school-title"
                placeholder="e.g. 2026/2027 First Term Timetable"
                required
              >

            </div>


            <div
              class="timetable-form-group"
            >

              <label
                for="timetable-school-days"
              >
                School Days Per Week
              </label>

              <select
                id="timetable-school-days"
              >

                <option value="4">
                  4 Days
                </option>

                <option value="5" selected>
                  5 Days
                </option>

                <option value="6">
                  6 Days
                </option>

              </select>

            </div>


            <div class="timetable-actions">

              <button
                type="submit"
                class="timetable-primary-button"
              >
                Continue
                <i class="fa-solid fa-arrow-right"></i>
              </button>

            </div>

          </form>

        </div>


        <!-- =========================================
             STEP 2 — CLASSES
        ========================================== -->

        <div
          class="timetable-panel"
          data-panel="classes"
          hidden
        >

          <div class="timetable-panel-heading">

            <span class="timetable-panel-icon">
              <i class="fa-solid fa-people-group"></i>
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


          <form
            id="timetable-class-form"
            class="timetable-inline-form"
          >

            <div
              class="timetable-form-group"
            >

              <label
                for="timetable-class-name"
              >
                Class Name
              </label>

              <input
                type="text"
                id="timetable-class-name"
                placeholder="e.g. JSS 1"
                required
              >

            </div>


            <button
              type="submit"
              class="timetable-secondary-button"
            >
              <i class="fa-solid fa-plus"></i>
              Add Class
            </button>

          </form>


          <div
            id="timetable-class-list"
            class="timetable-list"
          ></div>


          <div class="timetable-actions">

            <button
              type="button"
              id="timetable-classes-back"
              class="timetable-light-button"
            >
              <i class="fa-solid fa-arrow-left"></i>
              Back
            </button>

            <button
              type="button"
              id="timetable-classes-continue"
              class="timetable-primary-button"
            >
              Continue
              <i class="fa-solid fa-arrow-right"></i>
            </button>

          </div>

        </div>


        <!-- =========================================
             STEP 3 — TEACHERS
        ========================================== -->

        <div
          class="timetable-panel"
          data-panel="teachers"
          hidden
        >

          <div class="timetable-panel-heading">

            <span class="timetable-panel-icon">
              <i class="fa-solid fa-chalkboard-user"></i>
            </span>

            <div>

              <h3>
                Teachers
              </h3>

              <p>
                Add teachers who will be assigned
                to subjects and classes.
              </p>

            </div>

          </div>


          <form
            id="timetable-teacher-form"
            class="timetable-inline-form"
          >

            <div
              class="timetable-form-group"
            >

              <label
                for="timetable-teacher-name"
              >
                Teacher Name
              </label>

              <input
                type="text"
                id="timetable-teacher-name"
                placeholder="e.g. Mr John"
                required
              >

            </div>


            <button
              type="submit"
              class="timetable-secondary-button"
            >
              <i class="fa-solid fa-plus"></i>
              Add Teacher
            </button>

          </form>


          <div
            id="timetable-teacher-list"
            class="timetable-list"
          ></div>


          <div class="timetable-actions">

            <button
              type="button"
              id="timetable-teachers-back"
              class="timetable-light-button"
            >
              <i class="fa-solid fa-arrow-left"></i>
              Back
            </button>

            <button
              type="button"
              id="timetable-teachers-continue"
              class="timetable-primary-button"
            >
              Continue
              <i class="fa-solid fa-arrow-right"></i>
            </button>

          </div>

        </div>


        <!-- =========================================
             STEP 4 — SUBJECTS
        ========================================== -->

        <div
          class="timetable-panel"
          data-panel="subjects"
          hidden
        >

          <div class="timetable-panel-heading">

            <span class="timetable-panel-icon">
              <i class="fa-solid fa-book"></i>
            </span>

            <div>

              <h3>
                Subjects
              </h3>

              <p>
                Add subjects, subject codes and
                subject categories.
              </p>

            </div>

          </div>


          <form
            id="timetable-subject-form"
            class="timetable-subject-form"
          >

            <div
              class="timetable-form-group"
            >

              <label
                for="timetable-subject-name"
              >
                Subject Name
              </label>

              <input
                type="text"
                id="timetable-subject-name"
                placeholder="e.g. Mathematics"
                required
              >

            </div>


            <div
              class="timetable-form-group"
            >

              <label
                for="timetable-subject-code"
              >
                Subject Code
              </label>

              <input
                type="text"
                id="timetable-subject-code"
                placeholder="e.g. MTH"
                required
              >

            </div>


            <div
              class="timetable-form-group"
            >

              <label
                for="timetable-subject-category"
              >
                Subject Category
              </label>

              <select
                id="timetable-subject-category"
                required
              >

                <option value="">
                  Select category
                </option>

                <option value="core">
                  Core
                </option>

                <option value="science">
                  Science
                </option>

                <option value="arts">
                  Arts
                </option>

                <option value="commercial">
                  Commercial
                </option>

                <option value="vocational">
                  Vocational
                </option>

                <option value="language">
                  Language
                </option>

                <option value="technology">
                  Technology
                </option>

                <option value="religious">
                  Religious Studies
                </option>

                <option value="other">
                  Other
                </option>

              </select>

            </div>


            <button
              type="submit"
              class="timetable-secondary-button"
            >
              <i class="fa-solid fa-plus"></i>
              Add Subject
            </button>

          </form>


          <div
            id="timetable-subject-list"
            class="timetable-list"
          ></div>


          <div class="timetable-actions">

            <button
              type="button"
              id="timetable-subjects-back"
              class="timetable-light-button"
            >
              <i class="fa-solid fa-arrow-left"></i>
              Back
            </button>

            <button
              type="button"
              id="timetable-subjects-continue"
              class="timetable-primary-button"
            >
              Continue
              <i class="fa-solid fa-arrow-right"></i>
            </button>

          </div>

        </div>


        <!-- =========================================
             STEP 5 — TEACHER ASSIGNMENTS
        ========================================== -->

        <div
          class="timetable-panel"
          data-panel="assignments"
          hidden
        >

          <div class="timetable-panel-heading">

            <span class="timetable-panel-icon">
              <i class="fa-solid fa-link"></i>
            </span>

            <div>

              <h3>
                Teacher Assignments
              </h3>

              <p>
                Connect teachers with the subjects
                and classes they teach.
              </p>

            </div>

          </div>


          <div
            class="timetable-assignment-form"
          >

            <div
              class="timetable-form-group"
            >

              <label
                for="timetable-assignment-teacher"
              >
                Teacher
              </label>

              <select
                id="timetable-assignment-teacher"
              >

                <option value="">
                  Select teacher
                </option>

              </select>

            </div>


            <div
              class="timetable-form-group"
            >

              <label
                for="timetable-assignment-subject"
              >
                Subject
              </label>

              <select
                id="timetable-assignment-subject"
              >

                <option value="">
                  Select subject
                </option>

              </select>

            </div>


            <div
              class="timetable-form-group"
            >

              <label
                for="timetable-assignment-class"
              >
                Class
              </label>

              <select
                id="timetable-assignment-class"
              >

                <option value="">
                  Select class
                </option>

              </select>

            </div>

          </div>


          <button
            type="button"
            id="timetable-add-assignment"
            class="timetable-secondary-button"
          >
            <i class="fa-solid fa-plus"></i>
            Add Assignment
          </button>


          <div
            id="timetable-assignment-list"
            class="timetable-assignment-list"
          ></div>


          <div class="timetable-actions">

            <button
              type="button"
              id="timetable-assignments-back"
              class="timetable-light-button"
            >
              <i class="fa-solid fa-arrow-left"></i>
              Back
            </button>

            <button
              type="button"
              id="timetable-assignments-continue"
              class="timetable-primary-button"
            >
              Continue
              <i class="fa-solid fa-arrow-right"></i>
            </button>

          </div>

        </div>


        <!-- =========================================
             STEP 6 — PERIOD STRUCTURE
        ========================================== -->

        <div
          class="timetable-panel"
          data-panel="periods"
          hidden
        >

          <div class="timetable-panel-heading">

            <span class="timetable-panel-icon">
              <i class="fa-solid fa-clock"></i>
            </span>

            <div>

              <h3>
                Period Structure
              </h3>

              <p>
                Define the school days, teaching
                periods, breaks, lunch and other
                non-teaching activities.
              </p>

            </div>

          </div>


          <!-- ACTIVE DAYS -->

          <div
            class="timetable-period-section"
          >

            <div
              class="timetable-section-title"
            >

              <h4>
                Active School Days
              </h4>

              <p>
                Select the days on which classes
                normally take place.
              </p>

            </div>


            <div
              id="timetable-day-selector"
              class="timetable-day-selector"
            ></div>

          </div>


          <!-- PERIOD FORM -->

          <div
            class="timetable-period-section"
          >

            <div
              class="timetable-section-title"
            >

              <h4>
                Add Period or Activity
              </h4>

              <p>
                Teaching periods and non-teaching
                activities can all be placed in the
                daily structure.
              </p>

            </div>


            <form
              id="timetable-period-form"
              class="timetable-period-form"
            >

              <div
                class="timetable-form-group"
              >

                <label
                  for="timetable-period-label"
                >
                  Period / Activity
                </label>

                <input
                  type="text"
                  id="timetable-period-label"
                  placeholder="e.g. Period 1"
                  required
                >

              </div>


              <div
                class="timetable-form-group"
              >

                <label
                  for="timetable-period-start"
                >
                  Start Time
                </label>

                <input
                  type="time"
                  id="timetable-period-start"
                  value="08:00"
                  required
                >

              </div>


              <div
                class="timetable-form-group"
              >

                <label
                  for="timetable-period-end"
                >
                  End Time
                </label>

                <input
                  type="time"
                  id="timetable-period-end"
                  value="08:40"
                  required
                >

              </div>


              <div
                class="timetable-form-group"
              >

                <label
                  for="timetable-period-type"
                >
                  Type
                </label>

                <select
                  id="timetable-period-type"
                >

                  ${PERIOD_TYPES.map(
                    function (type) {

                      return `

                        <option
                          value="${type.value}"
                        >
                          ${type.label}
                        </option>

                      `;

                    }
                  ).join("")}

                </select>

              </div>


              <button
                type="submit"
                class="timetable-secondary-button"
              >
                <i class="fa-solid fa-plus"></i>
                Add
              </button>

            </form>

          </div>


          <!-- STRUCTURE LIST -->

          <div
            class="timetable-period-section"
          >

            <div
              class="timetable-section-title"
            >

              <h4>
                Daily Structure
              </h4>

              <p>
                Arrange the periods and activities
                in the order they should occur.
              </p>

            </div>


            <div
              id="timetable-period-list"
              class="timetable-period-list"
            ></div>

          </div>


          <!-- SUMMARY -->

          <div
            id="timetable-period-summary"
            class="timetable-period-summary"
          ></div>


          <div class="timetable-actions">

            <button
              type="button"
              id="timetable-periods-back"
              class="timetable-light-button"
            >
              <i class="fa-solid fa-arrow-left"></i>
              Back
            </button>

            <button
              type="button"
              id="timetable-periods-continue"
              class="timetable-primary-button"
            >
              Continue
              <i class="fa-solid fa-arrow-right"></i>
            </button>

          </div>

        </div>


        <!-- =========================================
             STEP 7 — SUBJECT REQUIREMENTS
        ========================================== -->

        <div
          class="timetable-panel"
          data-panel="requirements"
          hidden
        >

          <div class="timetable-panel-heading">

            <span class="timetable-panel-icon">
              <i class="fa-solid fa-list-check"></i>
            </span>

            <div>

              <h3>
                Subject Requirements
              </h3>

              <p>
                This stage will define how frequently
                each subject should appear in the
                timetable.
              </p>

            </div>

          </div>


          <div
            class="timetable-coming-soon"
          >

            <i
              class="fa-solid fa-hourglass-half"
            ></i>

            <h4>
              Phase 2F
            </h4>

            <p>
              Subject frequency, lesson duration
              and consecutive-period requirements
              will be configured here.
            </p>

          </div>


          <div class="timetable-actions">

            <button
              type="button"
              id="timetable-requirements-back"
              class="timetable-light-button"
            >
              <i class="fa-solid fa-arrow-left"></i>
              Back
            </button>

          </div>

        </div>

      </div>

    </section>

  `;


  bindTimetableEvents();

  renderTimetableDays();

  updateTimetableStep(
    "school"
  );

}


/* =========================================================
   EVENT BINDING
========================================================= */

function bindTimetableEvents() {


  /* =========================================
     SCHOOL
  ========================================== */

  const schoolForm =
    document.querySelector(
      "#timetable-school-form"
    );


  schoolForm?.addEventListener(
    "submit",
    function (event) {

      event.preventDefault();

      const name =
        document.querySelector(
          "#timetable-school-name"
        )?.value.trim();


      const title =
        document.querySelector(
          "#timetable-school-title"
        )?.value.trim();


      const days =
        Number(
          document.querySelector(
            "#timetable-school-days"
          )?.value
        );


      if (!name || !title || !days) {

        return;

      }


      timetableState.school.name =
        name;

      timetableState.school.title =
        title;

      timetableState.school.days =
        days;


      initializeActiveDays(
        days
      );


      showTimetablePanel(
        "classes"
      );

    }
  );


  /* =========================================
     CLASSES
  ========================================== */

  const classForm =
    document.querySelector(
      "#timetable-class-form"
    );


  classForm?.addEventListener(
    "submit",
    function (event) {

      event.preventDefault();

      const input =
        document.querySelector(
          "#timetable-class-name"
        );


      const className =
        input?.value.trim();


      if (!className) {

        return;

      }


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

        return;

      }


      timetableState.classes.push({

        id:
          "class_" +
          Date.now(),

        name:
          className

      });


      input.value = "";

      renderClasses();

      input.focus();

    }
  );


  document
    .querySelector(
      "#timetable-classes-back"
    )
    ?.addEventListener(
      "click",
      function () {

        showTimetablePanel(
          "school"
        );

      }
    );


  document
    .querySelector(
      "#timetable-classes-continue"
    )
    ?.addEventListener(
      "click",
      function (event) {

        event.preventDefault();

        if (
          timetableState.classes.length ===
          0
        ) {

          return;

        }


        showTimetablePanel(
          "teachers"
        );

      }
    );


  /* =========================================
     TEACHERS
  ========================================== */

  const teacherForm =
    document.querySelector(
      "#timetable-teacher-form"
    );


  teacherForm?.addEventListener(
    "submit",
    function (event) {

      event.preventDefault();

      const input =
        document.querySelector(
          "#timetable-teacher-name"
        );


      const teacherName =
        input?.value.trim();


      if (!teacherName) {

        return;

      }


      const duplicate =
        timetableState.teachers.some(
          function (item) {

            return (
              item.name.toLowerCase() ===
              teacherName.toLowerCase()
            );

          }
        );


      if (duplicate) {

        return;

      }


      timetableState.teachers.push({

        id:
          "teacher_" +
          Date.now(),

        name:
          teacherName,

        availability: {

          days: [],

          periods: []

        }

      });


      input.value = "";

      renderTeachers();

      input.focus();

    }
  );


  document
    .querySelector(
      "#timetable-teachers-back"
    )
    ?.addEventListener(
      "click",
      function () {

        showTimetablePanel(
          "classes"
        );

      }
    );


  document
    .querySelector(
      "#timetable-teachers-continue"
    )
    ?.addEventListener(
      "click",
      function (event) {

        event.preventDefault();

        if (
          timetableState.teachers.length ===
          0
        ) {

          return;

        }


        showTimetablePanel(
          "subjects"
        );

      }
    );


  /* =========================================
     SUBJECTS
  ========================================== */

  const subjectForm =
    document.querySelector(
      "#timetable-subject-form"
    );


  subjectForm?.addEventListener(
    "submit",
    function (event) {

      event.preventDefault();

      const nameInput =
        document.querySelector(
          "#timetable-subject-name"
        );


      const codeInput =
        document.querySelector(
          "#timetable-subject-code"
        );


      const categorySelect =
        document.querySelector(
          "#timetable-subject-category"
        );


      const subjectName =
        nameInput?.value.trim();


      const subjectCode =
        codeInput?.value.trim();


      const category =
        categorySelect?.value;


      if (
        !subjectName ||
        !subjectCode ||
        !category
      ) {

        return;

      }


      const duplicate =
        timetableState.subjects.some(
          function (item) {

            return (
              item.name.toLowerCase() ===
              subjectName.toLowerCase()
            );

          }
        );


      if (duplicate) {

        return;

      }


      timetableState.subjects.push({

        id:
          "subject_" +
          Date.now(),

        name:
          subjectName,

        code:
          subjectCode,

        category:
          category

      });


      nameInput.value = "";

      codeInput.value = "";

      categorySelect.value = "";


      renderSubjects();

      nameInput.focus();

    }
  );


  document
    .querySelector(
      "#timetable-subjects-back"
    )
    ?.addEventListener(
      "click",
      function () {

        showTimetablePanel(
          "teachers"
        );

      }
    );


  document
    .querySelector(
      "#timetable-subjects-continue"
    )
    ?.addEventListener(
      "click",
      function (event) {

        event.preventDefault();

        if (
          timetableState.subjects.length ===
          0
        ) {

          return;

        }


        populateAssignmentSelects();

        showTimetablePanel(
          "assignments"
        );


        document
          .querySelector(
            "#timetable-assignment-teacher"
          )
          ?.focus();

      }
    );


  /* =========================================
     TEACHER ASSIGNMENTS
  ========================================== */

  document
    .querySelector(
      "#timetable-add-assignment"
    )
    ?.addEventListener(
      "click",
      function (event) {

        event.preventDefault();

        const teacherId =
          document.querySelector(
            "#timetable-assignment-teacher"
          )?.value;


        const subjectId =
          document.querySelector(
            "#timetable-assignment-subject"
          )?.value;


        const classId =
          document.querySelector(
            "#timetable-assignment-class"
          )?.value;


        if (
          !teacherId ||
          !subjectId ||
          !classId
        ) {

          return;

        }


        const duplicate =
          timetableState.assignments.some(
            function (item) {

              return (
                item.teacherId === teacherId &&
                item.subjectId === subjectId &&
                item.classId === classId
              );

            }
          );


        if (duplicate) {

          return;

        }


        timetableState.assignments.push({

          id:
            "assignment_" +
            Date.now(),

          teacherId:
            teacherId,

          subjectId:
            subjectId,

          classId:
            classId

        });


        renderAssignments();

      }
    );


  document
    .querySelector(
      "#timetable-assignments-back"
    )
    ?.addEventListener(
      "click",
      function () {

        showTimetablePanel(
          "subjects"
        );

      }
    );


  document
    .querySelector(
      "#timetable-assignments-continue"
    )
    ?.addEventListener(
      "click",
      function (event) {

        event.preventDefault();

        if (
          timetableState.assignments.length ===
          0
        ) {

          return;

        }


        renderTimetableDays();

        renderPeriods();

        showTimetablePanel(
          "periods"
        );

      }
    );


  /* =========================================
     PERIOD STRUCTURE
  ========================================== */

  const periodForm =
    document.querySelector(
      "#timetable-period-form"
    );


  periodForm?.addEventListener(
    "submit",
    function (event) {

      event.preventDefault();

      addPeriodEntry();

    }
  );


  document
    .querySelector(
      "#timetable-periods-back"
    )
    ?.addEventListener(
      "click",
      function () {

        showTimetablePanel(
          "assignments"
        );

      }
    );


  document
    .querySelector(
      "#timetable-periods-continue"
    )
    ?.addEventListener(
      "click",
      function (event) {

        event.preventDefault();

        if (
          timetableState.periodStructure
            .activeDays.length === 0
        ) {

          return;

        }


        if (
          timetableState.periodStructure
            .entries.length === 0
        ) {

          return;

        }


        console.log(
          "TUPS Timetable: Period Structure accepted.",
          timetableState.periodStructure
        );


        showTimetablePanel(
          "requirements"
        );

      }
    );


  /* =========================================
     REQUIREMENTS BACK
  ========================================== */

  document
    .querySelector(
      "#timetable-requirements-back"
    )
    ?.addEventListener(
      "click",
      function () {

        showTimetablePanel(
          "periods"
        );

      }
    );

}


/* =========================================================
   PANEL NAVIGATION
========================================================= */

function showTimetablePanel(
  panelName
) {

  const panels =
    document.querySelectorAll(
      ".timetable-panel"
    );


  panels.forEach(
    function (panel) {

      const active =
        panel.dataset.panel ===
        panelName;


      panel.hidden =
        !active;


      panel.classList.toggle(
        "active",
        active
      );

    }
  );


  updateTimetableStep(
    panelName
  );

}


/* =========================================================
   STEP INDICATOR
========================================================= */

function updateTimetableStep(
  panelName
) {

  const stepMap = {

    school: 1,

    classes: 2,

    teachers: 3,

    subjects: 4,

    assignments: 5,

    periods: 6,

    requirements: 7,

    generate: 8

  };


  const currentStep =
    stepMap[panelName] || 1;


  document
    .querySelectorAll(
      ".timetable-step"
    )
    .forEach(
      function (step) {

        const number =
          Number(
            step.dataset.step
          );


        step.classList.toggle(
          "active",
          number === currentStep
        );


        step.classList.toggle(
          "completed",
          number < currentStep
        );

      }
    );

}


/* =========================================================
   ACTIVE DAYS
========================================================= */

function initializeActiveDays(
  numberOfDays
) {

  const count =
    Number(numberOfDays) || 5;


  timetableState.periodStructure
    .activeDays =
    SCHOOL_DAYS.slice(
      0,
      Math.min(
        count,
        SCHOOL_DAYS.length
      )
    );


  renderTimetableDays();

}


function renderTimetableDays() {

  const container =
    document.querySelector(
      "#timetable-day-selector"
    );


  if (!container) {

    return;

  }


  container.innerHTML =
    SCHOOL_DAYS.map(
      function (day) {

        const checked =
          timetableState.periodStructure
            .activeDays
            .includes(day);


        return `

          <label
            class="timetable-day-option"
          >

            <input
              type="checkbox"
              value="${day}"
              ${checked ? "checked" : ""}
            >

            <span>
              ${day}
            </span>

          </label>

        `;

      }
    ).join("");


  container
    .querySelectorAll(
      'input[type="checkbox"]'
    )
    .forEach(
      function (checkbox) {

        checkbox.addEventListener(
          "change",
          function () {

            const selectedDays =
              Array.from(
                container.querySelectorAll(
                  'input[type="checkbox"]:checked'
                )
              ).map(
                function (item) {

                  return item.value;

                }
              );


            timetableState.periodStructure
              .activeDays =
              selectedDays;

          }
        );

      }
    );

}


/* =========================================================
   ADD PERIOD
========================================================= */

function addPeriodEntry() {

  const labelInput =
    document.querySelector(
      "#timetable-period-label"
    );


  const startInput =
    document.querySelector(
      "#timetable-period-start"
    );


  const endInput =
    document.querySelector(
      "#timetable-period-end"
    );


  const typeSelect =
    document.querySelector(
      "#timetable-period-type"
    );


  const label =
    labelInput?.value.trim();


  const start =
    startInput?.value;


  const end =
    endInput?.value;


  const type =
    typeSelect?.value;


  if (
    !label ||
    !start ||
    !end ||
    !type
  ) {

    return;

  }


  if (start >= end) {

    console.warn(
      "TUPS Timetable: End time must be later than start time."
    );

    return;

  }


  const overlaps =
    timetableState.periodStructure
      .entries.some(
        function (entry) {

          return (
            start < entry.end &&
            end > entry.start
          );

        }
      );


  if (overlaps) {

    console.warn(
      "TUPS Timetable: Period overlaps an existing entry."
    );

    return;

  }


  timetableState.periodStructure
    .entries.push({

      id:
        "period_" +
        Date.now(),

      label:
        label,

      start:
        start,

      end:
        end,

      type:
        type

    });


  renderPeriods();


  labelInput.value = "";

  typeSelect.value =
    "teaching";


  const lastEntry =
    timetableState.periodStructure
      .entries[
        timetableState.periodStructure
          .entries.length - 1
      ];


  if (lastEntry) {

    startInput.value =
      lastEntry.end;

  }


  endInput.value =
    calculateDefaultEndTime(
      startInput.value
    );


  labelInput.focus();

}


/* =========================================================
   DEFAULT END TIME
========================================================= */

function calculateDefaultEndTime(
  startTime
) {

  if (!startTime) {

    return "08:40";

  }


  const parts =
    startTime.split(":");


  let hours =
    Number(parts[0]);


  let minutes =
    Number(parts[1]);


  minutes += 40;


  if (minutes >= 60) {

    hours +=
      Math.floor(
        minutes / 60
      );

    minutes =
      minutes % 60;

  }


  hours =
    hours % 24;


  return (
    String(hours).padStart(2, "0") +
    ":" +
    String(minutes).padStart(2, "0")
  );

}


/* =========================================================
   RENDER PERIODS
========================================================= */

function renderPeriods() {

  const container =
    document.querySelector(
      "#timetable-period-list"
    );


  const summary =
    document.querySelector(
      "#timetable-period-summary"
    );


  if (!container) {

    return;

  }


  const entries =
    timetableState.periodStructure
      .entries;


  if (entries.length === 0) {

    container.innerHTML = `

      <div
        class="timetable-empty-state"
      >

        <i
          class="fa-solid fa-clock"
        ></i>

        <p>
          No periods or activities added yet.
        </p>

      </div>

    `;


    if (summary) {

      summary.innerHTML = "";

    }


    return;

  }


  container.innerHTML =
    entries.map(
      function (entry, index) {

        const typeInfo =
          PERIOD_TYPES.find(
            function (type) {

              return (
                type.value ===
                entry.type
              );

            }
          );


        const typeLabel =
          typeInfo
            ? typeInfo.label
            : entry.type;


        return `

          <div
            class="timetable-period-item"
            data-period-id="${entry.id}"
          >

            <div
              class="timetable-period-number"
            >
              ${index + 1}
            </div>


            <div
              class="timetable-period-info"
            >

              <strong>
                ${escapeTimetableHtml(
                  entry.label
                )}
              </strong>

              <span>
                ${entry.start}
                –
                ${entry.end}
              </span>

              <small>
                ${typeLabel}
              </small>

            </div>


            <div
              class="timetable-period-actions"
            >

              <button
                type="button"
                class="timetable-period-move-button"
                data-period-action="up"
                data-period-id="${entry.id}"
                aria-label="Move up"
                ${index === 0 ? "disabled" : ""}
              >
                <i
                  class="fa-solid fa-chevron-up"
                ></i>
              </button>


              <button
                type="button"
                class="timetable-period-move-button"
                data-period-action="down"
                data-period-id="${entry.id}"
                aria-label="Move down"
                ${index === entries.length - 1 ? "disabled" : ""}
              >
                <i
                  class="fa-solid fa-chevron-down"
                ></i>
              </button>


              <button
                type="button"
                class="timetable-remove-period"
                data-period-action="remove"
                data-period-id="${entry.id}"
                aria-label="Remove period"
              >
                <i
                  class="fa-solid fa-trash"
                ></i>
              </button>

            </div>

          </div>

        `;

      }
    ).join("");


  bindPeriodActions();


  if (summary) {

    const teachingCount =
      entries.filter(
        function (entry) {

          return (
            entry.type ===
            "teaching"
          );

        }
      ).length;


    const nonTeachingCount =
      entries.length -
      teachingCount;


    summary.innerHTML = `

      <div>

        <strong>
          ${entries.length}
        </strong>

        <span>
          Total Entries
        </span>

      </div>


      <div>

        <strong>
          ${teachingCount}
        </strong>

        <span>
          Teaching Periods
        </span>

      </div>


      <div>

        <strong>
          ${nonTeachingCount}
        </strong>

        <span>
          Non-Teaching
        </span>

      </div>


      <div>

        <strong>
          ${timetableState.periodStructure
            .activeDays.length}
        </strong>

        <span>
          Active Days
        </span>

      </div>

    `;

  }

}


/* =========================================================
   PERIOD ACTIONS
========================================================= */

function bindPeriodActions() {

  document
    .querySelectorAll(
      "[data-period-action]"
    )
    .forEach(
      function (button) {

        button.addEventListener(
          "click",
          function () {

            const action =
              button.dataset.periodAction;


            const id =
              button.dataset.periodId;


            const index =
              timetableState
                .periodStructure
                .entries
                .findIndex(
                  function (entry) {

                    return (
                      entry.id === id
                    );

                  }
                );


            if (index === -1) {

              return;

            }


            if (action === "remove") {

              timetableState
                .periodStructure
                .entries
                .splice(
                  index,
                  1
                );

            }


            if (
              action === "up" &&
              index > 0
            ) {

              const entries =
                timetableState
                  .periodStructure
                  .entries;


              [
                entries[index - 1],
                entries[index]
              ] = [

                entries[index],
                entries[index - 1]

              ];

            }


            if (
              action === "down" &&
              index <
                timetableState
                  .periodStructure
                  .entries
                  .length - 1
            ) {

              const entries =
                timetableState
                  .periodStructure
                  .entries;


              [
                entries[index],
                entries[index + 1]
              ] = [

                entries[index + 1],
                entries[index]

              ];

            }


            renderPeriods();

          }
        );

      }
    );

}


/* =========================================================
   ASSIGNMENT SELECTS
========================================================= */

function populateAssignmentSelects() {

  const teacherSelect =
    document.querySelector(
      "#timetable-assignment-teacher"
    );


  const subjectSelect =
    document.querySelector(
      "#timetable-assignment-subject"
    );


  const classSelect =
    document.querySelector(
      "#timetable-assignment-class"
    );


  if (teacherSelect) {

    teacherSelect.innerHTML = `

      <option value="">
        Select teacher
      </option>

      ${
        timetableState.teachers
          .map(
            function (teacher) {

              return `

                <option
                  value="${teacher.id}"
                >
                  ${escapeTimetableHtml(
                    teacher.name
                  )}
                </option>

              `;

            }
          )
          .join("")
      }

    `;

  }


  if (subjectSelect) {

    subjectSelect.innerHTML = `

      <option value="">
        Select subject
      </option>

      ${
        timetableState.subjects
          .map(
            function (subject) {

              return `

                <option
                  value="${subject.id}"
                >
                  ${escapeTimetableHtml(
                    subject.name
                  )}
                </option>

              `;

            }
          )
          .join("")
      }

    `;

  }


  if (classSelect) {

    classSelect.innerHTML = `

      <option value="">
        Select class
      </option>

      ${
        timetableState.classes
          .map(
            function (item) {

              return `

                <option
                  value="${item.id}"
                >
                  ${escapeTimetableHtml(
                    item.name
                  )}
                </option>

              `;

            }
          )
          .join("")
      }

    `;

  }

}


/* =========================================================
   RENDER ASSIGNMENTS
========================================================= */

function renderAssignments() {

  const container =
    document.querySelector(
      "#timetable-assignment-list"
    );


  if (!container) {

    return;

  }


  if (
    timetableState.assignments.length ===
    0
  ) {

    container.innerHTML = "";

    return;

  }


  container.innerHTML =
    timetableState.assignments
      .map(
        function (assignment) {

          const teacher =
            timetableState.teachers.find(
              function (item) {

                return (
                  item.id ===
                  assignment.teacherId
                );

              }
            );


          const subject =
            timetableState.subjects.find(
              function (item) {

                return (
                  item.id ===
                  assignment.subjectId
                );

              }
            );


          const classItem =
            timetableState.classes.find(
              function (item) {

                return (
                  item.id ===
                  assignment.classId
                );

              }
            );


          return `

            <div
              class="timetable-assignment-item"
            >

              <div>

                <strong>
                  ${escapeTimetableHtml(
                    subject?.name || ""
                  )}
                </strong>

                <span>
                  ${
                    escapeTimetableHtml(
                      teacher?.name || ""
                    )
                  }
                  —
                  ${
                    escapeTimetableHtml(
                      classItem?.name || ""
                    )
                  }
                </span>

              </div>


              <button
                type="button"
                class="timetable-remove-assignment"
                data-assignment-id="${assignment.id}"
                aria-label="Remove assignment"
              >

                <i
                  class="fa-solid fa-trash"
                ></i>

              </button>

            </div>

          `;

        }
      )
      .join("");


  container
    .querySelectorAll(
      ".timetable-remove-assignment"
    )
    .forEach(
      function (button) {

        button.addEventListener(
          "click",
          function () {

            const id =
              button.dataset.assignmentId;


            timetableState.assignments =
              timetableState.assignments.filter(
                function (item) {

                  return (
                    item.id !== id
                  );

                }
              );


            renderAssignments();

          }
        );

      }
    );

}


/* =========================================================
   RENDER CLASSES
========================================================= */

function renderClasses() {

  const container =
    document.querySelector(
      "#timetable-class-list"
    );


  if (!container) {

    return;

  }


  container.innerHTML =
    timetableState.classes
      .map(
        function (item) {

          return `

            <div
              class="timetable-list-item"
            >

              <strong>
                ${escapeTimetableHtml(
                  item.name
                )}
              </strong>

              <button
                type="button"
                class="timetable-remove-item"
                data-class-id="${item.id}"
                aria-label="Remove class"
              >

                <i
                  class="fa-solid fa-trash"
                ></i>

              </button>

            </div>

          `;

        }
      )
      .join("");


  container
    .querySelectorAll(
      "[data-class-id]"
    )
    .forEach(
      function (button) {

        button.addEventListener(
          "click",
          function () {

            const id =
              button.dataset.classId;


            timetableState.classes =
              timetableState.classes.filter(
                function (item) {

                  return (
                    item.id !== id
                  );

                }
              );


            timetableState.assignments =
              timetableState.assignments.filter(
                function (assignment) {

                  return (
                    assignment.classId !== id
                  );

                }
              );


            renderClasses();

          }
        );

      }
    );

}


/* =========================================================
   RENDER TEACHERS
========================================================= */

function renderTeachers() {

  const container =
    document.querySelector(
      "#timetable-teacher-list"
    );


  if (!container) {

    return;

  }


  container.innerHTML =
    timetableState.teachers
      .map(
        function (teacher) {

          return `

            <div
              class="timetable-list-item"
            >

              <strong>
                ${escapeTimetableHtml(
                  teacher.name
                )}
              </strong>

              <button
                type="button"
                class="timetable-remove-item"
                data-teacher-id="${teacher.id}"
                aria-label="Remove teacher"
              >

                <i
                  class="fa-solid fa-trash"
                ></i>

              </button>

            </div>

          `;

        }
      )
      .join("");


  container
    .querySelectorAll(
      "[data-teacher-id]"
    )
    .forEach(
      function (button) {

        button.addEventListener(
          "click",
          function () {

            const id =
              button.dataset.teacherId;


            timetableState.teachers =
              timetableState.teachers.filter(
                function (item) {

                  return (
                    item.id !== id
                  );

                }
              );


            timetableState.assignments =
              timetableState.assignments.filter(
                function (assignment) {

                  return (
                    assignment.teacherId !== id
                  );

                }
              );


            renderTeachers();

          }
        );

      }
    );

}


/* =========================================================
   RENDER SUBJECTS
========================================================= */

function renderSubjects() {

  const container =
    document.querySelector(
      "#timetable-subject-list"
    );


  if (!container) {

    return;

  }


  container.innerHTML =
    timetableState.subjects
      .map(
        function (subject) {

          return `

            <div
              class="timetable-list-item"
            >

              <div>

                <strong>
                  ${escapeTimetableHtml(
                    subject.name
                  )}
                </strong>

                <span>
                  ${escapeTimetableHtml(
                    subject.code
                  )}
                  •
                  ${escapeTimetableHtml(
                    subject.category
                  )}
                </span>

              </div>


              <button
                type="button"
                class="timetable-remove-item"
                data-subject-id="${subject.id}"
                aria-label="Remove subject"
              >

                <i
                  class="fa-solid fa-trash"
                ></i>

              </button>

            </div>

          `;

        }
      )
      .join("");


  container
    .querySelectorAll(
      "[data-subject-id]"
    )
    .forEach(
      function (button) {

        button.addEventListener(
          "click",
          function () {

            const id =
              button.dataset.subjectId;


            timetableState.subjects =
              timetableState.subjects.filter(
                function (item) {

                  return (
                    item.id !== id
                  );

                }
              );


            timetableState.assignments =
              timetableState.assignments.filter(
                function (assignment) {

                  return (
                    assignment.subjectId !== id
                  );

                }
              );


            renderSubjects();

          }
        );

      }
    );

}


/* =========================================================
   HTML ESCAPE
========================================================= */

function escapeTimetableHtml(
  value
) {

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


/* =========================================================
   DEBUG ACCESS
========================================================= */

window.tupsTimetableState =
  timetableState;

