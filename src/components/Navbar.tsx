"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Menu, X, ChevronRight, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => { 
    setMounted(true); 

    const sections = ["home", "about", "courses", "achievements"];
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Adjust to trigger when section is in middle of viewport
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Achievements', href: '#achievements' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b-0 border-orange-500/10 dark:border-white/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="#home" className="flex-shrink-0 flex items-center">
            <div className="flex items-center gap-3">
              <Image src="/logo.jpg" alt="Anurag Classes" width={48} height={48} className="rounded-full shadow-sm" priority />
              <div className="flex flex-col">
                <span className="font-bold text-lg sm:text-xl text-slate-900 dark:text-white leading-tight">Anurag Classes</span>
                <span className="text-[10px] sm:text-xs text-orange-500 font-bold uppercase tracking-wider">since 2015</span>
              </div>
            </div>
          </Link>
          
          <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`transition-colors text-sm font-bold relative py-1 ${
                  activeSection === link.href.substring(1) 
                    ? "text-orange-500" 
                    : "text-slate-800 dark:text-slate-300 hover:text-orange-500 dark:hover:text-white"
                }`}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <motion.div 
                    layoutId="activeTab" 
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-500 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <Link href="/inquiry" className="text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300 transition-colors text-sm font-bold flex items-center">
              Inquiry <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {mounted && (
              <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2 rounded-full glass hover:bg-orange-500/10 dark:hover:bg-white/10 transition-colors text-slate-800 dark:text-slate-300">
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            )}
            <Link href="/inquiry" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-all hover:scale-105 shadow-lg shadow-orange-500/25">Enroll Now</Link>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            {mounted && (
              <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2 rounded-full glass hover:bg-orange-500/10 dark:hover:bg-white/10 transition-colors text-slate-800 dark:text-slate-300 mr-2">
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            )}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-800 dark:text-white">
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden glass-panel absolute w-full left-0 border-t border-orange-500/10 dark:border-white/10 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)} 
                className={`block px-3 py-3 rounded-md text-base font-bold transition-colors ${
                  activeSection === link.href.substring(1) 
                    ? "text-orange-500 bg-orange-500/5" 
                    : "text-slate-800 dark:text-slate-300 hover:text-orange-500"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/inquiry" onClick={() => setIsMobileMenuOpen(false)} className="text-orange-500 hover:text-orange-600 block px-3 py-3 rounded-md text-base font-bold bg-orange-500/5 mt-2">Inquiry</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
