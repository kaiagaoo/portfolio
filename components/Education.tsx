import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  const education = [
    {
      degree: "Master of Computational Social Science",
      institution: "University of California, Berkeley",
      location: "Berkeley, CA",
      period: "Jun 2025 – May 2026",
      description: [
        "GPA: 3.87/4.00",
        "Relevant Coursework: Advanced Computing, Machine Learning, Advanced Applied Statistics, Data Visualization, Deep Learning for Visual Data (DeCal)",
      ],
    },
    {
      degree: "Bachelor of Arts, Communication",
      institution: "Zhejiang University (ZJU)",
      location: "Hangzhou, China",
      period: "Sept 2021 – Jun 2025",
      description: [
        "GPA: 3.95/4.00",
        "Relevant Coursework: Big Data Analytics, Advanced Mathematics, Probability and Mathematical Statistics, Python Programming, Introduction to Research Methodology in Social Sciences",
      ],
    },
  ];

  return (
    <section id="education" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="section-divider mb-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-soft p-8 card-hover border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-14 h-14 rounded-xl gradient-box flex items-center justify-center shadow-medium">
                    <FaGraduationCap className="text-white text-xl" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-accent-600 dark:text-accent-400 font-semibold mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                    {edu.location} · {edu.period}
                  </p>
                </div>
              </div>
              <ul className="space-y-2">
                {edu.description.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-gray-700 dark:text-gray-300 flex items-start leading-relaxed"
                  >
                    <span className="text-accent-600 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
