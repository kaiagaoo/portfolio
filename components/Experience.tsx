import { FaBriefcase } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      title: "AI Research Intern",
      company: "Wrodium",
      location: "Berkeley, CA",
      period: "Dec 2025 – Present",
      description: [
        "Causal Benchmark Development – Leading development of a research framework to quantify how content freshness reduces LLM hallucination through three causal mechanisms (Knowledge Conflict, Temporal Grounding, Parametric Override)",
        "Temporal QA Dataset Construction – Built QA dataset using Myers diff for factual change detection; designed factorial experiments with logistic regression decomposition to isolate mechanism effects across 6 domains and multiple LLMs",
        "Content Pipeline Automation – Engineered a multi-agent workflow using Make.com and LLM APIs to automate technical blog generation on Generative Engine Optimization (GEO), synthesizing retrieval-augmented generation (RAG) research into educational content",
      ],
    },
    {
      title: "Strategy & Data Analyst Intern",
      company: "APPA Health",
      location: "Berkeley, CA",
      period: "Sept – Dec 2025",
      description: [
        "Market Opportunity Analysis – Analyzed the educational funding landscape to identify and evaluate a pipeline of potential funding opportunities supporting youth wellness.",
        "Impact Measurement & Reporting – Established a KPI framework to measure SEL program effectiveness. Analyzed pre- and post-program survey data to quantify impact on student engagement, providing key insights for program iteration and reporting to funding partners.",
      ],
    },
    {
      title: "Marketing Analytics Intern",
      company: "RedNote",
      location: "Shanghai, China",
      period: "Aug 2024 – Jan 2025",
      description: [
        "Audience Segmentation – Queried and analyzed behavioral and demographic user data using SQL in Hive on a large-scale data warehouse to create 35 pet industry audience segments, contributing to ¥1.83M (~$250K) in ad revenue and improved ad targeting accuracy within the first month.",
        "KPI Automation – Developed and automated marketing KPI dashboards using Python, SQL, and RedBI (BI tool comparable to Power BI) to track campaign performance, user engagement, and retention metrics. Presented findings and strategic recommendations to over 740 clients and internal stakeholders.",
        "Marketing Strategy – Designed and analyzed A/B tests to optimize ad targeting strategies and creatives. Integrated CRM data to conduct deep-dive analyses on marketing performance, providing insights that improved marketing efficiency and ROI.",
      ],
    },
    {
      title: "Product & User Analytics Intern",
      company: "Didi",
      location: "Hangzhou, China",
      period: "Mar – Jun 2024",
      description: [
        "Pricing Analytics – Conducted multivariate regression and causal inference analyses on supply-demand patterns and user price elasticity to inform dynamic pricing strategies, leading to a 2% revenue lift.",
        'User Research – Designed and distributed user surveys to identify pain points in the "hourly driver" service; combined findings with SQL-based behavioral analysis to uncover actionable product insights, driving a 3% reduction in complaints and measurable improvement in driver-passenger experience.',
      ],
    },
    {
      title: "Content Operation Intern",
      company: "Huace Film & TV",
      location: "Hangzhou, China",
      period: "Jun – Sept 2023",
      description: [
        "Content Engagement Analysis – Queried and analyzed 10,000+ follower records using SQL and Python to identify audience attributes and content preferences; created user clusters that informed strategy adjustments, boosting page views by 15.1%.",
        "A/B Testing – Conducted A/B tests to refine video strategy; produced and distributed 300+ YouTube clips, leveraging insights to drive engagement from 620K+ global followers.",
      ],
    },
    {
      title: "President",
      company: "ZJU Lingyun Musical Club",
      location: "Hangzhou, China",
      period: "Sept 2021 – May 2024",
      description: [
        "Managed club operations across 8 departments with 150+ members; led the annual musical theatre production, drawing 6,000+ audience members.",
        "Produced an original musical commemorating the 40th anniversary of Chu Kochen Honors College, overseeing recruitment, script development, budgeting, and cross-team coordination.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Leadership
          </h2>
          <div className="section-divider mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Research, analytics, and leadership across tech and creative teams
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-soft p-6 md:p-8 card-hover border-l-4 border-accent-600 dark:border-accent-500"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-14 h-14 rounded-xl gradient-box flex items-center justify-center shadow-medium">
                    <FaBriefcase className="text-white text-xl" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-accent-600 dark:text-accent-400 font-semibold mb-1">
                    {exp.company}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 mb-5">
                    {exp.location} · {exp.period}
                  </p>
                  <ul className="space-y-3">
                    {exp.description.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-gray-700 dark:text-gray-300 flex items-start leading-relaxed"
                      >
                        <span className="text-accent-600 mr-3 mt-1.5">•</span>
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
  );
}
