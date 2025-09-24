import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronsRight } from "lucide-react";

export default function Experience() {
  const [jobs, setJobs] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    fetch("/data/experience.json")
      .then(res => res.json())
      .then(data => setJobs(data));
  }, []);

  if (!jobs.length) return null;

  const activeJob = jobs[activeTab];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 batman-text-glow">
            Field Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A dossier of my professional engagements and key missions.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {/* Tabs */}
          <div className="flex md:flex-col overflow-x-auto scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
            {jobs.map((job, index) => (
              <button
                key={job.id}
                onClick={() => setActiveTab(index)}
                className={`relative w-full text-left p-4 md:pl-6 text-lg font-semibold transition-colors duration-300 ${
                  activeTab === index
                    ? "text-yellow-500"
                    : "text-gray-400 hover:bg-gray-800/30 hover:text-white"
                }`}
              >
                {job.company}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="p-8 bg-gray-800/50 rounded-md border border-gray-700 cut-corner"
              >
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4">
                  <h3 className="text-2xl font-bold text-white">{activeJob.role}</h3>
                  <p className="text-yellow-500 font-semibold mt-1 sm:mt-0">{activeJob.duration}</p>
                </div>
                <p className="text-lg text-gray-300 mb-6">{activeJob.company}</p>

                <ul className="space-y-3 text-gray-300">
                  {activeJob.description.map((desc, i) => (
                    <li key={i} className="flex items-start">
                      <ChevronsRight className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
