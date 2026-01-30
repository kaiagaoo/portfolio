import { FaCode, FaChartLine, FaDatabase } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="section-divider mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Transforming data into actionable insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I&apos;m a Data Scientist with a strong foundation in user
              behavior analysis, causal inference, and growth experimentation.
              I&apos;m experienced in developing agentic RAG systems, designing
              A/B tests, and building predictive models using Python and SQL.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I&apos;m proficient in building automated workflows and
              interactive dashboards that translate complex analytics into
              actionable insights—from retrieval benchmarking and survival
              analysis to audience segmentation and marketing optimization.
              I&apos;ve driven measurable impact at companies like Xiaohongshu,
              Didi, and Wrodium.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Currently pursuing a Master&apos;s in Computational Social Science
              at UC Berkeley, I bring both technical depth and product-minded
              thinking to every project. Fluent in English and Mandarin.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-soft card-hover border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg gradient-box flex items-center justify-center mr-4">
                  <FaCode className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  RAG &amp; Retrieval Systems
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Experimental frameworks, Recall@k, BM25, vector embeddings, and
                GEO strategies to improve AI agent retrieval and content
                attribution.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-soft card-hover border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg gradient-box flex items-center justify-center mr-4">
                  <FaChartLine className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Causal Inference &amp; A/B Testing
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                A/B/C/D experiments, survival analysis (Kaplan-Meier, Cox PH),
                multivariate regression, and statistical inference for product
                and growth decisions.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-soft card-hover border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg gradient-box flex items-center justify-center mr-4">
                  <FaDatabase className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Dashboards &amp; Automation
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                KPI dashboards, Make workflows, and data pipelines—turning
                analytics into reporting and product strategy for stakeholders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
