const projects = [
  {
    title: 'FreshRAG',
    description:
      'A benchmark for studying how the freshness of retrieved information affects hallucination in language models.',
    href: 'https://github.com/kaiagaoo/FreshRAG',
  },
  {
    title: 'PickMem',
    description:
      'A local-first tool for organizing and retrieving the information available to an AI assistant.',
    href: 'https://github.com/kaiagaoo/PickMem',
  },
  {
    title: 'Student absence early warning',
    description:
      'A predictive modeling project with Oakland Natives Give Back and Wizearly to support school district intervention planning.',
    href: 'https://github.com/kaiagaoo/ousd-absence-prediction',
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
              I study how language models represent and use information, and how their behavior relates to human cognition. My research interests are <strong>AI interpretability</strong>, <strong>cognitive modeling</strong>, and rigorous evaluation of language models.
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
          <h2 id="research-heading">Research</h2>
          <p>
            I am interested in understanding the processes behind intelligent behavior. In AI, that means asking what a model represents and which parts of its computation drive an answer. In cognitive modeling, it means using computational accounts to study how people reason, remember, and learn.
          </p>
          <p>
            My recent work approaches these questions through empirical evaluation: studying how ranking incentives and changing information affect language model systems.
          </p>
        </section>

        <section id="publications" aria-labelledby="publications-heading">
          <h2 id="publications-heading">Publication</h2>
          <div className="entry">
            <p className="entry-title"><a href="https://arxiv.org/abs/2608.30466" target="_blank" rel="noopener noreferrer">CHASE: How Content Ecosystems Are Reshaped When Ranking Is the Only Target</a></p>
            <p><strong>Qianwen Gao</strong>, Zichang Su, Yiwen Hou, Arlen Kumar, Leanid Palkhouski.</p>
            <p><em>Conference on Language Modeling (COLM), 2026.</em></p>
            <p>Studies how repeated optimization for LLM rankings changes content ecosystems and their relationship to independently assessed quality.</p>
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
            I earned a Master of Computational Social Science from the University of California, Berkeley, and a B.A. in Communication from Zhejiang University. At Wrodium, I worked on LLM evaluation, information ecosystems, and retrieval. My background also includes applied statistical modeling and user research.
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
