const SKILLS = [
  {
    category: "Languages",
    items: [
      { name: "Java", icon: "☕", level: "Competent" },
      { name: "Python", icon: "🐍", level: "Competent" },
    ],
  },
  {
    category: "Frameworks",
    items: [
      { name: "Spring Boot", icon: "🌿", level: "Competent" },
      { name: "Flask", icon: "🔥", level: "Competent" },
    ],
  },
  {
    category: "Frontend",
    items: [{ name: "React", icon: "⚛️", level: "Competent" }],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: "🔀", level: "Competent" },
      { name: "GitHub", icon: "🐙", level: "Competent" },
      { name: "Postman", icon: "📮", level: "Competent" },
      { name: "Docker", icon: "🐳", level: "Developing" },
    ],
  },
  {
    category: "Libraries",
    items: [
      { name: "Pandas", icon: "🐼", level: "Competent" },
      { name: "NumPy", icon: "🔢", level: "Competent" },
      { name: "Scikit-learn", icon: "🤖", level: "Developing" },
      { name: "Matplotlib", icon: "📊", level: "Competent" },
    ],
  },
  {
    category: "Database",
    items: [{ name: "MongoDB", icon: "🍃", level: "Competent" }],
  },
];

const PROJECTS = [
  {
    number: "01",
    title: "SwiftMove — Real-Time Logistics & Booking Platform",
    desc: "Full-stack logistics platform connecting shippers and drivers with live GPS tracking, dynamic fare calculation via road-routing APIs, OTP-verified delivery confirmation, and real-time job/status updates over WebSockets, with integrated payments and role-based dashboards.",
    tags: ["Java", "Spring Boot", "MongoDB", "React", "WebSocket", "Leaflet", "Docker"],
    link: "https://swiftmovee.netlify.app/",
    linkText: "View Live",
  },
  {
    number: "02",
    title: "Serina — Private AI Assistant with Document Q&A",
    desc: "Microservice-based AI chatbot that answers questions from uploaded PDFs using RAG with local LLM inference, vector semantic search, and persistent chat history, containerized and served through a React interface.",
    tags: ["Python", "FastAPI", "React", "Ollama", "Qdrant", "PostgreSQL", "Docker"],
    link: "https://github.com/kuldeepyadav001/serina",
    linkText: "View Code",
  },
  {
    number: "03",
    title: "Spicest — E-Commerce Webpage",
    desc: "Production-ready spice e-commerce web app with 8 pages including dynamic product catalog, weight-based pricing, filter/sort, persistent cart, multi-step checkout with 4 payment UIs, and order success flow. SSG for SEO with automated CI/CD.",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    link: "https://spicest.vercel.app/",
    linkText: "View Live",
  },
  {
    number: "04",
    title: "Student Performance Dashboard",
    desc: "ML-powered analytics platform that cleans and processes student datasets, trains a RandomForest model to predict performance outcomes, and visualizes insights through an interactive React dashboard backed by a Flask REST API.",
    tags: ["Python", "Flask", "Scikit-learn", "Pandas", "React"],
    link: "https://github.com/kuldeepyadav001/STUDENT_DATA_PROJECT",
    linkText: "View Code",
  },
  {
    number: "05",
    title: "Manasmitra — Wellness Platform",
    desc: "Student wellness support platform featuring an anonymous discussion forum and a responsive UI, designed for scalability across devices. Team project — currently in prototype stage.",
    tags: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
    link: null,
    linkText: null,
  },
];

const CERTS = [
  {
    issuer: "freeCodeCamp",
    name: "Responsive Web Design",
    date: "September 2025",
  },
  {
    issuer: "NPTEL",
    name: "Object Oriented System Development (UML, Java & Patterns)",
    date: "2025",
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
  { icon: "🏆", title: "Qualified — SIH Internal Hackathon", sub: "2025" },
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