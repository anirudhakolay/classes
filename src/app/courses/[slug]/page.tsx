"use client";

import { motion } from "framer-motion";
import { 
  BookOpen, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  Users, 
  Target, 
  ChevronRight,
  Sun,
  Moon,
  ArrowLeft
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

// Mock data for the template - The user will provide the real data for this later
const courseData: Record<string, any> = {
  "viii-to-x": {
    title: "Classes VIII to X",
    subtitle: "State Board & CBSE",
    color: "orange",
    overview: "Build a rock-solid foundation for your high school years. Our comprehensive coaching for Classes 8th to 10th ensures complete conceptual clarity, preparing students not just for board exams but for future competitive challenges.",
    features: ["Daily Practice Papers", "Weekly Mock Tests", "Doubt Clearing Sessions", "Parent-Teacher Meetings"],
    syllabus: ["Mathematics", "Science", "English", "Social Science", "Hindi", "Marathi"],
    duration: "1 Year Program",
    batches: "Morning & Evening Batches Available"
  },
  "xi-xii-science": {
    title: "Classes XI & XII - Science",
    subtitle: "HSC Board Preparation",
    color: "blue",
    overview: "Our Science stream program is meticulously designed to help students master complex concepts in Physics, Chemistry, Math, and Biology. We ensure students score top marks in their board exams while laying the groundwork for entrance tests.",
    features: ["Practical Exam Guidance", "Chapter-wise Test Series", "Printed Study Material", "Revision Sessions"],
    syllabus: ["Physics", "Chemistry", "Mathematics", "Biology (Botany & Zoology)"],
    duration: "1 or 2 Year Integrated Programs",
    batches: "Flexible Batch Timings"
  },
  "xi-xii-commerce": {
    title: "Classes XI & XII - Commerce",
    subtitle: "HSC Board Preparation",
    color: "emerald",
    overview: "Step into the world of finance and business with confidence. Our commerce faculty simplifies Accounts and Economics, ensuring students achieve perfect scores and are ready for CA/CS foundations.",
    features: ["Real-world Case Studies", "Accountancy Workshops", "Board Pattern Mock Exams", "Career Counseling"],
    syllabus: ["Book Keeping & Accountancy", "Economics", "Organization of Commerce", "Secretarial Practice", "Mathematics/SP"],
    duration: "1 or 2 Year Integrated Programs",
    batches: "Evening Batches"
  },
  "neet": {
    title: "NEET Preparation",
    subtitle: "Medical Entrance Exam",
    color: "rose",
    overview: "Crack India's toughest medical entrance exam with our specialized NEET batches. We focus heavily on NCERT line-by-line preparation, speed-building, and accuracy to get you into top government medical colleges.",
    features: ["All India Test Series", "OMR Pattern Practice", "Intensive Biology Focus", "Previous Year Question Analysis"],
    syllabus: ["Physics", "Chemistry", "Botany", "Zoology"],
    duration: "1 Year, 2 Year & Repeater Batches",
    batches: "Regular & Weekend Batches"
  },
  "jee": {
    title: "JEE Main & Advanced",
    subtitle: "Engineering Entrance Exam",
    color: "blue",
    overview: "Transform your IIT/NIT dreams into reality. Our JEE program goes beyond standard textbooks, pushing students to develop advanced problem-solving skills and logical thinking necessary for JEE Advanced.",
    features: ["Advanced Problem Solving", "Computer Based Tests (CBT)", "National Level Benchmarking", "Shortcut Techniques"],
    syllabus: ["Physics (Advanced Level)", "Chemistry (Organic, Inorganic, Physical)", "Mathematics (Calculus, Algebra, etc.)"],
    duration: "1 Year, 2 Year & Repeater Batches",
    batches: "Regular & Weekend Batches"
  },
  "mht-cet": {
    title: "MHT-CET Preparation",
    subtitle: "Maharashtra State Entrance",
    color: "amber",
    overview: "Secure your seat in top Engineering and Pharmacy colleges across Maharashtra. Our CET program is perfectly synced with the state board syllabus to maximize your percentile.",
    features: ["Time Management Strategies", "State Board Syllabus Sync", "Extensive Mock Tests", "Chapter-wise Weightage Analysis"],
    syllabus: ["Physics", "Chemistry", "Mathematics", "Biology"],
    duration: "Crash Course & 1 Year Programs",
    batches: "Regular Batches"
  }
};

export default function CoursePage() {
  const params = useParams();
  const slug = params.slug as string;
  const course = courseData[slug] || courseData["viii-to-x"]; // Fallback to first course if not found
  
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

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      orange: "from-orange-500 to-amber-500 text-orange-500 border-orange-500/20 bg-orange-50 dark:bg-orange-500/10",
      blue: "from-blue-500 to-sky-500 text-blue-500 border-blue-500/20 bg-blue-50 dark:bg-blue-500/10",
      emerald: "from-emerald-500 to-teal-500 text-emerald-500 border-emerald-500/20 bg-emerald-50 dark:bg-emerald-500/10",
      rose: "from-rose-500 to-pink-500 text-rose-500 border-rose-500/20 bg-rose-50 dark:bg-rose-500/10",
      amber: "from-amber-500 to-yellow-500 text-amber-500 border-amber-500/20 bg-amber-50 dark:bg-amber-500/10",
    };
    return colors[color] || colors.orange;
  };

  const themeClasses = getColorClasses(course.color);
  const gradientText = themeClasses.split(" ").find(c => c.startsWith("from-")) + " " + themeClasses.split(" ").find(c => c.startsWith("to-"));
  const iconColorClass = themeClasses.split(" ").find(c => c.startsWith("text-"));

  return (
    <main className="min-h-screen pt-32 pb-20 px-4 relative">
      {/* Dynamic Background Orbs based on course color */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 opacity-50">
        <div className={`absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[100px] ${themeClasses.split(" ").find(c => c.startsWith("bg-"))}`}></div>
        <div className={`absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] ${themeClasses.split(" ").find(c => c.startsWith("bg-"))}`}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b-0 border-slate-200 dark:border-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 text-gradient">
                ANURAG CLASSES
              </div>
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/#courses" className="text-slate-700 dark:text-slate-300 hover:text-orange-500 dark:hover:text-white transition-colors font-medium text-sm hidden sm:flex items-center">
                <ArrowLeft className="w-4 h-4 mr-1" /> Back to Courses
              </Link>
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-full glass hover:bg-slate-200 dark:hover:bg-white/10 transition-colors text-slate-700 dark:text-slate-300"
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
        {/* Header Section */}
        <motion.div {...fadeIn} className="text-center mb-16">
          <div className={`inline-block mb-6 px-5 py-2 rounded-full glass border ${themeClasses.split(" ").find(c => c.startsWith("border-"))} text-sm font-semibold ${iconColorClass} tracking-wide`}>
            {course.subtitle}
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 dark:text-white">
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradientText}`}>{course.title}</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium">
            {course.overview}
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 space-y-8"
          >
            {/* Syllabus/Subjects */}
            <div className="glass-panel p-8 rounded-3xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-white/10 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                <BookOpen className={`w-6 h-6 mr-3 ${iconColorClass}`} /> Subjects Covered
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {course.syllabus.map((subject: string, idx: number) => (
                  <div key={idx} className="flex items-center text-slate-700 dark:text-slate-300 font-medium bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                    <div className={`w-2.5 h-2.5 rounded-full mr-3 ${themeClasses.split(" ").find(c => c.startsWith("text-"))?.replace('text', 'bg')}`}></div>
                    {subject}
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="glass-panel p-8 rounded-3xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-white/10 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                <Target className={`w-6 h-6 mr-3 ${iconColorClass}`} /> Program Features
              </h3>
              <ul className="space-y-4">
                {course.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-start text-slate-700 dark:text-slate-200 font-medium text-lg">
                    <CheckCircle2 className={`w-6 h-6 mr-3 mt-0.5 flex-shrink-0 ${iconColorClass}`}/> 
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Sidebar / Actions */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Batch Info */}
            <div className="glass-card p-8 rounded-3xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-white/10 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Batch Details</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className={`p-3 rounded-xl mr-4 ${themeClasses.split(" ").find(c => c.startsWith("bg-"))}`}><Calendar className={`w-5 h-5 ${iconColorClass}`}/></div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wider mb-1">Duration</p>
                    <p className="font-medium text-slate-700 dark:text-slate-300">{course.duration}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className={`p-3 rounded-xl mr-4 ${themeClasses.split(" ").find(c => c.startsWith("bg-"))}`}><Clock className={`w-5 h-5 ${iconColorClass}`}/></div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wider mb-1">Timings</p>
                    <p className="font-medium text-slate-700 dark:text-slate-300">{course.batches}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className={`p-3 rounded-xl mr-4 ${themeClasses.split(" ").find(c => c.startsWith("bg-"))}`}><Users className={`w-5 h-5 ${iconColorClass}`}/></div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wider mb-1">Batch Size</p>
                    <p className="font-medium text-slate-700 dark:text-slate-300">Limited (Personal Attention)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className={`glass-card p-8 rounded-3xl border ${themeClasses.split(" ").find(c => c.startsWith("border-"))} shadow-lg text-center`}>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Ready to Start?</h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium mb-6 text-sm">Admissions open for 2026-27. Secure your seat today.</p>
              <Link href={`/inquiry?course=${slug}`} className={`w-full py-4 rounded-xl bg-gradient-to-r ${gradientText} text-white font-bold text-lg transition-all flex items-center justify-center hover:scale-105 shadow-lg`}>
                Enroll Now <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
