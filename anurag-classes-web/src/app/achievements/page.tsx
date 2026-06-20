"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, Users, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import photo1 from "../../../public/photo1.jpg";
import photo2 from "../../../public/photo2.jpg";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function AchievementsPage() {
  const toppers = [
    { name: "Shreyas Makhamle", score: "95.60%", rank: "🥇", college: "Mahatma College", img: "shreyas-makhamle.jpg" },
    { name: "Princy Dubey", score: "90.17%", rank: "🥈", college: "N.N. Paliwala College", img: "princy-dubey.jpg" },
    { name: "Gargi Gokhale", score: "83.00%", rank: "🥉", college: "N.N. Paliwala College", img: "gargi-gokhale.jpg" },
    { name: "Neha Yadav", score: "83.00%", rank: "🏅", college: "D.D. Vispute College", img: "neha-yadav.jpg" },
    { name: "Kunal Mahadik", score: "78.00%", college: "HSC", img: "kunal-mahadik.jpg" },
    { name: "Sara Rane", score: "76.17%", college: "HSC", img: "sara-rane.jpg" },
    { name: "Riddhi Gurav", score: "75.83%", college: "HSC", img: "riddhi-gurav.jpg" },
    { name: "Sakshi Khandare", score: "75.83%", college: "HSC", img: "sakshi-khandare.jpg" },
    { name: "Bhumika Kalokhe", score: "75.67%", college: "HSC", img: "bhumika-kalokhe.jpg" },
    { name: "Saniya Phadke", score: "74.17%", college: "HSC", img: "saniya-phadke.jpg" },
    { name: "Divya Patil", score: "73.50%", college: "HSC", img: "divya-patil.jpg" },
    { name: "Manswi Thakur", score: "73.20%", college: "HSC", img: "manswi-thakur.jpg" },
    { name: "Anushka Pawar", score: "73.00%", college: "HSC", img: "anushka-pawar.jpg" },
    { name: "Rucha Rane", score: "72.80%", college: "HSC", img: "rucha-rane.jpg" }
  ];



  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-16 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeIn}>
            <h1 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 dark:text-white">Wall of <span className="text-orange-500">Fame</span></h1>
            <div className="w-24 h-2 bg-orange-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">Honouring the hard work, consistency, and brilliant success of our students.</p>
          </motion.div>
        </div>
      </section>

      {/* Board Toppers */}
      <section className="pt-18 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">Our <span className="text-orange-500">Board Toppers</span></h2>
            <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-6">
            {toppers.map((t, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.05 }} className="bg-slate-50 dark:bg-slate-800 rounded-3xl p-5 text-center flex flex-col items-center hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700">
                <div className="w-24 h-32 sm:w-28 sm:h-36 rounded-2xl bg-slate-200 dark:bg-slate-700 mb-4 overflow-hidden relative border-2 border-orange-500/20 shadow-inner">
                   {t.rank && <span className="absolute top-1 right-1 text-xl z-10">{t.rank}</span>}
                   <Image src={`/toppers/${t.img}`} alt={t.name} fill className="object-cover" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm leading-tight mb-2 h-10 flex items-center justify-center">{t.name}</h4>
                <div className="text-orange-500 font-black text-xl mb-1">{t.score}</div>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{t.college}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Yearly Toppers Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/30 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative">
            
            {/* 2024 Toppers */}
            <div className="flex flex-col items-center">
              <motion.div {...fadeIn} className="w-full max-w-xl">
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-6 text-center">
                  Toppers of <span className="text-orange-500">2024</span>
                </h3>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-900 group hover:shadow-orange-500/10 transition-all duration-300">
                  <Image
                    src={photo1}
                    alt="Toppers of 2024"
                    placeholder="blur"
                    className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </motion.div>
            </div>

            {/* Vertical Divider (Desktop Only) */}
            <div className="hidden md:block absolute left-1/2 top-6 bottom-6 w-[1.5px] bg-slate-200 dark:bg-slate-800 -translate-x-1/2"></div>

            {/* 2025 Toppers */}
            <div className="flex flex-col items-center">
              <motion.div {...fadeIn} transition={{ delay: 0.15 }} className="w-full max-w-xl">
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-6 text-center">
                  Toppers of <span className="text-orange-500">2025</span>
                </h3>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-900 group hover:shadow-orange-500/10 transition-all duration-300">
                  <Image
                    src={photo2}
                    alt="Toppers of 2025"
                    placeholder="blur"
                    className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Final Stats */}
      <section className="pb-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             {[
               { icon: <Users className="w-8 h-8" />, num: "1000+", label: "Success Stories" },
               { icon: <Star className="w-8 h-8" />, num: "95.6%", label: "Highest Score" },
               { icon: <GraduationCap className="w-8 h-8" />, num: "100%", label: "Dedication" },
               { icon: <Award className="w-8 h-8" />, num: "Multiple", label: "State Awards" }
             ].map((s, i) => (
               <div key={i} className="text-center">
                 <div className="w-16 h-16 rounded-full bg-orange-50 dark:bg-orange-500/10 text-orange-500 flex items-center justify-center mx-auto mb-4">{s.icon}</div>
                 <div className="text-4xl font-black text-slate-900 dark:text-white mb-1">{s.num}</div>
                 <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">{s.label}</div>
               </div>
             ))}
          </div>
        </div>
      </section>
    </main>
  );
}
