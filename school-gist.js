/* ============================================================
   TUPS SCHOOL GIST
   ------------------------------------------------------------
   Complete standalone School Gist module.

   Loaded dynamically from app.js:

       const module = await import("./school-gist.js");
       module.loadSchoolGist();

   IMPORTANT:
   - Each story belongs to ONE section only.
   - Stories are never recycled into another section.
   - Social posts are kept separate from normal education news.
   - No external JS dependency.
   - Images are lazy-loaded.
   - Missing images use a safe visual fallback.
============================================================ */


/* ============================================================
   CONFIGURATION
============================================================ */

const SCHOOL_GIST_PER_PAGE = 4;


/* ============================================================
   PAGINATION STATE
============================================================ */

const schoolGistPages = {
    hot: 1,
    trending: 1,
    achievements: 1,
    sports: 1,
    schoolLife: 1,
    social: 1,
    buzz: 1
};


/* ============================================================
   SCHOOL GIST DATA
   ------------------------------------------------------------
   RULE:
   Every story MUST have exactly ONE section.
   
   Valid sections:
   hot
   trending
   achievements
   sports
   schoolLife
   social
   buzz
============================================================ */

const schoolGistItems = [

    /* ========================================================
       HOT RIGHT NOW
    ======================================================== */

    {
        id: "destiny-innovators",
        title:
            "Young Nigerian innovators win big with school technology ideas",
        category: "Achievements",
        section: "hot",
        location: "Nigeria",
        date: "September 14, 2026",
        source: "Guardian Nigeria",
        image:
            "https://cdn.guardian.ng/wp-content/uploads/2026/09/Innovators.jpg",
        summary:
            "Secondary school students were rewarded after developing technology solutions for education, school security, food production and other challenges.",
        url:
            "https://guardian.ng/news/ngo-rewards-young-nigerian-tech-innovators/"
    },

    {
        id: "mike-okonkwo",
        title:
            "Three Nigerian secondary school students collect essay competition prizes",
        category: "Awards",
        section: "hot",
        location: "Nigeria",
        date: "September 12, 2026",
        source: "Guardian Nigeria",
        image:
            "https://cdn.guardian.ng/wp-content/uploads/2026/09/Bishop-Mike-Okonkwo-1234.jpg",
        summary:
            "Clinton Chimenem Agburum, Mosorireoluwa Alimi-Adeiga and Oloruntimilehin Elijah Oladipo were rewarded after emerging top three in the 2026 Mike Okonkwo National Essay Competition.",
        url:
            "https://guardian.ng/news/winners-of-mike-okonkwo-essay-competition-get-prizes-3/"
    },

    {
        id: "nema-students",
        title:
            "Students win NEMA national essay competition prizes",
        category: "Student Achievement",
        section: "hot",
        location: "Abuja / Nigeria",
        date: "September 10, 2026",
        source: "Guardian Nigeria",
        image:
            "https://cdn.guardian.ng/wp-content/uploads/2026/05/fast2115.webp",
        summary:
            "Students from Murphy-Tonia Schools, Faith Academy and Government Secondary School, Gwarinpa emerged among the top winners in NEMA's 2026 National Essay Competition.",
        url:
            "https://guardian.ng/news/nema-tasks-youths-on-disaster-risk-reduction/"
    },

    {
        id: "premiere-energy",
        title:
            "Abuja's Premiere Academy wins Battle of the Energy Titans",
        category: "STEM / Innovation",
        section: "hot",
        location: "Abuja, FCT",
        date: "June 16, 2026",
        source: "Guardian Nigeria",
        image:
            "https://cdn.guardian.ng/wp-content/uploads/2026/06/fast2835.webp",
        summary:
            "Premiere Academy defeated 11 other finalists to win the 2026 Battle of the Energy Titans competition at the Youth Energy STEAM Festival.",
        url:
            "https://guardian.ng/education/premiere-academy-emerges-winner-of-2026-battle-of-the-energy-titans-competition/"
    },


    /* ========================================================
       TRENDING
    ======================================================== */

    {
        id: "iwerekun-science",
        title:
            "Iwerekun Community School wins science challenge for the third time",
        category: "STEM / Competition",
        section: "trending",
        location: "Ibeju-Lekki, Lagos",
        date: "July 2, 2026",
        source: "Guardian Nigeria",
        image:
            "https://cdn.guardian.ng/wp-content/uploads/2026/07/Tolaram-Science-Challenge.jpg",
        summary:
            "Iwerekun Community Senior High School defeated Magbon-Alade Senior Grammar School and secured its third consecutive Tolaram Science Challenge title.",
        url:
            "https://guardian.ng/education/iwerekun-community-school-wins-science-challenge/"
    },

    {
        id: "oregun-spelling",
        title:
            "Oregun Senior High School wins World Literacy Day spelling bee",
        category: "Spelling Bee",
        section: "trending",
        location: "Lagos",
        date: "September 12, 2026",
        source: "Independent Nigeria",
        image:
            "https://independent.ng/wp-content/uploads/2026/09/1-62.png",
        summary:
            "Akinade Oluwaferanmi Eunice of Oregun Senior High School helped her school secure first place in a reading and spelling bee competition.",
        url:
            "https://independent.ng/laureates-say/"
    },

    {
        id: "dairy-farm",
        title:
            "Dairy Farm Senior Secondary School finishes second in spelling bee",
        category: "Spelling Bee",
        section: "trending",
        location: "Lagos",
        date: "September 12, 2026",
        source: "Independent Nigeria",
        image:
            "https://independent.ng/wp-content/uploads/2026/09/1-63.png",
        summary:
            "Dairy Farm Senior Secondary School came second in the World Literacy Day reading and spelling bee competition organised by Lions International District 404B6 Nigeria.",
        url:
            "https://independent.ng/laureates-say/"
    },

    {
        id: "state-grammar",
        title:
            "State Senior Grammar School (Special) takes third place",
        category: "Spelling Bee",
        section: "trending",
        location: "Lagos",
        date: "September 12, 2026",
        source: "Independent Nigeria",
        image:
            "https://independent.ng/wp-content/uploads/2026/09/1-64.png",
        summary:
            "State Senior Grammar School (Special) secured third place in the World Literacy Day reading and spelling bee competition.",
        url:
            "https://independent.ng/laureates-say/"
    },


    /* ========================================================
       ACHIEVEMENTS & AWARDS
    ======================================================== */

    {
        id: "dacurate-quiz",
        title:
            "Igbeyinadun Primary School takes leadership quiz crown",
        category: "Quiz / Competition",
        section: "achievements",
        location: "Lagos",
        date: "May 31, 2026",
        source: "Guardian Nigeria",
        image:
            "https://cdn.guardian.ng/wp-content/uploads/2026/05/fast2338.webp",
        summary:
            "Igbeyinadun Primary School defeated 14 other finalists to win the third Dacurate Primary School Leadership Quiz.",
        url:
            "https://guardian.ng/education/igbeyinadun-school-wins-3rd-dacurate-primary-school-leadership-quiz/"
    },

    {
        id: "lasu-first-class",
        title:
            "From missing UI admission to LASU First Class triumph",
        category: "Student Story",
        section: "achievements",
        location: "Lagos",
        date: "September 3, 2026",
        source: "Teen Trust",
        image:
            "https://teentrust.ng/wp-content/uploads/2026/09/d9e7ca7dfad749c3.jpeg",
        summary:
            "Faith Oluwasegun Olateju's unexpected university journey ended with First Class Honours in Economics from Lagos State University.",
        url:
            "https://teentrust.ng/from-missing-ui-admission-to-lasu-first-class-triumph-in-three-years/"
    },


    /* ========================================================
       SPORTS & COMPETITIONS
    ======================================================== */

    {
        id: "pearl-quiz",
        title:
            "Notre Dame College wins PEARLs Quiz after 476 schools compete",
        category: "Quiz / Competition",
        section: "sports",
        location: "Delta State",
        date: "July 6, 2026",
        source: "Independent Nigeria",
        image: "",
        summary:
            "Notre Dame College, Ozoro emerged overall winner of the 2026 PEARLs Quiz, while the competition also featured a STEAM Innovation Showcase.",
        url:
            "https://independent.ng/nepl-seplat-energy-jv-celebrates-academic-excellence-as-pearls-quiz-impacts-57000-students/"
    },


    /* ========================================================
       SCHOOL LIFE
    ======================================================== */

    {
        id: "lagos-arts",
        title:
            "Lagos students shine at Eko Schools Arts and Crafts competition",
        category: "Arts / Creativity",
        section: "schoolLife",
        location: "Lagos",
        date: "June 27, 2026",
        source: "Independent Nigeria",
        image: "",
        summary:
            "Hundreds of students participated in the Eko Schools Arts and Crafts competition, with nine students emerging winners across junior, senior and tertiary categories.",
        url:
            "https://independent.ng/lagos-hosts-second-eko-schools-arts-and-crafts-competition-rewards-outstanding-students/"
    },


    /* ========================================================
       SOCIAL SCHOOL POSTS
       --------------------------------------------------------
       These are PUBLIC social-media school/community posts.
       They are deliberately kept separate from conventional
       education news.
    ======================================================== */

    {
        id: "brickhall-instagram",
        title:
            "Brickhall School Abuja shares its 2026/2027 admissions drive",
        category: "Instagram School Post",
        section: "social",
        location: "Kaura, Abuja",
        date: "August 24, 2026",
        source:
            "Instagram · @brickhallschool_abuja",
        image: "",
        summary:
            "Brickhall School Abuja shared a public Instagram post highlighting its Early Years, Primary and College admissions for the 2026/2027 academic session.",
        url:
            "https://www.instagram.com/p/DcbqMiqsRjV/",
        social: true,
        platform: "Instagram"
    },

    {
        id: "glowing-ages-instagram",
        title:
            "School Talk puts Glowing Ages Academy Abuja in the spotlight",
        category: "School Spotlight",
        section: "social",
        location: "Kaura, Abuja",
        date: "September 3, 2026",
        source:
            "Instagram · @all.school.talk",
        image: "",
        summary:
            "School Talk highlighted Glowing Ages Academy in Kaura District, Abuja, showcasing the school community and its journey from early years through secondary education.",
        url:
            "https://www.instagram.com/p/Dc0jA6JKcKQ/",
        social: true,
        platform: "Instagram"
    },

    {
        id: "dealpha-regal-instagram",
        title:
            "De Alpha Regal Academy shares a parent story from Abuja",
        category: "Parent / School Life",
        section: "social",
        location: "Galadimawa, Abuja",
        date: "September 7, 2026",
        source:
            "Instagram · @dealpharegalacademy",
        image: "",
        summary:
            "De Alpha Regal Academy shared a public parent testimonial about a child's learning journey while announcing admissions across Crèche, Preschool, Nursery and Primary.",
        url:
            "https://www.instagram.com/p/Dc-sDUgOLP3/",
        social: true,
        platform: "Instagram"
    },

    {
        id: "seed-glory-instagram",
        title:
            "Seed of Glory College turns language learning into a fun challenge",
        category: "Student Life",
        section: "social",
        location: "Gwarinpa, Abuja",
        date: "September 2026",
        source:
            "Instagram · @seedofglorycollege",
        image: "",
        summary:
            "Students at Seed of Glory College took part in a public language challenge featuring greetings from different cultures and languages.",
        url:
            "https://www.instagram.com/seedofglorycollege/",
        social: true,
        platform: "Instagram"
    },


    /* ========================================================
       BUZZ & GOSSIP
       --------------------------------------------------------
       Intentionally empty for now.
       
       We DO NOT recycle stories from other sections.
       New verified public buzz stories will be added here.
    ======================================================== */

];


