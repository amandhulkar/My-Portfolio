import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '../UI/SocialIcons';
import { MailIcon, ArrowRightIcon, DownloadIcon } from '../UI/SocialIcons';

const socialLinks = {
  github: 'https://github.com/amandhulkar',
  linkedin: 'https://www.linkedin.com/in/amandhulkar23',
  whatsapp: 'https://wa.me/918952004922',
};

export default function Hero() {
  const [roleText, setRoleText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Full Stack MERN Developer",
    "React & Node.js Developer",
    "MCA Student @ JECRC University"
  ];

  const typingSpeed = isDeleting ? 40 : 80;
  const delayBetweenRoles = 1500;

  useEffect(() => {
    let timer;
    const currentFullText = roles[roleIndex];

    if (!isDeleting) {
      timer = setTimeout(() => {
        setRoleText(currentFullText.substring(0, roleText.length + 1));
      }, typingSpeed);

      if (roleText === currentFullText) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenRoles);
      }
    } else {
      timer = setTimeout(() => {
        setRoleText(currentFullText.substring(0, roleText.length - 1));
      }, typingSpeed);

      if (roleText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [roleText, isDeleting, roleIndex]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 relative overflow-hidden">
      {/* Decorative Floating Code Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, -12, 0], x: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute top-[25%] left-[12%] text-primary/10 text-6xl sm:text-7xl font-bold font-sora hidden md:block"
        >
          {"{ }"}
        </motion.div>
        <motion.div
          animate={{ y: [0, 16, 0], x: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute bottom-[28%] right-[15%] text-secondary/15 text-5xl sm:text-6xl font-bold font-mono hidden md:block"
        >
          {"</>"}
        </motion.div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Subtle tag badge */}
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider font-sora bg-primary/10 border border-primary/20 text-accent uppercase">
              Available for Opportunities
            </span>

            {/* Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-sora tracking-tight leading-tight text-white">
              Hi, I'm <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent drop-shadow-sm">Aman Dhulkar</span>
            </h1>

            {/* Typing Effect Container */}
            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
              <h2 className="text-lg sm:text-3xl font-bold font-poppins text-gray-300">
                I am a <span className="text-accent font-mono border-r-2 border-accent pr-1.5 animate-pulse">{roleText}</span>
              </h2>
            </div>

            {/* Short Introduction */}
            <p className="max-w-2xl mx-auto lg:mx-0 text-sm sm:text-lg text-gray-400 font-inter leading-relaxed px-4 lg:px-0">
              I build modern, fast and scalable web applications using React, Node.js, Express and MongoDB. Dedicated to engineering robust solutions and resolving computational complexities.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 px-8 lg:px-0">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm font-poppins bg-primary hover:bg-primary/95 text-white transition-all shadow-lg hover:shadow-primary/25 duration-300 flex items-center justify-center gap-2 group"
              >
                View Projects
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="/resume.pdf"
                download="Aman-Dhulkar-Resume.pdf"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm font-poppins glass-panel hover:bg-white/10 text-white transition-all duration-300 flex items-center justify-center gap-2 border border-white/10"
              >
                Download Resume
                <DownloadIcon className="h-4 w-4 text-accent" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-8">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/50 border border-white/5 hover:border-accent/40 text-gray-400 hover:text-accent transition-all duration-300 hover:-translate-y-1 hover:shadow-glass-hover"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="h-5 w-5" />
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/50 border border-white/5 hover:border-accent/40 text-gray-400 hover:text-accent transition-all duration-300 hover:-translate-y-1 hover:shadow-glass-hover"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>

              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/50 border border-white/5 hover:border-green-400/40 text-gray-400 hover:text-green-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-glass-hover"
                aria-label="WhatsApp Chat"
              >
                <WhatsappIcon className="h-5 w-5" />
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="p-3 rounded-full bg-card/50 border border-white/5 hover:border-accent/40 text-gray-400 hover:text-accent transition-all duration-300 hover:-translate-y-1 hover:shadow-glass-hover"
                aria-label="Email Contact"
              >
                <MailIcon className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center lg:justify-end order-first lg:order-last"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary via-accent to-secondary opacity-30 blur-2xl animate-pulse" />
              <div className="relative h-56 w-56 sm:h-72 sm:w-72 lg:h-80 lg:w-80 rounded-full p-1 bg-gradient-to-br from-primary via-accent to-secondary shadow-2xl shadow-primary/20">
                <div className="h-full w-full rounded-full bg-background p-2">
                  <img
                    src="/Aman.png"
                    alt="Aman Dhulkar"
                    className="h-full w-full rounded-full object-cover border border-white/10"
                  />
                </div>
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-[#0F172A]/90 px-4 py-2 text-xs font-semibold font-mono text-accent shadow-lg backdrop-blur-md">
                {/* MERN Developer */}
                Web Developer
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
