"use client";

import { motion } from "framer-motion";
import { BookOpen, Microscope, Calculator, Stethoscope, Award, ChevronRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function CoursesPage() {
  const courses = [
    {
      title: "School Section (VIII to X)",
      slug: "classes-viii-x",
      color: "orange",
      icon: <BookOpen className="w-8 h-8 text-orange-500" />,
      tag: "State Board, CBSE & ICSE",
      desc: "Laying the foundation for a brilliant academic future with expert coaching in core subjects.",
      subjects: ['Mathematics', 'Science', 'English', 'Social Science', 'Hindi', 'Marathi'],
      feature: "Board Exams & Foundation Prep"
    },
    {
      title: "Science Section (XI & XII)",
      slug: "xi-xii-science",
      color: "blue",
      icon: <Microscope className="w-8 h-8 text-blue-500" />,
      tag: "Board Prep & Foundation",
      desc: "Comprehensive coaching for Higher Secondary exams with a focus on core scientific concepts.",
      subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
      feature: "Intensive Practical & Theory Training"
    },
    {
      title: "Commerce Section (XI & XII)",
      slug: "xi-xii-commerce",
      color: "emerald",
      icon: <Calculator className="w-8 h-8 text-emerald-500" />,
      tag: "Professional Foundation",
      desc: "Preparing students for a successful career in business and finance with specialized commerce coaching.",
      subjects: ['Accounts', 'Economics', 'Organization of Commerce & Management (OCM)', 'Secretarial Practice (SP)', 'Mathematics'],
      feature: "Concept Clarity & Real-world Practice"
    }
  ];

  const competitive = [
    { name: "NEET", slug: "neet", type: "Medical Entrance", icon: <Stethoscope className="w-8 h-8" />, color: "rose", desc: "Rigorous biology-focused training for medical aspirants." },
    { name: "JEE", slug: "jee", type: "Engineering Entrance", icon: <Calculator className="w-8 h-8" />, color: "blue", desc: "Advanced problem-solving for top engineering colleges." },
    { name: "MHT-CET", slug: "mht-cet", type: "State Entrance", icon: <Award className="w-8 h-8" />, color: "amber", desc: "Speed and accuracy training for state-level admissions." }
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-orange-500 py-14 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn}>
            <h1 className="text-4xl md:text-6xl font-black mb-6">Our <span className="text-slate-900">Academic Programs</span></h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto font-medium">Expertly designed courses to help every student achieve their goals, from school boards to top competitive exams.</p>
          </motion.div>
        </div>
      </section>

      {/* Main Courses */}
      <section className="pt-20 pb-14 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {courses.map((c, i) => (
              <Link key={i} href={`/courses/${c.slug}`}>
                <motion.div {...fadeIn} className={`flex flex-col bg-slate-50 dark:bg-slate-800 rounded-[2.5rem] p-10 border-t-8 border-t-${c.color}-500 shadow-sm hover:shadow-xl transition-all cursor-pointer h-full`}>
                  <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-700 flex items-center justify-center mb-8 shadow-sm">{c.icon}</div>
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2">{c.title}</h2>
                  <p className={`text-${c.color}-600 dark:text-${c.color}-400 font-bold uppercase tracking-widest text-xs mb-6`}>{c.tag}</p>
                  <p className="text-slate-600 dark:text-slate-400 mb-8 font-medium leading-relaxed">{c.desc}</p>
                  <div className="space-y-4 mb-10">
                    <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">Subjects Covered:</h4>
                    <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                      {c.subjects.map((s, j) => (
                        <div key={j} className="flex items-center text-sm font-bold text-slate-700 dark:text-slate-300">
                          <div className={`w-2 h-2 rounded-full bg-${c.color}-500 mr-2`}></div>
                          {s}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`p-4 rounded-2xl bg-${c.color}-500/10 border border-${c.color}-500/20 text-${c.color}-600 dark:text-${c.color}-400 font-bold text-xs xl:text-sm text-center mt-auto`}>
                    {c.feature}
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Section */}
      <section className="py-14 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">Competitive <span className="text-orange-500">Exams</span></h2>
            <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 font-medium">Join our specialized batches for entrance exam success.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {competitive.map((exam, i) => (
              <Link key={i} href={`/courses/${exam.slug}`}>
                <motion.div {...fadeIn} className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 hover:-translate-y-2 transition-all cursor-pointer h-full">
                  <div className={`w-14 h-14 rounded-xl bg-${exam.color}-500/10 text-${exam.color}-500 flex items-center justify-center mb-6`}>{exam.icon}</div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">{exam.name}</h3>
                  <p className={`text-${exam.color}-500 font-bold text-sm mb-4`}>{exam.type}</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm font-medium leading-relaxed mb-6">{exam.desc}</p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm font-bold text-slate-800 dark:text-slate-200"><CheckCircle2 className={`w-4 h-4 mr-2 text-${exam.color}-500`} /> Daily Practice Papers</li>
                    <li className="flex items-center text-sm font-bold text-slate-800 dark:text-slate-200"><CheckCircle2 className={`w-4 h-4 mr-2 text-${exam.color}-500`} /> Regular Mock Tests</li>
                  </ul>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Call */}
      <section className="pb-14 bg-slate-50 dark:bg-slate-900/30 ">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">Secure Your Admission for 2026-27</h2>
          <p className="text-lg opacity-80 mb-12 font-medium">Early bird registration is now open. Book a demo class today to experience our teaching methodology.</p>
          <Link href="/inquiry" target="_blank" rel="noopener noreferrer" className="inline-block px-12 py-5 rounded-full bg-orange-500 text-white font-black text-xl hover:bg-orange-600 transition-all shadow-[0_10px_40px_rgba(249,115,22,0.3)]">Enroll Today</Link>
        </div>
      </section>
    </main>
  );
}
