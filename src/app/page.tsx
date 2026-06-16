"use client";

import { motion } from "framer-motion";
import { 
  BookOpen, 
  GraduationCap, 
  Award, 
  Users, 
  Target, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  ChevronRight,
  Menu,
  X,
  MessageCircle,
  Send,
  Sun,
  Moon,
  ArrowRight,
  Microscope,
  Calculator,
  Stethoscope
} from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const stagger = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.1 }
  };

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b-0 border-orange-500/10 dark:border-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 text-gradient cursor-pointer">
                ANURAG CLASSES
              </div>
            </div>
            
            <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
              {['Home', 'About', 'Courses', 'Achievements', 'Gallery', 'Contact'].map((link) => (
                <Link key={link} href={`#${link.toLowerCase()}`} className="text-slate-800 dark:text-slate-300 hover:text-orange-500 dark:hover:text-white transition-colors text-sm font-medium">
                  {link}
                </Link>
              ))}
              <Link href="/blog" className="text-slate-800 dark:text-slate-300 hover:text-orange-500 dark:hover:text-white transition-colors text-sm font-medium">
                Blog
              </Link>
              <Link href="/inquiry" className="text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300 transition-colors text-sm font-bold flex items-center">
                Inquiry <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-full glass hover:bg-orange-500/10 dark:hover:bg-white/10 transition-colors text-slate-800 dark:text-slate-300"
                  aria-label="Toggle Dark Mode"
                >
                  {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              )}
              <Link href="/inquiry" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-all hover:scale-105 shadow-lg shadow-orange-500/25">
                Enroll Now
              </Link>
            </div>

            <div className="md:hidden flex items-center space-x-4">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-full text-slate-800 dark:text-slate-300"
                >
                  {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              )}
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-800 dark:text-white">
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-panel absolute w-full left-0 border-t border-orange-500/10 dark:border-white/10 shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
              {['Home', 'About', 'Courses', 'Achievements', 'Gallery', 'Contact'].map((link) => (
                <Link key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="text-slate-800 dark:text-slate-300 hover:text-orange-500 block px-3 py-3 rounded-md text-base font-medium">
                  {link}
                </Link>
              ))}
              <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-800 dark:text-slate-300 hover:text-orange-500 block px-3 py-3 rounded-md text-base font-medium">
                Blog
              </Link>
              <Link href="/inquiry" onClick={() => setIsMobileMenuOpen(false)} className="text-orange-500 hover:text-orange-600 block px-3 py-3 rounded-md text-base font-bold bg-orange-500/5 mt-2">
                Inquiry
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 flex flex-col items-center justify-center min-h-screen relative text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto z-10"
        >
          <div className="inline-block mb-6 px-5 py-2 rounded-full glass border-orange-500/20 text-sm font-semibold text-orange-600 dark:text-orange-400 tracking-wide">
            Science | Commerce | NEET | JEE | MHT-CET
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-slate-900 dark:text-white">
            Building Strong Foundations for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500">Academic Success</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-800 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            At Anurag Classes, we believe every student has the potential to excel. With experienced faculty, personalized attention, and a result-oriented approach.
          </p>
          
          <div className="glass-card rounded-3xl p-6 md:p-8 max-w-3xl mx-auto mb-12 text-left grid md:grid-cols-2 gap-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-orange-500 to-amber-500"></div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-5 flex items-center">
                <GraduationCap className="w-6 h-6 mr-2 text-orange-500" /> Admissions Open 2026-27
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start text-slate-800 dark:text-slate-200">
                  <CheckCircle2 className="w-5 h-5 mr-3 mt-0.5 text-emerald-500 flex-shrink-0"/> 
                  <span>Classes VIII to X (State & CBSE)</span>
                </li>
                <li className="flex items-start text-slate-800 dark:text-slate-200">
                  <CheckCircle2 className="w-5 h-5 mr-3 mt-0.5 text-emerald-500 flex-shrink-0"/> 
                  <span>Classes XI & XII (Science & Commerce)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-5 flex items-center">
                <Target className="w-6 h-6 mr-2 text-orange-500" /> Competitive Prep
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start text-slate-800 dark:text-slate-200">
                  <CheckCircle2 className="w-5 h-5 mr-3 mt-0.5 text-blue-500 flex-shrink-0"/> 
                  <span>NEET Preparation</span>
                </li>
                <li className="flex items-start text-slate-800 dark:text-slate-200">
                  <CheckCircle2 className="w-5 h-5 mr-3 mt-0.5 text-blue-500 flex-shrink-0"/> 
                  <span>JEE Preparation</span>
                </li>
                <li className="flex items-start text-slate-800 dark:text-slate-200">
                  <CheckCircle2 className="w-5 h-5 mr-3 mt-0.5 text-blue-500 flex-shrink-0"/> 
                  <span>MHT-CET Preparation</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link href="/inquiry" className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all flex items-center justify-center">
              Enroll Now <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
            <div className="flex items-center glass rounded-full px-8 py-4 w-full sm:w-auto justify-center">
              <Phone className="w-5 h-5 mr-3 text-orange-500" />
              <span className="font-bold text-slate-800 dark:text-slate-200">7977338822 | 8369293124</span>
            </div>
          </div>

          {/* Floating Socials for Hero */}
          <div className="mt-12 flex justify-center space-x-6">
             <a href="#" className="glass p-3 rounded-full hover:-translate-y-1 hover:bg-emerald-500/10 transition-all text-emerald-600 dark:text-emerald-400 shadow-sm" title="WhatsApp">
                <MessageCircle className="w-6 h-6" />
             </a>
             <a href="#" className="glass p-3 rounded-full hover:-translate-y-1 hover:bg-pink-500/10 transition-all text-pink-600 dark:text-pink-400 shadow-sm" title="Instagram">
                <InstagramIcon className="w-6 h-6" />
             </a>
             <a href="#" className="glass p-3 rounded-full hover:-translate-y-1 hover:bg-blue-500/10 transition-all text-blue-600 dark:text-blue-400 shadow-sm" title="Telegram">
                <Send className="w-6 h-6" />
             </a>
             <a href="#" className="glass p-3 rounded-full hover:-translate-y-1 hover:bg-sky-500/10 transition-all text-sky-600 dark:text-sky-400 shadow-sm" title="Twitter">
                <TwitterIcon className="w-6 h-6" />
             </a>
          </div>
        </motion.div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">About <span className="text-gradient bg-gradient-to-r from-orange-500 to-amber-500">Anurag Classes</span></h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn} className="glass-panel p-8 md:p-10 rounded-3xl relative">
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-orange-500/20 rounded-full blur-2xl"></div>
              <p className="text-lg text-slate-800 dark:text-slate-300 mb-6 leading-relaxed">
                Established in 2015, Anurag Classes is a trusted coaching institute dedicated to helping students achieve academic success through quality education and expert guidance.
              </p>
              <p className="text-lg text-slate-800 dark:text-slate-300 mb-8 leading-relaxed">
                Our teaching approach focuses on concept clarity, regular practice, performance tracking, and individual attention. We strive to create a positive learning environment where students can grow academically and build confidence.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-5 rounded-2xl text-center">
                  <h4 className="text-2xl font-bold text-orange-500 mb-2">Our Mission</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-400 font-medium">Inspire confidence & empower students</p>
                </div>
                <div className="glass-card p-5 rounded-2xl text-center">
                  <h4 className="text-2xl font-bold text-amber-500 mb-2">Our Vision</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-400 font-medium">Respected coaching for academic excellence</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={stagger} initial="initial" whileInView="whileInView" className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <Award className="w-8 h-8 text-amber-500"/>, title: "10+ Years", desc: "Of Educational Excellence" },
                { icon: <Users className="w-8 h-8 text-orange-500"/>, title: "Expert Faculty", desc: "Experienced & Qualified" },
                { icon: <BookOpen className="w-8 h-8 text-emerald-500"/>, title: "Study Material", desc: "Comprehensive Resources" },
                { icon: <Target className="w-8 h-8 text-blue-500"/>, title: "Consistent", desc: "Academic Results" }
              ].map((item, idx) => (
                <motion.div key={idx} variants={{initial: {opacity: 0, y: 20}, whileInView: {opacity: 1, y: 0}}} className="glass-card p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
                  <div className="glass w-14 h-14 rounded-xl flex items-center justify-center mb-5 shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-slate-700 dark:text-slate-400 text-sm font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Courses Offered */}
      <section id="courses" className="py-20 relative z-10 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">Courses <span className="text-gradient bg-gradient-to-r from-orange-500 to-amber-500">Offered</span></h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Foundational */}
            <motion.div {...fadeIn} className="glass-card rounded-3xl p-8 border-t-4 border-t-orange-500 flex flex-col h-full bg-white/50 dark:bg-slate-900/50 hover:shadow-xl transition-all group">
              <Link href="/courses/viii-to-x" className="flex-1 flex flex-col h-full">
                <div className="glass w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <BookOpen className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors">Classes VIII to X</h3>
                <p className="text-orange-600 dark:text-orange-400 text-sm mb-6 font-bold uppercase tracking-wider">State Board & CBSE</p>
                <div className="space-y-3 mb-8">
                  {['Mathematics', 'Science', 'English', 'Social Science', 'Hindi', 'Marathi'].map((sub, i) => (
                    <div key={i} className="flex items-center text-slate-700 dark:text-slate-300 font-medium">
                      <div className="w-2 h-2 rounded-full bg-orange-500 mr-3"></div>
                      {sub}
                    </div>
                  ))}
                </div>
                <div className="pt-6 border-t border-slate-200 dark:border-slate-700 mt-auto flex justify-between items-center">
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-semibold">Concept-Based Learning</p>
                  <ChevronRight className="w-5 h-5 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            </motion.div>

            {/* Science */}
            <motion.div {...fadeIn} className="glass-card rounded-3xl p-8 border-t-4 border-t-blue-500 flex flex-col h-full bg-white/50 dark:bg-slate-900/50 hover:shadow-xl transition-all group">
              <Link href="/courses/xi-xii-science" className="flex-1 flex flex-col h-full">
                <div className="glass w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <Microscope className="w-7 h-7 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors">Classes XI & XII</h3>
                <p className="text-blue-600 dark:text-blue-400 text-sm mb-6 font-bold uppercase tracking-wider">Science Stream</p>
                <div className="space-y-3 mb-8">
                  {['Physics', 'Chemistry', 'Mathematics', 'Biology'].map((sub, i) => (
                    <div key={i} className="flex items-center text-slate-700 dark:text-slate-300 font-medium">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                      {sub}
                    </div>
                  ))}
                </div>
                <div className="pt-6 border-t border-slate-200 dark:border-slate-700 mt-auto flex justify-between items-center">
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-semibold">Board Prep & Foundation</p>
                  <ChevronRight className="w-5 h-5 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            </motion.div>

            {/* Commerce */}
            <motion.div {...fadeIn} className="glass-card rounded-3xl p-8 border-t-4 border-t-emerald-500 flex flex-col h-full bg-white/50 dark:bg-slate-900/50 hover:shadow-xl transition-all group">
              <Link href="/courses/xi-xii-commerce" className="flex-1 flex flex-col h-full">
                <div className="glass w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <Calculator className="w-7 h-7 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-500 transition-colors">Classes XI & XII</h3>
                <p className="text-emerald-600 dark:text-emerald-400 text-sm mb-6 font-bold uppercase tracking-wider">Commerce Stream</p>
                <div className="space-y-3 mb-8">
                  {['Accounts', 'Economics', 'Business Studies', 'Statistics', 'Mathematics'].map((sub, i) => (
                    <div key={i} className="flex items-center text-slate-700 dark:text-slate-300 font-medium">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 mr-3"></div>
                      {sub}
                    </div>
                  ))}
                </div>
                <div className="pt-6 border-t border-slate-200 dark:border-slate-700 mt-auto flex justify-between items-center">
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-semibold">Concept Clarity & Practice</p>
                  <ChevronRight className="w-5 h-5 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            </motion.div>

            {/* Science */}
            <motion.div {...fadeIn} className="glass-card rounded-3xl p-8 border-t-4 border-t-blue-500 flex flex-col h-full bg-white/50 dark:bg-slate-900/50 hover:shadow-xl transition-all group">
              <Link href="/courses/xi-xii-science" className="flex-1 flex flex-col h-full">
                <div className="glass w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <Microscope className="w-7 h-7 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors">Classes XI & XII</h3>
                <p className="text-blue-600 dark:text-blue-400 text-sm mb-6 font-bold uppercase tracking-wider">Science Stream</p>
                <div className="space-y-3 mb-8">
                  {['Physics', 'Chemistry', 'Mathematics', 'Biology'].map((sub, i) => (
                    <div key={i} className="flex items-center text-slate-800 dark:text-slate-300 font-medium">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                      {sub}
                    </div>
                  ))}
                </div>
                <div className="pt-6 border-t border-slate-200 dark:border-slate-700 mt-auto flex justify-between items-center">
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-semibold">Board Prep • Practical Guidance</p>
                  <ChevronRight className="w-5 h-5 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            </motion.div>

            {/* Commerce */}
            <motion.div {...fadeIn} className="glass-card rounded-3xl p-8 border-t-4 border-t-emerald-500 flex flex-col h-full bg-white/50 dark:bg-slate-900/50 hover:shadow-xl transition-all group">
              <Link href="/courses/xi-xii-commerce" className="flex-1 flex flex-col h-full">
                <div className="glass w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <Calculator className="w-7 h-7 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-500 transition-colors">Classes XI & XII</h3>
                <p className="text-emerald-600 dark:text-emerald-400 text-sm mb-6 font-bold uppercase tracking-wider">Commerce Stream</p>
                <div className="space-y-3 mb-8">
                  {['Accounts', 'Economics', 'Business Studies', 'Statistics', 'Mathematics'].map((sub, i) => (
                    <div key={i} className="flex items-center text-slate-800 dark:text-slate-300 font-medium">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 mr-3"></div>
                      {sub}
                    </div>
                  ))}
                </div>
                <div className="pt-6 border-t border-slate-200 dark:border-slate-700 mt-auto flex justify-between items-center">
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-semibold">Concept Clarity • Practice</p>
                  <ChevronRight className="w-5 h-5 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Competitive Exams Section Details */}
          <div className="mt-16 glass-panel p-8 md:p-12 rounded-3xl border border-orange-500/10">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Competitive Exam Preparation</h3>
              <p className="text-slate-700 dark:text-slate-400 max-w-2xl mx-auto">We provide rigorous, highly-focused training to help students crack India's toughest entrance examinations with top percentiles.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* NEET */}
              <Link href="/courses/neet" className="glass-card rounded-2xl p-8 relative overflow-hidden group hover:shadow-xl transition-all block">
                <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/10 rounded-bl-full z-0 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-rose-100 dark:bg-rose-500/20 text-rose-500 rounded-xl flex items-center justify-center">
                      <Stethoscope className="w-6 h-6" />
                    </div>
                    <ChevronRight className="w-6 h-6 text-rose-500 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0" />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-2 group-hover:text-rose-500 transition-colors">NEET</h4>
                  <p className="text-rose-500 font-semibold text-sm mb-4">Medical Entrance</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    In-depth biology, physics, and chemistry modules. Daily practice papers (DPPs), strict NCERT-focused learning, and rigorous mock exams for medical aspirants.
                  </p>
                  <ul className="space-y-2">
                    <li className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center"><CheckCircle2 className="w-4 h-4 text-rose-400 mr-2"/> Topic-Wise Tests</li>
                    <li className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center"><CheckCircle2 className="w-4 h-4 text-rose-400 mr-2"/> Performance Analysis</li>
                  </ul>
                </div>
              </Link>

              {/* JEE */}
              <Link href="/courses/jee" className="glass-card rounded-2xl p-8 relative overflow-hidden group hover:shadow-xl transition-all block">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-bl-full z-0 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-500/20 text-blue-600 rounded-xl flex items-center justify-center">
                      <Calculator className="w-6 h-6" />
                    </div>
                    <ChevronRight className="w-6 h-6 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0" />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">JEE Main & Adv</h4>
                  <p className="text-blue-600 font-semibold text-sm mb-4">Engineering Entrance</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    Comprehensive syllabus coverage, focus on advanced problem-solving, regular mock tests, and personalized mentoring to crack IIT JEE.
                  </p>
                  <ul className="space-y-2">
                    <li className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center"><CheckCircle2 className="w-4 h-4 text-blue-500 mr-2"/> Advanced Problem Solving</li>
                    <li className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center"><CheckCircle2 className="w-4 h-4 text-blue-500 mr-2"/> Concept Building</li>
                  </ul>
                </div>
              </Link>

              {/* MHT-CET */}
              <Link href="/courses/mht-cet" className="glass-card rounded-2xl p-8 relative overflow-hidden group hover:shadow-xl transition-all block">
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-bl-full z-0 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-amber-100 dark:bg-amber-500/20 text-amber-600 rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6" />
                    </div>
                    <ChevronRight className="w-6 h-6 text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0" />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-2 group-hover:text-amber-600 transition-colors">MHT-CET</h4>
                  <p className="text-amber-600 font-semibold text-sm mb-4">State Entrance Exam</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    State board-aligned curriculum, speed and accuracy building techniques, and extensive chapter-wise tests to secure top state engineering & pharmacy colleges.
                  </p>
                  <ul className="space-y-2">
                    <li className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center"><CheckCircle2 className="w-4 h-4 text-amber-500 mr-2"/> Complete Syllabus Coverage</li>
                    <li className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center"><CheckCircle2 className="w-4 h-4 text-amber-500 mr-2"/> Exam Strategy Sessions</li>
                  </ul>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">Our <span className="text-gradient bg-gradient-to-r from-yellow-500 to-amber-500">Achievements</span></h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-500 to-amber-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-slate-700 dark:text-slate-300 font-medium">Numbers That Speak For Us</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
            {[
              { num: "1000+", label: "Students Guided" },
              { num: "10+", label: "Years Excellence" },
              { num: "100%", label: "Dedication" },
              { num: "Top", label: "Results" }
            ].map((stat, i) => (
              <div key={i} className="glass-card p-6 md:p-8 rounded-3xl text-center flex flex-col justify-center bg-white/60 dark:bg-slate-900/60 shadow-lg border-white/40 dark:border-white/10">
                <div className="text-4xl md:text-5xl font-black text-orange-500 mb-3">{stat.num}</div>
                <div className="text-sm md:text-base text-slate-800 dark:text-slate-300 font-bold uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div {...fadeIn} className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden bg-white/70 dark:bg-slate-900/70">
              <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl"></div>
              <div className="flex items-center mb-8">
                <Award className="w-10 h-10 text-amber-500 mr-4" />
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">HSC Board Toppers</h3>
              </div>
              <div className="space-y-4">
                {[
                  { name: "Shreyas Makhamle", score: "95.60%", rank: "🥇", color: "bg-amber-100 dark:bg-amber-900/30 text-amber-600" },
                  { name: "Princy Dubey", score: "90.17%", rank: "🥈", color: "bg-slate-100 dark:bg-slate-800 text-slate-600" },
                  { name: "Gargi Gokhale", score: "83.00%", rank: "🥉", color: "bg-orange-100 dark:bg-orange-900/30 text-orange-600" },
                  { name: "Neha Yadav", score: "83.00%", rank: "🏅", color: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600" }
                ].map((topper, i) => (
                  <div key={i} className="glass flex items-center justify-between p-5 rounded-2xl hover:bg-white dark:hover:bg-slate-800 transition-colors shadow-sm">
                    <div className="flex items-center">
                      <span className={`w-10 h-10 rounded-full flex items-center justify-center text-xl mr-4 ${topper.color}`}>{topper.rank}</span>
                      <span className="font-bold text-lg text-slate-800 dark:text-slate-200">{topper.name}</span>
                    </div>
                    <span className="font-black text-amber-500 text-2xl">{topper.score}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="glass-panel p-8 md:p-10 rounded-3xl bg-white/70 dark:bg-slate-900/70">
              <div className="flex items-center mb-8">
                <GraduationCap className="w-10 h-10 text-orange-500 mr-4" />
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Merit Students</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
                {[
                  { name: "Kunal Mahadik", score: "78.00%" },
                  { name: "Sara Rane", score: "76.17%" },
                  { name: "Riddhi Gurav", score: "75.83%" },
                  { name: "Sakshi Khandare", score: "75.83%" },
                  { name: "Bhumika Kalokhe", score: "75.67%" },
                  { name: "Saniya Phadke", score: "74.17%" },
                  { name: "Divya Patil", score: "73.50%" },
                  { name: "Manswi Thakur", score: "73.20%" },
                  { name: "Anushka Pawar", score: "73.00%" },
                  { name: "Rucha Rane", score: "72.80%" },
                  { name: "Komal Ingle", score: "72.60%" },
                  { name: "Akanksha Kale", score: "72.30%" },
                  { name: "Pranali Takkal", score: "72.20%" }
                ].map((student, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-3">
                    <span className="text-slate-800 dark:text-slate-300 font-medium">{student.name}</span>
                    <span className="text-orange-500 font-bold bg-orange-50 dark:bg-orange-500/10 px-2 py-0.5 rounded-md text-sm">{student.score}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Placeholder */}
      <section id="gallery" className="py-20 relative z-10 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">Our <span className="text-gradient bg-gradient-to-r from-pink-500 to-rose-500">Gallery</span></h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-slate-700 dark:text-slate-300 font-medium">Take a glimpse into life at Anurag Classes</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {['Classroom Learning', 'Student Activities', 'Workshops & Seminars', 'Results & Achievements', 'Toppers & Merit Students', 'Annual Celebrations'].map((title, i) => (
              <div key={i} className="glass-card aspect-video rounded-3xl flex items-center justify-center relative overflow-hidden group cursor-pointer border-2 border-white/50 dark:border-white/10 shadow-lg">
                <div className={`absolute inset-0 opacity-20 dark:opacity-40 group-hover:opacity-40 dark:group-hover:opacity-60 transition-opacity duration-500 bg-gradient-to-br ${
                  i % 3 === 0 ? 'from-orange-500 to-amber-500' : 
                  i % 3 === 1 ? 'from-emerald-500 to-teal-500' : 
                  'from-rose-500 to-pink-500'
                }`}></div>
                {/* Dotted pattern overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPHBhdGggZD0iTTAgMEw4IDhaTTAgOEw4IDBaIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPHBhdGggZD0iTTAgMEw4IDhaTTAgOEw4IDBaIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] opacity-20"></div>
                <div className="relative z-10 glass px-6 py-3 rounded-xl backdrop-blur-md border border-white/40 dark:border-white/20 transform group-hover:scale-110 transition-transform duration-300 shadow-xl bg-white/80 dark:bg-slate-900/80">
                  <p className="text-slate-800 dark:text-white font-bold text-sm md:text-base text-center">{title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Branches (Simplified, form moved to Inquiry tab) */}
      <section id="contact" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">Get In <span className="text-gradient bg-gradient-to-r from-emerald-500 to-teal-500">Touch</span></h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div {...fadeIn} className="space-y-6">
              <div className="glass-card p-8 rounded-3xl h-full bg-white/70 dark:bg-slate-900/70">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
                  <MapPin className="w-7 h-7 mr-3 text-emerald-500" /> Our Branches
                </h3>
                
                <div className="mb-8 pb-8 border-b border-slate-200 dark:border-slate-800">
                  <h4 className="text-xl font-bold text-orange-500 mb-3">New Panvel Branch</h4>
                  <p className="text-slate-700 dark:text-slate-400 text-base leading-relaxed font-medium">
                    Shop No. 33 & 34/29<br/>
                    Near Bantia School, Sector 13<br/>
                    New Panvel East<br/>
                    Panvel, Maharashtra – 410206
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-orange-500 mb-3">Kalamboli Branch</h4>
                  <p className="text-slate-700 dark:text-slate-400 text-base leading-relaxed font-medium">
                    25, Satyam Apartment<br/>
                    Ground Floor, Plot No. 11<br/>
                    Sector 2E<br/>
                    Kalamboli – 410218
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="space-y-6 flex flex-col">
              <div className="glass-card p-8 rounded-3xl flex-1 flex flex-col justify-center bg-white/70 dark:bg-slate-900/70">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Contact Info & Socials</h3>
                <div className="space-y-6 mb-10">
                  <div className="flex items-center text-slate-800 dark:text-slate-300">
                    <div className="glass p-3 rounded-xl mr-5 shadow-sm bg-white dark:bg-slate-800"><Phone className="w-6 h-6 text-emerald-500"/></div>
                    <div className="font-bold text-lg">
                      <p>7977338822</p>
                      <p>8369293124</p>
                    </div>
                  </div>
                  <div className="flex items-center text-slate-800 dark:text-slate-300">
                    <div className="glass p-3 rounded-xl mr-5 shadow-sm bg-white dark:bg-slate-800"><Mail className="w-6 h-6 text-emerald-500"/></div>
                    <p className="font-bold text-lg">info@anuragclasses.com</p>
                  </div>
                </div>

                {/* Google Maps Embed */}
                <div className="w-full h-48 rounded-2xl overflow-hidden mb-8 shadow-md border border-slate-200 dark:border-slate-800">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.6693192410313!2d73.11477741490008!3d18.990201487137353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e83a77a94bc7%3A0xc0953c8939a03b!2sNew%20Panvel%20East%2C%20Panvel%2C%20Navi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v162263435432!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    title="Anurag Classes Location"
                  ></iframe>
                </div>

                <div className="flex space-x-4 mb-8 justify-center">
                  <a href="#" className="glass p-3.5 rounded-full hover:-translate-y-1 hover:bg-emerald-500/10 transition-all text-emerald-600 dark:text-emerald-400 shadow-sm bg-white dark:bg-slate-800" title="WhatsApp">
                    <MessageCircle className="w-6 h-6" />
                  </a>
                  <a href="#" className="glass p-3.5 rounded-full hover:-translate-y-1 hover:bg-pink-500/10 transition-all text-pink-600 dark:text-pink-400 shadow-sm bg-white dark:bg-slate-800" title="Instagram">
                    <InstagramIcon className="w-6 h-6" />
                  </a>
                  <a href="#" className="glass p-3.5 rounded-full hover:-translate-y-1 hover:bg-blue-500/10 transition-all text-blue-600 dark:text-blue-400 shadow-sm bg-white dark:bg-slate-800" title="Telegram">
                    <Send className="w-6 h-6" />
                  </a>
                  <a href="#" className="glass p-3.5 rounded-full hover:-translate-y-1 hover:bg-sky-500/10 transition-all text-sky-600 dark:text-sky-400 shadow-sm bg-white dark:bg-slate-800" title="Twitter">
                    <TwitterIcon className="w-6 h-6" />
                  </a>
                </div>

                <div className="mt-auto">
                   <Link href="/inquiry" className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all flex items-center justify-center">
                     Go to Inquiry Form <ArrowRight className="ml-2 w-5 h-5" />
                   </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass border-t border-slate-200 dark:border-white/10 pt-16 pb-8 relative z-10 bg-white/50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 text-gradient mb-6">
                ANURAG CLASSES
              </div>
              <p className="text-slate-700 dark:text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                Building Strong Foundations for Academic Success. Trusted coaching institute since 2015.
              </p>
              <div className="flex space-x-4 mb-6">
                 <a href="#" className="text-slate-400 hover:text-emerald-500 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                 </a>
                 <a href="#" className="text-slate-400 hover:text-pink-500 transition-colors">
                    <InstagramIcon className="w-5 h-5" />
                 </a>
                 <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors">
                    <Send className="w-5 h-5" />
                 </a>
                 <a href="#" className="text-slate-400 hover:text-sky-500 transition-colors">
                    <TwitterIcon className="w-5 h-5" />
                 </a>
              </div>
              <Link href="/inquiry" className="inline-flex items-center text-orange-500 hover:text-orange-600 transition-colors text-sm font-bold">
                Enroll Today 🚀
              </Link>
            </div>

            <div>
              <h4 className="text-slate-900 dark:text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'About', 'Courses', 'Gallery', 'Contact'].map((link) => (
                  <li key={link}>
                    <Link href={`#${link.toLowerCase()}`} className="text-slate-700 dark:text-slate-400 hover:text-orange-500 dark:hover:text-white transition-colors text-sm font-medium">
                      {link}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/blog" className="text-slate-700 dark:text-slate-400 hover:text-orange-500 dark:hover:text-white transition-colors text-sm font-medium">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/inquiry" className="text-orange-500 hover:text-orange-600 transition-colors text-sm font-bold">
                    Inquiry
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-slate-900 dark:text-white font-bold mb-6">Courses</h4>
              <ul className="space-y-3">
                {['Classes VIII-X', 'XI-XII Science', 'XI-XII Commerce', 'NEET', 'JEE', 'MHT-CET'].map((course) => (
                  <li key={course} className="text-slate-700 dark:text-slate-400 text-sm font-medium">
                    {course}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-slate-900 dark:text-white font-bold mb-6">Branches & Contact</h4>
              <ul className="space-y-3 mb-6">
                <li className="text-slate-700 dark:text-slate-400 text-sm flex items-start font-medium">
                  <MapPin className="w-4 h-4 mr-2 mt-0.5 text-orange-500" /> New Panvel
                </li>
                <li className="text-slate-700 dark:text-slate-400 text-sm flex items-start font-medium">
                  <MapPin className="w-4 h-4 mr-2 mt-0.5 text-orange-500" /> Kalamboli
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="text-slate-700 dark:text-slate-400 text-sm flex items-center font-medium">
                  <Phone className="w-4 h-4 mr-2 text-emerald-500" /> 7977338822
                </li>
                <li className="text-slate-700 dark:text-slate-400 text-sm flex items-center font-medium">
                  <Mail className="w-4 h-4 mr-2 text-emerald-500" /> info@anuragclasses.com
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-200 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-600 dark:text-slate-600 text-sm mb-4 md:mb-0 font-medium">
              © {new Date().getFullYear()} Anurag Classes. All rights reserved.
            </p>
            <div className="text-slate-600 dark:text-slate-600 text-sm font-medium">
              Admissions Open 2026-27
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
