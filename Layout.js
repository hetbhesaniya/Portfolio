import React from "react";
import { motion } from "framer-motion";

export default function Layout({ children }) {
    return (
        <div className="min-h-screen bg-black relative">
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative noise-bg"
            >
                {/* Aggressive Batman symbol watermark */}
                <div className="fixed top-10 right-10 opacity-5 pointer-events-none z-0">
                    <div className="w-32 h-32 text-yellow-500">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                           <path d="M12.11.23c-1.89.2-3.8.8-5.71 1.81-1.28.69-2.52 1.5-3.69 2.51-1.44 1.25-2.5 2.8-3.08 4.61-.43 1.34-.43 2.7-.02 4.04.53 1.73 1.58 3.24 3.03 4.41.6.49 1.25.9 1.94 1.23a10.8 10.8 0 0 0 6.8 0c.69-.33 1.34-.74 1.94-1.23 1.45-1.17 2.5-2.68 3.03-4.41.4-1.34.4-2.7-.02-4.04-.58-1.8-1.64-3.36-3.08-4.61-1.17-1.01-2.4-1.82-3.69-2.51-1.08-.58-2.16-1-3.26-1.29-.36-.1-.72-.15-1.08-.15zM12 4.45c1.47.53 2.91 1.3 4.29 2.3 1.13.82 2.14 1.8 2.97 2.9.5.65.88 1.4 1.12 2.2.3.99.3 2.01 0 3-.24.8-.62 1.55-1.12 2.2-.83 1.1-1.84 2.08-2.97 2.9-1.38 1-2.82 1.77-4.29 2.3-.5.18-1.02.27-1.54.27h-.92c-.52 0-1.04-.09-1.54-.27-1.47-.53-2.91-1.3-4.29-2.3C2.84 18.05 1.83 17.07.99 16c-.5-.65-.88-1.4-1.12-2.2-.3-.99-.3-2.01 0-3 .24-.8.62-1.55 1.12-2.2.83-1.1 1.84-2.08 2.97-2.9C5.34 5.75 6.78 4.98 8.25 4.45c.5-.18 1.02-.27 1.54-.27h.92c.52 0 1.04.09 1.54.27z"/>
                        </svg>
                    </div>
                </div>
                
                {children}
            </motion.div>
        </div>
    );
}