/* ============================================================
   SECTION DEFINITIONS
============================================================ */

const gistSections = [

    {
        id: "hot",
        title: "🔥 HOT RIGHT NOW",
        description:
            "The stories everybody is talking about."
    },

    {
        id: "trending",
        title: "👀 TRENDING SCHOOL GIST",
        description:
            "Fresh school stories, competitions and happenings."
    },

    {
        id: "achievements",
        title: "🏆 ACHIEVEMENTS & AWARDS",
        description:
            "Students and schools making us proud."
    },

    {
        id: "sports",
        title: "⚽ SPORTS & COMPETITIONS",
        description:
            "Competition, teamwork and school victories."
    },

    {
        id: "schoolLife",
        title: "📸 SCHOOL LIFE",
        description:
            "What is happening around Nigerian schools."
    },

    {
        id: "social",
        title: "📱 SOCIAL SCHOOL POSTS",
        description:
            "Fresh public posts from schools and education communities."
    },

    {
        id: "buzz",
        title: "😂 BUZZ & GOSSIP",
        description:
            "Interesting public school conversations and happenings."
    }

];


/* ============================================================
   PUBLIC ENTRY POINT
============================================================ */

export function loadSchoolGist() {

    try {

        /*
         * Reset pagination every time the module is opened.
         */
        Object.keys(schoolGistPages).forEach(section => {
            schoolGistPages[section] = 1;
        });


        renderSchoolGist();

    } catch (error) {

        console.error(
            "TUPS School Gist failed to load:",
            error
        );

        renderSchoolGistError();

    }

}


