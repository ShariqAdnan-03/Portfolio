import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-[#0a0a0a] border-t border-gray-200 dark:border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="flex space-x-6 mb-6">
          <a 
            href={portfolioData.personal.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href={portfolioData.personal.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href={`mailto:${portfolioData.personal.email}`}
            className="text-gray-500 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
        </p>
        <p className="text-gray-400 text-xs mt-2">
          Built with React, Tailwind & Framer Motion.
        </p>
      </div>
    </footer>
  );
};