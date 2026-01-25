import { FaGraduationCap } from 'react-icons/fa'

export default function Education() {
  const education = [
    {
      degree: 'Master of Computational Social Science',
      institution: 'University of California, Berkeley',
      location: 'Berkeley, CA',
      period: 'Jun 2025 – Present',
      description: [
        'Relevant Coursework: Advanced Computing, Machine Learning, Advanced Applied Statistics, Data Visualization, Deep Learning for Visual Data (DeCal)',
      ],
    },
    {
      degree: 'Bachelor of Arts, Communication',
      institution: 'Zhejiang University (ZJU)',
      location: 'Hangzhou, China',
      period: 'Sept 2021 – Jun 2025',
      description: [
        'GPA: 3.95/4.00',
        'Relevant Coursework: Big Data Analytics, Advanced Mathematics, Probability and Mathematical Statistics, Python Programming, Introduction to Research Methodology in Social Sciences',
      ],
    },
  ]

  return (
    <section
      id="education"
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary-50 to-white rounded-lg shadow-md p-6 md:p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <FaGraduationCap className="text-primary-600 text-xl" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-primary-600 font-medium mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-gray-500 text-sm mb-2">
                    {edu.location} · {edu.period}
                  </p>
                </div>
              </div>
              <ul className="space-y-2">
                {edu.description.map((item, itemIndex) => (
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
          ))}
        </div>
      </div>
    </section>
  )
}
