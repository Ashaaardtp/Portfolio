import { useState, useEffect } from "react";
import {
  motion as Motion,
  AnimatePresence,
} from "framer-motion";
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const socialLinks = [
  { icon: <FaLinkedin size={24} />, url: "#" },
  { icon: <FaInstagram size={24} />, url: "#" },
  { icon: <FaGithub size={24} />, url: "#" },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Project", href: "#project" },
];

function HamburgerButton({ isOpen, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={
        isOpen ? "Close menu" : "Open menu"
      }
      aria-expanded={isOpen}
      className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg focus:outline-none">
      <span
        className={`block h-0.5 w-6 rounded-full bg-white transition-all duration-300 ease-in-out ${
          isOpen ? "translate-y-2 rotate-45" : ""
        }`}
      />
      <span
        className={`block h-0.5 w-6 rounded-full bg-white transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-0 scale-x-0" : ""
        }`}
      />
      <span
        className={`block h-0.5 w-6 rounded-full bg-white transition-all duration-300 ease-in-out ${
          isOpen ?
            "-translate-y-2 -rotate-45"
          : ""
        }`}
      />
    </button>
  );
}

function MobileMenu({ isOpen, onClose }) {
  useEffect(() => {
    document.body.style.overflow =
      isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <Motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm"
          />

          {/* Panel */}
          <Motion.div
            key="panel"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-transparent">
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <Motion.a
                  key={link.label}
                  href={link.href}
                  onClick={onClose}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{
                    delay: i * 0.06 + 0.1,
                    duration: 0.35,
                  }}
                  className="text-[16px] text-(--text-main) hover:text-(--accent-gold) hover:underline transition-colors duration-200 text-montserrat">
                  {link.label}
                </Motion.a>
              ))}
            </nav>
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{
                delay: 0.45,
                duration: 0.4,
              }}
              className="absolute bottom-10 flex flex-col gap-6 text-lg text-(--accent-gold) font-gill items-center">
              <h2>CODER NETWORKING</h2>
              <div className="flex gap-6 mx-auto">
                {socialLinks.map(
                  (link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      className="text-(--text-main) hover:text-(--accent-gold) transition-all duration-300">
                      {link.icon}
                    </a>
                  ),
                )}
              </div>
            </Motion.div>
          </Motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center md:justify-center px-6 py-4 bg-transparent backdrop-blur-md border-b border-white/10">
        {/* Desktop nav */}
        <nav className="hidden font-extrabold md:flex items-center md:gap-20 lg:gap-30">
          {navLinks.map((link, i) => (
            <Motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1 + i * 0.08,
                duration: 0.4,
              }}
              className="text-montserrat text-[16px] text-(--text-main) hover:text-(--accent-gold) hover:underline transition-colors duration-200">
              {link.label}
            </Motion.a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <HamburgerButton
            isOpen={isOpen}
            onClick={() => setIsOpen((v) => !v)}
          />
        </div>
      </Motion.header>

      <div className="md:hidden">
        <MobileMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </div>
    </>
  );
}
