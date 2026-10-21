const areas = [
  {
    n: '01',
    title: 'AI interpretability',
    description: 'What representations and computations give rise to a model’s behavior? I am interested in methods that turn observed outputs into testable explanations of the mechanisms underneath.',
    tags: 'Representations · Mechanisms · Model behavior',
  },
  {
    n: '02',
    title: 'Cognitive modeling',
    description: 'How can computational models help explain human reasoning, memory, and learning? I want to use comparisons between minds and models to sharpen theories of both.',
    tags: 'Reasoning · Memory · Human–AI comparison',
  },
  {
    n: '03',
    title: 'Evaluation in context',
    description: 'AI systems interact with changing information and incentives. My recent work studies how ranking and retrieval shape what models see, reward, and produce.',
    tags: 'LLM evaluation · Information ecosystems · Causal design',
  },
]

const projects = [
  {
    label: 'Research project',
    year: '2026',
    title: 'FreshRAG',
    subtitle: 'When does fresh evidence change an LLM’s answer?',
    description: 'A causal benchmark for studying how document freshness affects hallucination in retrieval-augmented generation. The design separates knowledge conflict, temporal grounding, and reliance on parametric memory.',
    url: 'https://github.com/kaiagaoo/FreshRAG',
  },
  {
    label: 'Research tool',
    year: '2026',
    title: 'PickMem',
    subtitle: 'A memory curation layer for language models',
    description: 'A local-first application for capturing, organizing, and retrieving information through semantic search. The project explores how people can inspect and manage the context available to an assistant.',
    url: 'https://github.com/kaiagaoo/PickMem',
  },
  {
    label: 'Applied modeling',
    year: '2026',
    title: 'Student absence early warning',
    subtitle: 'Turning behavioral signals into timely support',
    description: 'A leakage-aware predictive pipeline developed with Oakland Natives Give Back and Wizearly to identify attendance risk and support school district intervention planning.',
    url: 'https://github.com/kaiagaoo/ousd-absence-prediction',
  },
]

