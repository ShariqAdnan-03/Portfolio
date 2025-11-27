import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

// Typewriter Hook
const useTypewriter = (text: string, speed = 50) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let i = 0;
    setDisplayedText(''); // Reset on new text
    
    const timer = setInterval(() => {
      if (i < text.length) {
        // Use substring based on the local counter 'i' to ensure accuracy.
        // i starts at 0, so (0, 0+1) gets the first char.
        setDisplayedText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    
    return () => clearInterval(timer);
  }, [text, speed]);

  return displayedText;
};

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const typeText = useTypewriter(portfolioData.personal.titles[currentTitleIndex]);

  // Rotate titles
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % portfolioData.personal.titles.length);
    }, 4000); // Change title every 4 seconds
    return () => clearTimeout(timeout);
  }, [currentTitleIndex]);

  // Neural Network Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number }[] = [];
    const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100);
    const connectionDistance = 150;
    const mouse = { x: 0, y: 0 };

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1, // Velocity X
        vy: (Math.random() - 0.5) * 1  // Velocity Y
      });
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Check for Dark Mode via class on html element to adjust color
      const isDark = document.documentElement.classList.contains('dark');
      const particleColor = isDark ? 'rgba(59, 130, 246, 0.7)' : 'rgba(37, 99, 235, 0.7)'; // Electric vs Royal Blue
      const lineColor = isDark ? 'rgba(59, 130, 246,' : 'rgba(37, 99, 235,';

      particles.forEach((p, i) => {
        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse interaction (gentle repulsion)
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          p.x -= dx * 0.02;
          p.y -= dy * 0.02;
        }

        // Draw Particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();

        // Connect
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distX = p.x - p2.x;
          const distY = p.y - p2.y;
          const distance = Math.sqrt(distX * distX + distY * distY);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `${lineColor} ${1 - distance / connectionDistance})`;
            ctx.lineWidth = 1;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Canvas Background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-60"
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary-light dark:text-primary-dark font-mono mb-4 text-lg">
            Hello, World.
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-purple-600 dark:from-primary-dark dark:to-purple-400">{portfolioData.personal.name}</span>
          </h1>
          
          <div className="h-12 mb-8">
            <span className="text-2xl md:text-3xl font-light text-gray-600 dark:text-gray-300">
              {typeText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#projects"
              className="px-8 py-3 bg-primary-light dark:bg-primary-dark text-white rounded-full font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-all flex items-center gap-2 shadow-lg hover:shadow-primary-light/50"
            >
              View Projects <ChevronRight className="w-4 h-4" />
            </a>
            <a 
              href="https://ShariqAdnan-03.github.io/Portfolio/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark rounded-full font-medium hover:bg-primary-light hover:text-white dark:hover:bg-primary-dark dark:hover:text-black transition-all duration-300 flex items-center gap-2"
            >
              Download Resume <Download className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 animate-bounce w-full flex justify-center">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};