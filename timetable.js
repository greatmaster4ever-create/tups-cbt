/* =========================================================
   TUPS TECHNOLOGIES
   TIMETABLE GENERATOR
   PHASE 2F — SUBJECT REQUIREMENTS
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

  },

  requirements: []

};


/* =========================================================
   PUBLIC LOADER
========================================================= */

export function loadTimetableGenerator() {

  const target =
    document.querySelector(".content-area");

  if (!target) {

    console.warn(
      "TUPS Timetable: .content-area not found."
    );

    return;

  }


  renderTimetableShell(target);

  bindTimetableEvents();

  renderAllTimetableData();

  showTimetablePanel("school");

  console.log(
    "TUPS Timetable Generator loaded — Phase 2F"
  );

}


/* =========================================================
   MAIN SHELL
========================================================= */

function renderTimetableShell(target) {

  target.innerHTML = `

    <div class="content-page timetable-page">

      <div class="timetable-header">

        <div>

          <span class="timetable-kicker">
            TUPS TOOLS
          </span>

          <h2>
            Timetable Generator
          </h2>

          <p>
            Build your school's timetable step by step,
            then generate a conflict-aware schedule.
          </p>

        </div>

      </div>


      <div class="timetable-stepper">

        ${renderStep(1, "School", "school")}

        ${renderStep(2, "Classes", "classes")}

        ${renderStep(3, "Teachers", "teachers")}

        ${renderStep(4, "Subjects", "subjects")}

        ${renderStep(5, "Assignments", "assignments")}

        ${renderStep(6, "Periods", "periods")}

        ${renderStep(7, "Requirements", "requirements")}

        ${renderStep(8, "Generate", "generate")}

      </div>


      <div class="timetable-panels">


        <!-- =================================================
             SCHOOL
        ================================================== -->

        <section
          class="timetable-panel"
          data-timetable-panel="school"
        >

          <div class="timetable-panel-heading">

            <div>

              <span>STEP 1</span>

              <h3>
                School Setup
              </h3>

              <p>
                Enter the basic information for this timetable.
              </p>

            </div>

          </div>


          <div class="timetable-form-grid">

            <div class="timetable-form-group">

              <label for="timetable-school-name">
                School Name
              </label>

              <input
                type="text"
                id="timetable-school-name"
                placeholder="Enter school name"
              >

            </div>


            <div class="timetable-form-group">

              <label for="timetable-school-title">
                Timetable Title
              </label>

              <input
                type="text"
                id="timetable-school-title"
                placeholder="e.g. 2026/2027 First Term"
              >

            </div>


            <div class="timetable-form-group">

              <label for="timetable-school-days">
                Number of School Days
              </label>

              <select id="timetable-school-days">

                <option value="5">
                  5 Days
                </option>

                <option value="6">
                  6 Days
                </option>

              </select>

            </div>

          </div>


          <div class="timetable-action-row">

            <button
              type="button"
              class="timetable-primary-button"
              id="timetable-school-continue"
            >
              Continue to Classes
              <i class="fa-solid fa-arrow-right"></i>
            </button>

          </div>

        </section>


        <!-- =================================================
             CLASSES
        ================================================== -->

        <section
          class="timetable-panel"
          data-timetable-panel="classes"
        >

          <div class="timetable-panel-heading">

            <div>

              <span>STEP 2</span>

              <h3>
                Classes
              </h3>

              <p>
                Add every class that needs a timetable.
              </p>

            </div>

          </div>


          <div class="timetable-inline-form">

            <div class="timetable-form-group">

              <label for="timetable-class-name">
                Class Name
              </label>

              <input
                type="text"
                id="timetable-class-name"
                placeholder="e.g. JSS 1"
              >

            </div>


            <button
              type="button"
              class="timetable-secondary-button"
              id="timetable-add-class"
            >
              <i class="fa-solid fa-plus"></i>
              Add Class
            </button>

          </div>


          <div
            id="timetable-classes-list"
            class="timetable-item-list"
          ></div>


          <div class="timetable-action-row">

            <button
              type="button"
              class="timetable-back-button"
              data-timetable-back="school"
            >
              <i class="fa-solid fa-arrow-left"></i>
              Back
            </button>

            <button
              type="button"
              class="timetable-primary-button"
              id="timetable-classes-continue"
            >
              Continue to Teachers
              <i class="fa-solid fa-arrow-right"></i>
            </button>

          </div>

        </section>


        <!-- =================================================
             TEACHERS
        ================================================== -->

        <section
          class="timetable-panel"
          data-timetable-panel="teachers"
        >

          <div class="timetable-panel-heading">

            <div>

              <span>STEP 3</span>

              <h3>
                Teachers
              </h3>

              <p>
                Add teachers who will appear in the timetable.
              </p>

            </div>

          </div>


          <div class="timetable-inline-form">

            <div class="timetable-form-group">

              <label for="timetable-teacher-name">
                Teacher Name
              </label>

              <input
                type="text"
                id="timetable-teacher-name"
                placeholder="e.g. Mr John"
              >

            </div>


            <button
              type="button"
              class="timetable-secondary-button"
              id="timetable-add-teacher"
            >
              <i class="fa-solid fa-plus"></i>
              Add Teacher
            </button>

          </div>


          <div
            id="timetable-teachers-list"
            class="timetable-item-list"
          ></div>


          <div class="timetable-action-row">

            <button
              type="button"
              class="timetable-back-button"
              data-timetable-back="classes"
            >
              <i class="fa-solid fa-arrow-left"></i>
              Back
            </button>

            <button
              type="button"
              class="timetable-primary-button"
              id="timetable-teachers-continue"
            >
              Continue to Subjects
              <i class="fa-solid fa-arrow-right"></i>
            </button>

          </div>

        </section>


        <!-- =================================================
             SUBJECTS
        ================================================== -->

        <section
          class="timetable-panel"
          data-timetable-panel="subjects"
        >

          <div class="timetable-panel-heading">

            <div>

              <span>STEP 4</span>

              <h3>
                Subjects
              </h3>

              <p>
                Add the subjects that will be scheduled.
              </p>

            </div>

          </div>


          <div class="timetable-inline-form">

            <div class="timetable-form-group">

              <label for="timetable-subject-name">
                Subject Name
              </label>

              <input
                type="text"
                id="timetable-subject-name"
                placeholder="e.g. Mathematics"
              >

            </div>


            <div class="timetable-form-group">

              <label for="timetable-subject-code">
                Subject Code
              </label>

              <input
                type="text"
                id="timetable-subject-code"
                placeholder="e.g. MTH"
              >

            </div>


            <div class="timetable-form-group">

              <label for="timetable-subject-category">
                Category
              </label>

              <input
                type="text"
                id="timetable-subject-category"
                placeholder="e.g. Core"
              >

            </div>


            <button
              type="button"
              class="timetable-secondary-button"
              id="timetable-add-subject"
            >
              <i class="fa-solid fa-plus"></i>
              Add Subject
            </button>

          </div>


          <div
            id="timetable-subjects-list"
            class="timetable-item-list"
          ></div>


          <div class="timetable-action-row">

            <button
              type="button"
              class="timetable-back-button"
              data-timetable-back="teachers"
            >
              <i class="fa-solid fa-arrow-left"></i>
              Back
            </button>

            <button
              type="button"
              class="timetable-primary-button"
              id="timetable-subjects-continue"
            >
              Continue to Assignments
              <i class="fa-solid fa-arrow-right"></i>
            </button>

          </div>

        </section>


        <!-- =================================================
             ASSIGNMENTS
        ================================================== -->

        <section
          class="timetable-panel"
          data-timetable-panel="assignments"
        >

          <div class="timetable-panel-heading">

            <div>

              <span>STEP 5</span>

              <h3>
                Teacher Assignments
              </h3>

              <p>
                Select a teacher, then tick all subjects and
                classes assigned to that teacher.
              </p>

            </div>

          </div>


          <div class="timetable-assignment-teacher">

            <div class="timetable-form-group">

              <label for="timetable-assignment-teacher">
                Teacher
              </label>

              <select id="timetable-assignment-teacher">

                <option value="">
                  Select teacher
                </option>

              </select>

            </div>

          </div>


          <div class="timetable-multi-select-section">

            <div class="timetable-section-title">

              <h4>
                Subjects
              </h4>

              <p>
                Tick all subjects this teacher can teach.
              </p>

            </div>


            <div
              id="timetable-assignment-subjects"
              class="timetable-checkbox-grid"
            ></div>

          </div>


          <div class="timetable-multi-select-section">

            <div class="timetable-section-title">

              <h4>
                Classes
              </h4>

              <p>
                Tick all classes this teacher teaches.
              </p>

            </div>


            <div
              id="timetable-assignment-classes"
              class="timetable-checkbox-grid"
            ></div>

          </div>


          <button
            type="button"
            id="timetable-add-assignment"
            class="timetable-secondary-button"
          >
            <i class="fa-solid fa-plus"></i>
            Add Selected Assignments
          </button>


          <div class="timetable-assignment-summary">

            <div
              id="timetable-assignments-list"
              class="timetable-assignment-list"
            ></div>

          </div>


          <div class="timetable-action-row">

            <button
              type="button"
              class="timetable-back-button"
              data-timetable-back="subjects"
            >
              <i class="fa-solid fa-arrow-left"></i>
              Back
            </button>

            <button
              type="button"
              class="timetable-primary-button"
              id="timetable-assignments-continue"
            >
              Continue to Periods
              <i class="fa-solid fa-arrow-right"></i>
            </button>

          </div>

        </section>


        <!-- =================================================
             PERIOD STRUCTURE
        ================================================== -->

        <section
          class="timetable-panel"
          data-timetable-panel="periods"
        >

          <div class="timetable-panel-heading">

            <div>

              <span>STEP 6</span>

              <h3>
                Period Structure
              </h3>

              <p>
                Define the daily periods and activities
                available to the scheduler.
              </p>

            </div>

          </div>


          <div class="timetable-multi-select-section">

            <div class="timetable-section-title">

              <h4>
                Active School Days
              </h4>

              <p>
                Select the days on which lessons can be scheduled.
              </p>

            </div>


            <div
              id="timetable-active-days"
              class="timetable-checkbox-grid"
            ></div>

          </div>


          <div class="timetable-period-builder">

            <div class="timetable-form-group">

              <label for="timetable-period-label">
                Period / Activity Name
              </label>

              <input
                type="text"
                id="timetable-period-label"
                placeholder="e.g. Period 1"
              >

            </div>


            <div class="timetable-form-group">

              <label for="timetable-period-start">
                Start Time
              </label>

              <input
                type="time"
                id="timetable-period-start"
              >

            </div>


            <div class="timetable-form-group">

              <label for="timetable-period-end">
                End Time
              </label>

              <input
                type="time"
                id="timetable-period-end"
              >

            </div>


            <div class="timetable-form-group">

              <label for="timetable-period-type">
                Type
              </label>

              <select id="timetable-period-type">

                ${PERIOD_TYPES.map(function(item) {

                  return `
                    <option value="${item.value}">
                      ${item.label}
                    </option>
                  `;

                }).join("")}

              </select>

            </div>


            <button
              type="button"
              class="timetable-secondary-button"
              id="timetable-add-period"
            >
              <i class="fa-solid fa-plus"></i>
              Add Period
            </button>

          </div>


          <div class="timetable-period-list-wrap">

            <div class="timetable-section-title">

              <h4>
                Daily Structure
              </h4>

              <p>
                Reorder periods to establish the school day sequence.
              </p>

            </div>


            <div
              id="timetable-period-list"
              class="timetable-period-list"
            ></div>

          </div>


          <div
            id="timetable-period-summary"
            class="timetable-period-summary"
          ></div>


          <div class="timetable-action-row">

            <button
              type="button"
              class="timetable-back-button"
              data-timetable-back="assignments"
            >
              <i class="fa-solid fa-arrow-left"></i>
              Back
            </button>

            <button
              type="button"
              class="timetable-primary-button"
              id="timetable-periods-continue"
            >
              Continue to Requirements
              <i class="fa-solid fa-arrow-right"></i>
            </button>

          </div>

        </section>


        <!-- =================================================
             REQUIREMENTS — PHASE 2F
        ================================================== -->

        <section
          class="timetable-panel"
          data-timetable-panel="requirements"
        >

          <div class="timetable-panel-heading">

            <div>

              <span>STEP 7</span>

              <h3>
                Subject Requirements
              </h3>

              <p>
                Tell the timetable engine how many lessons
                each subject needs for each class every week.
              </p>

            </div>

          </div>


          <div class="timetable-info-box">

            <i class="fa-solid fa-circle-info"></i>

            <div>

              <strong>
                What are subject requirements?
              </strong>

              <p>
                These settings define what the finished timetable
                must contain. The scheduling engine will decide
                the actual days and periods later.
              </p>

            </div>

          </div>


          <div
            id="timetable-requirements-list"
            class="timetable-requirements-list"
          ></div>


          <div
            id="timetable-requirements-empty"
            class="timetable-empty-state"
            hidden
          >

            <i class="fa-solid fa-list-check"></i>

            <h4>
              No Subject/Class Requirements Yet
            </h4>

            <p>
              Complete Teacher Assignments first.
              Each unique Subject + Class combination
              will appear here automatically.
            </p>

          </div>


          <div
            id="timetable-requirements-summary"
            class="timetable-requirements-summary"
          ></div>


          <div class="timetable-action-row">

            <button
              type="button"
              class="timetable-back-button"
              data-timetable-back="periods"
            >
              <i class="fa-solid fa-arrow-left"></i>
              Back
            </button>

            <button
              type="button"
              class="timetable-primary-button"
              id="timetable-requirements-continue"
            >
              Continue to Generate
              <i class="fa-solid fa-arrow-right"></i>
            </button>

          </div>

        </section>


        <!-- =================================================
             GENERATE
        ================================================== -->

        <section
          class="timetable-panel"
          data-timetable-panel="generate"
        >

          <div class="timetable-panel-heading">

            <div>

              <span>STEP 8</span>

              <h3>
                Generate Timetable
              </h3>

              <p>
                Your timetable setup is ready for the scheduling engine.
              </p>

            </div>

          </div>


          <div
            id="timetable-generate-summary"
            class="timetable-generate-summary"
          ></div>


          <div class="timetable-coming-soon">

            <i class="fa-solid fa-gears"></i>

            <h4>
              Scheduling Engine — Phase 3
            </h4>

            <p>
              The next phase will use your classes, teachers,
              subjects, assignments, periods and requirements
              to automatically create a conflict-aware timetable.
            </p>

          </div>


          <div class="timetable-action-row">

            <button
              type="button"
              class="timetable-back-button"
              data-timetable-back="requirements"
            >
              <i class="fa-solid fa-arrow-left"></i>
              Back to Requirements
            </button>

          </div>

        </section>

      </div>

    </div>

  `;

}


