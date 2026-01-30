"use client";

import { useState } from "react";
import { FaDownload, FaEye, FaTimes } from "react-icons/fa";

export default function Resume() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  // Resume file path - update this to your actual resume file location
  const resumePath = "/DS.pdf";
  const resumeFileName = "DS.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = resumeFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Resume
          </h2>
          <div className="section-divider mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            View or download my resume to learn more about my experience and
            skills
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-large p-8 md:p-12 border border-gray-200 dark:border-gray-700">
            <div className="text-center mb-8">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full gradient-box flex items-center justify-center text-white text-4xl font-bold shadow-medium">
                KG
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Qianwen (Kaia) Gao
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Data Scientist · Berkeley, CA
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsPreviewOpen(true)}
                className="px-8 py-3.5 gradient-btn text-white rounded-lg font-semibold transition-all duration-200 shadow-medium hover:shadow-large transform hover:-translate-y-0.5 flex items-center justify-center"
              >
                <FaEye className="w-5 h-5 mr-2" />
                Preview Resume
              </button>
              <button
                onClick={handleDownload}
                className="px-8 py-3.5 border-2 border-accent-600 text-accent-600 dark:text-accent-400 dark:border-accent-400 rounded-lg font-semibold hover:bg-accent-50 dark:hover:bg-accent-900/20 transition-all duration-200 flex items-center justify-center"
              >
                <FaDownload className="w-5 h-5 mr-2" />
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      {isPreviewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 dark:bg-black/90 p-4">
          <div className="relative w-full max-w-4xl h-[90vh] bg-white dark:bg-gray-900 rounded-xl shadow-2xl overflow-hidden">
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={() => setIsPreviewOpen(false)}
                className="w-10 h-10 rounded-full bg-gray-900/50 dark:bg-gray-100/50 backdrop-blur-sm text-white dark:text-gray-900 flex items-center justify-center hover:bg-gray-900/70 dark:hover:bg-gray-100/70 transition-colors"
                aria-label="Close preview"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>
            <iframe
              src={resumePath}
              className="w-full h-full border-0"
              title="Resume Preview"
            />
          </div>
        </div>
      )}
    </section>
  );
}
