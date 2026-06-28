import React from 'react';
import { motion } from 'framer-motion';
import { XIcon, GithubIcon, ExternalLinkIcon, CheckCircleIcon } from '../UI/SocialIcons';

const isPlaceholderLink = (url) => !url || url === '#';

export default function ProjectDetailsPopup({ project, onClose }) {
  if (!project) return null;

  const actionClass = (url, primary = false) => {
    const base = "flex-1 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm font-poppins transition-all text-center flex items-center justify-center gap-2 duration-300";
    if (isPlaceholderLink(url)) {
      return `${base} bg-white/5 border border-white/10 text-gray-500 cursor-not-allowed`;
    }
    return primary
      ? `${base} bg-primary hover:bg-primary/95 text-white hover:shadow-lg hover:shadow-primary/20`
      : `${base} glass-panel hover:bg-white/10 text-white border border-white/10`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#0F172A]/90 backdrop-blur-md"
      />

      {/* Modal Inner Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="relative z-10 w-full max-w-4xl max-h-[85vh] overflow-y-auto glass-panel border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 flex flex-col space-y-6"
      >
        {/* Close Modal Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
          aria-label="Close Project Details"
        >
          <XIcon className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 pr-12">
          <span className="inline-flex px-3 py-1 rounded-full text-[10px] font-semibold font-mono bg-primary/10 border border-primary/20 text-accent uppercase tracking-wider">
            Project Highlights & Architecture
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold font-sora text-white">
            {project.title}
          </h3>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Block: Preview, Tech & Links */}
          <div className="lg:col-span-5 space-y-6">
            {/* Project Preview */}
            <div className={`aspect-video rounded-xl bg-gradient-to-br ${project.gradient} flex flex-col items-center justify-center p-6 shadow-lg border border-white/5 relative overflow-hidden group`}>
              {project.image && (
                <img
                  src={project.image}
                  alt={project.imageAlt || `${project.title} preview`}
                  className="absolute inset-0 h-full w-full object-cover opacity-0"
                  onLoad={(e) => e.currentTarget.classList.remove('opacity-0')}
                  onError={(e) => e.currentTarget.remove()}
                />
              )}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
              <div className="text-center text-white space-y-2 z-10">
                <span className="text-4xl font-bold font-sora tracking-wide drop-shadow">{project.iconText || "MERN"}</span>
                <p className="text-[10px] font-mono opacity-80 uppercase tracking-widest bg-black/20 px-2 py-0.5 rounded-full inline-block">Interactive Shell</p>
              </div>
            </div>

            {/* Technologies */}
            <div className="space-y-3">
              <h4 className="font-bold text-white text-xs font-sora uppercase tracking-wider">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 text-xs font-semibold font-mono rounded-lg bg-white/5 border border-white/5 text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-4 pt-2">
              <a
                href={isPlaceholderLink(project.live) ? undefined : project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-disabled={isPlaceholderLink(project.live)}
                className={actionClass(project.live, true)}
              >
                <ExternalLinkIcon className="h-4 w-4" />
                {isPlaceholderLink(project.live) ? 'Coming Soon' : 'Live Demo'}
              </a>
              <a
                href={isPlaceholderLink(project.github) ? undefined : project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-disabled={isPlaceholderLink(project.github)}
                className={actionClass(project.github)}
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>

          {/* Right Block: Core Details */}
          <div className="lg:col-span-7 space-y-6">
            {/* Description */}
            <div className="space-y-2">
              <h4 className="font-bold text-white text-xs font-sora uppercase tracking-wider">Description</h4>
              <p className="text-sm text-gray-300 leading-relaxed font-inter">
                {project.description}
              </p>
            </div>

            {/* Feature Points */}
            <div className="space-y-3">
              <h4 className="font-bold text-white text-xs font-sora uppercase tracking-wider">Key Features</h4>
              <ul className="space-y-2.5 text-sm text-gray-300 font-inter">
                {project.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircleIcon className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges */}
            <div className="space-y-2">
              <h4 className="font-bold text-red-400 text-xs font-sora uppercase tracking-wider">Design & Dev Challenges</h4>
              <p className="text-sm text-gray-300 leading-relaxed font-inter">
                {project.challenges}
              </p>
            </div>

            {/* Learnings */}
            <div className="space-y-2">
              <h4 className="font-bold text-green-400 text-xs font-sora uppercase tracking-wider">Key Learnings & Takeaways</h4>
              <p className="text-sm text-gray-300 leading-relaxed font-inter">
                {project.learnings}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
