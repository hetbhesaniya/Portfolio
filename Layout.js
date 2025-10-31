import React from "react";
import { motion } from "framer-motion";

export default function Layout({ children }) {
    return (
        <div className="min-h-screen relative" style={{ background: 'var(--batman-black)', color: 'var(--batman-text)' }}>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative noise-bg"
            >
                {children}
            </motion.div>
        </div>
    );
}