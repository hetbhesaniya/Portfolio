import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/data/projects.json")
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error("Error loading projects:", err));
  }, []);

  if (!projects.length) {
    return (
      <section id="projects" className="py-20 bg-black">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">Loading projects...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 batman-text-glow">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A collection of completed missions and tactical deployments.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-800/50 rounded-md overflow-hidden border border-gray-700 hover:border-yellow-500/30 transition-all duration-300 group cut-corner"
            >
              {project.image_url && (
                <div className="relative overflow-hidden">
                  <img
                    src={project.image_url}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      {project.demo_url && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          href={project.demo_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-yellow-500 rounded-md text-black hover:bg-yellow-400 transition-colors duration-300"
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                      )}
                      {project.github_url && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          href={project.github_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-gray-700 rounded-md text-white hover:bg-gray-600 transition-colors duration-300"
                        >
                          <Github size={20} />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {project.technologies && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-yellow-500/10 text-yellow-500 text-sm rounded-md border border-yellow-500/20 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex space-x-4 pt-2 border-t border-gray-700/50">
                  {project.demo_url && (
                    <a
                      href={project.demo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-yellow-500 hover:text-yellow-400 transition-colors duration-300"
                    >
                      <Eye size={16} />
                      <span className="text-sm">View Live</span>
                    </a>
                  )}
                  {project.github_url && (
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <Github size={16} />
                      <span className="text-sm">Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