export default function Home() {
  return (
    <>
      <header className="site-header" id="top">
        <div className="header-inner page-width">
          <a className="wordmark" href="#top" aria-label="Qianwen Gao, back to top">Qianwen <span>Gao</span><b>.</b></a>
          <nav className="main-nav" aria-label="Main navigation">
            <a href="#about">About</a><a href="#research">Research</a><a href="#publications">Publications</a><a href="#projects">Projects</a><a href="#contact">Contact</a>
          </nav>
          <a className="header-cv" href="/Kaia_Gao_Resume.pdf" target="_blank" rel="noopener noreferrer">Résumé ↗</a>
        </div>
      </header>

      <main>
        <section className="hero page-width" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Research at the intersection of AI and cognition</p>
            <h1 id="hero-heading">How do minds and models <em>make sense</em> of the world?</h1>
            <p className="hero-lede">I’m Qianwen (Kaia) Gao. My research interests span <strong>AI interpretability</strong>, <strong>cognitive modeling</strong>, and the evaluation of language models in changing information environments.</p>
            <div className="hero-actions"><a className="button-primary" href="#research">Explore my research <span aria-hidden="true">↓</span></a><a className="text-link" href="mailto:kaiagao@berkeley.edu">Get in touch ↗</a></div>
            <div className="hero-meta"><span>UC Berkeley · Computational Social Science</span><span>Berkeley, California</span></div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame"><img src="/profile.JPG" alt="Portrait of Qianwen (Kaia) Gao" /></div>
            <div className="portrait-caption"><span>Qianwen (Kaia) Gao</span><span>Researcher · Builder</span></div>
            <div className="visual-mark" aria-hidden="true">( 01 )</div>
          </div>
        </section>

        <div className="rule page-width" />

        <section className="about-section page-width section-grid" id="about" aria-labelledby="about-heading">
          <div className="section-aside"><span className="section-index">01 / ABOUT</span></div>
          <div className="section-content">
            <h2 id="about-heading">A question about intelligence, approached from both sides.</h2>
            <div className="about-columns">
              <p>I’m interested in what makes intelligent behavior possible—and how we can tell when an explanation is actually right. That question connects my interest in the inner workings of AI models with cognitive theories of how people reason, remember, and learn.</p>
              <p>My path into this work began in communication and computational social science. At UC Berkeley and through research at Wrodium, I have used experiments, data, and software to study how AI systems interact with the information around them. I’m bringing that empirical perspective to interpretability and cognitive modeling.</p>
            </div>
          </div>
        </section>

        <section className="research-section" id="research" aria-labelledby="research-heading">
          <div className="page-width section-grid">
            <div className="section-aside"><span className="section-index">02 / RESEARCH</span></div>
            <div className="section-content">
              <p className="kicker">Research agenda</p>
              <h2 id="research-heading">The questions guiding my work</h2>
              <div className="research-list">
                {areas.map((area) => <article className="research-item" key={area.n}>
                  <span className="research-number">{area.n}</span>
                  <div><h3>{area.title}</h3><p>{area.description}</p><span className="research-tags">{area.tags}</span></div>
                </article>)}
              </div>
            </div>
          </div>
        </section>

        <section className="publication-section page-width section-grid" id="publications" aria-labelledby="publications-heading">
          <div className="section-aside"><span className="section-index">03 / PUBLICATIONS</span></div>
          <div className="section-content">
            <p className="kicker">Conference paper</p><h2 id="publications-heading">Selected publication</h2>
            <article className="publication-card">
              <div className="publication-topline"><span>CONFERENCE PAPER</span><span>COLM 2026</span></div>
              <h3><a href="https://arxiv.org/abs/2608.30466" target="_blank" rel="noopener noreferrer">CHASE: How Content Ecosystems Are Reshaped When Ranking Is the Only Target <span aria-hidden="true">↗</span></a></h3>
              <p className="authors"><strong>Qianwen Gao</strong>, Zichang Su, Yiwen Hou, Arlen Kumar, Leanid Palkhouski</p>
              <p className="publication-summary">A simulation framework for studying how repeated optimization toward LLM rankings reshapes content ecosystems. Across six domains, the work finds that ranking signals can drift away from independently assessed content quality as creators adapt.</p>
              <a className="paper-link" href="https://arxiv.org/abs/2608.30466" target="_blank" rel="noopener noreferrer">Read the paper ↗</a>
            </article>
          </div>
        </section>

        <section className="projects-section" id="projects" aria-labelledby="projects-heading">
          <div className="page-width section-grid">
            <div className="section-aside"><span className="section-index">04 / PROJECTS</span></div>
            <div className="section-content">
              <p className="kicker">Selected work</p><h2 id="projects-heading">From questions to working systems</h2>
              <div className="project-list">
                {projects.map((project, index) => <article className="project-item" key={project.title}>
                  <span className="project-count">0{index + 1}</span>
                  <div className="project-body">
                    <div className="project-overline"><span>{project.label}</span><span>{project.year}</span></div>
                    <h3>{project.title}</h3><p className="project-subtitle">{project.subtitle}</p>
                    <p className="project-description">{project.description}</p>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">View repository ↗</a>
                  </div>
                </article>)}
              </div>
            </div>
          </div>
        </section>

        <section className="background-section page-width section-grid" id="background" aria-labelledby="background-heading">
          <div className="section-aside"><span className="section-index">05 / BACKGROUND</span></div>
          <div className="section-content">
            <p className="kicker">Path so far</p><h2 id="background-heading">Research & education</h2>
            <div className="background-list">
              <div><span>2025 – 2026</span><div><h3>Master of Computational Social Science</h3><p>University of California, Berkeley</p></div></div>
              <div><span>2025 – 2026</span><div><h3>AI Research Intern</h3><p>Wrodium · LLM evaluation, content ecosystems, and retrieval</p></div></div>
              <div><span>2021 – 2025</span><div><h3>B.A., Communication</h3><p>Zhejiang University</p></div></div>
            </div>
            <a className="inline-cv" href="/Kaia_Gao_Resume.pdf" target="_blank" rel="noopener noreferrer">View full résumé ↗</a>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-heading">
          <div className="page-width contact-inner">
            <div><p className="eyebrow">Let’s connect</p><h2 id="contact-heading">Interested in similar questions?</h2><p>I’d be glad to hear from researchers and teams working on interpretability, cognitive modeling, or rigorous AI evaluation.</p></div>
            <a className="contact-button" href="mailto:kaiagao@berkeley.edu">Email me ↗</a>
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="page-width footer-inner">
        <span>© 2026 Qianwen (Kaia) Gao</span>
        <div><a href="https://github.com/kaiagaoo" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/kaiagao" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="mailto:kaiagao@berkeley.edu">Email ↗</a></div>
        <a href="#top">Back to top ↑</a>
      </div></footer>
    </>
  )
}
