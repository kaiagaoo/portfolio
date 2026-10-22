import ThemeToggle from '../components/ThemeToggle'

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
  {
    title: 'Amazon Fashion Review Sentiment Analysis',
    description:
      'Used NLP topic modeling and aspect-based sentiment analysis on about 831,000 reviews to identify recurring themes and product attributes linked to customer ratings.',
    href: 'https://github.com/kaiagaoo/Consumer-Sentiment-Brand-Insights-nlp',
  },
  {
    title: 'Chronic Absenteeism Prediction',
    description:
      'Evaluated early-warning models for student absenteeism and examined precision–recall tradeoffs to help school leaders decide when to intervene.',
    href: 'https://github.com/kaiagaoo/ousd-absence-prediction',
  },
  {
    title: 'Finfluencers and Retail Trading',
    description:
      'Used panel regression to study how social-media sentiment, attention, and market volatility relate to trading volume across major technology stocks.',
    href: 'https://github.com/rgomez-ucb/finfluencers-retail-trading-stats',
  },
]

export default function Home() {
  return (
    <div className="site">
      <header className="site-nav">
        <a className="site-name" href="#top">Qianwen Gao</a>
        <nav aria-label="Main navigation">
          <a href="#news">News</a>
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#projects">Projects</a>
          <a href="#bio">Bio</a>
          <ThemeToggle />
        </nav>
      </header>

      <main id="top">
        <section className="intro" aria-labelledby="name-heading">
          <div>
            <h1 id="name-heading">Qianwen (Kaia) Gao</h1>
            <p className="intro-meta">Based in Greater Boston · Master of Computational Social Science, UC Berkeley</p>
            <p className="intro-text">
              I study how AI agents can ground language and reasoning through perception and action—and how we can determine whether their apparent reasoning faithfully reflects what drives their behavior. Building on my work in behavioral evaluation, I am interested in interpretable embodied agents that integrate language, memory, commonsense reasoning, and planning while learning from interaction with the physical world. My goal is to develop agents whose decision processes can be tested through intervention, whose explanations are faithful, and whose actions remain open to human guidance and correction.
            </p>
            <p className="opportunity-note">I am seeking research assistant opportunities in the Greater Boston area.</p>
            <div className="intro-links">
              <a href="mailto:kaiagao@berkeley.edu">Email</a>
              <a href="https://github.com/kaiagaoo" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/kaiagao" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="/Qianwen_Gao_Research_CV.pdf" target="_blank" rel="noopener noreferrer">CV</a>
            </div>
          </div>
          <img className="profile-photo" src="/profile.JPG" alt="Qianwen (Kaia) Gao" />
        </section>

        <section id="news" aria-labelledby="news-heading">
          <h2 id="news-heading">News</h2>
          <p><span className="news-year">2026</span> Attended COLM and presented a poster on <a href="https://arxiv.org/abs/2608.30466" target="_blank" rel="noopener noreferrer">CHASE</a>.</p>
        </section>

        <section id="research" aria-labelledby="research-heading">
          <h2 id="research-heading">Research interests</h2>
          <div className="interest">
            <h3>Grounding through interaction</h3>
            <p>How do perception and action change what an agent understands about causality and affordances? I want to study how physical interaction can test and refine representations learned from language and images.</p>
          </div>
          <div className="interest">
            <h3>Faithful explanations</h3>
            <p>Can an explanation predict how an agent’s behavior changes when we intervene on its representations, memory, or goals? I am interested in testing interpretability claims against what actually causes a decision.</p>
          </div>
          <div className="interest">
            <h3>Human-guided embodied agents</h3>
            <p>How can language, memory, commonsense reasoning, and planning work together as agents act in the world? I want agents that can revise plans, communicate uncertainty, and accept human correction.</p>
          </div>
        </section>

        <section id="publications" aria-labelledby="publications-heading">
          <h2 id="publications-heading">Publication</h2>
          <article className="publication">
            <figure className="publication-figure">
              <a href="/chase-figure.png" target="_blank" rel="noopener noreferrer" aria-label="Open the CHASE framework figure at full size">
                <img src="/chase-figure.png" width="2040" height="1116" alt="CHASE framework: rank, discriminate, rewrite, and evaluate" />
              </a>
            </figure>
            <div className="entry">
              <p className="entry-title"><a href="https://arxiv.org/abs/2608.30466" target="_blank" rel="noopener noreferrer">CHASE: How Content Ecosystems Are Reshaped When Ranking Is the Only Target</a></p>
              <p><strong>Qianwen Gao</strong>, Zichang Su, Yiwen Hou, Arlen Kumar, Leanid Palkhouski.</p>
              <p><em>Conference on Language Modeling (COLM), 2026.</em></p>
              <p>A simulation-based evaluation of how repeated optimization for LLM rankings changes content ecosystems and can cause rankings to drift from independently assessed quality.</p>
              <p><a href="https://arxiv.org/abs/2608.30466" target="_blank" rel="noopener noreferrer">Paper ↗</a></p>
            </div>
          </article>
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

        <section id="bio" aria-labelledby="bio-heading">
          <h2 id="bio-heading">Bio</h2>
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
