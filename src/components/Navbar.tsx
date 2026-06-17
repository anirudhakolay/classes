"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Menu, X, ChevronRight, Sun, Moon } from "lucide-react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b-0 border-orange-500/10 dark:border-white/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 flex items-center">
            <div className="flex items-center gap-3">
              <Image src="/logo.jpg" alt="Anurag Classes" width={48} height={48} className="rounded-full shadow-sm" priority />
              <div className="flex flex-col">
                <span className="font-bold text-lg sm:text-xl text-slate-900 dark:text-white leading-tight">Anurag Classes</span>
                <span className="text-[10px] sm:text-xs text-orange-500 font-bold uppercase tracking-wider">since 2015</span>
              </div>
            </div>
          </Link>
          
          <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            {['Home', 'About', 'Courses', 'Achievements'].map((link) => (
              <Link key={link} href={link === 'Home' ? '/' : `/${link.toLowerCase()}`} className="text-slate-800 dark:text-slate-300 hover:text-orange-500 dark:hover:text-white transition-colors text-sm font-medium">
                {link}
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
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-800 dark:text-white">
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden glass-panel absolute w-full left-0 border-t border-orange-500/10 dark:border-white/10 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
            {['Home', 'About', 'Courses', 'Achievements'].map((link) => (
              <Link key={link} href={link === 'Home' ? '/' : `/${link.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="text-slate-800 dark:text-slate-300 hover:text-orange-500 block px-3 py-3 rounded-md text-base font-medium">{link}</Link>
            ))}
            <Link href="/inquiry" onClick={() => setIsMobileMenuOpen(false)} className="text-orange-500 hover:text-orange-600 block px-3 py-3 rounded-md text-base font-bold bg-orange-500/5 mt-2">Inquiry</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
