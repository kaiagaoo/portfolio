const projects = [
  {
    title: 'FreshRAG',
    description:
      'A benchmark for asking when an agent should rely on stored knowledge versus new evidence. It isolates how fresh retrieval affects language-model answers under knowledge conflict and temporal change.',
    href: 'https://github.com/kaiagaoo/FreshRAG',
  },
  {
    title: 'PickMem',
    description:
      'A local-first tool for curating and retrieving an assistant’s memory. It makes the information available to the assistant explicit and manageable.',
    href: 'https://github.com/kaiagaoo/PickMem',
  },
]

export default function Home() {
  return (
    <div className="site">
      <header className="site-nav">
        <a className="site-name" href="#top">Qianwen Gao</a>
        <nav aria-label="Main navigation">
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <main id="top">
        <section className="intro" aria-labelledby="name-heading">
          <div>
            <h1 id="name-heading">Qianwen (Kaia) Gao</h1>
            <p className="intro-meta">Computational Social Science · UC Berkeley</p>
            <p className="intro-text">
              I am interested in <strong>cognitive architectures for human-aware agents</strong>: systems that understand language, remember and reason over experience, and plan actions with people in mind. My current work in language-model evaluation and memory is a foundation for studying commonsense reasoning, social cognition, and embodied collaboration.
            </p>
            <div className="intro-links">
              <a href="mailto:kaiagao@berkeley.edu">Email</a>
              <a href="https://github.com/kaiagaoo" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/kaiagao" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="/Kaia_Gao_Resume.pdf" target="_blank" rel="noopener noreferrer">Résumé</a>
            </div>
          </div>
          <img className="profile-photo" src="/profile.JPG" alt="Qianwen (Kaia) Gao" />
        </section>

        <section id="research" aria-labelledby="research-heading">
          <h2 id="research-heading">Research interests</h2>
          <div className="interest">
            <h3>Language, memory, and commonsense</h3>
            <p>How can an agent combine language with remembered experience and up-to-date evidence to reason in an open world? I am particularly interested in when memory helps, when it misleads, and how an agent can revise what it knows.</p>
          </div>
          <div className="interest">
            <h3>Cognitive architectures and planning</h3>
            <p>How should an autonomous system connect learned representations, explicit knowledge, and planning? I want to study architectures that support interpretable decisions and flexible behavior under uncertainty.</p>
          </div>
          <div className="interest">
            <h3>Social cognition in embodied agents</h3>
            <p>How can robots infer human goals, preferences, and social norms, communicate uncertainty, and coordinate actions with people? I hope to study these questions through embodied learning and shared autonomy, including how agents respect ethical constraints.</p>
          </div>
        </section>

        <section id="publications" aria-labelledby="publications-heading">
          <h2 id="publications-heading">Publication</h2>
          <div className="entry">
            <p className="entry-title"><a href="https://arxiv.org/abs/2608.30466" target="_blank" rel="noopener noreferrer">CHASE: How Content Ecosystems Are Reshaped When Ranking Is the Only Target</a></p>
            <p><strong>Qianwen Gao</strong>, Zichang Su, Yiwen Hou, Arlen Kumar, Leanid Palkhouski.</p>
            <p><em>Conference on Language Modeling (COLM), 2026.</em></p>
            <p>Studies how repeated optimization for LLM rankings changes content ecosystems and their relationship to independently assessed quality. It motivates my interest in agents that reason about incentives and the broader consequences of their behavior.</p>
            <p><a href="https://arxiv.org/abs/2608.30466" target="_blank" rel="noopener noreferrer">Paper ↗</a></p>
          </div>
        </section>

        <section id="projects" aria-labelledby="projects-heading">
          <h2 id="projects-heading">Selected projects</h2>
          {projects.map((project) => (
            <div className="entry" key={project.title}>
              <p className="entry-title"><a href={project.href} target="_blank" rel="noopener noreferrer">{project.title} ↗</a></p>
              <p>{project.description}</p>
            </div>
          ))}
        </section>

        <section id="about" aria-labelledby="about-heading">
          <h2 id="about-heading">About</h2>
          <p>
            I earned a Master of Computational Social Science from the University of California, Berkeley, and a B.A. in Communication from Zhejiang University. At Wrodium, I worked on LLM evaluation, information ecosystems, and retrieval. My background in computational social science also informs my interest in how intelligent systems interpret and respond to people.
          </p>
        </section>
      </main>

      <footer>
        <span>© 2026 Qianwen (Kaia) Gao</span>
        <a href="mailto:kaiagao@berkeley.edu">kaiagao@berkeley.edu</a>
      </footer>
    </div>
  )
}
