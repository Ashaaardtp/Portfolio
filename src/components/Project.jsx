import { motion as Motion } from "framer-motion";
import AnimatedDivider from "./AnimatedDivider";
import SectionWatermark from "./SectionWatermark";
export default function Project() {
  return (
    <>
      <section className="relative overflow-hidden px-4 py-14 md:py-18">
        <div className="container mx-auto max-w-6xl">
          <Motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="text-4xl font-bold text-center mb-10 font-gill text-(--text-main)">
            MY PROJECT
          </Motion.h2>

          <Motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
              delay: 0.1,
            }}
            className="group relative overflow-hidden rounded-2xl border border-(--accent-gold)/25 bg-(--bg-card-light)/25 shadow-[0_0_30px_rgba(0,0,0,0.25)]">
            <div className="pointer-events-none absolute -top-20 -right-16 h-52 w-52 rounded-full bg-(--primary-cta)/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-(--accent-gold)/10 blur-3xl" />

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 items-stretch">
              <Motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: 0.2,
                }}
                className="overflow-hidden">
                <img
                  src="./public/mikrotik.png"
                  alt="Website Belajar Mikrotik"
                  className="w-full h-full object-cover min-h-[260px] md:min-h-[340px] md:group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </Motion.div>

              <Motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: 0.3,
                }}
                className="flex flex-col justify-center p-5 md:p-8">
                <Motion.span
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.45,
                  }}
                  className="inline-flex w-fit rounded-full border border-(--accent-gold)/40 bg-(--accent-gold)/10 px-3 py-1 text-xs tracking-wide text-(--accent-gold) mb-3">
                  Featured Project
                </Motion.span>
                <Motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5,
                  }}
                  className="text-2xl md:text-3xl font-bold text-(--text-main)">
                  Website Belajar Mikrotik
                </Motion.h2>
                <Motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.6,
                  }}
                  className="mt-3 text-sm md:text-base text-(--text-main)/85 leading-relaxed">
                  Platform yang saya buat untuk
                  mempermudah pembelajaran
                  Mikrotik di SMK AL-Hadi Bandung,
                  tempat saya bersekolah.
                </Motion.p>

                <Motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.7,
                  }}
                  className="mt-6">
                  <a
                    href="https://belajar-mikrotik-smk-al-hadi.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-(--primary-cta) to-(--primary-hover) px-5 py-3 text-(--text-main) font-semibold tracking-wide shadow-[0_0_20px_rgba(149,1,1,0.55)] hover:shadow-[0_0_26px_rgba(181,1,1,0.75)] hover:-translate-y-0.5 transition-all duration-300 ease-out">
                    View Live Website
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24">
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 17L17 7m0 0H8m9 0v9"
                      />
                    </svg>
                  </a>
                </Motion.div>
              </Motion.div>
            </div>
          </Motion.div>
        </div>
        <SectionWatermark
          label="PROJECT"
          position="top-right"
        />
        <AnimatedDivider />
      </section>
    </>
  );
}
