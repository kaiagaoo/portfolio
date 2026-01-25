export default function Skills() {
  const skillCategories = [
    {
      category: 'Programming',
      skills: [
        'Python (pandas, numpy, scikit-learn)',
        'SQL',
        'R',
        'HTML, CSS, JavaScript',
        'Next.js',
      ],
      icons: ['🐍', '🗄️', '📊', '💻', '⚡'],
    },
    {
      category: 'Databases & Backend',
      skills: ['Supabase', 'PostgreSQL', 'MySQL', 'RESTful APIs'],
      icons: ['🔌', '🐘', '📦', '🔗'],
    },
    {
      category: 'Statistics',
      skills: [
        'A/B Testing',
        'Causal Inference',
        'Regression Analysis',
        'Bayesian Methods',
      ],
      icons: ['🧪', '📐', '📈', '🎲'],
    },
    {
      category: 'Machine Learning & Frameworks',
      skills: ['Predictive Modeling', 'PyTorch', 'TensorFlow'],
      icons: ['🤖', '🔥', '🧠'],
    },
    {
      category: 'Data Processing & Visualization',
      skills: ['Tableau', 'Matplotlib', 'Seaborn', 'Plotly', 'Streamlit'],
      icons: ['📊', '🎨', '📈', '📉', '🖥️'],
    },
    {
      category: 'Tools & Workflow',
      skills: ['Git', 'GitHub', 'Jupyter', 'Google Colab', 'Excel'],
      icons: ['🔧', '🐙', '📓', '☁️', '📋'],
    },
    {
      category: 'Languages',
      skills: ['English (Professional)', 'Mandarin (Native)'],
      icons: ['🌐', '🇨🇳'],
    },
  ]

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-primary-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for data science and growth analytics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-primary-200">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center space-x-3"
                  >
                    <span className="text-2xl">{category.icons[skillIndex]}</span>
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
