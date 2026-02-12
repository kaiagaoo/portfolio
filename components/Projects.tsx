import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Consumer Sentiment & Brand Insights from Amazon Fashion Reviews",
      subtitle: "Course Project | Oct 2025 – Nov 2025",
      description:
        "Analyzed 2.5M Amazon Fashion reviews to extract customer sentiment and brand perception using NLP techniques (VADER, BERT embeddings, topic modeling). Built regression and clustering models to identify key drivers of satisfaction and differentiate brand positioning. Visualized sentiment and keyword trends across categories through an interactive Streamlit dashboard, providing actionable insights for marketing and product strategy.",
      technologies: ["Python", "VADER", "BERT", "Streamlit", "Scikit-learn"],
      github:
        "https://github.com/kaiagaoo/Consumer-Sentiment-Brand-Insights-nlp",
      demo: undefined,
      image: "👗",
    },
    {
      title: "Predictive Absenteeism & Early-Warning Signal Analysis",
      subtitle: "Capstone Project | ONGB & Wizearly | Feb 2026 – May 2026",
      description:
        "Collaborated with Oakland Natives Give Back (ONGB) and Wizearly to analyze chronic absenteeism trends by synthesizing national datasets (NCES, Census) with thousands of granular OUSD student records. Engineered a Predictive Feature Library using the IPIR framework to identify behavioral and academic risk signals, validating national patterns against local data. Developed a dual-scale landscape report and interactive dashboard to provide data-driven intervention strategies for school district leadership.",
      technologies: [
        "Python",
        "SQL",
        "Pandas",
        "Scikit-Learn",
        "Tableau",
        "Statistical Modeling",
      ],
      github: "https://github.com/kaiagaoo/ONGB-chronic-absenteeism",
      demo: undefined,
      image: "🎓",
    },
    {
      title: "Finfluencers Impact on trading behavior",
      subtitle: "Course Project | Nov 2025 – Dec 2025",
      description:
        'Investigated the causal impact of "finfluencer" (financial influencer) sentiment on stock trading liquidity using a balanced panel dataset of five major tech stocks (AAPL, AMZN, FB, NVDA, TSLA) from 2020 to 2022. Constructed a Panel OLS regression model with Entity Fixed Effects and clustered standard errors to control for unobserved heterogeneity and serial correlation. Identified that market volatility (VIX) and negative retail sentiment ("fear") are the primary drivers of trading volume, with the final model explaining 41% of day-to-day variance in trading activity.',
      technologies: [
        "Panel OLS Regression",
        "Fixed Effects Modeling",
        "Hypothesis Testing",
        "Econometrics",
        "Statistical Analysis",
      ],
      github: "https://github.com/rgomez-ucb/finfluencers-retail-trading-stats",
      demo: undefined,
      image: "📈",
    },
    {
      title: "California Housing Market Affordability Analysis",
      subtitle: "Course Project | Nov 2025 – Dec 2025",
      description:
        'Investigated the "Gravity of Affordability" in California housing markets by synthesizing construction permit data (HUD), sales volume (Redfin), and demographic trends (NIH) from 1980–2022. Calculated Price-to-Income Ratios (PIR) to quantify affordability gaps across key counties like San Francisco and Riverside, revealing a decoupling of local incomes from housing costs. Visualized supply inelasticity and migration pressures using R (ggplot2) to demonstrate how low affordability drives population shifts despite stagnant construction responsiveness.',
      technologies: ["R", "ggplot2", "dplyr", "Hex", "Data Visualization"],
      github:
        "https://github.com/kaiagaoo/CA-housing-market-affordability-analysis?tab=readme-ov-file",
      demo: undefined,
      image: "🏡",
    },
    {
      title: "FreshRAG: Causal Benchmark for RAG Freshness & Hallucination",
      subtitle: "Research Project (In Progress) | 2026",
      description:
        "Designed FreshRAG, a large-scale causal benchmark (50K+ QA pairs) to measure how content freshness reduces hallucination in retrieval-augmented generation (RAG) systems. Built a temporal-gradient dataset from multi-year knowledge snapshots and constructed controlled retrieval scenarios to isolate mechanisms including knowledge conflict resolution, temporal grounding, and parametric override. Implemented counterfactual evaluation protocols and mechanism-level effect decomposition, enabling regression-based and experimental estimation of freshness treatment effects across models and domains.",
      technologies: [
        "Python",
        "RAG",
        "Causal Inference",
        "Experimental Design",
        "NLP",
        "LLM Evaluation",
      ],
      github: "https://github.com/kaiagaoo/FRESH-bench",
      demo: undefined,
      image: "🧠",
    },
    {
      title: "Consentful Civic Lens – Event Organizer",
      subtitle: "CalHacks Project | Oct 2025",
      description:
        "Built a full-stack web app with Next.js, Supabase, and PostgreSQL for event consent management and storytelling. Integrated Claude API and LiveKit for AI-generated highlight summaries, and developed a recommendation system to personalize future event suggestions based on user interests and location.",
      technologies: [
        "Next.js",
        "Supabase",
        "PostgreSQL",
        "Claude API",
        "LiveKit",
      ],
      github: "https://github.com/shaaronl/ConsentfulCivicLens",
      demo: undefined,
      image: "🎭",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="section-divider mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Data Science in action
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-soft card-hover border border-gray-100 dark:border-gray-700 overflow-hidden"
            >
              <div className="p-8">
                <div className="text-6xl mb-6 text-center">{project.image}</div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-accent-600 dark:text-accent-400 font-medium mb-4">
                  {project.subtitle}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1.5 bg-accent-50 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 text-sm rounded-lg font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 transition-colors duration-200 font-medium"
                  >
                    <FaGithub className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 transition-colors duration-200 font-medium"
                    >
                      <FaExternalLinkAlt className="w-5 h-5 mr-2" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
