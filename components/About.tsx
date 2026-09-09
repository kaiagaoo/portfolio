import { FaChartLine, FaFlask, FaUsers, FaCode } from "react-icons/fa";

const focusAreas = [
  {
    title: "Product Analytics & Experimentation",
    description: "Using behavioral data and experiments to inform product decisions. At Didi and RedNote, I worked on user research, pricing analysis, audience segmentation, and A/B testing.",
    icon: FaChartLine,
    href: "#experience",
    link: "Explore my experience",
  },
  {
    title: "AI Evaluation & Integrity",
    description: "Investigating how ranking incentives and content freshness affect information quality. My work at Wrodium includes CHASE, accepted to COLM 2026, and the FreshRAG benchmark project.",
    icon: FaFlask,
    href: "#publications",
    link: "Read my publication",
  },
  {
    title: "Quantitative User Research",
    description: "Combining surveys, behavioral analysis, and statistical methods to understand people's needs. My experience spans transportation, youth wellness, and education.",
    icon: FaUsers,
    href: "#experience",
    link: "See my research experience",
  },
  {
    title: "Applied AI Engineering",
    description: "Putting research into practice through software projects, including PickMem for LLM memory curation and Consentful Civic Lens for event consent and storytelling.",
    icon: FaCode,
    href: "#projects",
    link: "Explore my projects",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="section-divider mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            People, information, and the systems that connect them
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-5 mb-12">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            My background in Communication at Zhejiang University led me to ask how information shapes people's choices. Through product analytics at Didi and RedNote, I began studying those questions with behavioral data and experiments. At UC Berkeley, I study Computational Social Science, bringing together research methods, statistics, and computing.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            At Wrodium, I investigated how AI systems shape information quality, co-authoring CHASE, accepted to COLM 2026. Alongside research, I build AI applications and have worked on projects involving student absenteeism and youth wellness. I want my work to make technology more trustworthy, help people access useful information, and support decisions that improve their lives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {focusAreas.map(({ title, description, icon: Icon, href, link }) => (
            <div key={title} className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-soft border border-gray-100 dark:border-gray-700 flex flex-col">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg gradient-box flex items-center justify-center shrink-0">
                  <Icon aria-hidden="true" className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-5">{description}</p>
              <a href={href} className="mt-auto text-accent-600 dark:text-accent-400 font-medium hover:underline">{link} →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
