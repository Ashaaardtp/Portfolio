import { motion as Motion } from "framer-motion";

export default function AnimatedDivider({
  className = "",
  ornament = true,
}) {
  return (
    <div
      className={`relative w-full py-6 md:py-8 ${className}`}>
      {/* Garis yang melukis dirinya sendiri */}
      <Motion.div
        className="h-px w-full bg-gradient-to-r from-transparent via-(--accent-gold) to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        style={{ transformOrigin: "center" }}
      />

      {/* Ornamen di tengah */}
      {ornament && (
        <Motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{
            delay: 0.4,
            duration: 0.3,
            ease: "backOut",
          }}>
          <div className="rounded-full bg-(--bg-card) p-1.5 shadow-md border border-(--accent-gold)/50">
            {/* Bisa diganti ikon apa saja */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-(--accent-gold)">
              <path d="M12 2v20M2 12h20" />
            </svg>
          </div>
        </Motion.div>
      )}
    </div>
  );
}
