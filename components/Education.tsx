import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
        
        <div className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-4 md:ml-6 space-y-12">
          {portfolioData.education.map((edu, index) => (
            <motion.div 
              key={index}
              className="relative pl-8 md:pl-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Dot */}
              <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary-light dark:bg-primary-dark ring-4 ring-white dark:ring-[#0a0a0a]" />
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-primary-light dark:text-primary-dark" />
                    {edu.institution}
                  </h3>
                  <p className="text-lg font-medium text-gray-700 dark:text-gray-300">{edu.degree}</p>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">{edu.score}</p>
                </div>
                <div className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full w-fit">
                  <Calendar className="w-4 h-4 mr-2" />
                  {edu.year}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};