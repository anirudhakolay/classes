"use client";

import { motion } from "framer-motion";
import { 
  BookOpen, 
  ChevronRight,
  Phone,
  ArrowRight,
  Check,
  Microscope,
  Users,
  Star,
  LayoutGrid,
  ClipboardCheck,
  Lightbulb,
  MessageSquare,
  Trophy
} from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const MessageCircle = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
  </svg>
);

export default function Home() {
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

  const toppersPreview = [
    { name: "Shreyas Makhamle", score: "95.60%", rank: "🥇", img: "shreyas-makhamle.jpg" },
    { name: "Princy Dubey", score: "90.17%", rank: "🥈", img: "princy-dubey.jpg" },
    { name: "Gargi Gokhale", score: "83.00%", rank: "🥉", img: "gargi-gokhale.jpg" },
    { name: "Neha Yadav", score: "83.00%", rank: "🏅", img: "neha-yadav.jpg" }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 flex flex-col items-center justify-center min-h-[80vh] relative text-center">
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-5 dark:opacity-10 pointer-events-none" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop')" }} />
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto z-10">
          <div className="inline-block mb-6 px-5 py-2 rounded-full glass border-orange-500/20 text-sm font-semibold text-orange-600 dark:text-orange-400 tracking-widest">
            SCIENCE | COMMERCE | NEET | JEE | MHT-CET
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-slate-900 dark:text-white leading-[1.1]">Building Strong Foundations for <span className="text-orange-500">Academic Success</span></h1>
          <p className="text-lg md:text-xl text-slate-800 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">At Anurag Classes, we believe every student has the potential to excel. With experienced faculty, personalized attention, and a result-oriented approach.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-12">
            <Link href="/inquiry" className="w-full sm:w-auto px-10 py-4 rounded-full bg-orange-500 text-white font-black text-lg hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all flex items-center justify-center">Enroll Now <ChevronRight className="ml-2 w-5 h-5" /></Link>
            <div className="flex items-center glass rounded-full px-10 py-4 w-full sm:w-auto justify-center"><Phone className="w-5 h-5 mr-3 text-orange-500" /><span className="font-black text-xl text-slate-800 dark:text-slate-200 tracking-tight">7977338822</span></div>
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us - Excellence & Quality Teaching */}
      <section className="py-24 relative z-10 bg-slate-50 dark:bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-widest mb-4 border border-orange-500/20">
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">Empowering Students to <span className="text-orange-500">Excel</span></h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">We combine years of academic expertise with a modern, student-centric approach to deliver consistent results.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: <Users className="w-6 h-6" />, 
                title: "Expert Mentorship", 
                desc: "Learn from highly qualified educators who simplify complex topics into easy-to-understand concepts." 
              },
              { 
                icon: <LayoutGrid className="w-6 h-6" />, 
                title: "Optimum Batch Size", 
                desc: "We maintain limited students per batch to ensure every individual gets the attention they need to grow." 
              },
              { 
                icon: <ClipboardCheck className="w-6 h-6" />, 
                title: "Rigorous Assessment", 
                desc: "Weekly chapter-wise tests and monthly full-length mock exams to track progress and build confidence." 
              },
              { 
                icon: <Trophy className="w-6 h-6" />, 
                title: "Proven Track Record", 
                desc: "Year-on-year consistency in producing HSC Board toppers and high percentiles in entrance exams." 
              },
              { 
                icon: <Lightbulb className="w-6 h-6" />, 
                title: "Quality Study Material", 
                desc: "Specially curated notes and practice sheets designed to make competitive preparation effective." 
              },
              { 
                icon: <MessageSquare className="w-6 h-6" />, 
                title: "Doubt Clearing Hub", 
                desc: "Dedicated interactive sessions where students can resolve queries instantly with subject experts." 
              }
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                {...fadeIn} 
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-orange-50 dark:bg-orange-500/10 text-orange-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Preview */}
      <section className="py-24 relative z-10 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">Our <span className="text-orange-500">Academic Sections</span></h2>
            <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* Foundational */}
            <motion.div {...fadeIn} className="bg-slate-50 dark:bg-slate-800 rounded-[2.5rem] p-10 border-t-4 border-t-orange-500 text-left shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6 text-orange-500"><BookOpen /></div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3">School Section (VIII-X)</h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium mb-8 leading-relaxed">Strengthening fundamental concepts in Math and Science for State Board & CBSE students.</p>
              <Link href="/courses" target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-bold text-orange-500 hover:translate-x-1 transition-transform">Explore subjects <ChevronRight className="ml-1 w-4 h-4" /></Link>
            </motion.div>

            {/* Science */}
            <motion.div {...fadeIn} className="bg-slate-50 dark:bg-slate-800 rounded-[2.5rem] p-10 border-t-4 border-t-blue-500 text-left shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-500"><Microscope className="w-6 h-6" /></div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3">Junior College (XI-XII)</h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium mb-8 leading-relaxed">Integrated coaching for Board Exams and Entrance Preparation (NEET, JEE, CET).</p>
              <Link href="/courses" target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-bold text-blue-500 hover:translate-x-1 transition-transform">Explore subjects <ChevronRight className="ml-1 w-4 h-4" /></Link>
            </motion.div>
          </div>

          <Link href="/courses" target="_blank" rel="noopener noreferrer" className="px-12 py-5 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-black text-lg hover:scale-105 transition-all shadow-xl">View All Programs</Link>
        </div>
      </section>

      {/* Toppers Preview */}
      <section className="py-24 relative z-10 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">Meet Our <span className="text-orange-500">Toppers</span></h2>
            <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
            {toppersPreview.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="bg-white dark:bg-slate-800 rounded-3xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 text-center flex flex-col items-center">
                <div className="w-full aspect-[3/4] rounded-2xl bg-slate-50 dark:bg-slate-700 mb-4 overflow-hidden border-2 border-orange-500/10 relative">
                  <Image src={`/toppers/${t.img}`} alt={t.name} fill className="object-cover" />
                  {t.rank && <span className="absolute top-2 right-2 text-2xl z-10">{t.rank}</span>}
                </div>
                <h4 className="font-black text-slate-900 dark:text-white text-sm sm:text-base leading-tight mb-1">{t.name}</h4>
                <div className="text-orange-500 font-black text-2xl">{t.score}</div>
              </motion.div>
            ))}
          </div>

          <Link href="/achievements" target="_blank" rel="noopener noreferrer" className="px-10 py-4 rounded-full bg-white dark:bg-slate-800 border-2 border-orange-500 text-orange-500 font-bold hover:bg-orange-500 hover:text-white transition-all">Wall of Fame</Link>
        </div>
      </section>

      {/* Footer Branding Info */}
      <footer className="bg-white dark:bg-slate-900 pt-20 pb-10">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center border-t border-slate-100 dark:border-slate-800 pt-16">
            <div className="flex flex-col items-center mb-10">
               <Image src="/logo.jpg" alt="Logo" width={80} height={80} className="rounded-full shadow-lg mb-4" />
               <h3 className="text-2xl font-black text-slate-900 dark:text-white">Anurag Classes</h3>
               <p className="text-orange-500 font-bold uppercase tracking-[0.2em] text-xs">Since 2015</p>
            </div>
            <div className="flex space-x-6 justify-center mb-10">
                <a href="https://wa.me/917977338822" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all shadow-sm border border-slate-100 dark:border-slate-700">
                    <MessageCircle className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/anuragclasses_2020?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition-all shadow-sm border border-slate-100 dark:border-slate-700">
                    <InstagramIcon className="w-5 h-5" />
                </a>
            </div>
            <p className="text-slate-500 dark:text-slate-500 text-sm font-medium">© {new Date().getFullYear()} Anurag Classes. Excellence in Education.</p>
         </div>
      </footer>
    </main>
  );
}
