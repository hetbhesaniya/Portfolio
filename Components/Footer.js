
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
                        Your Name
                    </motion.button>
                    
                    <div className="flex items-center justify-center space-x-2 text-gray-400 mb-4">
                        <span>Forged in darkness</span>
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M.458 10C3.732 4.943 9.522 3 10 3s6.268 1.943 9.542 7c-3.274 5.057-9.064 7-9.542 7S3.732 15.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/></svg>
                        </motion.div>
                        <span>with tactical precision</span>
                    </div>
                    
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Your Name. All rights reserved.
                    </p>
                    
                    <div className="mt-8 pt-8 border-t border-gray-800">
                        <p className="text-gray-500 text-xs font-mono">
                            "The city's crying out for a hero. I'll give it one."
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
