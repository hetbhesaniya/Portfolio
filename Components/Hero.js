import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
    const heroRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!heroRef.current) return;

            const { clientX, clientY } = e;
            const { offsetWidth, offsetHeight } = heroRef.current;
            
            // Invert the xPos and yPos for parallax
            const xPos = -(clientX / offsetWidth - 0.5) * 30; // Intensity multiplier
            const yPos = -(clientY / offsetHeight - 0.5) * 30;

            const bg = heroRef.current.querySelector('.parallax-bg');
            if(bg) {
                // Use a transition for smoother movement
                bg.style.transform = `translate(${xPos}px, ${yPos}px)`;
            }

            const spotlight = heroRef.current.querySelector('.spotlight');
            if(spotlight) {
                // Instantly move the spotlight
                spotlight.style.transform = `translate(calc(${clientX}px - 50%), calc(${clientY}px - 50%))`;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const scrollToNext = () => {
        document.querySelector("#about").scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section ref={heroRef} id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden asu-white-maroon-bg">
            {/* Interactive Spotlight Effect */}
            <div 
                className="spotlight absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none z-20"
                style={{
                    background: 'radial-gradient(circle, rgba(255, 198, 39, 0.08) 0%, rgba(255, 198, 39, 0) 60%)'
                }}
            ></div>

            {/* Parallax Background */}
            <div className="absolute inset-0">
                <div className="parallax-bg absolute -inset-10 transition-transform duration-300 ease-out">
                    <div className="absolute inset-0 bg-repeat bg-center [background-image:radial-gradient(rgba(140,29,64,0.06)_1px,transparent_1px)] [background-size:2rem_2rem]"></div>
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Responsive grid: centered layout (desktop side-by-side) */}
                <div className="text-center md:text-center md:grid md:grid-cols-2 md:items-center md:justify-items-center md:gap-12">
                {/* Desktop image column (right, centered) */}
                <div className="hidden md:flex justify-center md:justify-center md:order-2">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="rounded-lg shadow-xl border overflow-hidden"
                        style={{ borderColor: 'rgba(0,0,0,0.08)' }}
                    >
                        <Image
                            src="/profile.jpg"
                            alt="Het Bhesaniya"
                            width={420}
                            height={420}
                            priority
                            className="w-[420px] h-[420px] object-cover"
                        />
                    </motion.div>
                </div>

                <motion.div
                    className="md:order-1 md:text-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    {/* Mobile Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="md:hidden mx-auto mb-8 rounded-full shadow-xl border overflow-hidden w-56 sm:w-64 aspect-square"
                        style={{ borderColor: 'rgba(0,0,0,0.08)' }}
                    >
                        <Image
                            src="/profile.jpg"
                            alt="Het Bhesaniya"
                            width={256}
                            height={256}
                            className="w-full h-full object-cover"
                            priority
                        />
                    </motion.div>
                    <motion.div
                        className="mb-6"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold asu-brand">
                            Het Bhesaniya
                        </h1>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="mb-8"
                    >
                        <h2 className="text-2xl md:text-3xl font-light mb-4 tracking-widest uppercase" style={{ color: 'var(--hero-accent)' }}>
                            Software Engineer & Data Analyst
                        </h2>
                        <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#444' }}>
                          
                            Building reliable systems, scalable pipelines, and intelligent solutions
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.1 }}
                        className="flex justify-center space-x-6 mb-12"
                    >
                        <motion.a
                            whileHover={{ scale: 1.2, y: -5, color: 'var(--hero-hover)' }}
                            whileTap={{ scale: 0.9 }}
                            href="https://github.com/hetbhesaniya"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 transition-colors duration-300"
                        >
                            <Github size={32} />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.2, y: -5, color: 'var(--hero-hover)' }}
                            whileTap={{ scale: 0.9 }}
                            href="https://www.linkedin.com/in/het-bhesaniya/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 transition-colors duration-300"
                        >
                            <Linkedin size={32} />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.2, y: -5, color: 'var(--hero-hover)' }}
                            whileTap={{ scale: 0.9 }}
                            href="mailto:hetbhesaniya0096@gmail.com"
                            className="text-gray-400 transition-colors duration-300"
                        >
                            <Mail size={32} />
                        </motion.a>
                    </motion.div>

                    <motion.button
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.4 }}
                        whileHover={{ scale: 1.05, boxShadow: "0 0 24px rgba(255, 198, 39, 0.35)" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={scrollToNext}
                        className="px-8 py-3 rounded-md font-semibold transition-all duration-300 hero-btn"
                    >
                        Explore My Skills
                    
                    </motion.button>
                </motion.div>
                </div>

                {/* Subtle ASU gold particles */}
                <div className="pointer-events-none absolute inset-0 -z-0">
                    {[...Array(8)].map((_, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.6 }}
                            animate={{ opacity: [0.15, 0.4, 0.15], y: [0, -8, 0] }}
                            transition={{ duration: 4 + i * 0.2, repeat: Infinity, delay: i * 0.3 }}
                            className="absolute block w-1.5 h-1.5 rounded-full"
                            style={{
                                backgroundColor: 'var(--asu-gold)',
                                left: `${(i * 13) % 100}%`,
                                top: `${(i * 17) % 100}%`
                            }}
                        />
                    ))}
                </div>

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
                        className="transition-colors duration-300"
                        style={{ color: 'var(--asu-gold)' }}
                    >
                        <ChevronDown size={32} />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}