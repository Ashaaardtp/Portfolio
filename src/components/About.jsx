import { motion as Motion } from "framer-motion";
import AnimatedDivider from "./AnimatedDivider";
import SectionWatermark from "./SectionWatermark";
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      delay: 0.2,
    },
  },
};

const tagContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.4,
    },
  },
};

const tagItem = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden bg-black/20 backdrop-blur-sm px-4 py-14 md:py-18">
        <div className="pointer-events-none absolute -top-16 -left-14 h-52 w-52 rounded-full bg-(--primary-cta)/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 right-0 h-64 w-64 rounded-full bg-(--accent-gold)/10 blur-3xl" />

        <div className="relative mx-auto w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Text */}
          <Motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-(--text-main) order-1 md:order-1">
            <Motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="font-gill text-5xl md:text-6xl mb-4">
              ABOUT ME
            </Motion.h2>
            <Motion.h3
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="text-2xl md:text-3xl font-montserrat font-extrabold leading-tight">
              The Bridge Between
              <br />
              Network & Code
            </Motion.h3>

            <Motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              className="mt-5 text-(--accent-gold) text-base md:text-lg leading-relaxed font-medium max-w-2xl">
              Berangkat dari pemahaman
              infrastruktur jaringan, saya
              kemudian mendalami pengembangan
              aplikasi melalui Coding
              <span className="font-extrabold">
                {" "}
                Camp 2026 Powered by DBS
                Foundation
              </span>
              . Kini, fokus saya adalah membangun
              solusi teknologi yang utuh, efisien,
              dan berdampak.
            </Motion.p>

            <Motion.div
              variants={tagContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-6 flex flex-wrap gap-3">
              {[
                "React.js",
                "UI Implementation",
                "Networking Basics",
              ].map((tag) => (
                <Motion.span
                  key={tag}
                  variants={tagItem}
                  className="rounded-full border border-(--accent-gold)/30 bg-(--accent-gold)/10 px-3 py-1 text-xs md:text-sm text-(--accent-gold)">
                  {tag}
                </Motion.span>
              ))}
            </Motion.div>
          </Motion.div>

          {/* Right: Terminal */}
          <Motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full order-2 md:order-2 md:justify-self-end md:max-w-xl">
            <div className="bg-(--bg-card) rounded-xl p-3 md:p-4 font-mono text-(--accent-gold) text-sm md:text-base leading-relaxed border border-(--accent-gold)/70">
              <div className="flex gap-2 mb-3">
                <Motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.4,
                    duration: 0.3,
                  }}
                  className="w-3 h-3 rounded-full bg-red-500"
                />
                <Motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.5,
                    duration: 0.3,
                  }}
                  className="w-3 h-3 rounded-full bg-yellow-400"
                />
                <Motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.6,
                    duration: 0.3,
                  }}
                  className="w-3 h-3 rounded-full bg-green-500"
                />
              </div>

              <div className="border border-(--accent-gold)/70 p-3 rounded-lg bg-black/20">
                <pre className="whitespace-pre-wrap">
                  {`$ pasha --status
> System: TKJ Background
Passion: Web Development
Focus: React.js & UI/UX
$ pasha --uptime: 2024
Online since: 2024
$ pasha --location
> Bandung, Indonesia
$ pasha --skills
Hardware: Mikrotik
Software: JavaScript, React, Git
$ _`}
                </pre>
              </div>
            </div>
          </Motion.div>
        </div>
        <SectionWatermark
          label="ABOUT"
          position="top-left"
        />
        <AnimatedDivider />
      </section>
    </>
  );
}
