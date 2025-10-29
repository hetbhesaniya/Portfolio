
import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="py-12" style={{ background: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
            <div className="container mx-auto px-6">
                <div className="text-center">
                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mb-8 text-2xl font-bold cursor-pointer transition-colors duration-300 asu-text-glow"
                        style={{ color: 'var(--asu-maroon)' }}
                    >
                        Het Bhesaniya
                    </motion.button>
                    
                    <div className="flex items-center justify-center space-x-2 mb-4" style={{ color: '#555' }}>
                        <span>Forged with code, refined by data</span>
                    </div>
                    
                    <p className="text-sm" style={{ color: '#666' }}>
                        © {new Date().getFullYear()} Het Bhesaniya. All rights reserved.
                    </p>
                    
                    <div className="mt-8 pt-8" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                        <p className="text-xs font-mono" style={{ color: '#777' }}>
                            "Building reliable systems with speed and clarity."
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