/* =========================================================
   STEPPER
========================================================= */

function renderStep(number, label, panel) {

  return `

    <button
      type="button"
      class="timetable-step"
      data-timetable-step="${panel}"
    >

      <span class="timetable-step-number">
        ${number}
      </span>

      <span class="timetable-step-label">
        ${label}
      </span>

    </button>

  `;

}


/* =========================================================
   EVENT BINDING
========================================================= */

function bindTimetableEvents() {


  document
    .querySelector("#timetable-school-continue")
    ?.addEventListener(
      "click",
      function() {

        const name =
          document
            .querySelector(
              "#timetable-school-name"
            )
            ?.value
            .trim() || "";

        const title =
          document
            .querySelector(
              "#timetable-school-title"
            )
            ?.value
            .trim() || "";

        const days =
          Number(
            document
              .querySelector(
                "#timetable-school-days"
              )
              ?.value || 5
          );


        if (!name) {

          alert(
            "Please enter the school name."
          );

          return;

        }


        timetableState.school.name =
          name;

        timetableState.school.title =
          title;

        timetableState.school.days =
          days;


        showTimetablePanel(
          "classes"
        );

      }
    );


  document
    .querySelector("#timetable-add-class")
    ?.addEventListener(
      "click",
      addTimetableClass
    );


  document
    .querySelector("#timetable-class-name")
    ?.addEventListener(
      "keydown",
      function(event) {

        if (
          event.key === "Enter"
        ) {

          event.preventDefault();

          addTimetableClass();

        }

      }
    );


  document
    .querySelector("#timetable-classes-continue")
    ?.addEventListener(
      "click",
      function() {

        if (
          timetableState.classes.length === 0
        ) {

          alert(
            "Please add at least one class."
          );

          return;

        }


        showTimetablePanel(
          "teachers"
        );

      }
    );


  document
    .querySelector("#timetable-add-teacher")
    ?.addEventListener(
      "click",
      addTimetableTeacher
    );


  document
    .querySelector("#timetable-teacher-name")
    ?.addEventListener(
      "keydown",
      function(event) {

        if (
          event.key === "Enter"
        ) {

          event.preventDefault();

          addTimetableTeacher();

        }

      }
    );


  document
    .querySelector("#timetable-teachers-continue")
    ?.addEventListener(
      "click",
      function() {

        if (
          timetableState.teachers.length === 0
        ) {

          alert(
            "Please add at least one teacher."
          );

          return;

        }


        showTimetablePanel(
          "subjects"
        );

      }
    );


  document
    .querySelector("#timetable-add-subject")
    ?.addEventListener(
      "click",
      addTimetableSubject
    );


  document
    .querySelector("#timetable-subjects-continue")
    ?.addEventListener(
      "click",
      function() {

        if (
          timetableState.subjects.length === 0
        ) {

          alert(
            "Please add at least one subject."
          );

          return;

        }


        showTimetablePanel(
          "assignments"
        );

      }
    );


  document
    .querySelector("#timetable-assignment-teacher")
    ?.addEventListener(
      "change",
      function() {

        renderAssignmentCheckboxes();

      }
    );


  document
    .querySelector("#timetable-add-assignment")
    ?.addEventListener(
      "click",
      addSelectedAssignments
    );


  document
    .querySelector("#timetable-assignments-continue")
    ?.addEventListener(
      "click",
      function() {

        if (
          timetableState.assignments.length === 0
        ) {

          alert(
            "Please add at least one teacher assignment."
          );

          return;

        }


        showTimetablePanel(
          "periods"
        );

      }
    );


  document
    .querySelector("#timetable-add-period")
    ?.addEventListener(
      "click",
      addTimetablePeriod
    );


  document
    .querySelector("#timetable-periods-continue")
    ?.addEventListener(
      "click",
      function() {

        if (
          timetableState.periodStructure
            .activeDays.length === 0
        ) {

          alert(
            "Please select at least one school day."
          );

          return;

        }


        if (
          timetableState.periodStructure
            .entries.length === 0
        ) {

          alert(
            "Please add at least one period."
          );

          return;

        }


        refreshTimetableRequirements();

        showTimetablePanel(
          "requirements"
        );

      }
    );


  document
    .querySelector("#timetable-requirements-continue")
    ?.addEventListener(
      "click",
      continueFromRequirements
    );


  document
    .querySelectorAll(
      "[data-timetable-back]"
    )
    .forEach(
      function(button) {

        button.addEventListener(
          "click",
          function() {

            showTimetablePanel(
              button.dataset.timetableBack
            );

          }
        );

      }
    );


  document
    .querySelectorAll(
      "[data-timetable-step]"
    )
    .forEach(
      function(button) {

        button.addEventListener(
          "click",
          function() {

            const panel =
              button.dataset.timetableStep;

            if (
              panel === "requirements"
            ) {

              refreshTimetableRequirements();

            }


            if (
              panel === "generate"
            ) {

              refreshGenerateSummary();

            }


            showTimetablePanel(
              panel
            );

          }
        );

      }
    );


  bindActiveDayEvents();

}


