import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ isLoading }) {
  const [textIndex, setTextIndex] = useState(0);
  const loadingTexts = [
    "Initializing portfolio...",
    "Loading visual layout...",
    "Retrieving skills and tech stacks...",
    "Assembling featured projects...",
    "Ready!"
  ];

  useEffect(() => {
    if (!isLoading) return;
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev < loadingTexts.length - 1 ? prev + 1 : prev));
    }, 400);
    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0F172A]"
        >
          {/* Logo Container */}
          <div className="relative mb-8 flex h-24 w-24 items-center justify-center">
            {/* Outer Spinning Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute inset-0 rounded-full border-t-2 border-b-2 border-primary"
            />
            {/* Inner Spinning Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute inset-2 rounded-full border-l-2 border-r-2 border-accent opacity-70"
            />
            {/* Core initials */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold font-sora text-white"
            >
              AD
            </motion.div>
          </div>

          {/* Animating Loading Text */}
          <motion.div
            key={textIndex}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="h-6 text-sm font-medium font-mono text-gray-400"
          >
            {loadingTexts[textIndex]}
          </motion.div>

          {/* Progress Bar */}
          <div className="mt-4 h-[2px] w-48 overflow-hidden rounded-full bg-card">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-primary to-accent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
