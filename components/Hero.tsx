import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-50 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="inline-block mb-4">
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-4xl md:text-5xl font-bold shadow-lg">
                KG
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            <span className="block">Qianwen (Kaia)</span>
            <span className="block bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              Gao
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Data Scientist with a strong foundation in user behavior analysis,
            causal inference, and growth experimentation. Experienced in agentic
            RAG systems, A/B tests, and predictive models—translating complex
            analytics into actionable insights that drive business growth.
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary-600 transition-colors duration-200"
              aria-label="GitHub"
            >
              <FaGithub className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/kaiagao"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary-600 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-8 h-8" />
            </a>
            <a
              href="mailto:qwgao@berkeley.edu"
              className="text-gray-700 hover:text-primary-600 transition-colors duration-200"
              aria-label="Email"
            >
              <FaEnvelope className="w-8 h-8" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-primary-600 text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200"
            >
              Get In Touch
            </a>
          </div>

          <div className="mt-16 animate-bounce">
            <a href="#about" className="text-gray-400 hover:text-primary-600">
              <FaArrowDown className="w-6 h-6 mx-auto" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
