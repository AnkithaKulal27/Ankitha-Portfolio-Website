import React, { useState } from "react";
import { motion } from "framer-motion";

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void }> = ({ href, children, onClick }) => (
  <a href={href} onClick={onClick} className="block hover:text-white transition-colors">
    {children}
  </a>
);

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 bg-neutral-400 backdrop-blur-sm border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <span className="font-bold text-lg text-neon">Ankitha</span>
        </a>

        <div className="hidden md:flex gap-8 items-center text-gray-300 font-medium">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
          className="md:hidden p-2 rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
        >

          {!open ? (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M4 7h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M4 12h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M6 6l12 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.28, ease: "easeInOut" }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-4 pb-4 pt-2 bg-neutral-400">
          <nav className="flex flex-col gap-3 text-gray-300 font-medium">
            <NavLink href="#home" onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink href="#about" onClick={() => setOpen(false)}>About</NavLink>
            <NavLink href="#skills" onClick={() => setOpen(false)}>Skills</NavLink>
            <NavLink href="#projects" onClick={() => setOpen(false)}>Projects</NavLink>
            <NavLink href="#contact" onClick={() => setOpen(false)}>Contact</NavLink>
          </nav>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