/* =========================================================
   PANEL NAVIGATION
========================================================= */

function showTimetablePanel(panelName) {

  document
    .querySelectorAll(
      "[data-timetable-panel]"
    )
    .forEach(
      function(panel) {

        panel.classList.toggle(
          "is-active",
          panel.dataset.timetablePanel ===
            panelName
        );

      }
    );


  document
    .querySelectorAll(
      "[data-timetable-step]"
    )
    .forEach(
      function(step) {

        step.classList.toggle(
          "is-active",
          step.dataset.timetableStep ===
            panelName
        );

      }
    );


  if (
    panelName === "assignments"
  ) {

    renderAssignmentControls();

  }


  if (
    panelName === "periods"
  ) {

    renderActiveDays();

    renderPeriodList();

    renderPeriodSummary();

  }


  if (
    panelName === "requirements"
  ) {

    refreshTimetableRequirements();

  }


  if (
    panelName === "generate"
  ) {

    refreshGenerateSummary();

  }

}


/* =========================================================
   CLASSES
========================================================= */

function addTimetableClass() {

  const input =
    document.querySelector(
      "#timetable-class-name"
    );

  const name =
    input?.value.trim() || "";


  if (!name) {

    alert(
      "Please enter a class name."
    );

    return;

  }


  const exists =
    timetableState.classes.some(
      function(item) {

        return (
          item.name.toLowerCase() ===
          name.toLowerCase()
        );

      }
    );


  if (exists) {

    alert(
      "This class has already been added."
    );

    return;

  }


  timetableState.classes.push({

    id:
      "class_" +
      Date.now() +
      "_" +
      Math.random()
        .toString(36)
        .slice(2, 7),

    name: name

  });


  input.value = "";

  renderClasses();

}