/* ============================================================
   MAIN RENDER
============================================================ */

function renderSchoolGist() {

    const contentArea =
        document.querySelector("#content-area") ||
        document.querySelector(".content-area") ||
        document.querySelector("main");


    if (!contentArea) {

        console.error(
            "TUPS School Gist: content area not found."
        );

        return;

    }


    contentArea.innerHTML = `

        <section class="content-page school-gist-page">

            <header class="school-gist-header">

                <div class="school-gist-kicker">
                    <i class="fa-solid fa-fire"></i>
                    TUPS EDUCATION HUB
                </div>

                <h1>
                    🔥 SCHOOL GIST &amp; GOSSIP
                </h1>

                <p>
                    The latest school happenings, achievements,
                    competitions, social posts and interesting
                    stories from around the education community.
                </p>

            </header>


            <div class="school-gist-topic-bar">

                <span>
                    <i class="fa-solid fa-bolt"></i>
                    Fresh school stories
                </span>

                <span>
                    <i class="fa-solid fa-school"></i>
                    Nigerian schools
                </span>

                <span>
                    <i class="fa-solid fa-mobile-screen-button"></i>
                    Public social posts
                </span>

            </div>


            <div
                class="school-gist-sections"
                id="school-gist-sections"
            ></div>


            <div class="school-gist-source-note">

                <i class="fa-solid fa-circle-info"></i>

                <span>
                    School Gist combines publicly available
                    education stories and public school/social
                    posts. TUPS does not present unverified
                    allegations as fact.
                </span>

            </div>

        </section>

    `;


    renderAllGistSections();

}


