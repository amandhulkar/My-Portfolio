import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, BrainCircuit } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <GraduationCap className="h-6 w-6 text-accent" />,
      title: "MCA Student",
      desc: "Pursuing MCA at JECRC University (2024 - 2026), building strong computer science academic foundations."
    },
    {
      icon: <Code2 className="h-6 w-6 text-primary" />,
      title: "MERN Developer",
      desc: "Deeply passionate about React, Node, Express, and MongoDB. Building responsive and production-ready apps."
    },
    {
      icon: <BrainCircuit className="h-6 w-6 text-secondary" />,
      title: "DSA & Problem Solving",
      desc: "Actively solving algorithmic and data structure problems to strengthen logical reasoning capabilities."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sora text-white">
            About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="mt-2 h-1 w-12 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-72 h-72 sm:w-80 sm:h-80">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary to-secondary opacity-30 blur-2xl group-hover:opacity-45 transition-opacity duration-500" />
              
              <div className="absolute inset-0 rounded-3xl border border-white/10 p-2 bg-[#1E293B]/60 backdrop-blur-md">
                <div className="h-full w-full rounded-2xl bg-gradient-to-br from-card to-background border border-white/5 flex flex-col items-center justify-center p-6 text-center space-y-4">
                  <div className="relative h-24 w-24 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-4xl font-bold font-sora text-white shadow-lg">
                    AD
                    <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-green-500 border-2 border-background animate-ping" />
                    <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-green-500 border-2 border-background" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg font-sora">Aman Dhulkar</h3>
                    <p className="text-xs text-accent font-mono mt-1">Full Stack Developer</p>
                  </div>
                  <div className="flex gap-2 w-full pt-2 border-t border-white/5 justify-around text-xs font-mono text-gray-400">
                    <div>
                      <p className="text-white font-bold">2026</p>
                      <p>MCA Grad</p>
                    </div>
                    <div className="w-[1px] bg-white/10 h-8" />
                    <div>
                      <p className="text-white font-bold">12+</p>
                      <p>Projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Narrative Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-bold font-sora text-white">
              My Journey & Coding Passion
            </h3>
            
            <div className="space-y-4 text-gray-300 font-inter leading-relaxed text-sm sm:text-base">
              <p>
                I am an MCA student passionate about Full Stack Web Development. I enjoy building responsive web applications and solving real-world problems using the MERN Stack.
              </p>
              <p>
                Currently, I am learning Data Structures & Algorithms and building production-ready projects. I am driven by the process of converting complex project drafts into scalable, high-performance, and delightful digital applications.
              </p>
            </div>

            {/* Quick stats items */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              {highlights.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-card/45 border border-white/5 backdrop-blur-sm flex flex-col space-y-2 hover:border-white/10 transition-all duration-300"
                >
                  <div className="p-2 rounded-lg bg-white/5 w-fit">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-white text-sm font-sora">{item.title}</h4>
                  <p className="text-xs text-gray-400 font-inter leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
