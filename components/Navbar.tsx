import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, Hexagon, Triangle } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isDark, setIsDark] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/85 dark:bg-[#0a0a0a]/85 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
            >
              {/* Professional Geometric AI Core Logo */}
              <div className="relative w-10 h-10 flex items-center justify-center">
                 {/* Outer Shell - Data Structure (Slow Rotate) */}
                 <motion.div
                     className="absolute inset-0 flex items-center justify-center"
                     animate={{ rotate: 360 }}
                     transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                 >
                    <Hexagon className="w-10 h-10 text-primary-light dark:text-primary-dark" strokeWidth={1.5} />
                 </motion.div>
                 
                 {/* Inner Core - Delta/Change (Fast Counter-Rotate) */}
                 <motion.div
                     className="absolute inset-0 flex items-center justify-center"
                     animate={{ rotate: -360 }}
                     transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                 >
                    <Triangle className="w-4 h-4 text-cyan-500 dark:text-cyan-400" strokeWidth={2.5} />
                 </motion.div>
                 
                 {/* Central Dot - Singularity */}
                 <div className="w-1 h-1 bg-gray-900 dark:bg-white rounded-full z-10" />
              </div>

              <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white group flex items-baseline">
                <span className="font-extrabold tracking-tight">Shariq</span>
                <span className="text-primary-light dark:text-primary-dark mx-0.5">.</span>
                <span className="font-medium text-gray-600 dark:text-gray-300 tracking-tight">Adnan</span>
              </span>
            </motion.div>
          </div>

          {/* Desktop Nav - Visible on Large Screens */}
          <div className="hidden lg:block">
            <div className="ml-4 flex items-center space-x-1 xl:space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark hover:bg-gray-100 dark:hover:bg-white/5 px-3 py-2 rounded-md text-sm font-medium transition-all"
                >
                  {link.name}
                </a>
              ))}
              <div className="pl-2 ml-2 border-l border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setIsDark(!isDark)}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-500 dark:text-gray-400"
                  aria-label="Toggle Theme"
                >
                  {isDark ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-gray-700" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button - Visible on Small Screens */}
          <div className="flex lg:hidden items-center gap-4">
             <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-500 dark:text-gray-400"
                aria-label="Toggle Theme"
              >
                {isDark ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-gray-700" />}
              </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-primary-light dark:hover:text-primary-dark focus:outline-none bg-gray-50 dark:bg-white/5"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-[#0a0a0a] border-b border-gray-200 dark:border-gray-800 shadow-xl overflow-hidden z-50"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleNavClick}
                  className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark hover:bg-gray-50 dark:hover:bg-white/5"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};