import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useTheme } from "@/Components/ThemeProvider";

// Pitchfork Icon Component - uses PNG images based on theme
const PitchforkIcon = ({ size = 24, className = "" }) => {
    const { theme } = useTheme();
    const imageSrc = theme === 'asu-dark' ? '/pitchfork-gold.png' : '/pitchfork-maroon.png';
    
    return (
        <Image
            src={imageSrc}
            alt="Pitchfork toggle"
            width={size}
            height={size}
            className={className}
        />
    );
};

export default function Navigation() {
    const { theme, toggleTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: "Home", href: "#home", id: "home" },
        { name: "About", href: "#about", id: "about" },
        { name: "Experience", href: "#experience", id: "experience" },
        { name: "Skills", href: "#skills", id: "skills" },
        { name: "Projects", href: "#projects", id: "projects" },
        { name: "Contact", href: "#contact", id: "contact" }
    ];

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
            const id = href.replace('#', '');
            setActiveSection(id);
        }
    };

    useEffect(() => {
        const sectionIds = navItems.map(item => item.id);
        const sections = sectionIds
            .map(id => document.getElementById(id))
            .filter(Boolean);

        if (!sections.length) return;

        const handleScroll = () => {
            // Find the section closest to the top of viewport
            let currentSection = 'home';
            let minDistance = Infinity;

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                // Check if section is in viewport
                if (rect.top <= 100 && rect.bottom >= 0) {
                    const distance = Math.abs(rect.top);
                    if (distance < minDistance) {
                        minDistance = distance;
                        currentSection = section.id;
                    }
                }
            });

            setActiveSection(currentSection);
        };

        // Initial check
        handleScroll();

        // Add scroll listener
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        // Also use IntersectionObserver for more accurate detection
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const rect = entry.boundingClientRect;
                        // Only update if section is in the upper portion of viewport
                        if (rect.top <= 150) {
                            setActiveSection(entry.target.id);
                        }
                    }
                });
            },
            {
                root: null,
                rootMargin: '-20% 0px -60% 0px',
                threshold: [0.1, 0.25, 0.5]
            }
        );

        sections.forEach((section) => observer.observe(section));
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b backdrop-blur`}
            style={{
                background: isScrolled ? 'var(--asu-ink)' : 'transparent',
                borderColor: theme === 'asu-dark' ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.06)'
            }}
        >
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center relative">
                    {/* Left: Name */}
                    <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="text-2xl font-bold cursor-pointer asu-brand"
                        onClick={() => scrollToSection("#home")}
                        style={{ color: 'var(--asu-text)' }}
                    >
                        Het Bhesaniya
                    </motion.div>

                    {/* Center: Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6 absolute left-1/2 transform -translate-x-1/2">
                        {navItems.map((item) => (
                            <motion.button
                                key={item.name}
                                whileHover={{ scale: 1.05 }}
                                onClick={() => scrollToSection(item.href)}
                                className="transition-colors duration-300 font-medium asu-underline-gold"
                                style={{ color: 'var(--asu-text)' }}
                                aria-current={activeSection === item.id ? 'page' : undefined}
                            >
                                {item.name}
                            </motion.button>
                        ))}
                    </div>

                    {/* Right: Toggle Button + Mobile Menu */}
                    <div className="ml-auto flex items-center space-x-4">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            className="p-3 rounded-md border hidden md:block"
                            style={{
                                borderColor: theme === 'asu-dark' ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.06)',
                                color: theme === 'asu-dark' ? 'var(--asu-gold)' : 'var(--asu-maroon)',
                                background: 'transparent'
                            }}
                        >
                            <PitchforkIcon size={24} />
                        </motion.button>
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden"
                            style={{ color: 'var(--asu-text)' }}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden mt-4 pb-4 border-t"
                        style={{ borderColor: 'rgba(0,0,0,0.06)' }}
                    >
                        {navItems.map((item) => (
                            <motion.button
                                key={item.name}
                                whileHover={{ x: 10 }}
                                onClick={() => scrollToSection(item.href)}
                                className="block w-full text-left py-2 transition-colors duration-300 asu-underline-gold"
                                style={{ color: 'var(--asu-text)' }}
                                aria-current={activeSection === item.id ? 'page' : undefined}
                            >
                                {item.name}
                            </motion.button>
                        ))}
                        <div className="pt-2">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={toggleTheme}
                                aria-label="Toggle theme"
                                className="flex items-center gap-2 p-2 rounded-md border w-full"
                                style={{
                                    borderColor: theme === 'asu-dark' ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.06)',
                                    color: theme === 'asu-dark' ? 'var(--asu-gold)' : 'var(--asu-maroon)',
                                    background: 'transparent'
                                }}
                            >
                                <PitchforkIcon size={24} />
                                <span>Switch theme</span>
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
}
