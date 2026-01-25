import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function Projects() {
  const projects = [
    {
      title: 'Consentful Civic Lens – Event Organizer',
      subtitle: 'CalHacks Project | Oct 2025',
      description:
        'Built a full-stack web app with Next.js, Supabase, and PostgreSQL for event consent management and storytelling. Integrated Claude API and LiveKit for AI-generated highlight summaries, and developed a recommendation system to personalize future event suggestions based on user interests and location.',
      technologies: ['Next.js', 'Supabase', 'PostgreSQL', 'Claude API', 'LiveKit'],
      github: 'https://github.com',
      demo: undefined,
      image: '🎭',
    },
    {
      title: 'Consumer Sentiment & Brand Insights from Amazon Fashion Reviews',
      subtitle: 'Course Project | Oct 2025 – Present',
      description:
        'Analyzed 2.5M Amazon Fashion reviews to extract customer sentiment and brand perception using NLP techniques (VADER, BERT embeddings, topic modeling). Built regression and clustering models to identify key drivers of satisfaction and differentiate brand positioning. Visualized sentiment and keyword trends across categories through an interactive Streamlit dashboard, providing actionable insights for marketing and product strategy.',
      technologies: ['Python', 'VADER', 'BERT', 'Streamlit', 'Scikit-learn'],
      github: 'https://github.com',
      demo: undefined,
      image: '👗',
    },
  ]

  return (
    <section
      id="projects"
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Full-stack apps, NLP, and data science in action
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-primary-50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
            >
              <div className="p-6">
                <div className="text-5xl mb-4 text-center">{project.image}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-primary-600 mb-3">{project.subtitle}</p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
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
                    className="flex items-center text-gray-700 hover:text-primary-600 transition-colors duration-200"
                  >
                    <FaGithub className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-primary-600 transition-colors duration-200"
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
  )
}
