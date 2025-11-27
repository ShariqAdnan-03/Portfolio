import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-zinc-900/30 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Credentials & Licenses</h2>
          <div className="h-1 w-20 bg-primary-light dark:bg-primary-dark mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white dark:bg-[#0f0f0f] border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:border-primary-light/30 dark:hover:border-primary-dark/30 transition-all duration-300 flex flex-col items-center text-center"
            >
              {/* Decorative Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary-light/5 to-transparent dark:from-primary-dark/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />

              {/* Icon Badge */}
              <div className="relative mb-6">
                 <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 blur-xl rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                 <div className="relative w-20 h-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-black rounded-full border border-gray-100 dark:border-gray-700 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <Award className="w-10 h-10 text-primary-light dark:text-primary-dark" />
                 </div>
                 {/* Small Verified Check */}
                 <div className="absolute 0 bottom-0 right-0 bg-white dark:bg-[#0f0f0f] rounded-full p-1 border border-gray-100 dark:border-gray-800 z-10">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 fill-emerald-500/10" />
                 </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-light dark:group-hover:text-primary-dark transition-colors">
                {cert.name}
              </h3>
              
              <div className="space-y-1 mb-8">
                <p className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  {cert.issuer}
                </p>
                <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400 font-mono">
                   <Calendar className="w-3 h-3" />
                   <span>Issued {cert.date}</span>
                </div>
              </div>

              {/* Single Action Button */}
              <div className="mt-auto w-full">
                {cert.verifyLink && (
                  <a 
                    href={cert.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-50 dark:bg-white/5 hover:bg-primary-light hover:text-white dark:hover:bg-primary-dark text-gray-700 dark:text-gray-300 rounded-xl font-medium transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary-light/20"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};