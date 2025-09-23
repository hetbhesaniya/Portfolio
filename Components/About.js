
import React from "react";
import { motion } from "framer-motion";
import { User, Award, Coffee } from "lucide-react";

export default function About() {
    const stats = [
        { icon: User, label: "Years Experience", value: "5+" },
        { icon: Award, label: "Projects Completed", value: "50+" },
        { icon: Coffee, label: "Cups of Coffee", value: "1000+" }
    ];

    return (
        <section id="about" className="py-20 bg-black">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 batman-text-glow">
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto mb-8"></div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                            <p>
                                I'm a full-stack developer operating at the intersection of strategic design and robust engineering. 
                                My focus is on architecting clean, efficient code and deploying systems that perform under pressure.
                            </p>
                            <p>
                                With years of experience in the field, my mission is to deliver digital solutions that are both powerful and intuitive.
                                I thrive in complex problem-solving environments and am committed to mastering the modern web technology stack.
                            </p>
                            <p>
                                Away from the keyboard, I'm constantly analyzing new tech, deconstructing complex systems, and planning my next mission.
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="mt-8"
                        >
                            <button className="bg-transparent border-2 border-yellow-500 text-yellow-500 px-8 py-3 rounded-md font-semibold hover:bg-yellow-500 hover:text-black transition-all duration-300">
                                Download Intel
                            </button>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="grid grid-cols-1 gap-6"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 * index }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-gray-800/50 p-6 rounded-md border border-gray-700 hover:border-yellow-500/30 transition-all duration-300 batman-glow"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="p-3 bg-yellow-500/10 rounded-md">
                                        <stat.icon className="w-6 h-6 text-yellow-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                                        <p className="text-gray-400">{stat.label}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
