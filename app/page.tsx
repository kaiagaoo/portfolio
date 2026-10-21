const projects = [
  {
    title: 'FreshRAG',
    description:
      'A controlled evaluation of how language models use new evidence when facts change, separating the influence of stored knowledge from retrieved information.',
    href: 'https://github.com/kaiagaoo/FreshRAG',
  },
  {
    title: 'PickMem',
    description:
      'A local-first tool for curating and retrieving an assistant’s memory, making the information available to it easier for people to inspect and manage.',
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
              My goal is to develop AI agents whose decisions are legible to people and whose behavior remains open to human guidance and correction. Building on my work in behavioral evaluation, I am interested in interpretable cognitive architectures that bring together language understanding, memory, commonsense reasoning, and goal-directed planning. I am especially drawn to embodied intelligence, where perception and action can ground and extend what agents learn from text and images. Through interaction with the physical world, agents can build richer models of causality, affordances, human intent, and social context—while remaining understandable, steerable, and safe.
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
            <h3>Legible and correctable decisions</h3>
            <p>Which representations, memories, or goals actually drive an agent’s decisions? I am interested in explanations that reflect those causes and in ways for people to diagnose errors, revise assumptions, and redirect behavior.</p>
          </div>
          <div className="interest">
            <h3>Language, memory, and planning</h3>
            <p>How can an agent connect instructions and experience with commonsense knowledge to reason over time? I want to study cognitive architectures that make it possible to examine how agents update what they know and revise their plans.</p>
          </div>
          <div className="interest">
            <h3>Embodied and social intelligence</h3>
            <p>How can perception and action help agents learn causal structure, what objects afford, and what people intend? I am interested in robots that use this grounding to collaborate with people while making their actions understandable and open to correction.</p>
          </div>
        </section>

        <section id="publications" aria-labelledby="publications-heading">
          <h2 id="publications-heading">Publication</h2>
          <div className="entry">
            <p className="entry-title"><a href="https://arxiv.org/abs/2608.30466" target="_blank" rel="noopener noreferrer">CHASE: How Content Ecosystems Are Reshaped When Ranking Is the Only Target</a></p>
            <p><strong>Qianwen Gao</strong>, Zichang Su, Yiwen Hou, Arlen Kumar, Leanid Palkhouski.</p>
            <p><em>Conference on Language Modeling (COLM), 2026.</em></p>
            <p>A simulation-based evaluation of how repeated optimization for LLM rankings changes content ecosystems and can cause rankings to drift from independently assessed quality.</p>
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
            I earned a Master of Computational Social Science from the University of California, Berkeley, and a B.A. in Communication from Zhejiang University. At Wrodium, I studied model behavior in changing ranking and retrieval environments. This empirical work grounds my interest in how agents use evidence, pursue goals, and respond to human guidance.
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
