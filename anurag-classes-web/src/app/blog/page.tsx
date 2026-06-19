"use client";
 
import { motion } from "framer-motion";
import { Search, FileText } from "lucide-react";
import Link from "next/link";
 
export default function BlogPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
 
  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-16 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeIn}>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6">Our <span className="text-orange-500">Blog</span></h1>
            <div className="w-24 h-2 bg-orange-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
              Stay updated with the latest educational news, exam preparation tips, and announcements from Anurag Classes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-14 bg-white dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

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
              className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg pl-12 pr-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-orange-500 dark:focus:border-orange-400 transition-colors shadow-sm"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          </div>
          <div className="flex gap-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
            {['All', 'Study Tips', 'Exam News', 'Success Stories'].map((category, idx) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-colors ${
                  idx === 0
                    ? 'bg-orange-500 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-300 hover:bg-orange-500/10 dark:hover:bg-white/10'
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
          className="p-12 md:p-20 rounded-3xl text-center bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
        >
          <div className="w-24 h-24 bg-orange-100 dark:bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-10 h-10 text-orange-500" />
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-4">No articles published yet</h3>
          <p className="text-slate-700 dark:text-slate-400 text-lg mb-8 max-w-lg mx-auto font-medium">
            We are currently working on creating valuable content for you. Check back soon for study materials, exam tips, and more!
          </p>
          <Link href="/inquiry" className="inline-flex px-8 py-3 rounded-lg bg-orange-500 text-white font-black hover:bg-orange-600 transition-colors shadow-lg">
            Contact Us
          </Link>
        </motion.div>
      </div>
      </section>
    </main>
  );
}