/* =========================================================
   TEACHERS
========================================================= */

function addTimetableTeacher() {

  const input =
    document.querySelector(
      "#timetable-teacher-name"
    );

  const name =
    input?.value.trim() || "";


  if (!name) {

    alert(
      "Please enter a teacher name."
    );

    return;

  }


  const exists =
    timetableState.teachers.some(
      function(item) {

        return (
          item.name.toLowerCase() ===
          name.toLowerCase()
        );

      }
    );


  if (exists) {

    alert(
      "This teacher has already been added."
    );

    return;

  }


  timetableState.teachers.push({

    id:
      "teacher_" +
      Date.now() +
      "_" +
      Math.random()
        .toString(36)
        .slice(2, 7),

    name: name,

    availability: {

      days: [],

      periods: []

    }

  });


  input.value = "";

  renderTeachers();

}


/* =========================================================
   SUBJECTS
========================================================= */

function addTimetableSubject() {

  const nameInput =
    document.querySelector(
      "#timetable-subject-name"
    );

  const codeInput =
    document.querySelector(
      "#timetable-subject-code"
    );

  const categoryInput =
    document.querySelector(
      "#timetable-subject-category"
    );


  const name =
    nameInput?.value.trim() || "";

  const code =
    codeInput?.value.trim() || "";

  const category =
    categoryInput?.value.trim() || "";


  if (!name) {

    alert(
      "Please enter a subject name."
    );

    return;

  }


  const exists =
    timetableState.subjects.some(
      function(item) {

        return (
          item.name.toLowerCase() ===
          name.toLowerCase()
        );

      }
    );


  if (exists) {

    alert(
      "This subject has already been added."
    );

    return;

  }


  timetableState.subjects.push({

    id:
      "subject_" +
      Date.now() +
      "_" +
      Math.random()
        .toString(36)
        .slice(2, 7),

    name: name,

    code:
      code || name
        .toUpperCase()
        .replace(/\s+/g, "")
        .slice(0, 6),

    category:
      category || "General"

  });


  nameInput.value = "";

  codeInput.value = "";

  categoryInput.value = "";

  renderSubjects();

}


/* =========================================================
   TEACHER ASSIGNMENTS
========================================================= */

function renderAssignmentControls() {

  const teacherSelect =
    document.querySelector(
      "#timetable-assignment-teacher"
    );


  if (!teacherSelect) {

    return;

  }


  const current =
    teacherSelect.value;


  teacherSelect.innerHTML = `

    <option value="">
      Select teacher
    </option>

    ${timetableState.teachers
      .map(function(teacher) {

        return `

          <option
            value="${teacher.id}"
          >
            ${escapeTimetableHtml(
              teacher.name
            )}
          </option>

        `;

      })
      .join("")}

  `;


  if (
    timetableState.teachers.some(
      function(teacher) {

        return teacher.id === current;

      }
    )
  ) {

    teacherSelect.value = current;

  }


  renderAssignmentCheckboxes();

  renderAssignments();

}


function renderAssignmentCheckboxes() {

  const subjectTarget =
    document.querySelector(
      "#timetable-assignment-subjects"
    );

  const classTarget =
    document.querySelector(
      "#timetable-assignment-classes"
    );


  if (
    !subjectTarget ||
    !classTarget
  ) {

    return;

  }


  subjectTarget.innerHTML =
    timetableState.subjects.length
      ? timetableState.subjects
          .map(function(subject) {

            return `

              <label
                class="timetable-checkbox-option"
              >

                <input
                  type="checkbox"
                  value="${subject.id}"
                  data-assignment-subject
                >

                <span>

                  <strong>
                    ${escapeTimetableHtml(
                      subject.name
                    )}
                  </strong>

                  <small>
                    ${escapeTimetableHtml(
                      subject.code
                    )}
                  </small>

                </span>

              </label>

            `;

          })
          .join("")
      : `

          <div class="timetable-empty-state">
            No subjects available.
          </div>

        `;


  classTarget.innerHTML =
    timetableState.classes.length
      ? timetableState.classes
          .map(function(item) {

            return `

              <label
                class="timetable-checkbox-option"
              >

                <input
                  type="checkbox"
                  value="${item.id}"
                  data-assignment-class
                >

                <span>

                  <strong>
                    ${escapeTimetableHtml(
                      item.name
                    )}
                  </strong>

                </span>

              </label>

            `;

          })
          .join("")
      : `

          <div class="timetable-empty-state">
            No classes available.
          </div>

        `;

}


/* =========================================================
   ADD MULTIPLE ASSIGNMENTS
========================================================= */

function addSelectedAssignments() {

  const teacherSelect =
    document.querySelector(
      "#timetable-assignment-teacher"
    );


  const teacherId =
    teacherSelect?.value || "";


  const selectedSubjects =
    Array.from(
      document.querySelectorAll(
        "[data-assignment-subject]:checked"
      )
    ).map(
      function(input) {

        return input.value;

      }
    );


  const selectedClasses =
    Array.from(
      document.querySelectorAll(
        "[data-assignment-class]:checked"
      )
    ).map(
      function(input) {

        return input.value;

      }
    );


  if (!teacherId) {

    alert(
      "Please select a teacher."
    );

    return;

  }


  if (
    selectedSubjects.length === 0
  ) {

    alert(
      "Please select at least one subject."
    );

    return;

  }


  if (
    selectedClasses.length === 0
  ) {

    alert(
      "Please select at least one class."
    );

    return;

  }


  let addedCount = 0;


  selectedSubjects.forEach(
    function(subjectId) {

      selectedClasses.forEach(
        function(classId) {

          const duplicate =
            timetableState.assignments.some(
              function(item) {

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
              Date.now() +
              "_" +
              Math.random()
                .toString(36)
                .slice(2, 8),

            teacherId:
              teacherId,

            subjectId:
              subjectId,

            classId:
              classId

          });


          addedCount++;

        }
      );

    }
  );


  if (addedCount === 0) {

    alert(
      "All selected teacher assignments already exist."
    );

    return;

  }


  document
    .querySelectorAll(
      "[data-assignment-subject]"
    )
    .forEach(
      function(input) {

        input.checked = false;

      }
    );


  document
    .querySelectorAll(
      "[data-assignment-class]"
    )
    .forEach(
      function(input) {

        input.checked = false;

      }
    );


  renderAssignments();

  refreshTimetableRequirements();

}


