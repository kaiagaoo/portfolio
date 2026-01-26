'use client'

import { useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa'

export default function Hero() {
  // Match your filename exactly (profile.jpg, profile.JPG, profile.png, etc.)
  const profilePicture = '/profile.JPG'
  const useProfilePicture = true

  const [imageError, setImageError] = useState(false)
  const showImage = useProfilePicture && !imageError

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-in-up">
          <div className="mb-8">
            <div className="inline-block mb-6">
              {showImage ? (
                <div className="w-36 h-36 md:w-44 md:h-44 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-large ring-4 ring-accent-500/20 dark:ring-accent-400/20 bg-gray-200 dark:bg-gray-700">
                  <img
                    src={profilePicture}
                    alt="Kaia Gao"
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                </div>
              ) : (
                <div className="w-36 h-36 md:w-44 md:h-44 mx-auto rounded-full bg-gradient-to-br from-accent-500 to-accent-700 flex items-center justify-center text-white text-5xl md:text-6xl font-bold shadow-large">
                  KG
                </div>
              )}
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            <span className="block mb-2">Qianwen (Kaia)</span>
            <span className="block gradient-text">Gao</span>
          </h1>

          <div className="mb-6">
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light mb-2">
              Data Scientist
            </p>
            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              User behavior analysis · Causal inference · Growth experimentation
            </p>
          </div>

          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed px-4">
            Experienced in agentic RAG systems, A/B tests, and predictive models—translating
            complex analytics into actionable insights that drive business growth.
          </p>

          <div className="flex justify-center space-x-5 mb-10">
            <a
              href="https://github.com/kaiagaoo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-soft flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/kaiagao"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-soft flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:qwgao@berkeley.edu"
              className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-soft flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              aria-label="Email"
            >
              <FaEnvelope className="w-5 h-5" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#projects"
              className="px-8 py-3.5 bg-gradient-to-r from-accent-600 to-accent-700 text-white rounded-lg font-semibold hover:from-accent-700 hover:to-accent-800 transition-all duration-200 shadow-medium hover:shadow-large transform hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 border-2 border-accent-600 dark:border-accent-400 text-accent-600 dark:text-accent-400 rounded-lg font-semibold hover:bg-accent-50 dark:hover:bg-accent-900/20 transition-all duration-200"
            >
              Get In Touch
            </a>
          </div>

          <div className="mt-16 animate-bounce">
            <a href="#about" className="text-gray-400 dark:text-gray-500 hover:text-accent-600 dark:hover:text-accent-400 transition-colors">
              <FaArrowDown className="w-5 h-5 mx-auto" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
