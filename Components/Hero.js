
import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
    const scrollToNext = () => {
        document.querySelector("#about").scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-repeat bg-center [background-image:radial-gradient(theme(colors.yellow.500/0.05)_1px,transparent_1px)] [background-size:2rem_2rem]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <motion.h1 
                        className="text-5xl md:text-7xl font-bold mb-6 batman-text-glow"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        Your Name
                    </motion.h1>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="mb-8"
                    >
                        <h2 className="text-2xl md:text-3xl text-yellow-500 font-light mb-4 tracking-widest uppercase">
                            Full Stack Developer
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Building resilient digital systems from the shadows.
                            Specialized in high-performance web applications and tactical design.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.1 }}
                        className="flex justify-center space-x-6 mb-12"
                    >
                        <motion.a
                            whileHover={{ scale: 1.2, y: -5 }}
                            whileTap={{ scale: 0.9 }}
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-yellow-500 transition-colors duration-300"
                        >
                            <Github size={32} />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.2, y: -5 }}
                            whileTap={{ scale: 0.9 }}
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-yellow-500 transition-colors duration-300"
                        >
                            <Linkedin size={32} />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.2, y: -5 }}
                            whileTap={{ scale: 0.9 }}
                            href="mailto:your.email@example.com"
                            className="text-gray-400 hover:text-yellow-500 transition-colors duration-300"
                        >
                            <Mail size={32} />
                        </motion.a>
                    </motion.div>

                    <motion.button
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.4 }}
                        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(192, 159, 0, 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={scrollToNext}
                        className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-3 rounded-md font-semibold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300"
                    >
                        Explore My Arsenal
                    </motion.button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <motion.button
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        onClick={scrollToNext}
                        className="text-yellow-500 hover:text-yellow-400 transition-colors duration-300"
                    >
                        <ChevronDown size={32} />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
