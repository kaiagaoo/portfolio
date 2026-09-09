export default function Skills() {
  const skillCategories = [
    {
      category: 'Product Analytics & Experimentation',
      skills: ['SQL & Python', 'A/B Testing', 'Causal Inference & Regression', 'Segmentation & Product Metrics', 'Tableau & Streamlit'],
    },
    {
      category: 'AI Evaluation & Integrity',
      skills: ['LLM Evaluation', 'Benchmark & Dataset Design', 'RAG & Content Freshness', 'Factorial Experiments', 'NLP & Text Analysis'],
    },
    {
      category: 'Quantitative User Research',
      skills: ['Survey Design', 'Behavioral Data Analysis', 'Statistical Modeling in R & Python', 'Impact Measurement', 'Research Communication'],
    },
    {
      category: 'Applied AI Engineering',
      skills: ['Python & TypeScript', 'React & Next.js', 'Node.js & REST APIs', 'PostgreSQL & Supabase', 'LLM APIs & MCP'],
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
            Methods & Tools
          </h2>
          <div className="section-divider mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            The methods and tools I use across research, analysis, and software projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-soft card-hover border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 pb-3 border-b border-gray-200 dark:border-gray-700">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center space-x-3"
                  >
                    <span aria-hidden="true" className="text-accent-500">•</span>
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
