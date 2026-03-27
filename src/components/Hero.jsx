import {
  FiLinkedin,
  FiInstagram,
  FiGithub,
} from "react-icons/fi";
import { motion as Motion } from "framer-motion";
import AnimatedDivider from "./AnimatedDivider";
import SectionWatermark from "./SectionWatermark";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

export default function Hero() {
  return (
    <>
      <section className="relative min-h-screen w-full overflow-hidden px-4 pt-20 pb-8 md:pt-24 md:pb-10">
        {/* Background glow */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-(--primary-cta) rounded-full blur-[150px] opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-(--accent-gold) rounded-full blur-[120px] opacity-15"></div>

        <div className="relative z-10 mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-end">
          {/* Image */}
          <Motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={0}
            className="relative h-full w-full max-w-sm sm:max-w-md md:max-w-lg justify-self-center md:justify-self-end order-1 md:order-1">
            <img
              src="/pasha.webp"
              alt="Pasha Raditya Putra"
              className="w-full h-auto object-contain object-top md:object-cover md:object-top md:max-h-[78vh] drop-shadow-[0_14px_35px_rgba(0,0,0,0.45)]"
            />

            {/* Mobile overlay gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent md:hidden" />

            {/* Mobile: Name overlay */}
            <Motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="absolute bottom-45 left-4 right-4 md:hidden">
              <h1 className="text-5xl sm:text-6xl leading-[0.95] mb-2 font-gill text-white drop-shadow-lg">
                Pasha
                <br />
                Raditya
                <br />
                Putra
              </h1>
            </Motion.div>

            {/* Mobile: Description overlay */}
            <Motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="absolute bottom-8 left-4 right-4 md:hidden">
              <p className="text-base font-medium font-montserrat leading-relaxed text-white drop-shadow-md">
                <span className="highlight">
                  TKJ Student | Aspiring Software
                  Developer
                </span>{" "}
                <br />
                Menjembatani dunia jaringan dan
                pengembangan perangkat lunak
                melalui coding.
              </p>
            </Motion.div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-black/55 to-transparent md:hidden" />
          </Motion.div>

          {/* Desktop text */}
          <div className="hidden md:block text-(--text-main) order-2 md:order-2">
            <Motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-6xl md:text-7xl lg:text-8xl leading-[0.95] mb-4 font-gill">
              Pasha
              <br />
              Raditya
              <br />
              Putra
            </Motion.h1>
            <Motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="mb-6 text-lg font-medium font-montserrat leading-relaxed max-w-lg">
              <span className="highlight md:typewritting">
                TKJ Student | Aspiring Software
                Developer
              </span>{" "}
              <br />
              Menjembatani dunia jaringan dan
              pengembangan perangkat lunak melalui
              coding.
            </Motion.p>

            {/* Buttons */}
            <Motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex gap-4 md:gap-6 justify-center items-center text-center md:justify-start">
              <Motion.a
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.97 }}
                href="#contact-cta"
                className="relative px-4 py-2 rounded-full bg-(--primary-cta) text-(--text-main) font-light tracking-wide shadow-xl hover:bg-(--primary-hover) transition-all duration-300 ease-out text-base md:text-xl md:px-6 md:py-4">
                <span className="relative z-10">
                  Get In Touch
                </span>
              </Motion.a>
              <Motion.a
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.97 }}
                href="#project"
                className="px-4 py-2 rounded-full border border-(--text-muted) text-(--text-muted) font-gill font-extralight tracking-wide hover:border-(--accent-gold) hover:text-(--accent-gold) hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-300 text-base md:text-xl md:px-6 md:py-4">
                View Projects
              </Motion.a>
            </Motion.div>
          </div>

          {/* Mobile buttons */}
          <Motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="md:hidden text-(--text-main) order-2 pt-4">
            <div className="flex gap-4 justify-center items-center">
              <a
                href="#contact-cta"
                className="relative px-4 py-2 rounded-full bg-(--primary-cta) text-(--text-main) font-light tracking-wide shadow-xl hover:bg-(--primary-hover) hover:scale-105 transition-all duration-300 ease-out text-base">
                <span className="relative z-10">
                  Get In Touch
                </span>
              </a>
              <a
                href="#project"
                className="px-4 py-2 rounded-full border border-(--text-muted) text-(--text-muted) font-gill font-extralight tracking-wide hover:border-(--accent-gold) hover:text-(--accent-gold) hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-300 text-base">
                View Projects
              </a>
            </div>
          </Motion.div>
        </div>

        {/* Social sidebar */}
        <Motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 1,
            duration: 0.6,
            ease: "easeOut",
          }}
          className="absolute hidden flex-col right-6 top-1/3 -translate-y-1/2 z-20 items-center gap-4 px-3 py-5 rounded-full bg-(--bg-card)/80 backdrop-blur-sm border border-(--bg-card-light) shadow-[inset_0_2px_12px_rgba(0,0,0,0.4)] md:flex">
          {[
            {
              href: "https://linkedin.com",
              icon: <FiLinkedin size={20} />,
            },
            {
              href: "https://instagram.com",
              icon: <FiInstagram size={20} />,
            },
            {
              href: "https://github.com",
              icon: <FiGithub size={20} />,
            },
          ].map((social, i) => (
            <Motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
              className="text-(--text-muted) hover:text-(--accent-gold) transition-all duration-200">
              {social.icon}
              {i < 2 && (
                <span className="block w-4 h-px bg-(--bg-card-light) mt-4 mx-auto" />
              )}
            </Motion.a>
          ))}
        </Motion.div>
        <SectionWatermark
          label="HERO"
          position="bottom-right"
        />
        <AnimatedDivider />
      </section>
    </>
  );
}
