import { motion as Motion } from "framer-motion";

export default function SectionWatermark({
  label,
  position = "top-left",
}) {
  const positionClasses = {
    "top-left": "top-4 left-4 md:top-8 md:left-8",
    "top-right":
      "top-4 right-4 md:top-8 md:right-8",
    "bottom-left":
      "bottom-4 left-4 md:bottom-8 md:left-8",
    "bottom-right":
      "bottom-4 right-4 md:bottom-8 md:right-8",
  };

  return (
    <Motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.12 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className={`absolute ${positionClasses[position]} z-0 pointer-events-none select-none`}>
      <span className="font-gill text-7xl md:text-8xl lg:text-9xl font-black text-(--text-main) whitespace-nowrap">
        {label}
      </span>
    </Motion.div>
  );
}
