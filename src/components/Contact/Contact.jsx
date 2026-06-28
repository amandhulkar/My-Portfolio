import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Send, Phone, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../UI/SocialIcons';

const socialLinks = {
  github: 'https://github.com/amandhulkar',
  linkedin: 'https://www.linkedin.com/in/amandhulkar23',
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all the required fields!");
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setError('Email service is not configured yet. Please try again later.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'amandhulkar0079@gmail.com',
        },
        publicKey
      );

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      setError('Message send nahi ho paya. Please email directly: amandhulkar0079@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sora text-white">
            Get In <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="mt-2 h-1 w-12 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold font-sora text-white">
                Let's discuss something great.
              </h3>
              <p className="text-sm text-gray-400 font-inter leading-relaxed">
                Whether you have an interesting project idea, need an API built, or simply want to chat about code and MERN stack systems, feel free to get in touch.
              </p>
            </div>

            {/* Channel Details */}
            <div className="space-y-4">
              <a
                href="mailto:amandhulkar0079@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-card/40 border border-white/5 hover:border-accent/40 text-gray-300 hover:text-white transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-white/5 text-accent group-hover:text-primary transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">Email Address</p>
                  <p className="text-sm font-semibold font-poppins">amandhulkar0079@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+918952004922"
                className="flex items-center gap-4 p-4 rounded-xl bg-card/40 border border-white/5 hover:border-accent/40 text-gray-300 hover:text-white transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-white/5 text-accent group-hover:text-primary transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">Phone (Optional)</p>
                  <p className="text-sm font-semibold font-poppins">+91 89520 04922</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-card/40 border border-white/5 text-gray-300">
                <div className="p-3 rounded-lg bg-white/5 text-accent">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">Location</p>
                  <p className="text-sm font-semibold font-poppins text-white">Jaipur, Rajasthan, India</p>
                </div>
              </div>
            </div>

            {/* Quick External Actions */}
            <div className="flex gap-4">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-4 rounded-xl bg-card/40 border border-white/5 hover:border-accent/40 text-gray-300 hover:text-white transition-all flex items-center justify-center gap-2 font-semibold text-xs font-poppins duration-300"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-4 rounded-xl bg-card/40 border border-white/5 hover:border-accent/40 text-gray-300 hover:text-white transition-all flex items-center justify-center gap-2 font-semibold text-xs font-poppins duration-300"
              >
                <LinkedinIcon className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Message Dispatch Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="glass-panel p-6 sm:p-8 rounded-2xl space-y-6 border border-white/10">
              <h4 className="text-lg font-bold font-sora text-white text-left">Send Message</h4>
              
              <div className="space-y-4">
                {/* Name */}
                <div className="flex flex-col space-y-1.5 text-left">
                  <label htmlFor="name" className="text-xs font-semibold font-poppins text-gray-400">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:bg-white/10 transition-all font-inter"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col space-y-1.5 text-left">
                  <label htmlFor="email" className="text-xs font-semibold font-poppins text-gray-400">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:bg-white/10 transition-all font-inter"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col space-y-1.5 text-left">
                  <label htmlFor="message" className="text-xs font-semibold font-poppins text-gray-400">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:bg-white/10 transition-all font-inter resize-none"
                  />
                </div>
              </div>

              {error && (
                <p className="text-sm text-red-400 font-inter text-center">
                  {error}
                </p>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className="w-full py-3.5 px-6 rounded-xl bg-primary hover:bg-primary/95 disabled:bg-primary/60 text-white font-bold text-sm font-poppins transition-all flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/25 duration-300"
              >
                {isSubmitting ? (
                  <span className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : submitted ? (
                  "Submitted Successfully!"
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