/* ============================================================
   RENDER ALL SECTIONS
============================================================ */

function renderAllGistSections() {

    const container =
        document.querySelector("#school-gist-sections");


    if (!container) return;


    container.innerHTML = "";


    gistSections.forEach(section => {

        const sectionElement =
            renderGistSection(section);


        container.appendChild(sectionElement);

    });


    attachGistPaginationEvents();

}


/* ============================================================
   RENDER ONE SECTION
============================================================ */

function renderGistSection(section) {

    const sectionElement =
        document.createElement("section");


    sectionElement.className =
        `school-gist-section school-gist-section-${section.id}`;


    const allItems =
        schoolGistItems.filter(
            item =>
                item.section === section.id
        );


    const currentPage =
        schoolGistPages[section.id] || 1;


    const totalPages =
        Math.max(
            1,
            Math.ceil(
                allItems.length /
                SCHOOL_GIST_PER_PAGE
            )
        );


    const safePage =
        Math.min(
            currentPage,
            totalPages
        );


    schoolGistPages[section.id] =
        safePage;


    const startIndex =
        (safePage - 1) *
        SCHOOL_GIST_PER_PAGE;


    const pageItems =
        allItems.slice(
            startIndex,
            startIndex + SCHOOL_GIST_PER_PAGE
        );


    sectionElement.innerHTML = `

        <div class="school-gist-section-heading">

            <div>

                <h2>
                    ${escapeGistHTML(section.title)}
                </h2>

                <p>
                    ${escapeGistHTML(section.description)}
                </p>

            </div>

            <span class="school-gist-count">
                ${allItems.length}
            </span>

        </div>

        <div class="school-gist-grid">

            ${
                pageItems.length
                    ? pageItems
                        .map(renderGistCard)
                        .join("")
                    : renderEmptySection(section)
            }

        </div>

        ${
            allItems.length > SCHOOL_GIST_PER_PAGE
                ? renderGistPagination(
                    section.id,
                    safePage,
                    totalPages
                )
                : ""
        }

    `;


    return sectionElement;

}


