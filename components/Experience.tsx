import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-zinc-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Professional Experience</h2>
        
        <div className="grid gap-8">
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-[#0f0f0f] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800"
            >
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                    <Briefcase className="w-5 h-5 text-primary-light dark:text-primary-dark" />
                    {exp.role}
                  </h3>
                  <p className="text-lg text-primary-light dark:text-primary-dark font-medium mt-1">{exp.company}</p>
                </div>
                <span className="text-sm font-mono text-gray-500 dark:text-gray-400 mt-2 md:mt-0 px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg h-fit">
                  {exp.period}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};