import { motion } from "framer-motion";

export default function Layout({ children }) {
    return (
        <div className="min-h-screen relative" style={{ background: 'var(--asu-ink)', color: 'var(--asu-text)' }}>
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