/* ============================================================
   RENDER CARD
============================================================ */

function renderGistCard(item) {

    const safeTitle =
        escapeGistHTML(
            item.title || "School Gist"
        );


    const safeCategory =
        escapeGistHTML(
            item.category || "School Gist"
        );


    const safeLocation =
        escapeGistHTML(
            item.location || "Nigeria"
        );


    const safeDate =
        escapeGistHTML(
            item.date || ""
        );


    const safeSource =
        escapeGistHTML(
            item.source || "Public Source"
        );


    const safeSummary =
        escapeGistHTML(
            item.summary || ""
        );


    const url =
        typeof item.url === "string" &&
        item.url.trim()
            ? item.url
            : "#";


    const imageHTML =
        item.image
            ? `

                <a
                    class="school-gist-image-link"
                    href="${escapeAttribute(url)}"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open ${escapeAttribute(safeTitle)}"
                >

                    <img
                        src="${escapeAttribute(item.image)}"
                        alt="${escapeAttribute(safeTitle)}"
                        loading="lazy"
                        decoding="async"
                        onerror="this.closest('.school-gist-image-link').classList.add('image-failed'); this.style.display='none';"
                    >

                </a>

            `
            : renderSocialPlaceholder(item);


    const socialBadge =
        item.social
            ? `

                <span class="school-gist-hot-badge">
                    <i class="fa-brands fa-instagram"></i>
                    SOCIAL
                </span>

            `
            : "";


    return `

        <article
            class="school-gist-card${item.social ? " school-gist-social-card" : ""}"
            data-gist-id="${escapeAttribute(item.id || "")}"
        >

            <div class="school-gist-card-media">

                ${imageHTML}

                ${socialBadge}

            </div>


            <div class="school-gist-card-content">

                <div class="school-gist-card-meta">

                    <span class="school-gist-category">
                        ${safeCategory}
                    </span>

                    ${
                        safeDate
                            ? `<span>${safeDate}</span>`
                            : ""
                    }

                </div>


                <h3>
                    ${safeTitle}
                </h3>


                <p class="school-gist-location">

                    <i class="fa-solid fa-location-dot"></i>

                    ${safeLocation}

                </p>


                <p class="school-gist-summary">
                    ${safeSummary}
                </p>


                <div class="school-gist-card-footer">

                    <span class="school-gist-source">
                        ${safeSource}
                    </span>

                    <a
                        class="school-gist-read-more"
                        href="${escapeAttribute(url)}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >

                        ${
                            item.social
                                ? "View post"
                                : "Read story"
                        }

                        <i class="fa-solid fa-arrow-up-right-from-square"></i>

                    </a>

                </div>

            </div>

        </article>

    `;

}


