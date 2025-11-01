import { useState, useEffect } from "react";
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
            const navHeight = 80; // Approximate height of fixed navigation bar
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navHeight;

            const id = href.replace('#', '');
            setActiveSection(id);
            setIsMobileMenuOpen(false);

            // Prevent scroll detection from overriding for longer
            window.__navigationScrolling = true;
            setTimeout(() => {
                window.__navigationScrolling = false;
            }, 1500);

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Ensure active section stays correct after scroll completes
            setTimeout(() => {
                setActiveSection(id);
            }, 800); // Wait for smooth scroll to complete
        }
    };

    useEffect(() => {
        const sectionIds = navItems.map(item => item.id);
        const sections = sectionIds
            .map(id => document.getElementById(id))
            .filter(Boolean);

        if (!sections.length) return;

        let isScrolling = false;
        let scrollTimeout;

        const handleScroll = () => {
            // Don't update active section if user just clicked a nav item (smooth scroll in progress)
            if (isScrolling || window.__navigationScrolling) return;

            // Find the section closest to the top of viewport
            let currentSection = 'home';
            let minDistance = Infinity;

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                // Check if section is in viewport with better threshold
                if (rect.top <= 120 && rect.bottom >= 50) {
                    const distance = Math.abs(rect.top - 80); // Account for nav height
                    if (distance < minDistance) {
                        minDistance = distance;
                        currentSection = section.id;
                    }
                }
            });

            // Only update if we're at the top (home section)
            if (window.scrollY < 100) {
                currentSection = 'home';
            }

            setActiveSection(currentSection);
        };

        // Track when smooth scroll starts
        const handleSmoothScroll = () => {
            isScrolling = true;
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                isScrolling = false;
            }, 1000); // Wait for smooth scroll to complete
        };

        // Initial check with delay to ensure DOM is ready
        setTimeout(() => {
            if (window.scrollY < 100) {
                setActiveSection('home');
            } else {
                handleScroll();
            }
        }, 100);

        // Use IntersectionObserver for more accurate detection
        const observer = new IntersectionObserver(
            (entries) => {
                // Don't update during programmatic scroll or manual navigation clicks
                if (isScrolling || window.__navigationScrolling) return;

                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const rect = entry.boundingClientRect;
                        // Only update if section is in the upper portion of viewport
                        if (rect.top <= 120 && rect.top >= -50) {
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

        // Add scroll listener with throttling
        let scrollTimer;
        window.addEventListener('scroll', () => {
            if (!isScrolling) {
                clearTimeout(scrollTimer);
                scrollTimer = setTimeout(handleScroll, 150);
            }
        }, { passive: true });

        // Listen for smooth scroll events
        window.addEventListener('scroll', handleSmoothScroll, { passive: true });
        
        return () => {
            clearTimeout(scrollTimer);
            clearTimeout(scrollTimeout);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', handleSmoothScroll);
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
                            className="p-3 rounded-md border"
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
                                className="block w-full text-left py-2 transition-colors duration-300"
                                style={{ color: 'var(--asu-text)' }}
                                aria-current={activeSection === item.id ? 'page' : undefined}
                            >
                                <span className={`asu-underline-gold inline-block ${activeSection === item.id ? 'active' : ''}`}>
                                    {item.name}
                                </span>
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
}
