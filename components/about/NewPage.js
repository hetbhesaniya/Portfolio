import { motion, useReducedMotion } from "framer-motion";

export default function NewPage() {
  const prefersReducedMotion = useReducedMotion();

  // ---- keep the same animation feel (no timing changes larger than below) ----
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.6,
        staggerChildren: prefersReducedMotion ? 0 : 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0 : 0.5 }
    }
  };

  // ---- closing credits data (short, punchy) ----
  const columns = [
    {
      label: "Contributed to",
      items: [
        "ASU Thrive magazine (editorial support)",
        "ASU All Access show (book preparation)",
        "ASU sports yearbooks (football, hockey, basketball, etc.)"
      ]
    },
    {
      label: "Learned",
      items: [
        "Spark ML pipelines and trees",
        "Daily Python reps",
        "Sharper, shorter copy"
      ]
    },
    {
      label: "Grateful for",
      items: [
        "Family calls on Sundays",
        "Friends who celebrate small wins",
        "Quiet late-night focus"
      ]
    }
  ];

  return (
    <section
      className="w-full relative min-h-screen flex items-center justify-center py-16 sm:py-20 md:py-24"
      style={{ background: "#F7F5F0" }}
    >
      {/* Subtle paper noise overlay (keep opacity low so it doesn't affect height) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] lg:opacity-[0.02]"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg viewBox=\\'0 0 400 400\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cfilter id=\\'noise\\'%3E%3CfeTurbulence type=\\'fractalNoise\\' baseFrequency=\\'1.5\\' numOctaves=\\'3\\'/%3E%3C/filter%3E%3Crect width=\\'100%25\\' height=\\'100%25\\' filter=\\'url(%23noise)\\'/%3E%3C/svg%3E')",
          backgroundSize: "400px 400px"
        }}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 relative z-10 text-center"
      >
        {/* Chapter label */}
        <motion.div
          variants={itemVariants}
          className="uppercase tracking-[0.35em] text-xs sm:text-sm text-[#121212]/60 mb-3 sm:mb-4"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          CHAPTER 04 • Final Frame
        </motion.div>

        {/* Main heading */}
        <motion.h2
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-2 md:mb-3 px-2 sm:px-0"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: "#121212"
          }}
        >
          Closing credits
        </motion.h2>

        {/* Subtitle + thin gold rule (tight margins so height stays the same) */}
        <motion.p
          variants={itemVariants}
          className="text-[11px] sm:text-xs md:text-sm lg:text-base px-2 sm:px-0 mb-2 sm:mb-0"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "#4A4A4A",
            textTransform: "lowercase"
          }}
        >
          scenes that wrapped this year
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="h-px w-14 md:w-16 mx-auto bg-[#E9C46A]/25 mt-3 mb-6"
        />

        {/* Three compact columns (stack on mobile). No extra vertical padding added. */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8 sm:gap-y-6 md:gap-y-8 divide-y md:divide-y-0 divide-[#121212]/10 text-left md:text-left mt-3 sm:mt-4 px-2 sm:px-0">
          {columns.map((col, idx) => (
            <motion.div
              key={col.label}
              variants={itemVariants}
              className="pt-6 sm:pt-6 md:pt-0 first:pt-0 md:first:pt-0 md:max-w-[28ch]"
            >
              <h3
                className="uppercase tracking-[0.12em] md:tracking-[0.18em] text-[11px] md:text-xs text-[#121212]/70 font-medium mb-2"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {col.label}
              </h3>
              <ul className="space-y-1.5">
                {col.items.map((it) => (
                  <li
                    key={it}
                    className="text-sm sm:text-base md:text-lg leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif", color: "#121212" }}
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Optional handwritten note (kept short; does not change section height noticeably) */}
        <motion.div
          variants={itemVariants}
          className="mt-10 sm:mt-8 text-[#121212]/70 italic px-4"
          style={{
            fontFamily: "'Caveat', cursive",
            transform: "rotate(-2deg)",
            fontSize: "clamp(20px, 4vw, 28px)"
          }}
        >
          "that's the reel. thanks for watching."
        </motion.div>
      </motion.div>
    </section>
  );
}

