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
            From Communication to Computation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I started in Communication at Zhejiang University, fascinated by how information shapes behavior. That curiosity led me to data — first analyzing user behavior, then optimizing product experience, and now researching how AI systems process information.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Today, I'm a Data Science grad student at UC Berkeley, designing experiments to understand why things happen, not just what happened. I'm proficient in causal inference, machine learning, and NLP, building predictive models, running A/B tests, and turning large-scale data into actionable insights.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I believe the best data scientists are storytellers who let the data speak.
            </p>
            

          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-soft card-hover border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg gradient-box flex items-center justify-center mr-4">
                  <FaCode className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  User Behavior Analysis
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Audience segmentation, retention modeling, and behavioral insights that drove revenue impact.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-soft card-hover border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg gradient-box flex items-center justify-center mr-4">
                  <FaChartLine className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Causal Inference &amp; Experimentation
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                A/B experiments, factorial design,
                multivariate regression, and statistical inference to inform decisions.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-soft card-hover border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg gradient-box flex items-center justify-center mr-4">
                  <FaDatabase className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  AI &amp; LLM Research
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                RAG systems, content freshness benchmarks, and multi-agent automation for GenAI applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
