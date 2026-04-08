const SKILLS = [
  {
    category: "Languages",
    items: [
      { name: "C", icon: "⚙️", level: "Competent" },
      { name: "Java", icon: "☕", level: "Competent" },
      { name: "Python", icon: "🐍", level: "Competent" },
      { name: "JavaScript", icon: "⚡", level: "Competent" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "Spring Boot", icon: "🌿", level: "Developing" },
      { name: "Flask", icon: "🔥", level: "Competent" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "HTML5", icon: "🌐", level: "Competent" },
      { name: "CSS3", icon: "🎨", level: "Competent" },
      { name: "JavaScript", icon: "⚡", level: "Competent" },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git", icon: "🔀", level: "Competent" },
      { name: "GitHub", icon: "🐙", level: "Competent" },
      { name: "API Integration", icon: "🔌", level: "Competent" },
      { name: "JSON", icon: "📄", level: "Competent" },
    ],
  },
];

const PROJECTS = [
  {
    number: "01",
    title: "Clara — Study Companion",
    desc: "A student-friendly web app with subject notes, progress tracking, reminders, and AI agent interaction via API calls. CRUD operations managed through JSON.",
    tags: ["HTML", "CSS", "JavaScript", "Python", "Flask", "JSON", "API"],
    link: null,
    linkText: null,
  },
  {
    number: "02",
    title: "Manasmitra — Wellness Platform",
    desc: "Student wellness support platform featuring an anonymous discussion forum and responsive UI. Designed for scalability. Team project — currently in prototype stage.",
    tags: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
    link: null,
    linkText: null,
  },
  {
    number: "03",
    title: "Arcana — Library Management",
    desc: "Modular web application for book cataloging, user registration, and admin controls based on CRUD operations. Improving efficiency and accessibility.",
    tags: ["HTML", "CSS", "JavaScript", "Python", "Flask", "JSON"],
    link: null,
    linkText: null,
  },

  {
    number: "04",
    title: "Personal Portfolio",
    desc: "Web portfolio showcasing projects, skills, and contact information with clean, responsive design.",
    tags: ["HTML", "CSS", " JavaScript"],
    link: "https://kuldeepf.netlify.app/",
    linkText: "View Live",
  },
];

const CERTS = [
  {
    issuer: "freeCodeCamp",
    name: "Responsive Web Design",
    date: "September 2025",
  },
  {
    issuer: "TATA Foundation",
    name: "Data Visualisation",
    date: "September 2025",
  },
  {
    issuer: "Cisco Networking Academy",
    name: "Python Essentials",
    date: "September 2025",
  },
  { issuer: "HackerRank", name: "Python", date: "December 2025" },
  { issuer: "HackerRank", name: "JavaScript", date: "December 2025" },
];

const ACHIEVEMENTS = [
  { icon: "⭐", title: "5-Star Problem Solving", sub: "HackerRank" },
  { icon: "🐍", title: "5-Star Python", sub: "HackerRank" },
  { icon: "☕", title: "5-Star Java", sub: "HackerRank" },
];

/* ─────────────────────────────────────────────
   RENDER FUNCTIONS
───────────────────────────────────────────── */

function renderSkills() {
  const container = document.getElementById("skillsContainer");
  container.innerHTML = SKILLS.map(
    (cat) => `
    <div class="reveal">
      <div class="skill-category-label">${cat.category}</div>
      <div class="skill-blocks">
        ${cat.items
          .map(
            (s) => `
          <div class="skill-block">
          <span class="skill-icon">${s.icon}</span>
            <span>${s.name}</span>
          <span class="skill-level ${
            s.level === "Developing"
              ? "Developing"
              : s.level === "Intermediate"
                ? "Intermediate"
                : "Competent"
          }">
  ${
    s.level === "Developing"
      ? "Developing"
      : s.level === "Intermediate"
        ? "Intermediate"
        : "Competent"
  }
</span>
          </div>
        `,
          )
          .join("")}
      </div>
    </div>
  `,
  ).join("");
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = PROJECTS.map(
    (p) => `
    <div class="project-card reveal">
      <div class="project-number">${p.number}</div>
      <div class="project-title">${p.title}</div>
      <div class="project-desc">${p.desc}</div>
      <div class="project-tags">
        ${p.tags.map((t) => `<span class="project-tag">${t}</span>`).join("")}
      </div>
      <div class="project-footer">
        ${
          p.link
            ? `<a class="project-link" href="${p.link}" target="_blank">${p.linkText} →</a>`
            : `<span class="no-link">Prototype stage</span>`
        }
      </div>
    </div>
  `,
  ).join("");
}

function renderCerts() {
  const grid = document.getElementById("certsGrid");
  grid.innerHTML = CERTS.map(
    (c) => `
    <div class="cert-card reveal">
      <div class="cert-issuer">${c.issuer}</div>
      <div class="cert-name">${c.name}</div>
      <div class="cert-date">${c.date}</div>
    </div>
  `,
  ).join("");
}

function renderAchievements() {
  const row = document.getElementById("achievementsRow");
  row.innerHTML = ACHIEVEMENTS.map(
    (a) => `
    <div class="achievement-card reveal">
      <div class="achievement-icon">${a.icon}</div>
      <div class="achievement-text">
        <div class="achievement-title">${a.title}</div>
        <div class="achievement-sub">${a.sub}</div>
      </div>
    </div>
  `,
  ).join("");
}

/* ─────────────────────────────────────────────
   SCROLL REVEAL
───────────────────────────────────────────── */
function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1 },
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

/* ─────────────────────────────────────────────
   NAV SCROLL + SPY
───────────────────────────────────────────── */
function initNav() {
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 60);
  });

  // Scroll spy
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((s) => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    navLinks.forEach((a) => {
      a.classList.toggle("active", a.getAttribute("href") === "#" + current);
    });
  });
}

/* ─────────────────────────────────────────────
   MOBILE NAV
───────────────────────────────────────────── */
function initMobileNav() {
  const mobileNav = document.getElementById("mobileNav");
  document.getElementById("hamburger").addEventListener("click", () => {
    mobileNav.classList.add("open");
  });
  document
    .getElementById("mobileClose")
    .addEventListener("click", closeMobileNav);
}
function closeMobileNav() {
  document.getElementById("mobileNav").classList.remove("open");
}

/* ─────────────────────────────────────────────
   INIT
───────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderProjects();
  renderCerts();
  renderAchievements();
  initReveal();
  initNav();
  initMobileNav();
  // Re-run reveal after dynamic content
  setTimeout(initReveal, 100);
});
