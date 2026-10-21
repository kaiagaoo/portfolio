const projects = [
  {
    title: 'FreshRAG',
    description:
      'A controlled benchmark for studying when new evidence changes a language model’s answer as facts change, separating the effects of internal knowledge and retrieved information.',
    href: 'https://github.com/kaiagaoo/FreshRAG',
  },
  {
    title: 'PickMem',
    description:
      'A local-first tool for curating an assistant’s memory, giving people a clearer way to manage the information the assistant can use.',
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
              I want to build <strong>AI agents and robots whose reasoning people can understand and whose behavior they can guide and correct</strong>. My research interests connect interpretability with cognitive architectures for language, memory, commonsense reasoning, and planning. I am especially drawn to physical AI, where agents must understand human intentions and social context before acting in the world. Across digital and embodied systems, I want intelligence that serves human goals and remains accountable to the people it affects.
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
            <h3>Interpretability and control</h3>
            <p>Why does an agent make a particular inference or take an action, and which representations or assumptions drive it? I want explanations that reflect the underlying process, along with ways to correct a memory, revise a plan, or redirect behavior when it diverges from human intent.</p>
          </div>
          <div className="interest">
            <h3>Cognitive architectures for reasoning</h3>
            <p>How can an agent combine language, memory, and commonsense knowledge to reason across time and plan under uncertainty? I am interested in cognitive models and architectures that make these processes clear enough to study, evaluate, and improve.</p>
          </div>
          <div className="interest">
            <h3>Human-aware physical AI</h3>
            <p>When decisions become physical actions, an agent must account for the people around it. I want to study how robots infer human goals and preferences, reason about social norms, explain their actions, and coordinate with people through shared autonomy.</p>
          </div>
        </section>

        <section id="publications" aria-labelledby="publications-heading">
          <h2 id="publications-heading">Publication</h2>
          <div className="entry">
            <p className="entry-title"><a href="https://arxiv.org/abs/2608.30466" target="_blank" rel="noopener noreferrer">CHASE: How Content Ecosystems Are Reshaped When Ranking Is the Only Target</a></p>
            <p><strong>Qianwen Gao</strong>, Zichang Su, Yiwen Hou, Arlen Kumar, Leanid Palkhouski.</p>
            <p><em>Conference on Language Modeling (COLM), 2026.</em></p>
            <p>Studies how repeated optimization for LLM rankings changes content ecosystems and how rankings can drift from independently assessed quality.</p>
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
            I earned a Master of Computational Social Science from the University of California, Berkeley, and a B.A. in Communication from Zhejiang University. At Wrodium, I worked on LLM evaluation, ranking, and retrieval. This empirical background is the foundation for my interest in interpretable reasoning and human-aware agents.
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
