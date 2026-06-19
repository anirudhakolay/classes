"use client";

import { motion } from "framer-motion";
import { Image as ImageIcon } from "lucide-react";
import Image from "next/image";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function GalleryPage() {
  const gallery = [
    "IMG-20260619-WA0000(1).jpg",
    "IMG-20260619-WA0000.jpg",
    "IMG-20260619-WA0001(1).jpg",
    "IMG-20260619-WA0002.jpg",
    "IMG-20260619-WA0003.jpg",
    "IMG-20260619-WA0004.jpg",
    "IMG-20260619-WA0005.jpg",
    "IMG-20260619-WA0006.jpg",
    "IMG-20260619-WA0007.jpg",
    "IMG-20260619-WA0008.jpg",
    "IMG-20260619-WA0009.jpg",
    "IMG-20260619-WA0010.jpg",
    "IMG-20260619-WA0013.jpg",
    "IMG-20260619-WA0014.jpg",
    "IMG-20260619-WA0015.jpg",
    "IMG-20260619-WA0016.jpg",
    "IMG-20260619-WA0017.jpg",
    "IMG-20260619-WA0018.jpg",
    "IMG-20260619-WA0019(1).jpg",
    "IMG-20260619-WA0019.jpg"
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-slate-900 py-24 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn}>
            <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(249,115,22,0.5)]">
              <ImageIcon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6">Our <span className="text-orange-500">Memories</span></h1>
            <p className="text-xl opacity-80 max-w-2xl mx-auto font-medium">A glimpse into the life, events, and joyous moments at Anurag Classes.</p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {gallery.map((img, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: (i % 4) * 0.05 }} className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md group border-4 border-white dark:border-slate-800">
                <Image src={`/gallery/${img}`} alt={`Gallery Image ${i+1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
