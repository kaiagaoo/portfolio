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
      className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="section-divider mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for data science and growth analytics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-soft card-hover border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 pb-3 border-b border-gray-200 dark:border-gray-700">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center space-x-3"
                  >
                    <span className="text-2xl">{category.icons[skillIndex]}</span>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
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
