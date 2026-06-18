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
  Trophy,
  Calculator,
  Stethoscope,
  Award,
  CheckCircle2,
  GraduationCap
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

  const courses = [
    {
      title: "School Section (VIII to X)",
      color: "orange",
      icon: <BookOpen className="w-8 h-8 text-orange-500" />,
      tag: "State Board & CBSE",
      desc: "Laying the foundation for a brilliant academic future with expert coaching in core subjects.",
      subjects: ['Mathematics', 'Science', 'English', 'Social Science', 'Hindi', 'Marathi'],
      feature: "Focus on Board Exams & Fundamentals"
    },
    {
      title: "Science Section (XI & XII)",
      color: "blue",
      icon: <Microscope className="w-8 h-8 text-blue-500" />,
      tag: "Board Prep & Foundation",
      desc: "Comprehensive coaching for Higher Secondary exams with a focus on core scientific concepts.",
      subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
      feature: "Intensive Practical & Theory Training"
    },
    {
      title: "Commerce Section (XI & XII)",
      color: "emerald",
      icon: <Calculator className="w-8 h-8 text-emerald-500" />,
      tag: "Professional Foundation",
      desc: "Preparing students for a successful career in business and finance with specialized commerce coaching.",
      subjects: ['Accounts', 'Economics', 'Business Studies', 'Statistics', 'Mathematics'],
      feature: "Concept Clarity & Real-world Practice"
    }
  ];

  const competitive = [
    { name: "NEET", type: "Medical Entrance", icon: <Stethoscope className="w-8 h-8" />, color: "rose", desc: "Rigorous biology-focused training for medical aspirants." },
    { name: "JEE", type: "Engineering Entrance", icon: <Calculator className="w-8 h-8" />, color: "blue", desc: "Advanced problem-solving for top engineering colleges." },
    { name: "MHT-CET", type: "State Entrance", icon: <Award className="w-8 h-8" />, color: "amber", desc: "Speed and accuracy training for state-level admissions." }
  ];

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

  const gallery = [
    "achievement1.jpg", "achievement2.jpg", "achievement3.jpg", "achievement4.jpg", "achievement5.jpg",
    "IMG-20260617-WA0011.jpg", "IMG-20260617-WA0013.jpg", "IMG-20260617-WA0016.jpg", "IMG-20260617-WA0017.jpg",
    "IMG-20260617-WA0018.jpg", "IMG-20260617-WA0019.jpg", "IMG-20260617-WA0021.jpg", "IMG-20260617-WA0024.jpg",
    "IMG-20260617-WA0030.jpg", "IMG-20260617-WA0031.jpg", "IMG-20260617-WA0035.jpg", "IMG-20260617-WA0036.jpg"
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
      <section id="about" className="py-24 relative z-10 bg-slate-50 dark:bg-slate-900/40 scroll-mt-20">
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
          <div className="mt-12 text-center">
            <Link href="#courses" className="px-10 py-4 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 transition-all shadow-lg">View All Programs</Link>
          </div>
        </div>
      </section>

      {/* Academic Programs Section */}
      <section id="courses" className="py-24 bg-white dark:bg-slate-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">Our <span className="text-orange-500">Academic Programs</span></h2>
            <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            {courses.map((c, i) => (
              <motion.div key={i} {...fadeIn} className={`bg-slate-50 dark:bg-slate-800 rounded-[2.5rem] p-10 border-t-8 border-t-${c.color === 'orange' ? 'orange' : c.color === 'blue' ? 'blue' : 'emerald'}-500 shadow-sm hover:shadow-xl transition-all flex flex-col`}>
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-700 flex items-center justify-center mb-8 shadow-sm">{c.icon}</div>
                <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2">{c.title}</h2>
                <p className={`text-${c.color === 'orange' ? 'orange' : c.color === 'blue' ? 'blue' : 'emerald'}-600 dark:text-${c.color === 'orange' ? 'orange' : c.color === 'blue' ? 'blue' : 'emerald'}-400 font-bold uppercase tracking-widest text-xs mb-6`}>{c.tag}</p>
                <p className="text-slate-600 dark:text-slate-400 mb-8 font-medium leading-relaxed">{c.desc}</p>
                <div className="space-y-4 mb-10">
                  <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">Subjects Covered:</h4>
                  <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                    {c.subjects.map((s, j) => (
                      <div key={j} className="flex items-center text-sm font-bold text-slate-700 dark:text-slate-300">
                        <div className={`w-2 h-2 rounded-full bg-${c.color === 'orange' ? 'orange' : c.color === 'blue' ? 'blue' : 'emerald'}-500 mr-2`}></div>
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`p-4 rounded-2xl bg-${c.color === 'orange' ? 'orange' : c.color === 'blue' ? 'blue' : 'emerald'}-500/10 border border-${c.color === 'orange' ? 'orange' : c.color === 'blue' ? 'blue' : 'emerald'}-500/20 text-${c.color === 'orange' ? 'orange' : c.color === 'blue' ? 'blue' : 'emerald'}-600 dark:text-${c.color === 'orange' ? 'orange' : c.color === 'blue' ? 'blue' : 'emerald'}-400 font-bold text-sm text-center mt-auto`}>
                  {c.feature}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mb-20">
            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-10">Competitive <span className="text-orange-500">Exams</span></h3>
            <div className="grid md:grid-cols-3 gap-8">
              {competitive.map((exam, i) => (
                <motion.div key={i} {...fadeIn} className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 hover:-translate-y-2 transition-all text-left">
                  <div className={`w-14 h-14 rounded-xl bg-${exam.color === 'rose' ? 'rose' : exam.color === 'blue' ? 'blue' : 'amber'}-500/10 text-${exam.color === 'rose' ? 'rose' : exam.color === 'blue' ? 'blue' : 'amber'}-500 flex items-center justify-center mb-6`}>{exam.icon}</div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">{exam.name}</h3>
                  <p className={`text-${exam.color === 'rose' ? 'rose' : exam.color === 'blue' ? 'blue' : 'amber'}-500 font-bold text-sm mb-4`}>{exam.type}</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm font-medium leading-relaxed mb-6">{exam.desc}</p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm font-bold text-slate-800 dark:text-slate-200"><CheckCircle2 className={`w-4 h-4 mr-2 text-${exam.color === 'rose' ? 'rose' : exam.color === 'blue' ? 'blue' : 'amber'}-500`} /> Daily Practice Papers</li>
                    <li className="flex items-center text-sm font-bold text-slate-800 dark:text-slate-200"><CheckCircle2 className={`w-4 h-4 mr-2 text-${exam.color === 'rose' ? 'rose' : exam.color === 'blue' ? 'blue' : 'amber'}-500`} /> Regular Mock Tests</li>
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link href="#achievements" className="px-10 py-4 rounded-full border-2 border-orange-500 text-orange-500 font-bold hover:bg-orange-500 hover:text-white transition-all">Wall of Fame</Link>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24 relative z-10 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">Wall of <span className="text-orange-500">Fame</span></h2>
            <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 font-medium">Honouring the hard work and brilliant success of our students.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-6 mb-24">
            {toppers.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }} viewport={{ once: true }} className="bg-white dark:bg-slate-800 rounded-3xl p-5 text-center flex flex-col items-center hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700">
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

          <div className="mb-20">
            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-10">Life at <span className="text-orange-500">Anurag Classes</span></h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {gallery.map((img, i) => (
                <motion.div key={i} {...fadeIn} className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md group border-4 border-white dark:border-slate-800">
                  <Image src={`/achievements/${img}`} alt="Event" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 bg-white dark:bg-slate-800 rounded-[3rem] shadow-sm border border-slate-100 dark:border-slate-700">
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
