
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/Components/ThemeProvider";

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

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                root: null,
                rootMargin: '-40% 0px -55% 0px',
                threshold: 0.1
            }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
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
                <div className="flex justify-between items-center">
                    <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="text-2xl font-bold cursor-pointer asu-brand"
                        onClick={() => scrollToSection("#home")}
                        style={{ color: 'var(--batman-text)' }}
                    >
                        Het Bhesaniya
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navItems.map((item) => (
                            <motion.button
                                key={item.name}
                                whileHover={{ scale: 1.05 }}
                                onClick={() => scrollToSection(item.href)}
                                className="transition-colors duration-300 font-medium asu-underline-gold"
                                style={{ color: 'var(--batman-text)' }}
                                aria-current={activeSection === item.id ? 'page' : undefined}
                            >
                                {item.name}
                            </motion.button>
                        ))}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            className="p-2 rounded-md border"
                            style={{
                                borderColor: theme === 'asu-dark' ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.06)',
                                color: 'var(--batman-text)',
                                background: 'transparent'
                            }}
                        >
                            {theme === 'asu-dark' ? <Sun size={18} /> : <Moon size={18} />}
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden"
                        style={{ color: 'var(--batman-text)' }}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
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
                                style={{ color: 'var(--batman-text)' }}
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
                                    color: 'var(--batman-text)',
                                    background: 'transparent'
                                }}
                            >
                                {theme === 'asu-dark' ? <Sun size={18} /> : <Moon size={18} />}
                                <span>Switch theme</span>
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
}
