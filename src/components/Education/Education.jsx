import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export default function Education() {
  const educationData = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "JECRC University",
      duration: "2024 - 2026",
      location: "Jaipur, Rajasthan, India",
      details: [
        "Focused on advanced software engineering principles, web architectures, and algorithms.",
        "Actively participating in full-stack MERN coding projects and collaborative hackathons.",
        "Strengthening data structures and algorithmic knowledge for production deployment."
      ]
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sora text-white">
            My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="mt-2 h-1 w-12 bg-primary mx-auto rounded-full" />
        </div>

        {/* Timeline Line */}
        <div className="relative border-l border-white/10 pl-6 sm:pl-8 ml-4 sm:ml-6 space-y-12">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              {/* Circle Timeline Pin */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 p-1.5 sm:p-2 rounded-full bg-primary border-4 border-[#0F172A] text-white shadow-lg z-10 transition-transform duration-300 group-hover:scale-110">
                <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>

              {/* Info Box */}
              <div className="glass-panel glass-panel-hover p-6 rounded-2xl space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="text-lg sm:text-xl font-bold font-sora text-white group-hover:text-accent transition-colors">
                    {edu.degree}
                  </h3>
                  
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-mono bg-white/5 border border-white/5 text-gray-300 w-fit">
                    <Calendar className="h-3 w-3 text-accent" />
                    {edu.duration}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-400 font-medium">
                  <span className="text-white font-semibold font-poppins">{edu.institution}</span>
                  <span className="hidden sm:inline text-white/20">•</span>
                  
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-secondary" />
                    {edu.location}
                  </span>
                </div>

                {/* Sub details bullets */}
                <ul className="space-y-2 text-sm text-gray-300 font-inter border-t border-white/5 pt-4">
                  {edu.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <Award className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
