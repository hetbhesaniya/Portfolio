import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronsRight } from "lucide-react";

export default function Experience() {
  const [jobs, setJobs] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    fetch("/Data/Experience.json")
      .then(res => res.json())
      .then(data => setJobs(data));
  }, []);

  // Render a lightweight placeholder so the #experience anchor always exists
  if (!jobs.length) {
    return (
      <section id="experience" className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--asu-maroon)' }}>Field Experience</h2>
          <div className="w-24 h-1 mx-auto mb-4" style={{ background: 'var(--asu-gold)' }}></div>
          <p style={{ color: '#666' }}>Loading experience...</p>
        </div>
      </section>
    );
  }

  const activeJob = jobs[activeTab];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 asu-text-glow" style={{ color: 'var(--asu-maroon)' }}>
            Field Experience
          </h2>
          <div className="w-24 h-1 mx-auto mb-8" style={{ background: 'var(--asu-gold)' }}></div>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#444' }}>
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
                className={`relative w-full text-left p-4 md:pl-6 text-lg font-semibold transition-colors duration-300`}
                style={{
                  color: activeTab === index ? 'var(--asu-maroon)' : '#555',
                  background: activeTab === index ? 'rgba(255,198,39,0.1)' : 'transparent'
                }}
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
                className="p-8 rounded-md border"
                style={{ background: '#ffffff', borderColor: 'rgba(0,0,0,0.08)' }}
              >
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4">
                  <h3 className="text-2xl font-bold" style={{ color: '#111111' }}>{activeJob.role}</h3>
                  <p className="font-semibold mt-1 sm:mt-0" style={{ color: 'var(--asu-maroon)' }}>{activeJob.duration}</p>
                </div>
                <p className="text-lg mb-6" style={{ color: '#555' }}>{activeJob.company}</p>

                <ul className="space-y-3" style={{ color: '#444' }}>
                  {activeJob.description.map((desc, i) => (
                    <li key={i} className="flex items-start">
                      <ChevronsRight className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" style={{ color: 'var(--asu-maroon)' }} />
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
