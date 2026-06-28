import React from 'react';
import { Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '../UI/SocialIcons';

const socialLinks = {
  github: 'https://github.com/amandhulkar',
  linkedin: 'https://www.linkedin.com/in/amandhulkar23',
  whatsapp: 'https://wa.me/918952004922',
};

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0F172A]/40 backdrop-blur-md py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Info */}
        <div className="text-center md:text-left space-y-1">
          <p className="text-sm font-semibold font-sora text-white">
            © 2026 Aman Dhulkar. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 font-inter">
            Built with React + Tailwind CSS + Framer Motion.
          </p>
        </div>

        {/* Center Heart Note */}
        <div className="flex items-center gap-1.5 text-xs text-gray-400 font-inter">
          <span>Made with</span>
          <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500 animate-pulse" />
          <span>using MERN technologies</span>
        </div>

        {/* Right Social Links */}
        <div className="flex items-center gap-4">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent transition-colors duration-200"
            aria-label="GitHub Redirect"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent transition-colors duration-200"
            aria-label="LinkedIn Redirect"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-400 transition-colors duration-200"
            aria-label="WhatsApp Redirect"
          >
            <WhatsappIcon className="h-5 w-5" />
          </a>
          <a
            href="mailto:amandhulkar0079@gmail.com"
            className="text-gray-400 hover:text-accent transition-colors duration-200"
            aria-label="Mail Redirect"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
