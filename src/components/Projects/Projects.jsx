import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GithubIcon, ExternalLinkIcon, ArrowUpRightIcon } from '../UI/SocialIcons';
import ProjectDetailsPopup from './ProjectDetailsPopup';

const isPlaceholderLink = (url) => !url || url === '#';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: "Food Delivery Website",
      iconText: "FOOD",
      image: "/projects/food-delivery.png",
      imageAlt: "Food Delivery Website dashboard preview",
      description: "A complete MERN stack food ordering platform with authentication, cart management, order tracking and admin dashboard.",
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Cloudinary"],
      github: '#',
      live: '#',
      gradient: "from-orange-500 to-amber-600",
      features: [
        "Secure user authentication (JWT) and profile customization",
        "Dynamic product menus and category filter systems",
        "Interactive cart management with instant total calculation",
        "Real-time order tracking and status updates",
        "Comprehensive Admin dashboard to control orders, food items, and users"
      ],
      challenges: "Synchronizing real-time order states between the admin dashboard and consumer clients efficiently without causing unnecessary server overhead.",
      learnings: "Mastered full-stack state management, database schema design for complex orders, and setting up file uploads to Cloudinary with Express.",
    },
    {
      id: 2,
      title: "AI Image Optimizer",
      iconText: "IMAGE AI",
      image: "/projects/ai-image-optimizer.png",
      imageAlt: "AI Image Optimizer app preview",
      description: "An application utilizing AI algorithms to optimize, compress, and resize images dynamically.",
      tech: ["React", "Node.js", "Express", "Cloudinary", "Tailwind CSS"],
      github: '#',
      live: '#',
      gradient: "from-blue-500 via-indigo-500 to-violet-600",
      features: [
        "AI-based compression presets with custom quality sliders",
        "Drag-and-drop file batch uploads with instant previews",
        "Dynamic format conversion (WebP, PNG, JPEG) instantly",
        "Custom resolution cropping controls and size stats display"
      ],
      challenges: "Handling huge asset upload queues in memory without exhausting Node.js heap buffers or causing server lag.",
      learnings: "Optimized server stream uploads using multipart storage channels and implemented automated asset cropping filters.",
    },
    {
      id: 3,
      title: "E-Commerce Website",
      iconText: "SHOP",
      image: "/projects/ecommerce.png",
      imageAlt: "E-Commerce Website storefront preview",
      description: "Scalable online shopping store featuring product catalogs, reviews, Stripe checkout, and cart caching.",
      tech: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "Stripe"],
      github: '#',
      live: '#',
      gradient: "from-indigo-500 via-purple-500 to-pink-600",
      features: [
        "Global Redux state management for shopping sessions",
        "Comprehensive product catalog search, sorting, and price range filters",
        "Stripe payment gateway integration for secure checkouts",
        "User review, ratings thread, and cart caching via LocalStorage"
      ],
      challenges: "Consolidating state synchronization between frontend Redux stores and backend databases during card payments.",
      learnings: "Implemented clean MVC controllers, verified Stripe Webhooks safety, and used indexing keys to optimize database searches.",
    },
    {
      id: 4,
      title: "Chat Application",
      iconText: "CHAT",
      image: "/projects/chat-app.png",
      imageAlt: "Chat Application messaging preview",
      description: "A real-time chat application featuring typing indicators, chat rooms, active status indicators, and text/image sharing.",
      tech: ["React", "Node.js", "Express", "Socket.io", "Tailwind CSS", "MongoDB"],
      github: '#',
      live: '#',
      gradient: "from-emerald-500 to-teal-600",
      features: [
        "Real-time bi-directional message exchange using Socket.io",
        "Dynamic typing status indicator and active online list",
        "Multiple private chat rooms and database log history",
        "Support for multimedia image and file attachment sharing"
      ],
      challenges: "Preventing socket connection drop-outs during network congestion or mobile background suspension.",
      learnings: "Acquired real-world experience in event-driven networking and learned how to store message history compactly.",
    },
    {
      id: 5,
      title: "Authentication System",
      iconText: "AUTH",
      image: "/projects/auth-system.png",
      imageAlt: "Authentication System interface preview",
      description: "A highly secure, reusable authentication module with password encryption, JWT, cookie session parsing, and email verification.",
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Nodemailer", "bcrypt"],
      github: '#',
      live: '#',
      gradient: "from-violet-600 to-fuchsia-700",
      features: [
        "Secure JSON Web Token (JWT) authorization in request headers",
        "Password hashing pipelines with bcrypt and salt configurations",
        "Transactional email dispatchers via SMTP for registration verification",
        "Support for temporary password reset codes and security updates"
      ],
      challenges: "Designing a secure reset token lifespan that expires dynamically and checks system timestamps.",
      learnings: "Learned cryptographic standards, secured HTTP-only cookies, and configured custom authorization header middleware.",
    },
    {
      id: 6,
      title: "Weather App",
      iconText: "CLOUD",
      image: "/projects/weather-app.png",
      imageAlt: "Weather App dashboard preview",
      description: "An interactive weather dashboard sourcing real-time meteorology data, maps integration, and weather search histories.",
      tech: ["React", "Tailwind CSS", "OpenWeatherMap API", "Chart.js"],
      github: '#',
      live: '#',
      gradient: "from-sky-400 to-blue-500",
      features: [
        "Integration with OpenWeatherMap API for real-time local conditions",
        "Dynamic Chart.js timelines outlining 5-day temperature fluctuations",
        "Wind speed, humidity percentages, and barometric pressure readouts",
        "Locally cached search history for quick dashboard navigation"
      ],
      challenges: "Converting raw meteorology data outputs into human-readable timelines dynamically in frontend graphs.",
      learnings: "Sourced external APIs asynchronously, cached API responses to save quota, and built interactive layouts with Chart.js.",
    }
  ];

  const renderProjectVisual = (project, size = 'card') => (
    <>
      {project.image && (
        <img
          src={project.image}
          alt={project.imageAlt || `${project.title} preview`}
          className="absolute inset-0 h-full w-full object-cover opacity-0"
          onLoad={(e) => e.currentTarget.classList.remove('opacity-0')}
          onError={(e) => e.currentTarget.remove()}
        />
      )}
      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all" />
      <span className={`${size === 'card' ? 'text-3xl' : 'text-4xl'} font-extrabold font-sora text-white/90 drop-shadow tracking-wide z-10`}>
        {project.iconText}
      </span>
    </>
  );

  const linkClass = (url, primary = false) => {
    const base = "flex-1 py-2 px-3 rounded-lg font-bold text-xs font-poppins transition-colors flex items-center justify-center gap-1";
    if (isPlaceholderLink(url)) {
      return `${base} bg-white/5 border border-white/5 text-gray-500 cursor-not-allowed`;
    }
    return primary
      ? `${base} bg-primary hover:bg-primary/95 text-white`
      : `${base} bg-white/5 hover:bg-white/10 border border-white/5 text-white`;
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sora text-white">
            Featured <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="mt-2 h-1 w-12 bg-primary mx-auto rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: project.id * 0.05 }}
              onClick={() => setSelectedProject(project)}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col h-full group cursor-pointer"
            >
              {/* Project Card Image */}
              <div className={`h-48 w-full bg-gradient-to-br ${project.gradient} relative flex items-center justify-center p-6 transition-all duration-500 group-hover:scale-[1.02] border-b border-white/5 overflow-hidden`}>
                {renderProjectVisual(project)}

                {/* Floating zoom hint */}
                <div className="absolute top-4 right-4 p-1.5 rounded-lg bg-black/30 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <ArrowUpRightIcon className="h-4 w-4 text-white" />
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold font-sora text-white group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-inter leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Badges and action links */}
                <div className="space-y-4">
                  {/* Tech stack short-list */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-[10px] font-semibold font-mono rounded bg-white/5 border border-white/5 text-gray-300"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 text-[10px] font-semibold font-mono rounded bg-white/5 text-accent">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2.5 pt-2" onClick={(e) => e.stopPropagation()}>
                    <a
                      href={isPlaceholderLink(project.live) ? undefined : project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-disabled={isPlaceholderLink(project.live)}
                      className={linkClass(project.live, true)}
                    >
                      <ExternalLinkIcon className="h-3 w-3" />
                      {isPlaceholderLink(project.live) ? 'Coming Soon' : 'Live Demo'}
                    </a>

                    <a
                      href={isPlaceholderLink(project.github) ? undefined : project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-disabled={isPlaceholderLink(project.github)}
                      className={linkClass(project.github)}
                    >
                      <GithubIcon className="h-3 w-3" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Details Popup Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailsPopup
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
