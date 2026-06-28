import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

export default function Certificates() {
  const certificatesData = [
    {
      title: "Java Programming Masterclass",
      issuer: "Udemy / Oracle Academy",
      date: "2024",
      tech: "Java & OOPs Core",
      link: "https://udemy.com"
    },
    {
      title: "React - The Complete Guide",
      issuer: "Udemy",
      date: "2024",
      tech: "React, Redux, Hooks",
      link: "https://udemy.com"
    },
    {
      title: "Node.js & Express.js Developer Course",
      issuer: "Udemy",
      date: "2025",
      tech: "Node, Express, REST APIs",
      link: "https://udemy.com"
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2025",
      tech: "NoSQL DB Designs",
      link: "https://mongodb.com"
    },
    {
      title: "Data Structures & Algorithms in Java",
      issuer: "HackerRank / Coding Ninjas",
      date: "2025",
      tech: "DSA & Logics",
      link: "https://hackerrank.com"
    }
  ];

  return (
    <section id="certificates" className="py-20 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sora text-white">
            My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Certifications</span>
          </h2>
          <div className="mt-2 h-1 w-12 bg-primary mx-auto rounded-full" />
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesData.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between h-full group"
            >
              <div className="space-y-4">
                {/* Top Badge Panel */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-accent group-hover:text-primary transition-colors duration-300">
                    <Award className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-semibold font-mono text-gray-400 bg-white/5 px-2 py-0.5 rounded">
                    {cert.date}
                  </span>
                </div>

                {/* Details */}
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-bold font-sora text-white group-hover:text-accent transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-poppins">
                    Issuer: <span className="text-white font-medium">{cert.issuer}</span>
                  </p>
                </div>
              </div>

              {/* Bottom Tags & Redirects */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
                <span className="text-[10px] font-semibold font-mono text-accent bg-accent/10 px-2.5 py-1 rounded-lg">
                  {cert.tech}
                </span>
                
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs font-semibold font-poppins text-gray-300 hover:text-white transition-colors"
                >
                  Verify
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
