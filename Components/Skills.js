
import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
    const skillCategories = [
        {
            title: "Frontend",
            skills: [
                { name: "React", level: 95 },
                { name: "TypeScript", level: 90 },
                { name: "Next.js", level: 88 },
                { name: "Tailwind CSS", level: 92 },
                { name: "Vue.js", level: 85 }
            ]
        },
        {
            title: "Backend",
            skills: [
                { name: "Node.js", level: 90 },
                { name: "Python", level: 88 },
                { name: "PostgreSQL", level: 85 },
                { name: "MongoDB", level: 82 },
                { name: "GraphQL", level: 80 }
            ]
        },
        {
            title: "Tools & Others",
            skills: [
                { name: "Git", level: 95 },
                { name: "Docker", level: 85 },
                { name: "AWS", level: 80 },
                { name: "Figma", level: 88 },
                { name: "Testing", level: 85 }
            ]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 batman-text-glow">
                        My Arsenal
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto mb-8"></div>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        The technologies and tools I wield to execute my missions.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                            className="bg-gray-800/50 p-8 rounded-md border border-gray-700 hover:border-yellow-500/30 transition-all duration-300 cut-corner"
                        >
                            <h3 className="text-2xl font-bold text-yellow-500 mb-8 text-center tracking-widest uppercase">
                                {category.title}
                            </h3>
                            
                            <div className="space-y-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                                    >
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-gray-300 font-medium">{skill.name}</span>
                                            <span className="text-yellow-500 text-sm font-mono">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-gray-700 rounded-none h-3 p-0.5 border border-gray-600">
                                            <motion.div
                                                className="h-full"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5 }}
                                                style={{
                                                  background: `repeating-linear-gradient(45deg, var(--batman-gold), var(--batman-gold) 5px, var(--batman-gold-muted) 5px, var(--batman-gold-muted) 10px)`
                                                }}
                                            ></motion.div>
                                        </div>
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
