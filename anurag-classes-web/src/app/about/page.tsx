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

      {/* About Section & Founder */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <motion.div {...fadeIn} className="lg:col-span-5 space-y-6">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800">
                <Image src="/founder/founder-main.jpg" alt="Prof. Anandkumar Sonkar" fill className="object-cover" />
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
                <p className="text-orange-600 dark:text-orange-400 font-bold">Maharashtra Udyog Bhushan Award</p>
                <p className="text-slate-500 text-xs mt-1">Excellence in Science Teaching</p>
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="lg:col-span-7">
              <div className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-widest mb-6">About the Founder</div>
              <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-2 leading-tight">Prof. Anandkumar B. Sonkar</h2>
              <p className="text-orange-500 font-bold text-lg mb-2">M.Sc. (Chemistry), B.Ed., D.S.M.</p>
              <p className="text-slate-500 font-bold text-md mb-8 italic">Founder & Director, Anurag Classes</p>
              
              <div className="space-y-6 text-slate-700 dark:text-slate-300 text-lg leading-relaxed font-medium">
                <p>
                  Prof. Anandkumar B. Sonkar is a highly respected educator and academic leader with over a decade of dedication to teaching. Holding an M.Sc. in Chemistry, a Bachelor of Education (B.Ed.), and a Diploma in School Management (D.S.M.), he combines strong academic credentials with a profound understanding of school administration and pedagogy.
                </p>
                <p>
                  Specializing in Science and Chemistry coaching, Prof. Sonkar has earned a reputation for simplifying complex chemical equations, reaction mechanisms, and concepts into intuitive lessons. Under his direct mentorship, hundreds of students have successfully cracked competitive entrance examinations like JEE, NEET, and MHT-CET, securing admissions into prestigious professional institutions.
                </p>
                <p>
                  Beyond curriculum teaching, his educational vision is holistic. He focuses on developing student confidence, critical analytical skills, and an entrepreneurial mindset. By keeping batch sizes optimum, he ensures that every individual student receives personalized attention to unlock their unique potential.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-12 border-t border-slate-100 dark:border-slate-800">
                {[{ n: "10+", l: "Years Excellence" }, { n: "1000+", l: "Students Mentored" }, { n: "4", l: "Branches" }, { n: "95.6%", l: "Top Score" }].map((s, i) => (
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

      {/* Vision & Mission */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div {...fadeIn} className="bg-white dark:bg-slate-800 p-10 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-8 flex items-center">
                <Target className="w-8 h-8 text-orange-500 mr-4" /> Our Vision
              </h3>
              <ul className="space-y-4">
                {[
                  "Every child is unique, gifted, and valuable.",
                  "Encourage students to become creators of opportunities rather than seekers.",
                  "Inspire future entrepreneurs, business owners, and self-reliant individuals.",
                  "Help students discover and excel in their chosen fields."
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-slate-700 dark:text-slate-300 font-medium">
                    <Check className="w-5 h-5 text-orange-500 mr-3 mt-1 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fadeIn} className="bg-white dark:bg-slate-800 p-10 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-8 flex items-center">
                <Award className="w-8 h-8 text-blue-500 mr-4" /> Our Mission
              </h3>
              <ul className="space-y-4">
                {[
                  "Deliver quality education at an affordable cost.",
                  "Support the holistic development of every student.",
                  "Help learners identify their strengths, skills, and passions.",
                  "Foster confidence, leadership, and a growth-oriented mindset."
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-slate-700 dark:text-slate-300 font-medium">
                    <Check className="w-5 h-5 text-blue-500 mr-3 mt-1 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us? */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">Why <span className="text-orange-500">Choose Us?</span></h2>
            <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "10+ years of teaching excellence and proven results.",
              "Comprehensive revision lectures before examinations.",
              "Group discussions and personalized counseling sessions.",
              "Guidance from highly qualified faculty and subject experts.",
              "Foundation preparation for IIT-JEE, NEET, and MHT-CET.",
              "Motivational seminars and career guidance programs."
            ].map((feature, i) => (
              <motion.div key={i} {...fadeIn} className="flex items-start bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold mr-4 shrink-0">{i + 1}</div>
                <p className="text-slate-700 dark:text-slate-300 font-bold leading-relaxed">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeIn} className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-8">Awards & <span className="text-orange-500">Recognition</span></h2>
            <div className="bg-white dark:bg-slate-800 p-10 rounded-[3rem] shadow-xl border border-orange-500/20">
              <Award className="w-16 h-16 text-orange-500 mx-auto mb-6" />
              <p className="text-xl text-slate-700 dark:text-slate-300 font-medium leading-relaxed mb-6">
                Anurag Classes, under the leadership of <span className="font-bold text-slate-900 dark:text-white">Prof. Anand Sonkar</span>, has been honored with the <span className="text-orange-500 font-black">Maharashtra Udyog Bhushan Award</span> for Excellence in Science Teaching. 
              </p>
              <p className="text-slate-600 dark:text-slate-400 font-medium italic">
                The award was presented by renowned Marathi actress Sonali Kulkarni, recognizing the institution’s commitment to academic excellence and quality education.
              </p>
            </div>
          </motion.div>
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
