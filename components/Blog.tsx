import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, PenTool } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Blog: React.FC = () => {
  const hasBlogs = portfolioData.blogs && portfolioData.blogs.length > 0;

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-zinc-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Latest Insights</h2>

        {hasBlogs ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.blogs.map((blog, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-[#0f0f0f] rounded-xl overflow-hidden shadow-sm"
              >
                {/* Blog Card Content Implementation */}
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center p-12 bg-white dark:bg-[#0f0f0f] border border-dashed border-gray-300 dark:border-gray-700 rounded-2xl text-center max-w-2xl mx-auto"
          >
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-full mb-4 animate-pulse">
              <PenTool className="w-8 h-8 text-primary-light dark:text-primary-dark" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Insights Loading...
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Technical blogs on Data Science & AI architectures are currently being written. 
              Check back soon for deep dives into my latest research and projects.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};