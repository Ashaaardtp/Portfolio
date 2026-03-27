import { motion as Motion } from "framer-motion";
import AnimatedDivider from "./AnimatedDivider";
import SectionWatermark from "./SectionWatermark";
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.55,
      ease: "easeOut",
    },
  }),
};

const starVariant = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.07,
      duration: 0.35,
      ease: "easeOut",
    },
  }),
};

const techVariant = {
  hidden: { opacity: 0, scale: 0.7, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.45,
      ease: "easeOut",
    },
  }),
};

export default function Skills() {
  const skillStars = [
    { title: "Frontend Development", level: 4 },
    { title: "Logic & JavaScript", level: 4 },
    { title: "UI/UX Implementation", level: 4 },
    {
      title: "Troubleshooting & Support",
      level: 4,
    },
  ];

  const techStack = [
    { name: "Figma", src: "/figma.svg" },
    { name: "React", src: "/react.svg" },
    {
      name: "VS Code",
      src: "/icons8-visual-studio-code.svg",
    },
    {
      name: "Tailwind CSS",
      src: "/tailwind-svgrepo-com.svg",
    },
    {
      name: "JavaScript",
      src: "/javascript.svg",
    },
    {
      name: "Code",
      src: "/code-2-svgrepo-com.svg",
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden px-4 py-14">
        {/* Background layers */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--primary-cta)_0%,var(--bg-card)_42%,var(--bg-main)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06)_0%,transparent_42%,rgba(0,0,0,0.85)_100%)]" />
        <div className="pointer-events-none absolute -top-24 left-1/2 h-105 w-105 -translate-x-1/2 rounded-full bg-(--primary-cta)/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-24 h-130 w-130 rounded-full bg-(--bg-card)/60 blur-3xl" />

        <div className="relative mx-auto w-full max-w-6xl">
          {/* Header */}
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-12">
            <Motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              custom={0}
              className="min-w-0">
              <h2 className="font-gill text-5xl text-(--text-main)">
                SKILLS
              </h2>
              <h3 className="mt-2 font-montserrat text-2xl font-extrabold text-(--text-main)">
                Background Skills{" "}
                <br className="hidden sm:block" />{" "}
                & Tech Stack
              </h3>
            </Motion.div>

            <Motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              custom={1}
              className="max-w-xl text-(--accent-gold) font-medium leading-relaxed md:text-right">
              Sebagai siswa TKJ yang mendalami
              dunia pemrograman, saya terus
              mengasah kemampuan teknis baik di
              sisi infrastruktur jaringan maupun
              pengembangan perangkat lunak.
              Persentase ini merupakan
              representasi dari tingkat
              kepercayaan diri dan pengalaman
              praktis saya di setiap bidang.
            </Motion.p>
          </div>

          {/* Content */}
          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
            {/* Skill stars */}
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-1">
              {skillStars.map(
                (skill, skillIdx) => (
                  <Motion.div
                    key={skill.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                      amount: 0.3,
                    }}
                    custom={skillIdx * 0.5}>
                    <h4 className="text-(--text-main) font-semibold mb-2">
                      {skill.title}
                    </h4>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map(
                        (star) => {
                          const active =
                            star <= skill.level;
                          const globalIdx =
                            skillIdx * 5 + star;
                          return (
                            <Motion.div
                              key={star}
                              variants={
                                starVariant
                              }
                              initial="hidden"
                              whileInView="visible"
                              viewport={{
                                once: true,
                              }}
                              custom={globalIdx}
                              aria-label={`${skill.title} rating ${skill.level} of 5`}
                              className={[
                                "h-7 w-7 rounded-full border border-(--accent-gold)",
                                "grid place-items-center select-none",
                                active ?
                                  "bg-(--bg-card-light) shadow-[0_0_18px_var(--accent-gold-glow)]"
                                : "bg-transparent opacity-50",
                              ].join(" ")}>
                              <span className="text-(--accent-gold) text-sm leading-none">
                                ★
                              </span>
                            </Motion.div>
                          );
                        },
                      )}
                    </div>
                  </Motion.div>
                ),
              )}
            </div>

            {/* Tech stack */}
            <div className="grid grid-cols-3 gap-6 justify-items-center sm:gap-7">
              {techStack.map((t, i) => (
                <Motion.div
                  key={t.name}
                  variants={techVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  custom={i}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 },
                  }}
                  className={[
                    "relative grid place-items-center",
                    "h-20 w-20 sm:h-24 sm:w-24",
                  ].join(" ")}>
                  <img
                    src={t.src}
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 opacity-45 blur-xl"
                  />
                  <div
                    className={[
                      "relative grid place-items-center rounded-full",
                      "h-full w-full",
                      "border border-white/15",
                      "bg-white/8 backdrop-blur-md",
                      "shadow-[0_0_30px_rgba(0,0,0,0.35),0_0_25px_var(--glow-red)]",
                    ].join(" ")}>
                    <img
                      src={t.src}
                      alt={t.name}
                      className="h-10 w-10 sm:h-12 sm:w-12 object-contain drop-shadow-[0_0_10px_rgba(0,0,0,0.35)]"
                    />
                  </div>
                </Motion.div>
              ))}
            </div>
          </div>
        </div>
        <SectionWatermark
          label="SKILLS"
          position="bottom-right"
        />
        <AnimatedDivider />
      </section>
    </>
  );
}
