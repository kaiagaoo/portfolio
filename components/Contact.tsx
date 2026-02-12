"use client";

import { useState } from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="section-divider mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Always happy to chat about data science, career opportunities, or the latest industry trends!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-soft hover:shadow-medium transition-shadow border border-gray-100 dark:border-gray-700">
                <div className="w-14 h-14 rounded-xl gradient-box flex items-center justify-center shadow-medium flex-shrink-0">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:qwgao@berkeley.edu"
                    className="text-gray-900 dark:text-white font-medium hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                  >
                    qwgao@berkeley.edu
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-soft hover:shadow-medium transition-shadow border border-gray-100 dark:border-gray-700">
                <div className="w-14 h-14 rounded-xl gradient-box flex items-center justify-center shadow-medium flex-shrink-0">
                  <FaPhone className="text-white text-xl" />
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+15105426385"
                    className="text-gray-900 dark:text-white font-medium hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                  >
                    +1 (510) 542-6385
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-soft hover:shadow-medium transition-shadow border border-gray-100 dark:border-gray-700">
                <div className="w-14 h-14 rounded-xl gradient-box flex items-center justify-center shadow-medium flex-shrink-0">
                  <FaLinkedin className="text-white text-xl" />
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">
                    LinkedIn
                  </p>
                  <a
                    href="https://www.linkedin.com/in/kaiagao"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 dark:text-white font-medium hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                  >
                    linkedin.com/in/kaiagao
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-soft hover:shadow-medium transition-shadow border border-gray-100 dark:border-gray-700">
                <div className="w-14 h-14 rounded-xl gradient-box flex items-center justify-center shadow-medium flex-shrink-0">
                  <FaGithub className="text-white text-xl" />
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">
                    GitHub
                  </p>
                  <a
                    href="https://github.com/kaiagaoo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 dark:text-white font-medium hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                  >
                    github.com/kaiagaoo
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-soft hover:shadow-medium transition-shadow border border-gray-100 dark:border-gray-700">
                <div className="w-14 h-14 rounded-xl gradient-box flex items-center justify-center shadow-medium flex-shrink-0">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">
                    Location
                  </p>
                  <p className="text-gray-900 dark:text-white font-medium">
                    Berkeley, CA
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-soft"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-soft"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all resize-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-soft"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3.5 bg-gradient-to-r from-accent-600 to-accent-700 text-white rounded-lg font-semibold hover:from-accent-700 hover:to-accent-800 transition-all duration-200 shadow-medium hover:shadow-large transform hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
