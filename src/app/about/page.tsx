"use client";

import { motion } from "framer-motion";
import { Award, Users, BookOpen, Target, Check, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-20 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeIn}>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6">About <span className="text-orange-500">Anurag Classes</span></h1>
            <div className="w-24 h-2 bg-orange-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed">
              Founded on the belief that every student has the potential to excel, Anurag Classes has been a beacon of academic excellence in New Panvel since 2015.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <motion.div {...fadeIn} className="lg:col-span-5 space-y-6">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800">
                <Image src="/founder/founder-main.jpg" alt="Anandkumar Sankar" fill className="object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg border-2 border-white dark:border-slate-800">
                  <Image src="/founder/founder-award-1.jpg" alt="Award" fill className="object-cover" />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg border-2 border-white dark:border-slate-800">
                  <Image src="/founder/founder-award-2.jpg" alt="Award Ceremony" fill className="object-cover" />
                </div>
              </div>
              <div className="bg-orange-50 dark:bg-orange-500/5 p-6 rounded-2xl border border-orange-100 dark:border-orange-500/20 text-center">
                <p className="text-orange-600 dark:text-orange-400 font-bold">Maharashtra Udyog Samman Puraskar 2024</p>
                <p className="text-slate-500 text-xs mt-1">Excellence in Science Teaching</p>
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="lg:col-span-7">
              <div className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-widest mb-6">Meet the Founder</div>
              <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-2 leading-tight">Anandkumar Badriprasad Sankar</h2>
              <p className="text-orange-500 font-bold text-xl mb-8 italic">Founder & Director, Anurag Classes</p>
              
              <div className="space-y-6 text-slate-700 dark:text-slate-300 text-lg leading-relaxed font-medium">
                <p>With a deep passion for education and a commitment to shaping young minds, <span className="font-bold text-slate-900 dark:text-white">Anandkumar Sankar</span> founded Anurag Classes in 2015.</p>
                <p>Starting from a single batch in New Panvel, he has grown Anurag Classes into a trusted institute across two branches, coaching 1000+ students in board subjects, NEET, JEE, and MHT-CET. His hands-on teaching style, rooted in concept clarity and consistent assessment, has helped students achieve outstanding results year after year.</p>
                <p>Recognised with the <span className="font-bold underline decoration-orange-500">Maharashtra Udyog Samman Puraskar 2024</span> for Excellence in Science Teaching, he continues to lead by example — teaching in classrooms, mentoring students personally, and building an institute where academic success is within every student's reach.</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-12 border-t border-slate-100 dark:border-slate-800">
                {[{ n: "10+", l: "Years Teaching" }, { n: "1000+", l: "Students Mentored" }, { n: "2", l: "Branches" }, { n: "95.6%", l: "Top Score" }].map((s, i) => (
                  <div key={i}>
                    <div className="text-3xl font-black text-orange-500">{s.n}</div>
                    <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Our Core <span className="text-orange-500">Values</span></h2>
            <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Target className="w-8 h-8 text-orange-500"/>, title: "Excellence", desc: "We strive for perfection in every lesson we deliver and every student we mentor." },
              { icon: <Users className="w-8 h-8 text-blue-500"/>, title: "Personal Attention", desc: "No student is left behind. We track progress individually to ensure success." },
              { icon: <BookOpen className="w-8 h-8 text-emerald-500"/>, title: "Concept Clarity", desc: "We move beyond rote learning, focusing on deep understanding of subjects." }
            ].map((v, i) => (
              <motion.div key={i} {...fadeIn} className="bg-white dark:bg-slate-800 p-10 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-700 flex items-center justify-center mb-6">{v.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{v.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-8">Ready to start your journey with us?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/inquiry" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-10 py-5 rounded-full bg-orange-500 text-white font-black text-lg hover:shadow-xl transition-all">Enroll Now</Link>
            <Link href="https://wa.me/917977338822" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-10 py-5 rounded-full bg-emerald-500 text-white font-black text-lg hover:shadow-xl transition-all flex items-center justify-center">
              <MessageCircle className="mr-2" /> Chat with Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
