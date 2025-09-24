
import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react"; // This import is no longer used but will be kept for consistency if it was part of the original, then removed if not. The outline replaces the Heart icon with a custom SVG. I will remove the unused import.

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-black border-t border-gray-800 py-12">
            <div className="container mx-auto px-6">
                <div className="text-center">
                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mb-8 text-2xl font-bold batman-text-glow cursor-pointer hover:text-yellow-500 transition-colors duration-300"
                    >
                        Het Bhesaniya
                    </motion.button>
                    
                    <div className="flex items-center justify-center space-x-2 text-gray-400 mb-4">
                        <span>Forged with code, refined by data</span>
                    </div>
                    
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Het Bhesaniya. All rights reserved.
                    </p>
                    
                    <div className="mt-8 pt-8 border-t border-gray-800">
                        <p className="text-gray-500 text-xs font-mono">
                            "Building reliable systems with speed and clarity."
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