/* =========================================================
   ASSIGNMENT LIST
========================================================= */

function renderAssignments() {

  const target =
    document.querySelector(
      "#timetable-assignments-list"
    );


  if (!target) {

    return;

  }


  if (
    timetableState.assignments.length === 0
  ) {

    target.innerHTML = `

      <div class="timetable-empty-state">

        <i class="fa-solid fa-link"></i>

        <h4>
          No Teacher Assignments Yet
        </h4>

        <p>
          Select a teacher, subjects and classes above.
        </p>

      </div>

    `;

    return;

  }


  target.innerHTML =
    timetableState.assignments
      .map(function(assignment) {

        const teacher =
          timetableState.teachers.find(
            function(item) {

              return (
                item.id ===
                assignment.teacherId
              );

            }
          );


        const subject =
          timetableState.subjects.find(
            function(item) {

              return (
                item.id ===
                assignment.subjectId
              );

            }
          );


        const classItem =
          timetableState.classes.find(
            function(item) {

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
                  subject?.name || "Unknown Subject"
                )}
              </strong>

              <span>

                ${escapeTimetableHtml(
                  classItem?.name || "Unknown Class"
                )}

                &nbsp; • &nbsp;

                ${escapeTimetableHtml(
                  teacher?.name || "Unknown Teacher"
                )}

              </span>

            </div>


            <button
              type="button"
              class="timetable-remove-assignment"
              data-remove-assignment="${assignment.id}"
              aria-label="Remove assignment"
            >
              <i class="fa-solid fa-trash"></i>
            </button>

          </div>

        `;

      })
      .join("");


  target
    .querySelectorAll(
      "[data-remove-assignment]"
    )
    .forEach(
      function(button) {

        button.addEventListener(
          "click",
          function() {

            removeAssignment(
              button.dataset.removeAssignment
            );

          }
        );

      }
    );

}


function removeAssignment(id) {

  timetableState.assignments =
    timetableState.assignments.filter(
      function(item) {

        return item.id !== id;

      }
    );


  renderAssignments();

  refreshTimetableRequirements();

}


/* =========================================================
   PERIOD STRUCTURE
========================================================= */

function bindActiveDayEvents() {

  const target =
    document.querySelector(
      "#timetable-active-days"
    );


  if (!target) {

    return;

  }


  target.addEventListener(
    "change",
    function(event) {

      const checkbox =
        event.target.closest(
          "[data-timetable-day]"
        );


      if (!checkbox) {

        return;

      }


      const day =
        checkbox.value;


      if (checkbox.checked) {

        if (
          !timetableState.periodStructure
            .activeDays
            .includes(day)
        ) {

          timetableState.periodStructure
            .activeDays
            .push(day);

        }

      } else {

        timetableState.periodStructure
          .activeDays =
          timetableState.periodStructure
            .activeDays
            .filter(
              function(item) {

                return item !== day;

              }
            );

      }


      timetableState.periodStructure
        .activeDays =
        SCHOOL_DAYS.filter(
          function(item) {

            return timetableState
              .periodStructure
              .activeDays
              .includes(item);

          }
        );


      renderPeriodSummary();

    }
  );

}


function renderActiveDays() {

  const target =
    document.querySelector(
      "#timetable-active-days"
    );


  if (!target) {

    return;

  }


  target.innerHTML =
    SCHOOL_DAYS.map(
      function(day) {

        const checked =
          timetableState.periodStructure
            .activeDays
            .includes(day);


        return `

          <label
            class="timetable-checkbox-option"
          >

            <input
              type="checkbox"
              value="${day}"
              data-timetable-day
              ${checked ? "checked" : ""}
            >

            <span>

              <strong>
                ${day}
              </strong>

            </span>

          </label>

        `;

      }
    )
    .join("");

}


function addTimetablePeriod() {

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

  const typeInput =
    document.querySelector(
      "#timetable-period-type"
    );


  const label =
    labelInput?.value.trim() || "";

  const start =
    startInput?.value || "";

  const end =
    endInput?.value || "";

  const type =
    typeInput?.value || "teaching";


  if (
    !label ||
    !start ||
    !end
  ) {

    alert(
      "Please enter the period name, start time and end time."
    );

    return;

  }


  if (
    end <= start
  ) {

    alert(
      "End time must be later than start time."
    );

    return;

  }


  const overlap =
    timetableState.periodStructure
      .entries
      .some(
        function(entry) {

          return (
            start < entry.end &&
            end > entry.start
          );

        }
      );


  if (overlap) {

    alert(
      "This period overlaps an existing period."
    );

    return;

  }


  timetableState.periodStructure
    .entries
    .push({

      id:
        "period_" +
        Date.now() +
        "_" +
        Math.random()
          .toString(36)
          .slice(2, 7),

      label: label,

      start: start,

      end: end,

      type: type

    });


  sortPeriodEntries();


  labelInput.value = "";

  startInput.value =
    timetableState.periodStructure
      .entries[
        timetableState.periodStructure
          .entries.length - 1
      ]?.end || "";

  endInput.value =
    getTimeAfter(
      startInput.value || "08:00",
      40
    );


  renderPeriodList();

  renderPeriodSummary();

}


function sortPeriodEntries() {

  timetableState.periodStructure
    .entries
    .sort(
      function(a, b) {

        return a.start.localeCompare(
          b.start
        );

      }
    );

}


function renderPeriodList() {

  const target =
    document.querySelector(
      "#timetable-period-list"
    );


  if (!target) {

    return;

  }


  const entries =
    timetableState.periodStructure
      .entries;


  if (!entries.length) {

    target.innerHTML = `

      <div class="timetable-empty-state">

        <i class="fa-solid fa-clock"></i>

        <h4>
          No Periods Added
        </h4>

        <p>
          Add the periods and activities that make up
          the school day.
        </p>

      </div>

    `;

    return;

  }


  target.innerHTML =
    entries
      .map(function(entry, index) {

        const type =
          PERIOD_TYPES.find(
            function(item) {

              return (
                item.value ===
                entry.type
              );

            }
          );


        return `

          <div
            class="timetable-period-item"
          >

            <div class="timetable-period-position">

              ${index + 1}

            </div>


            <div
              class="timetable-period-details"
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

                &nbsp; • &nbsp;

                ${escapeTimetableHtml(
                  type?.label || entry.type
                )}

              </span>

            </div>


            <div
              class="timetable-period-controls"
            >

              <button
                type="button"
                data-period-up="${entry.id}"
                ${index === 0 ? "disabled" : ""}
                aria-label="Move period up"
              >
                <i class="fa-solid fa-chevron-up"></i>
              </button>


              <button
                type="button"
                data-period-down="${entry.id}"
                ${index === entries.length - 1 ? "disabled" : ""}
                aria-label="Move period down"
              >
                <i class="fa-solid fa-chevron-down"></i>
              </button>


              <button
                type="button"
                class="timetable-remove-period"
                data-period-remove="${entry.id}"
                aria-label="Remove period"
              >
                <i class="fa-solid fa-trash"></i>
              </button>

            </div>

          </div>

        `;

      })
      .join("");


  target
    .querySelectorAll(
      "[data-period-up]"
    )
    .forEach(
      function(button) {

        button.addEventListener(
          "click",
          function() {

            movePeriod(
              button.dataset.periodUp,
              -1
            );

          }
        );

      }
    );


  target
    .querySelectorAll(
      "[data-period-down]"
    )
    .forEach(
      function(button) {

        button.addEventListener(
          "click",
          function() {

            movePeriod(
              button.dataset.periodDown,
              1
            );

          }
        );

      }
    );


  target
    .querySelectorAll(
      "[data-period-remove]"
    )
    .forEach(
      function(button) {

        button.addEventListener(
          "click",
          function() {

            removePeriod(
              button.dataset.periodRemove
            );

          }
        );

      }
    );

}


function movePeriod(id, direction) {

  const entries =
    timetableState.periodStructure
      .entries;


  const index =
    entries.findIndex(
      function(item) {

        return item.id === id;

      }
    );


  if (index === -1) {

    return;

  }


  const newIndex =
    index + direction;


  if (
    newIndex < 0 ||
    newIndex >= entries.length
  ) {

    return;

  }


  const current =
    entries[index];


  entries[index] =
    entries[newIndex];

  entries[newIndex] =
    current;


  renderPeriodList();

}


function removePeriod(id) {

  timetableState.periodStructure
    .entries =
    timetableState.periodStructure
      .entries
      .filter(
        function(item) {

          return item.id !== id;

        }
      );


  renderPeriodList();

  renderPeriodSummary();

}


function renderPeriodSummary() {

  const target =
    document.querySelector(
      "#timetable-period-summary"
    );


  if (!target) {

    return;

  }


  const entries =
    timetableState.periodStructure
      .entries;


  const teaching =
    entries.filter(
      function(item) {

        return item.type === "teaching";

      }
    ).length;


  const nonTeaching =
    entries.length -
    teaching;


  target.innerHTML = `

    <div class="timetable-summary-card">

      <strong>
        ${entries.length}
      </strong>

      <span>
        Total Entries
      </span>

    </div>


    <div class="timetable-summary-card">

      <strong>
        ${teaching}
      </strong>

      <span>
        Teaching Periods
      </span>

    </div>


    <div class="timetable-summary-card">

      <strong>
        ${nonTeaching}
      </strong>

      <span>
        Non-Teaching
      </span>

    </div>


    <div class="timetable-summary-card">

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


/* =========================================================
   PHASE 2F — REQUIREMENTS
========================================================= */

/*
   Requirements are generated from unique
   Subject + Class combinations found in
   teacher assignments.

   Teacher assignment:
     Teacher + Subject + Class

   Requirement:
     Subject + Class

   This means multiple teachers cannot accidentally
   create duplicate subject/class requirements.
*/

function refreshTimetableRequirements() {

  const combinations = [];


  timetableState.assignments
    .forEach(
      function(assignment) {

        const key =
          assignment.subjectId +
          "::" +
          assignment.classId;


        const exists =
          combinations.some(
            function(item) {

              return item.key === key;

            }
          );


        if (!exists) {

          combinations.push({

            key: key,

            subjectId:
              assignment.subjectId,

            classId:
              assignment.classId

          });

        }

      }
    );


  /*
     Preserve values already configured by the user.
  */

  timetableState.requirements =
    combinations.map(
      function(combination) {

        const previous =
          timetableState.requirements
            .find(
              function(item) {

                return (
                  item.subjectId ===
                    combination.subjectId &&
                  item.classId ===
                    combination.classId
                );

              }
            );


        return {

          id:
            previous?.id ||
            (
              "requirement_" +
              Date.now() +
              "_" +
              Math.random()
                .toString(36)
                .slice(2, 8)
            ),

          subjectId:
            combination.subjectId,

          classId:
            combination.classId,

          lessonsPerWeek:
            previous?.lessonsPerWeek ??
            1,

          maxConsecutive:
            previous?.maxConsecutive ??
            1,

          allowConsecutive:
            previous?.allowConsecutive ??
            true

        };

      }
    );


  renderRequirements();

}


function renderRequirements() {

  const target =
    document.querySelector(
      "#timetable-requirements-list"
    );

  const empty =
    document.querySelector(
      "#timetable-requirements-empty"
    );

  const summary =
    document.querySelector(
      "#timetable-requirements-summary"
    );


  if (
    !target ||
    !empty ||
    !summary
  ) {

    return;

  }


  if (
    timetableState.requirements.length === 0
  ) {

    target.innerHTML = "";

    empty.hidden = false;

    summary.innerHTML = "";

    return;

  }


  empty.hidden = true;


  target.innerHTML =
    timetableState.requirements
      .map(function(requirement, index) {

        const subject =
          timetableState.subjects.find(
            function(item) {

              return (
                item.id ===
                requirement.subjectId
              );

            }
          );


        const classItem =
          timetableState.classes.find(
            function(item) {

              return (
                item.id ===
                requirement.classId
              );

            }
          );


        return `

          <div
            class="timetable-requirement-card"
            data-requirement-card="${requirement.id}"
          >

            <div class="timetable-requirement-heading">

              <div>

                <span class="timetable-requirement-number">
                  ${index + 1}
                </span>

                <div>

                  <h4>
                    ${escapeTimetableHtml(
                      subject?.name ||
                      "Unknown Subject"
                    )}
                  </h4>

                  <p>
                    ${escapeTimetableHtml(
                      classItem?.name ||
                      "Unknown Class"
                    )}

                    ${
                      subject?.code
                        ? ` • ${escapeTimetableHtml(
                            subject.code
                          )}`
                        : ""
                    }

                  </p>

                </div>

              </div>

            </div>


            <div class="timetable-requirement-fields">


              <div class="timetable-form-group">

                <label
                  for="requirement-lessons-${requirement.id}"
                >
                  Lessons Per Week
                </label>

                <input
                  type="number"
                  min="1"
                  max="30"
                  value="${requirement.lessonsPerWeek}"
                  id="requirement-lessons-${requirement.id}"
                  data-requirement-lessons="${requirement.id}"
                >

                <small>
                  How many times should this subject
                  appear for this class each week?
                </small>

              </div>


              <div class="timetable-form-group">

                <label
                  for="requirement-consecutive-${requirement.id}"
                >
                  Maximum Consecutive Lessons
                </label>

                <select
                  id="requirement-consecutive-${requirement.id}"
                  data-requirement-consecutive="${requirement.id}"
                >

                  ${[1, 2, 3, 4]
                    .map(function(value) {

                      return `

                        <option
                          value="${value}"
                          ${
                            Number(
                              requirement.maxConsecutive
                            ) === value
                              ? "selected"
                              : ""
                          }
                        >
                          ${value}
                        </option>

                      `;

                    })
                    .join("")}

                </select>

                <small>
                  Prevents the scheduler from placing
                  too many consecutive lessons.
                </small>

              </div>


              <div
                class="timetable-requirement-toggle"
              >

                <label
                  class="timetable-switch-option"
                >

                  <input
                    type="checkbox"
                    data-requirement-consecutive-toggle="${requirement.id}"
                    ${
                      requirement.allowConsecutive
                        ? "checked"
                        : ""
                    }
                  >

                  <span
                    class="timetable-switch"
                  ></span>

                  <span>

                    <strong>
                      Allow consecutive lessons
                    </strong>

                    <small>
                      Allows this subject to occupy
                      consecutive periods when needed.
                    </small>

                  </span>

                </label>

              </div>


            </div>

          </div>

        `;

      })
      .join("");


  bindRequirementEvents();

  renderRequirementSummary();

}


function bindRequirementEvents() {

  document
    .querySelectorAll(
      "[data-requirement-lessons]"
    )
    .forEach(
      function(input) {

        input.addEventListener(
          "change",
          function() {

            const id =
              input.dataset
                .requirementLessons;


            const value =
              Math.max(
                1,
                Math.min(
                  30,
                  Number(input.value) || 1
                )
              );


            input.value =
              value;


            const requirement =
              findRequirement(id);


            if (requirement) {

              requirement.lessonsPerWeek =
                value;

            }


            renderRequirementSummary();

          }
        );

      }
    );


  document
    .querySelectorAll(
      "[data-requirement-consecutive]"
    )
    .forEach(
      function(select) {

        select.addEventListener(
          "change",
          function() {

            const requirement =
              findRequirement(
                select.dataset
                  .requirementConsecutive
              );


            if (requirement) {

              requirement.maxConsecutive =
                Number(select.value) || 1;

            }

          }
        );

      }
    );


  document
    .querySelectorAll(
      "[data-requirement-consecutive-toggle]"
    )
    .forEach(
      function(input) {

        input.addEventListener(
          "change",
          function() {

            const requirement =
              findRequirement(
                input.dataset
                  .requirementConsecutiveToggle
              );


            if (requirement) {

              requirement.allowConsecutive =
                input.checked;

            }

          }
        );

      }
    );

}


function findRequirement(id) {

  return timetableState.requirements
    .find(
      function(item) {

        return item.id === id;

      }
    );

}


function renderRequirementSummary() {

  const target =
    document.querySelector(
      "#timetable-requirements-summary"
    );


  if (!target) {

    return;

  }


  const requirements =
    timetableState.requirements;


  if (!requirements.length) {

    target.innerHTML = "";

    return;

  }


  const totalLessons =
    requirements.reduce(
      function(total, item) {

        return (
          total +
          Number(item.lessonsPerWeek || 0)
        );

      },
      0
    );


  const consecutiveAllowed =
    requirements.filter(
      function(item) {

        return item.allowConsecutive;

      }
    ).length;


  target.innerHTML = `

    <div class="timetable-summary-card">

      <strong>
        ${requirements.length}
      </strong>

      <span>
        Subject/Class Requirements
      </span>

    </div>


    <div class="timetable-summary-card">

      <strong>
        ${totalLessons}
      </strong>

      <span>
        Weekly Lessons Required
      </span>

    </div>


    <div class="timetable-summary-card">

      <strong>
        ${consecutiveAllowed}
      </strong>

      <span>
        Allow Consecutive
      </span>

    </div>

  `;

}


/* =========================================================
   REQUIREMENT VALIDATION
========================================================= */

function validateRequirements() {

  if (
    timetableState.requirements.length === 0
  ) {

    return {

      valid: false,

      message:
        "No subject requirements have been configured."

    };

  }


  for (
    const requirement
    of timetableState.requirements
  ) {

    if (
      Number(
        requirement.lessonsPerWeek
      ) < 1
    ) {

      return {

        valid: false,

        message:
          "Every subject must have at least one lesson per week."

      };

    }


    if (
      Number(
        requirement.maxConsecutive
      ) < 1
    ) {

      return {

        valid: false,

        message:
          "Maximum consecutive lessons must be at least 1."

      };

    }


    if (
      !requirement.allowConsecutive
    ) {

      requirement.maxConsecutive =
        1;

    }

  }


  return {

    valid: true

  };

}


/* =========================================================
   CONTINUE TO GENERATE
========================================================= */

function continueFromRequirements() {

  const validation =
    validateRequirements();


  if (!validation.valid) {

    alert(
      validation.message
    );

    return;

  }


  refreshGenerateSummary();

  showTimetablePanel(
    "generate"
  );

}


/* =========================================================
   GENERATE SUMMARY
========================================================= */

function refreshGenerateSummary() {

  const target =
    document.querySelector(
      "#timetable-generate-summary"
    );


  if (!target) {

    return;

  }


  const school =
    timetableState.school;


  const teachingPeriods =
    timetableState.periodStructure
      .entries
      .filter(
        function(item) {

          return item.type === "teaching";

        }
      )
      .length;


  const weeklyLessons =
    timetableState.requirements
      .reduce(
        function(total, item) {

          return (
            total +
            Number(
              item.lessonsPerWeek || 0
            )
          );

        },
        0
      );


  target.innerHTML = `

    <div class="timetable-generate-grid">


      <div class="timetable-generate-card">

        <i class="fa-solid fa-school"></i>

        <span>
          School
        </span>

        <strong>
          ${escapeTimetableHtml(
            school.name || "Not specified"
          )}
        </strong>

      </div>


      <div class="timetable-generate-card">

        <i class="fa-solid fa-users"></i>

        <span>
          Classes
        </span>

        <strong>
          ${timetableState.classes.length}
        </strong>

      </div>


      <div class="timetable-generate-card">

        <i class="fa-solid fa-chalkboard-user"></i>

        <span>
          Teachers
        </span>

        <strong>
          ${timetableState.teachers.length}
        </strong>

      </div>


      <div class="timetable-generate-card">

        <i class="fa-solid fa-book"></i>

        <span>
          Subjects
        </span>

        <strong>
          ${timetableState.subjects.length}
        </strong>

      </div>


      <div class="timetable-generate-card">

        <i class="fa-solid fa-link"></i>

        <span>
          Assignments
        </span>

        <strong>
          ${timetableState.assignments.length}
        </strong>

      </div>


      <div class="timetable-generate-card">

        <i class="fa-solid fa-clock"></i>

        <span>
          Teaching Periods
        </span>

        <strong>
          ${teachingPeriods}
        </strong>

      </div>


      <div class="timetable-generate-card">

        <i class="fa-solid fa-list-check"></i>

        <span>
          Requirements
        </span>

        <strong>
          ${timetableState.requirements.length}
        </strong>

      </div>


      <div class="timetable-generate-card">

        <i class="fa-solid fa-calendar-week"></i>

        <span>
          Weekly Lessons
        </span>

        <strong>
          ${weeklyLessons}
        </strong>

      </div>


    </div>

  `;

}


/* =========================================================
   RENDER ALL
========================================================= */

function renderAllTimetableData() {

  renderClasses();

  renderTeachers();

  renderSubjects();

  renderAssignmentControls();

  renderAssignments();

  renderActiveDays();

  renderPeriodList();

  renderPeriodSummary();

  refreshTimetableRequirements();

}


/* =========================================================
   CLASSES RENDER
========================================================= */

function renderClasses() {

  const target =
    document.querySelector(
      "#timetable-classes-list"
    );


  if (!target) {

    return;

  }


  if (
    timetableState.classes.length === 0
  ) {

    target.innerHTML = `

      <div class="timetable-empty-state">

        <i class="fa-solid fa-users"></i>

        <h4>
          No Classes Added
        </h4>

        <p>
          Add your school's classes above.
        </p>

      </div>

    `;

    return;

  }


  target.innerHTML =
    timetableState.classes
      .map(function(item, index) {

        return `

          <div class="timetable-list-item">

            <div>

              <strong>
                ${escapeTimetableHtml(
                  item.name
                )}
              </strong>

              <span>
                Class ${index + 1}
              </span>

            </div>


            <button
              type="button"
              class="timetable-remove-item"
              data-remove-class="${item.id}"
            >
              <i class="fa-solid fa-trash"></i>
            </button>

          </div>

        `;

      })
      .join("");


  target
    .querySelectorAll(
      "[data-remove-class]"
    )
    .forEach(
      function(button) {

        button.addEventListener(
          "click",
          function() {

            const id =
              button.dataset.removeClass;


            timetableState.classes =
              timetableState.classes
                .filter(
                  function(item) {

                    return item.id !== id;

                  }
                );


            timetableState.assignments =
              timetableState.assignments
                .filter(
                  function(item) {

                    return item.classId !== id;

                  }
                );


            renderClasses();

            renderAssignmentControls();

            renderAssignments();

            refreshTimetableRequirements();

          }
        );

      }
    );

}


/* =========================================================
   TEACHERS RENDER
========================================================= */

function renderTeachers() {

  const target =
    document.querySelector(
      "#timetable-teachers-list"
    );


  if (!target) {

    return;

  }


  if (
    timetableState.teachers.length === 0
  ) {

    target.innerHTML = `

      <div class="timetable-empty-state">

        <i class="fa-solid fa-chalkboard-user"></i>

        <h4>
          No Teachers Added
        </h4>

        <p>
          Add your school's teachers above.
        </p>

      </div>

    `;

    return;

  }


  target.innerHTML =
    timetableState.teachers
      .map(function(item, index) {

        return `

          <div class="timetable-list-item">

            <div>

              <strong>
                ${escapeTimetableHtml(
                  item.name
                )}
              </strong>

              <span>
                Teacher ${index + 1}
              </span>

            </div>


            <button
              type="button"
              class="timetable-remove-item"
              data-remove-teacher="${item.id}"
            >
              <i class="fa-solid fa-trash"></i>
            </button>

          </div>

        `;

      })
      .join("");


  target
    .querySelectorAll(
      "[data-remove-teacher]"
    )
    .forEach(
      function(button) {

        button.addEventListener(
          "click",
          function() {

            const id =
              button.dataset.removeTeacher;


            timetableState.teachers =
              timetableState.teachers
                .filter(
                  function(item) {

                    return item.id !== id;

                  }
                );


            timetableState.assignments =
              timetableState.assignments
                .filter(
                  function(item) {

                    return item.teacherId !== id;

                  }
                );


            renderTeachers();

            renderAssignmentControls();

            renderAssignments();

            refreshTimetableRequirements();

          }
        );

      }
    );

}


/* =========================================================
   SUBJECTS RENDER
========================================================= */

function renderSubjects() {

  const target =
    document.querySelector(
      "#timetable-subjects-list"
    );


  if (!target) {

    return;

  }


  if (
    timetableState.subjects.length === 0
  ) {

    target.innerHTML = `

      <div class="timetable-empty-state">

        <i class="fa-solid fa-book"></i>

        <h4>
          No Subjects Added
        </h4>

        <p>
          Add your school's subjects above.
        </p>

      </div>

    `;

    return;

  }


  target.innerHTML =
    timetableState.subjects
      .map(function(item, index) {

        return `

          <div class="timetable-list-item">

            <div>

              <strong>
                ${escapeTimetableHtml(
                  item.name
                )}
              </strong>

              <span>

                ${escapeTimetableHtml(
                  item.code
                )}

                &nbsp; • &nbsp;

                ${escapeTimetableHtml(
                  item.category
                )}

              </span>

            </div>


            <button
              type="button"
              class="timetable-remove-item"
              data-remove-subject="${item.id}"
            >
              <i class="fa-solid fa-trash"></i>
            </button>

          </div>

        `;

      })
      .join("");


  target
    .querySelectorAll(
      "[data-remove-subject]"
    )
    .forEach(
      function(button) {

        button.addEventListener(
          "click",
          function() {

            const id =
              button.dataset.removeSubject;


            timetableState.subjects =
              timetableState.subjects
                .filter(
                  function(item) {

                    return item.id !== id;

                  }
                );


            timetableState.assignments =
              timetableState.assignments
                .filter(
                  function(item) {

                    return item.subjectId !== id;

                  }
                );


            renderSubjects();

            renderAssignmentControls();

            renderAssignments();

            refreshTimetableRequirements();

          }
        );

      }
    );

}


/* =========================================================
   HELPERS
========================================================= */

function getTimeAfter(
  time,
  minutes
) {

  if (!time) {

    return "";

  }


  const parts =
    time.split(":");


  let total =
    Number(parts[0]) * 60 +
    Number(parts[1]);


  total += minutes;


  const hours =
    Math.floor(total / 60) % 24;


  const mins =
    total % 60;


  return (
    String(hours).padStart(2, "0") +
    ":" +
    String(mins).padStart(2, "0")
  );

}


function escapeTimetableHtml(value) {

  return String(
    value ?? ""
  )
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
   DEBUG / FUTURE PHASE ACCESS
========================================================= */

window.tupsTimetableState =
  timetableState;