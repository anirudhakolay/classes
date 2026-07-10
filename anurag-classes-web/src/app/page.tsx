"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Phone,
  ArrowRight,
  Microscope,
  Users,
  LayoutGrid,
  ClipboardCheck,
  ChevronLeft,
  ChevronRight,
  GraduationCap
} from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const carouselImages = [
    { mobile: "/banner/mobile_1.png", pc: "/banner/pc_1.png" },
    { mobile: "/banner/mobile_2.png", pc: "/banner/pc_2.png" },
    { mobile: "/banner/mobile_3.png", pc: "/banner/pc_3.png" },
    { mobile: "/banner/mobile_4.png", pc: "/banner/pc_4.png" }
  ];

  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);

  const displayImages = [
    carouselImages[carouselImages.length - 1], // index 0: duplicate of E
    ...carouselImages,                          // index 1..5: A, B, C, D, E
    carouselImages[0],                          // index 6: duplicate of A
  ];

  const nextSlide = useCallback(() => {
    setIsTransitionEnabled(true);
    setCurrentSlide((prev) => prev + 1);
  }, []);

  const prevSlide = () => {
    setIsTransitionEnabled(true);
    setCurrentSlide((prev) => prev - 1);
  };

  const handleDotClick = (index: number) => {
    setIsTransitionEnabled(true);
    setCurrentSlide(index + 1);
  };

  const handleTransitionEnd = () => {
    if (currentSlide === displayImages.length - 1) {
      setIsTransitionEnabled(false);
      setCurrentSlide(1);
    } else if (currentSlide === 0) {
      setIsTransitionEnabled(false);
      setCurrentSlide(displayImages.length - 2);
    }
  };

  const getActiveIndex = () => {
    if (currentSlide === 0) return carouselImages.length - 1;
    if (currentSlide === displayImages.length - 1) return 0;
    return currentSlide - 1;
  };

  useEffect(() => {
    if (!isTransitionEnabled) {
      const timer = setTimeout(() => {
        setIsTransitionEnabled(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitionEnabled]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };


  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-4 sm:pt-32 md:pt-40 lg:pt-36 px-4 flex flex-col items-center justify-center relative text-center">
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-5 dark:opacity-10 pointer-events-none" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop')" }} />
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto z-10">
          <div className="inline-block mb-6 px-5 py-2 rounded-full glass border-orange-500/20 text-sm font-semibold text-orange-600 dark:text-orange-400 tracking-widest">
            CBSE | ICSE | STATE BOARD | SCIENCE | COMMERCE | NEET | JEE | MHT-CET
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-slate-900 dark:text-white leading-[1.1]">Building <span className="text-orange-500">Strong Base</span></h1>
          <p className="text-lg md:text-xl text-slate-800 dark:text-slate-300 mb-4 max-w-2xl mx-auto leading-relaxed font-medium">At Anurag Classes, we believe every student has the potential to excel.</p>
        </motion.div>
      </section>

      {/* Full-bleed Banner Carousel Section */}
      <section className="w-full overflow-hidden group aspect-[4/1] md:aspect-[5/1] shadow-lg bg-slate-100 dark:bg-slate-900 mb-10">
        <div
          className={`flex w-full h-full ${isTransitionEnabled ? "transition-transform duration-700 ease-in-out" : "transition-none"}`}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {displayImages.map((img, idx) => (
            <div key={idx} className="relative w-full h-full flex-shrink-0">
              {/* Mobile Image (3:1) */}
              <Image
                src={img.mobile}
                alt={`Slide ${idx + 1} Mobile`}
                fill
                className="object-contain md:hidden"
                priority={idx === 1}
              />
              {/* PC Image (5:1) */}
              <Image
                src={img.pc}
                alt={`Slide ${idx + 1} PC`}
                fill
                className="object-contain hidden md:block"
                priority={idx === 1}
              />
            </div>
          ))}
        </div>

        {/* Manual Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {carouselImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${idx === getActiveIndex() ? "bg-orange-500 w-8" : "bg-white/60"}`}
            />
          ))}
        </div>
      </section>

      {/* CTA Buttons */}
      <section className="pb-16 px-4 flex justify-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link href="/inquiry" className="w-full sm:w-auto px-10 py-4 rounded-full bg-orange-500 text-white font-black text-lg hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all flex items-center justify-center">Enroll Now <ChevronRight className="ml-2 w-5 h-5" /></Link>
          <a href="https://wa.me/917977338822" target="_blank" rel="noopener noreferrer" className="flex items-center glass rounded-full px-10 py-4 w-full sm:w-auto justify-center hover:shadow-lg transition-all"><Phone className="w-5 h-5 mr-3 text-orange-500" /><span className="font-black text-xl text-slate-800 dark:text-slate-200 tracking-tight">7977338822</span></a>
        </div>
      </section>
      {/* About Preview */}
      <section className="pt-24 relative z-10 bg-slate-50 dark:bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16 relative">
            <div className="flex justify-center mb-6">
              <Image src="/logo.png" alt="Logo" width={96} height={96} className="rounded-2xl shadow-lg" />
            </div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-widest mb-4 border border-orange-500/20">
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">Empowering Students to <span className="text-orange-500">Excel</span></h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">We combine years of academic expertise with a modern, student-centric approach to deliver consistent results.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <GraduationCap className="w-6 h-6" />,
                title: "15+ Faculties",
                desc: "Our team of over 15 experienced educators ensure personalized guidance for every subject."
              },
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
          <div className="text-center">
            <Link href="/about" className="inline-flex items-center font-bold text-orange-500 hover:gap-2 transition-all">Learn more about our mission <ArrowRight className="ml-2 w-5 h-5" /></Link>
          </div>
        </div>
      </section>

      {/* Course Preview */}
      <section className="pt-20 pb-16 relative z-10 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">Our <span className="text-orange-500">Academic Sections</span></h2>
            <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <motion.div {...fadeIn} className="bg-slate-50 dark:bg-slate-800 rounded-[2.5rem] p-10 border-t-4 border-t-orange-500 text-left shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6 text-orange-500"><BookOpen /></div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3">School Section (VIII-X)</h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium mb-8 leading-relaxed">Strengthening fundamental concepts in Math and Science for State Board, CBSE & ICSE students.</p>
              <Link href="/courses" className="inline-flex items-center font-bold text-orange-500 hover:translate-x-1 transition-transform">Explore subjects <ChevronRight className="ml-1 w-4 h-4" /></Link>
            </motion.div>

            <motion.div {...fadeIn} className="bg-slate-50 dark:bg-slate-800 rounded-[2.5rem] p-10 border-t-4 border-t-blue-500 text-left shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-500"><Microscope className="w-6 h-6" /></div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3">Junior College (XI-XII)</h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium mb-8 leading-relaxed">Integrated coaching for Board Exams and Entrance Preparation (NEET, JEE, CET).</p>
              <Link href="/courses" className="inline-flex items-center font-bold text-blue-500 hover:translate-x-1 transition-transform">Explore subjects <ChevronRight className="ml-1 w-4 h-4" /></Link>
            </motion.div>
          </div>

          <Link href="/courses" className="px-12 py-5 rounded-full bg-orange-500 text-white font-black text-lg hover:scale-105 transition-all shadow-xl hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]">View All Programs</Link>
        </div>
      </section>

      {/* Toppers Preview */}
      <section className="pb-20 pt-10 relative z-10 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">Meet Our <span className="text-orange-500">Toppers</span></h2>
            <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
            {[
              { src: "/achievements/Page 4.png", alt: "HSC Science Result New Panvel" },
              { src: "/achievements/Page 3.png", alt: "HSC Science Result Kalamboli" },
              { src: "/achievements/Page 2.png", alt: "HSC Commerce & SSC Result" }
            ].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-3xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800 p-2"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={800}
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </motion.div>
            ))}
          </div>

          <Link href="/achievements" className="px-10 py-4 rounded-full bg-white dark:bg-slate-800 border-2 border-orange-500 text-orange-500 font-bold hover:bg-orange-500 hover:text-white transition-all">Wall of Fame</Link>
        </div>
      </section>
    </main>
  );
}
