import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/Data/projects.json")
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(() => setProjects([]));
  }, []);

  if (!projects.length) {
    return (
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <p style={{ color: 'var(--asu-text-muted)' }}>Loading projects...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 asu-text-glow" style={{ color: 'var(--heading-accent)' }}>
            Projects
          </h2>
          <div className="w-24 h-1 mx-auto mb-8" style={{ background: 'var(--underline-accent)' }}></div>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#444' }}>
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
            className="rounded-md overflow-hidden border transition-all duration-300 group"
            style={{ background: 'var(--asu-ink)', borderColor: 'var(--asu-border)' }}
            >
              {project.image_url && (
                <div className="relative overflow-hidden">
                  <img
                    src={project.image_url}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      {project.demo_url && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          href={project.demo_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-md text-black transition-colors duration-300 asu-btn-primary"
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
                          className="p-3 rounded-md text-white transition-colors duration-300"
                          style={{ background: 'var(--asu-ink)' }}
                        >
                          <Github size={20} />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 transition-colors duration-300" style={{ color: 'var(--asu-text)' }}>
                  {project.title}
                </h3>
                <p className="mb-4 leading-relaxed" style={{ color: 'var(--asu-text-muted)' }}>
                  {project.description}
                </p>

                {project.technologies && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-md font-mono"
                        style={{ background: 'var(--accent-bg-soft)', color: 'var(--accent-color)', border: '1px solid var(--accent-border-soft)' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex space-x-4 pt-2" style={{ borderTop: '1px solid var(--asu-border)' }}>
                  {project.demo_url && (
                    <a
                      href={project.demo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 transition-colors duration-300"
                      style={{ color: 'var(--asu-maroon)' }}
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
                      className="flex items-center space-x-2 transition-colors duration-300"
                      style={{ color: 'var(--asu-text-muted)' }}
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
