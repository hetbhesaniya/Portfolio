import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function SkillsAlt() {
    const skillCategories = [
        {
            title: "Frontend",
            skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "Framer Motion", "HTML5 & CSS3"]
        },
        {
            title: "Backend",
            skills: ["Node.js", "Python", "Express.js", "PostgreSQL", "MongoDB", "GraphQL", "REST APIs"]
        },
        {
            title: "Tools & Deploy",
            skills: ["Git", "Docker", "AWS", "Vercel", "Figma", "Jest", "CI/CD"]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-black">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 batman-text-glow">
                        Technical Arsenal
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto mb-8"></div>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        The technologies and tools I wield to execute my missions.
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                        >
                            <h3 className="text-2xl font-bold text-yellow-500 mb-8 text-center tracking-widest uppercase">
                                {category.title}
                            </h3>
                            
                            <div className="flex flex-wrap justify-center gap-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        whileHover={{ y: -5, scale: 1.05, boxShadow: "0 0 15px rgba(192, 159, 0, 0.2)" }}
                                        transition={{ duration: 0.3, delay: (categoryIndex * 0.2) + (skillIndex * 0.05) }}
                                        className="bg-gray-800/50 p-4 rounded-md border border-gray-700 flex items-center gap-3 cursor-default"
                                    >
                                        <CheckCircle className="w-5 h-5 text-yellow-500"/>
                                        <span className="text-gray-200 font-medium text-lg">{skill}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}