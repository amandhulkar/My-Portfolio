import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, ShieldCheck, Cloud, Globe } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Layout className="h-6 w-6 text-accent" />,
      title: "Frontend Development",
      desc: "Creating responsive, interactive, and modern user interfaces using React, Tailwind CSS, and Framer Motion."
    },
    {
      icon: <Server className="h-6 w-6 text-primary" />,
      title: "Backend API Development",
      desc: "Engineering robust, scalable, and secure REST APIs using Node.js, Express.js, and structuring scalable routes."
    },
    {
      icon: <Database className="h-6 w-6 text-secondary" />,
      title: "Database Design",
      desc: "Structuring efficient document schemas, database aggregation queries, and ensuring fast access speeds using MongoDB."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-accent" />,
      title: "Authentication Systems",
      desc: "Implementing secure login flows with JWT, cookie-based sessions, and robust middleware route protection."
    },
    {
      icon: <Cloud className="h-6 w-6 text-primary" />,
      title: "Deployment & Hosting",
      desc: "Publishing and configuring production-ready projects on hosting platforms like Render, Vercel, and Cloudinary."
    },
    {
      icon: <Globe className="h-6 w-6 text-secondary" />,
      title: "Responsive Web Apps",
      desc: "Designing and developing web sites that scale flawlessly across desktops, tablets, and mobile devices."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="services" className="py-20 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sora text-white">
            My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="mt-2 h-1 w-12 bg-primary mx-auto rounded-full" />
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col space-y-4 text-left group"
            >
              {/* Icon Wrapper */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 w-fit transition-all duration-300 group-hover:bg-primary/10 group-hover:border-primary/20">
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-bold font-sora text-white transition-colors group-hover:text-accent">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-gray-400 font-inter leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
