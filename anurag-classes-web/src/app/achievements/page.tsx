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

      {/* Yearly Toppers Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

          {/* Toppers of 2026 */}
          <div className="flex flex-col items-center">
            <motion.div {...fadeIn} className="w-full">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 text-center">
                Toppers of <span className="text-orange-500">2026</span>
              </h2>
              <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full mb-12"></div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                  { src: "/achievements/Page 4.png", alt: "Toppers 2026 Page 4" },
                  { src: "/achievements/Page 3.png", alt: "Toppers 2026 Page 3" },
                  { src: "/achievements/Page 2.png", alt: "Toppers 2026 Page 2" }
                ].map((img, idx) => (
                  <div key={idx} className="relative aspect-[547/773] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-900 group hover:shadow-orange-500/10 transition-all duration-300">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Toppers of 2025 */}
          <div className="flex flex-col items-center">
            <motion.div {...fadeIn} className="w-full max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 text-center">
                Toppers of <span className="text-orange-500">2025</span>
              </h2>
              <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full mb-12"></div>

              <div className="relative aspect-[1600/1460] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-900 group hover:shadow-orange-500/10 transition-all duration-300">
                <Image
                  src={photo1}
                  alt="Toppers of 2025"
                  placeholder="blur"
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </motion.div>
          </div>

          {/* Toppers of 2024 */}
          <div className="flex flex-col items-center">
            <motion.div {...fadeIn} className="w-full max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 text-center">
                Toppers of <span className="text-orange-500">2024</span>
              </h2>
              <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full mb-12"></div>

              <div className="relative aspect-[1425/1313] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-900 group hover:shadow-orange-500/10 transition-all duration-300">
                <Image
                  src={photo2}
                  alt="Toppers of 2024"
                  placeholder="blur"
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </motion.div>
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
