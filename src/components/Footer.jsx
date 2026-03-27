import { useState } from "react";
import { motion as Motion } from "framer-motion";

import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaWhatsapp,
  FaEnvelope,
  FaXmark,
} from "react-icons/fa6";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.55,
      ease: "easeOut",
    },
  }),
};

export default function Footer() {
  const [
    isContactModalOpen,
    setIsContactModalOpen,
  ] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About Me", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Project", href: "#project" },
  ];
  const socialLinks = [
    { icon: <FaLinkedin size={20} />, url: "#" },
    { icon: <FaInstagram size={20} />, url: "#" },
    { icon: <FaGithub size={20} />, url: "#" },
  ];

  return (
    <>
      <footer className="bg-(--bg-main) text-(--text-main) px-4 py-6 md:px-6 lg:px-8">
        <div className="container mx-auto flex flex-col md:flex-row gap-5 md:gap-8 lg:gap-12 items-stretch">
          {/* Brand column */}
          <Motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
            className="md:min-w-[210px] flex flex-col h-full">
            <div>
              <h2 className="text-3xl font-bold mb-2 font-gill tracking-wide">
                Pasha Raditya Putra
              </h2>
              <div className="flex flex-col mb-3 font-montserrat">
                <h3 className="leading-[20px] font-extrabold text-(--accent-gold)">
                  <span className="text-md">
                    TKJ Student & Developer
                  </span>
                  <br />
                  <span className="font-bold text-sm">
                    Status: Ready for Work
                  </span>
                </h3>
              </div>
            </div>

            <div className="rounded-xl border border-(--accent-gold)/25 bg-(--bg-card-light)/20 px-3 py-2 mt-2">
              <p className="text-xs text-(--text-main)/80">
                Open for internship, freelance,
                and junior developer
                opportunities.
              </p>
            </div>

            <div className="mt-4">
              <p className="text-xs tracking-[0.2em] text-(--accent-gold) mb-2">
                CODER NETWORKING
              </p>
              <div className="flex items-center gap-4">
                {socialLinks.map(
                  (link, index) => (
                    <Motion.a
                      key={index}
                      href={link.url}
                      whileHover={{
                        scale: 1.2,
                        color:
                          "var(--accent-gold)",
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="text-(--text-main) hover:text-(--accent-gold) transition-all duration-300 mb-2">
                      {link.icon}
                    </Motion.a>
                  ),
                )}
              </div>
            </div>

            <p className="mt-auto pt-4 text-xs text-(--text-main)/70 border-t border-(--accent-gold)/20">
              © 2026 Mpashh. Crafted with passion.
            </p>
          </Motion.div>

          <div className="horizontal-line"></div>

          {/* Nav column */}
          <Motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={1}
            className="md:min-w-[170px] flex flex-col h-full justify-center">
            <h2 className="text-2xl font-bold mb-3">
              Navigasi
            </h2>
            <ol className="space-y-1.5">
              {navLinks.map((link, i) => (
                <Motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.2 + i * 0.08,
                    duration: 0.4,
                  }}>
                  <a
                    href={link.href}
                    className="hover:text-gray-400">
                    {link.label}
                  </a>
                </Motion.li>
              ))}
            </ol>
          </Motion.div>

          <div className="horizontal-line"></div>

          {/* CTA column */}
          <Motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={2}
            id="contact-cta"
            className="w-full md:max-w-xl lg:max-w-2xl md:ml-auto rounded-2xl border border-(--accent-gold)/30 bg-(--bg-card-light)/35 p-4 md:p-5 shadow-[0_0_24px_rgba(212,175,55,0.15)]">
            <div className="flex flex-col gap-5 md:gap-6 lg:flex-row md:items-center">
              <div className="md:flex-1">
                <h2 className="text-2xl font-extrabold mb-2 text-(--accent-gold)">
                  Let&apos;s Build Something Great
                  Together
                </h2>
                <p className="text-(--text-main)/90 leading-relaxed">
                  I&apos;m currently looking for
                  new opportunities, my inbox is
                  always open. Whether you have a
                  question or just want to say hi,
                  I&apos;ll try my best to get
                  back to you!
                </p>
                <div className="mt-5 flex justify-start">
                  <Motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() =>
                      setIsContactModalOpen(true)
                    }
                    className="inline-flex items-center gap-2 justify-center px-5 py-3 rounded-full bg-(--primary-cta) text-(--text-main) font-semibold tracking-wide shadow-[0_0_18px_rgba(149,1,1,0.55)] hover:bg-(--primary-hover) transition-all duration-300 ease-out text-base md:text-lg md:px-6 md:py-3">
                    Contact Me
                    <svg
                      className="w-5 h-5 text-(--text-main)"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24">
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
                      />
                    </svg>
                  </Motion.button>
                </div>
              </div>

              <div className="md:w-[200px] rounded-xl border border-(--accent-gold)/25 bg-black/25 p-4">
                <p className="text-xs tracking-[0.2em] text-(--accent-gold) mb-2">
                  QUICK INFO
                </p>
                <ul className="space-y-2 text-sm text-(--text-main)/90">
                  <li>
                    Response time: &lt; 24 hours
                  </li>
                  <li>
                    Preferred: Frontend projects
                  </li>
                  <li>
                    Available: Remote / On-site
                  </li>
                </ul>
              </div>
            </div>
          </Motion.div>
        </div>

        {/* Contact Modal */}
        {isContactModalOpen && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-80 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() =>
              setIsContactModalOpen(false)
            }>
            <Motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 20,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="w-full max-w-md rounded-2xl border border-(--accent-gold)/30 bg-(--bg-main) p-5 shadow-[0_0_30px_rgba(0,0,0,0.45)]"
              onClick={(event) =>
                event.stopPropagation()
              }>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold text-(--accent-gold)">
                    Choose Contact Method
                  </h3>
                  <p className="text-sm text-(--text-main)/80 mt-1">
                    Select one option below to
                    start a conversation.
                  </p>
                </div>
                <button
                  aria-label="Close contact modal"
                  onClick={() =>
                    setIsContactModalOpen(false)
                  }
                  className="text-(--text-main)/70 hover:text-(--accent-gold) transition-colors duration-200">
                  <FaXmark size={20} />
                </button>
              </div>

              <div className="mt-5 grid gap-3">
                <Motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://wa.me/6285173429018"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-xl border border-green-500/40 bg-green-500/10 px-4 py-3 hover:bg-green-500/20 transition-colors duration-200">
                  <span className="inline-flex items-center gap-2 text-(--text-main)">
                    <FaWhatsapp size={18} />
                    WhatsApp
                  </span>
                  <span className="text-sm text-(--text-main)/80">
                    +62 851-7342-9018
                  </span>
                </Motion.a>

                <Motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="mailto:contact.random.dev108@gmail.com"
                  className="flex items-center justify-between rounded-xl border border-sky-500/40 bg-sky-500/10 px-4 py-3 hover:bg-sky-500/20 transition-colors duration-200">
                  <span className="inline-flex items-center gap-2 text-(--text-main)">
                    <FaEnvelope size={16} />
                    Email
                  </span>
                  <span className="text-sm text-(--text-main)/80">
                    contact.random.dev108@gmail.com
                  </span>
                </Motion.a>
              </div>
            </Motion.div>
          </Motion.div>
        )}
      </footer>
    </>
  );
}
