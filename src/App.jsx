import "./App.css";

const stats = [
  { label: "Years experience", value: "5+" },
  { label: "Projects shipped", value: "18" },
  { label: "Clients helped", value: "12" },
];

const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "UI Design",
  "Accessibility",
  "API Integration",
];

const projects = [
  {
    title: "Northstar Studio",
    summary:
      "A marketing site for a creative agency with custom animations and a conversion-focused landing experience.",
    tags: ["React", "Design System", "SEO"],
  },
  {
    title: "Yonder App",
    summary:
      "A dashboard for managing recurring tasks and reporting metrics to a distributed team.",
    tags: ["Dashboard", "UX", "Analytics"],
  },
  {
    title: "Field Notes",
    summary:
      "A mobile-first journal app that makes it easy to capture ideas, checklists, and personal progress.",
    tags: ["Product Design", "Prototyping", "Testing"],
  },
];

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">A.</div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Product designer & frontend developer</p>
            <h1>Hi, I’m Alex — I build thoughtful digital experiences.</h1>
            <p className="lead">
              I help founders and teams turn rough ideas into polished
              interfaces that feel clear, fast, and human.
            </p>

            <div className="cta-row">
              <a className="primary-btn" href="#work">
                View work
              </a>
              <a className="secondary-btn" href="#contact">
                Let’s talk
              </a>
            </div>

            <ul className="mini-stats" aria-label="Highlights">
              {stats.map((item) => (
                <li key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="hero-card" aria-label="Profile summary">
            <div className="badge">Available for select work</div>
            <div className="avatar">A</div>
            <h2>Based in Seattle</h2>
            <p>
              Designing and building small, impactful web products for people
              who care about details.
            </p>
            <ul>
              <li>UI systems</li>
              <li>Landing pages</li>
              <li>React apps</li>
            </ul>
          </aside>
        </section>

        <section className="section" id="about">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>Simple, elegant, useful.</h2>
          </div>

          <div className="about-grid">
            <p>
              I’ve spent the last few years designing and coding sites and
              interfaces for startups, agencies, and personal brands. My
              approach blends strong visual thinking with clean, component-based
              engineering so ideas feel both expressive and reliable.
            </p>
            <div className="skill-list">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="work">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>Recent projects.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-visual" aria-hidden="true" />
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <p className="eyebrow">Let’s build something</p>
          <h2>Need a sharp portfolio, landing page, or product frontend?</h2>
          <a className="primary-btn" href="mailto:hello@example.com">
            hello@example.com
          </a>
        </section>
      </main>
    </div>
  );
}

export default App;