/* ============================================================
   SOCIAL PLACEHOLDER
   ------------------------------------------------------------
   Used when a public social post does not have a stable image
   URL available.
============================================================ */

function renderSocialPlaceholder(item) {

    const url =
        typeof item.url === "string" &&
        item.url.trim()
            ? item.url
            : "#";


    const platform =
        item.platform || "Social";


    let icon =
        "fa-mobile-screen-button";


    if (
        platform.toLowerCase() === "instagram"
    ) {

        icon = "fa-instagram";

    } else if (
        platform.toLowerCase() === "facebook"
    ) {

        icon = "fa-facebook";

    } else if (
        platform.toLowerCase() === "tiktok"
    ) {

        icon = "fa-tiktok";

    } else if (
        platform.toLowerCase() === "x"
    ) {

        icon = "fa-x-twitter";

    }


    return `

        <a
            class="school-gist-image-link school-gist-social-placeholder"
            href="${escapeAttribute(url)}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open ${escapeAttribute(item.title || "Social post")}"
        >

            <span>

                <i class="fa-brands ${icon}"></i>

                <small>
                    ${escapeGistHTML(platform)}
                </small>

            </span>

        </a>

    `;

}


/* ============================================================
   PAGINATION
============================================================ */

function renderGistPagination(
    sectionId,
    currentPage,
    totalPages
) {

    if (totalPages <= 1) {
        return "";
    }


    let html =
        `<nav
            class="school-gist-pagination"
            aria-label="School Gist pagination"
        >`;


    if (currentPage > 1) {

        html += `

            <button
                type="button"
                class="school-gist-page-button"
                data-gist-section="${escapeAttribute(sectionId)}"
                data-gist-page="${currentPage - 1}"
                aria-label="Previous page"
            >

                <i class="fa-solid fa-chevron-left"></i>

            </button>

        `;

    }


    for (
        let page = 1;
        page <= totalPages;
        page++
    ) {

        html += `

            <button
                type="button"
                class="school-gist-page-button${page === currentPage ? " active" : ""}"
                data-gist-section="${escapeAttribute(sectionId)}"
                data-gist-page="${page}"
                aria-label="Page ${page}"
                ${page === currentPage ? "aria-current=\"page\"" : ""}
            >

                ${page}

            </button>

        `;

    }


    if (currentPage < totalPages) {

        html += `

            <button
                type="button"
                class="school-gist-page-button"
                data-gist-section="${escapeAttribute(sectionId)}"
                data-gist-page="${currentPage + 1}"
                aria-label="Next page"
            >

                <i class="fa-solid fa-chevron-right"></i>

            </button>

        `;

    }


    html += `</nav>`;


    return html;

}


/* ============================================================
   PAGINATION EVENTS
============================================================ */

function attachGistPaginationEvents() {

    const container =
        document.querySelector(
            "#school-gist-sections"
        );


    if (!container) return;


    /*
     * Clone/remove previous handler safely by using one
     * delegated handler attached to this container.
     */

    if (
        container.dataset.paginationReady === "true"
    ) {

        return;

    }


    container.dataset.paginationReady =
        "true";


    container.addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(
                    "[data-gist-section][data-gist-page]"
                );


            if (!button) return;


            const sectionId =
                button.dataset.gistSection;


            const requestedPage =
                Number(
                    button.dataset.gistPage
                );


            if (
                !sectionId ||
                !Number.isFinite(requestedPage)
            ) {

                return;

            }


            if (
                !Object.prototype.hasOwnProperty.call(
                    schoolGistPages,
                    sectionId
                )
            ) {

                return;

            }


            schoolGistPages[sectionId] =
                requestedPage;


            renderAllGistSections();


            /*
             * Bring the section heading back into view
             * without jumping to the very top of the page.
             */

            requestAnimationFrame(() => {

                const section =
                    document.querySelector(
                        `.school-gist-section-${CSS.escape(sectionId)}`
                    );


                if (section) {

                    section.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            });

        }
    );

}


