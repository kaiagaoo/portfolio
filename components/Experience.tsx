import { FaBriefcase } from 'react-icons/fa'

export default function Experience() {
  const experiences = [
    {
      title: 'Research Intern',
      company: 'Wrodium',
      location: 'Berkeley, CA',
      period: 'Dec 2025 – Present',
      description: [
        'Experimental Framework Design – Developed a large-scale A/B/C/D experimental framework to quantify the impact of structured data (JSON-LD) and HTML semantic markers on AI agent retrieval (ChatGPT Search, Perplexity), managing a 64-topic pipeline with over 5,000 longitudinal observations.',
        'Retrieval Benchmarking & RAG Optimization – Evaluated retrieval performance using Recall@k (R@5/10), BM25 lexical ranking, and vector embedding similarity to identify optimal page structures (one-sentence claims, facts tables) that improved content retrievability.',
        'Statistical Inference & Survival Analysis – Applied Kaplan-Meier estimators and Cox Proportional Hazards models to analyze Time-to-Quote (TTQ) metrics, measuring the statistical significance of freshness signals (IndexNow, <lastmod>) in accelerating AI citation speeds.',
        'GEO Strategy & Automated Content Pipelines – Engineered a Make automation workflow to generate data-driven technical reports and blog content on Generative Engine Optimization (GEO), translating complex retrieval benchmarks into actionable product strategies for improving Share of Voice (SoV) and content attribution in LLM-based search engines.',
      ],
    },
    {
      title: 'Strategy & Data Analyst Intern',
      company: 'APPA Health',
      location: 'Berkeley, CA',
      period: 'Sept – Dec 2025',
      description: [
        'Market Opportunity Analysis – Analyzed the educational funding landscape to identify and evaluate a pipeline of potential funding opportunities supporting youth wellness.',
        'Impact Measurement & Reporting – Established a KPI framework to measure SEL program effectiveness. Analyzed pre- and post-program survey data to quantify impact on student engagement, providing key insights for program iteration and reporting to funding partners.',
      ],
    },
    {
      title: 'Marketing Analytics Intern',
      company: 'Xiaohongshu',
      location: 'Shanghai, China',
      period: 'Aug 2024 – Jan 2025',
      description: [
        'Audience Segmentation – Queried and analyzed behavioral and demographic user data using SQL in Hive on a large-scale data warehouse to create 35 pet industry audience segments, contributing to ¥1.83M (~$250K) in ad revenue and improved ad targeting accuracy within the first month.',
        'KPI Automation – Developed and automated marketing KPI dashboards using Python, SQL, and RedBI (BI tool comparable to Power BI) to track campaign performance, user engagement, and retention metrics. Presented findings and strategic recommendations to over 740 clients and internal stakeholders.',
        'Marketing Strategy – Designed and analyzed A/B tests to optimize ad targeting strategies and creatives. Integrated CRM data to conduct deep-dive analyses on marketing performance, providing insights that improved marketing efficiency and ROI.',
      ],
    },
    {
      title: 'Product Strategy & Analytics Intern, Chauffeur Business Unit',
      company: 'Didi',
      location: 'Hangzhou, China',
      period: 'Mar – Jun 2024',
      description: [
        'Pricing Analytics – Conducted multivariate regression and causal inference analyses on supply-demand patterns and user price elasticity to inform dynamic pricing strategies, leading to a 2% revenue lift.',
        'User Research – Designed and distributed user surveys to identify pain points in the "hourly driver" service; combined findings with SQL-based behavioral analysis to uncover actionable product insights, driving a 3% reduction in complaints and measurable improvement in driver-passenger experience.',
      ],
    },
    {
      title: 'Content Strategy & Analytics Intern',
      company: 'Huace Film & TV',
      location: 'Hangzhou, China',
      period: 'Jun – Sept 2023',
      description: [
        'Content Engagement Analysis – Queried and analyzed 10,000+ follower records using SQL and Python to identify audience attributes and content preferences; created user clusters that informed strategy adjustments, boosting page views by 15.1%.',
        'A/B Testing – Conducted A/B tests to refine video strategy; produced and distributed 300+ YouTube clips, leveraging insights to drive engagement from 620K+ global followers.',
      ],
    },
    {
      title: 'President',
      company: 'ZJU Lingyun Musical Club',
      location: 'Hangzhou, China',
      period: 'Sept 2021 – May 2024',
      description: [
        'Managed club operations across 8 departments with 150+ members; led the annual musical theatre production, drawing 6,000+ audience members.',
        'Produced an original musical commemorating the 40th anniversary of Chu Kochen Honors College, overseeing recruitment, script development, budgeting, and cross-team coordination.',
      ],
    },
  ]

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-primary-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience & Leadership
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Research, analytics, and leadership across tech and creative teams
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 md:p-8 hover:shadow-xl transition-shadow duration-300 border-l-4 border-primary-600"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <FaBriefcase className="text-primary-600 text-xl" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-primary-600 font-medium mb-1">
                    {exp.company}
                  </p>
                  <p className="text-gray-500 mb-4">
                    {exp.location} · {exp.period}
                  </p>
                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-gray-700 flex items-start"
                      >
                        <span className="text-primary-600 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
