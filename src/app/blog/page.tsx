"use client";

import { motion } from "framer-motion";
import { ChevronRight, Sun, Moon, Search, FileText } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function BlogPage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen pt-32 pb-20 px-4">
      {/* Navigation - simplified for subpages */}
      <nav className="fixed top-0 w-full z-50 glass border-b-0 border-orange-500/10 dark:border-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 text-gradient">
                ANURAG CLASSES
              </div>
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-slate-800 dark:text-slate-300 hover:text-orange-500 dark:hover:text-white transition-colors font-medium text-sm hidden sm:block">
                Back to Home
              </Link>
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-full glass hover:bg-orange-500/10 dark:hover:bg-white/10 transition-colors text-slate-800 dark:text-slate-300"
                  aria-label="Toggle Dark Mode"
                >
                  {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-slate-900 dark:text-white">Our <span className="text-gradient bg-gradient-to-r from-orange-500 to-amber-500">Blog</span></h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto font-medium">
            Stay updated with the latest educational news, exam preparation tips, and announcements from Anurag Classes.
          </p>
        </motion.div>

        {/* Search & Filter - Visual Placeholder */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4"
        >
          <div className="relative w-full sm:w-96">
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-full pl-12 pr-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-orange-500 dark:focus:border-orange-400 transition-colors shadow-sm" 
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          </div>
          <div className="flex gap-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
            {['All', 'Study Tips', 'Exam News', 'Success Stories'].map((category, idx) => (
              <button 
                key={category} 
                className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${
                  idx === 0 
                    ? 'bg-orange-500 text-white' 
                    : 'glass text-slate-800 dark:text-slate-300 hover:bg-orange-500/10 dark:hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Empty State */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-panel p-12 md:p-20 rounded-3xl text-center bg-white/70 dark:bg-slate-900/70 border-dashed border-2 border-slate-300 dark:border-slate-700"
        >
          <div className="w-24 h-24 bg-orange-100 dark:bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-10 h-10 text-orange-500" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">No articles published yet</h3>
          <p className="text-slate-700 dark:text-slate-400 text-lg mb-8 max-w-lg mx-auto">
            We are currently working on creating valuable content for you. Check back soon for study materials, exam tips, and more!
          </p>
          <Link href="/inquiry" className="inline-flex px-8 py-3 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/25">
            Contact Us
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