/* ============================================================
   EMPTY SECTION
============================================================ */

function renderEmptySection(section) {

    let message =
        "No verified public stories have been added to this section yet.";


    if (section.id === "buzz") {

        message =
            "No verified public school buzz has been added yet. We will not recycle stories from other sections just to fill this space.";

    }


    if (section.id === "social") {

        message =
            "More public school social posts are being curated.";

    }


    return `

        <div class="school-gist-empty">

            <i class="fa-solid fa-newspaper"></i>

            <p>
                ${escapeGistHTML(message)}
            </p>

        </div>

    `;

}


/* ============================================================
   ERROR DISPLAY
============================================================ */

function renderSchoolGistError() {

    const contentArea =
        document.querySelector("#content-area") ||
        document.querySelector(".content-area") ||
        document.querySelector("main");


    if (!contentArea) return;


    contentArea.innerHTML = `

        <section class="content-page school-gist-page">

            <div class="content-card">

                <div class="card-icon">

                    <i class="fa-solid fa-triangle-exclamation"></i>

                </div>

                <h2>
                    School Gist
                </h2>

                <p>
                    The School Gist service could not be loaded
                    at this time. Please try again.
                </p>

            </div>

        </section>

    `;

}


/* ============================================================
   HTML ESCAPING
============================================================ */

function escapeGistHTML(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* ============================================================
   ATTRIBUTE ESCAPING
============================================================ */

function escapeAttribute(value) {

    return escapeGistHTML(value);

}


/* ============================================================
   OPTIONAL DEBUG HELP
   ------------------------------------------------------------
   Available from browser console:
       window.tupsSchoolGistDebug()
============================================================ */

if (
    typeof window !== "undefined"
) {

    window.tupsSchoolGistDebug = function () {

        const report = {

            totalStories:
                schoolGistItems.length,

            sections:
                gistSections.map(
                    section => ({
                        section: section.id,
                        stories:
                            schoolGistItems.filter(
                                item =>
                                    item.section === section.id
                            ).length
                    })
                ),

            duplicateIds:
                schoolGistItems
                    .map(item => item.id)
                    .filter(
                        (id, index, array) =>
                            array.indexOf(id) !== index
                    )

        };


        console.table(report.sections);

        console.log(
            "TUPS School Gist total:",
            report.totalStories
        );

        console.log(
            "Duplicate IDs:",
            report.duplicateIds
        );


        return report;

    };

}


/* ============================================================
   DEVELOPMENT VALIDATION
   ------------------------------------------------------------
   This does not stop production rendering.
============================================================ */

(function validateSchoolGistData() {

    const validSections =
        new Set(
            gistSections.map(
                section => section.id
            )
        );


    const ids =
        new Set();


    schoolGistItems.forEach(
        (item, index) => {

            if (!item.id) {

                console.warn(
                    `TUPS School Gist: item ${index} has no ID.`
                );

            }


            if (ids.has(item.id)) {

                console.error(
                    `TUPS School Gist: duplicate story ID "${item.id}".`
                );

            }


            ids.add(item.id);


            if (
                !validSections.has(
                    item.section
                )
            ) {

                console.error(
                    `TUPS School Gist: "${item.title}" has invalid section "${item.section}".`
                );

            }


            if (!item.title) {

                console.warn(
                    `TUPS School Gist: item "${item.id}" has no title.`
                );

            }


            if (!item.url) {

                console.warn(
                    `TUPS School Gist: "${item.title}" has no source URL.`
                );

            }

        }
    );


})();