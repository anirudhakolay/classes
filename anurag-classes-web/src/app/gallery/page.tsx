"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image as ImageIcon, X, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import Image from "next/image";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

interface Album {
  title: string;
  images: string[];
}

export default function GalleryPage() {
  const albums: Album[] = [
    {
      title: "Annual Function",
      images: [
        "IMG-20260619-WA0000.jpg",
        "IMG-20260619-WA0001(1).jpg",
        "IMG-20260619-WA0002.jpg",
        "IMG-20260619-WA0003.jpg"
      ]
    },
    {
      title: "Farewell Party",
      images: [
        "IMG-20260619-WA0004.jpg",
        "IMG-20260619-WA0005.jpg",
        "IMG-20260619-WA0006.jpg"
      ]
    },
    {
      title: "Pre-Board Practice Paper Examination",
      images: [
        "IMG-20260619-WA0007.jpg",
        "IMG-20260619-WA0008.jpg",
        "IMG-20260619-WA0009.jpg"
      ]
    },
    {
      title: "Seminar & Science Exhibition",
      images: [
        "IMG-20260619-WA0010.jpg",
        "IMG-20260619-WA0013.jpg",
        "IMG-20260619-WA0014.jpg"
      ]
    },
    {
      title: "Welcome Ceremony and Cultural Program",
      images: [
        "IMG-20260619-WA0015.jpg",
        "IMG-20260619-WA0016.jpg",
        "IMG-20260619-WA0017.jpg"
      ]
    },
    {
      title: "Sports and Annual Activity Program",
      images: [
        "IMG-20260619-WA0018.jpg",
        "IMG-20260619-WA0019.jpg",
        "IMG-20260619-WA0019(1).jpg"
      ]
    },
    {
      title: "Annual Class Picnic",
      images: [
        "IMG-20260619-WA0000(1).jpg",
        "IMG-20260619-WA0001(1).jpg",
        "IMG-20260619-WA0004.jpg"
      ]
    },
    {
      title: "Classroom",
      images: [
        "IMG-20260619-WA0002.jpg",
        "IMG-20260619-WA0006.jpg",
        "IMG-20260619-WA0008.jpg",
        "IMG-20260619-WA0013.jpg"
      ]
    }
  ];

  const [selectedAlbumIdx, setSelectedAlbumIdx] = useState<number | null>(null);
  const [activeImageIdx, setActiveImageIdx] = useState<number | null>(null);

  const openAlbum = (idx: number) => {
    setSelectedAlbumIdx(idx);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeAlbum = () => {
    setSelectedAlbumIdx(null);
    setActiveImageIdx(null);
  };

  const openLightbox = (imgIdx: number) => {
    setActiveImageIdx(imgIdx);
  };

  const closeLightbox = () => {
    setActiveImageIdx(null);
  };

  const nextImage = () => {
    if (selectedAlbumIdx === null || activeImageIdx === null) return;
    const album = albums[selectedAlbumIdx];
    setActiveImageIdx((prev) => (prev !== null ? (prev + 1) % album.images.length : null));
  };

  const prevImage = () => {
    if (selectedAlbumIdx === null || activeImageIdx === null) return;
    const album = albums[selectedAlbumIdx];
    setActiveImageIdx((prev) => (prev !== null ? (prev - 1 + album.images.length) % album.images.length : null));
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-slate-900 py-16 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn}>
            <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(249,115,22,0.5)]">
              <ImageIcon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              {selectedAlbumIdx === null ? (
                <>Our <span className="text-orange-500">Memories</span></>
              ) : (
                <span className="text-orange-500">{albums[selectedAlbumIdx].title}</span>
              )}
            </h1>
            <p className="text-xl opacity-80 max-w-2xl mx-auto font-medium">
              {selectedAlbumIdx === null ? (
                "A glimpse into the life, events, and joyous moments at Anurag Classes."
              ) : (
                `Explore moments from our ${albums[selectedAlbumIdx].title.toLowerCase()}.`
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content section */}
      <section className="py-14 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <AnimatePresence mode="wait">
            {selectedAlbumIdx === null ? (
              /* ALBUMS VIEW */
              <motion.div
                key="albums-view"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
              >
                {albums.map((album, i) => (
                  <div
                    key={i}
                    onClick={() => openAlbum(i)}
                    className="bg-white dark:bg-slate-800 p-4 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700/50 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 shadow-inner">
                        <Image
                          src={`/gallery/${album.images[0]}`}
                          alt={album.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-white z-10 shadow-sm">
                          {album.images.length} Photos
                        </div>
                        <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <h3 className="text-lg font-black text-slate-900 dark:text-white leading-snug group-hover:text-orange-500 transition-colors duration-300 mb-1 px-1">
                        {album.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-bold tracking-wide mt-2 px-1">
                      Click to view album
                    </p>
                  </div>
                ))}
              </motion.div>
            ) : (
              /* ALBUM DETAIL PHOTOS VIEW */
              <motion.div
                key="album-detail-view"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                {/* Back to Albums button */}
                <div className="flex justify-start">
                  <button
                    onClick={closeAlbum}
                    className="mb-8 px-6 py-2.5 rounded-lg bg-[#0B1B3D] hover:bg-[#142954] text-white font-bold text-sm transition-all shadow-md active:scale-95 flex items-center gap-2 cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" /> Back to Albums
                  </button>
                </div>

                {/* Photos Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {albums[selectedAlbumIdx].images.map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (i % 5) * 0.05, duration: 0.4 }}
                      onClick={() => openLightbox(i)}
                      className="relative aspect-square rounded-2xl overflow-hidden shadow-md group border-4 border-white dark:border-slate-800 cursor-pointer hover:shadow-xl hover:scale-[1.03] transition-all duration-300"
                    >
                      <Image
                        src={`/gallery/${img}`}
                        alt={`${albums[selectedAlbumIdx].title} Photo ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white text-xs font-black bg-orange-500/80 px-3 py-1.5 rounded-full shadow-sm">View Photo</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedAlbumIdx !== null && activeImageIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 md:p-8 backdrop-blur-md select-none"
          >
            {/* Top Bar */}
            <div className="flex justify-between items-center w-full z-10">
              <div className="text-white">
                <h2 className="text-lg md:text-2xl font-black tracking-tight">{albums[selectedAlbumIdx].title}</h2>
                <p className="text-xs md:text-sm text-slate-400 font-medium mt-1">
                  Photo {activeImageIdx + 1} of {albums[selectedAlbumIdx].images.length}
                </p>
              </div>
              <button
                onClick={closeLightbox}
                className="w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all duration-300 border border-white/10 cursor-pointer shadow-lg active:scale-95"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Lightbox Slider */}
            <div className="relative flex items-center justify-center w-full h-[60vh] md:h-[70vh]">
              {/* Prev Button */}
              <button
                onClick={prevImage}
                className="absolute left-0 md:left-4 z-10 w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all duration-300 border border-white/10 cursor-pointer shadow-lg active:scale-95"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              {/* Current Image */}
              <div className="relative w-full h-full max-w-5xl mx-4 flex items-center justify-center">
                <motion.div
                  key={activeImageIdx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={`/gallery/${albums[selectedAlbumIdx].images[activeImageIdx]}`}
                    alt={`${albums[selectedAlbumIdx].title} - Photo ${activeImageIdx + 1}`}
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </div>

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-0 md:right-4 z-10 w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all duration-300 border border-white/10 cursor-pointer shadow-lg active:scale-95"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>

            {/* Thumbnail Bottom Bar */}
            <div className="w-full flex justify-center items-center gap-3 overflow-x-auto py-4 px-2 max-w-4xl mx-auto scrollbar-thin scrollbar-thumb-white/20">
              {albums[selectedAlbumIdx].images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImageIdx(i)}
                  className={`relative w-16 h-12 md:w-20 md:h-14 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all duration-300 cursor-pointer ${
                    i === activeImageIdx
                      ? "border-orange-500 scale-105 shadow-md"
                      : "border-transparent opacity-50 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={`/gallery/${img}`}
                    alt="Thumbnail"
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
