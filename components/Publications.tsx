import { FaExternalLinkAlt } from 'react-icons/fa'

export default function Publications() {
  return (
    <section id="publications" aria-labelledby="publications-heading" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="publications-heading" className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Publications
          </h2>
          <div className="section-divider mb-4"></div>
        </div>

        <article className="max-w-5xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-soft border border-gray-100 dark:border-gray-700 p-6 sm:p-8">
          <span className="inline-block px-3 py-1.5 mb-5 bg-accent-50 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 text-sm rounded-lg font-semibold">
            COLM 2026
          </span>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 leading-snug">
            <a href="https://arxiv.org/abs/2608.30466" target="_blank" rel="noopener noreferrer" className="hover:text-accent-600 dark:hover:text-accent-400 transition-colors">
              CHASE: How Content Ecosystems Are Reshaped When Ranking Is the Only Target
            </a>
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-2 leading-relaxed">
            <strong className="font-semibold text-gray-900 dark:text-white">Qianwen Gao</strong>, Zichang Su, Yiwen Hou, Arlen Kumar, Leanid Palkhouski
          </p>
          <p className="text-accent-600 dark:text-accent-400 font-medium mb-5">
            Accepted to the Conference on Language Modeling (COLM), 2026
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            A simulation framework examining how repeated optimization for LLM rankings changes content ecosystems. Across six domains, alignment between rankings and independently assessed content quality declines as creators adapt to ranking signals.
          </p>
          <a href="https://arxiv.org/abs/2608.30466" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent-600 dark:text-accent-400 hover:underline font-medium">
            Read paper on arXiv
            <FaExternalLinkAlt aria-hidden="true" className="w-3.5 h-3.5" />
          </a>
        </article>
      </div>
    </section>
  )
}
