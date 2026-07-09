"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="dark glass border-t border-slate-200 dark:border-white/10 pt-16 pb-8 relative z-10 bg-white/50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image src="/logo.png" alt="Anurag Classes" width={48} height={48} className="rounded-full shadow-sm" />
              <div className="flex flex-col">
                <span className="font-bold text-xl text-slate-900 dark:text-white leading-tight">Anurag Classes</span>
                <span className="text-xs text-orange-500 font-bold uppercase tracking-wider">since 2015</span>
              </div>
            </div>
            <p className="text-slate-700 dark:text-slate-400 text-sm leading-relaxed mb-6 font-medium">Building Strong Foundations for Academic Success. Trusted coaching institute since 2015.</p>
            <div className="flex space-x-4 mb-6">
               <a href="https://wa.me/917977338822" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-500 transition-colors" title="WhatsApp"><MessageCircle className="w-5 h-5" /></a>
               <a href="https://www.instagram.com/anuragclasses_2020?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-500 transition-colors" title="Instagram"><InstagramIcon className="w-5 h-5" /></a>
            </div>
          </div>
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Courses', 'Achievements', 'Gallery', 'Blog', 'Inquiry'].map((link) => (
                <li key={link}><Link href={link === 'Home' ? '/' : `/${link.toLowerCase()}`} className="text-slate-700 dark:text-slate-400 hover:text-orange-500 dark:hover:text-white transition-colors text-sm font-medium">{link}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6">Courses</h4>
            <ul className="space-y-3">
              {[
                { name: 'Classes VIII-X', slug: 'classes-viii-x' },
                { name: 'XI-XII Science', slug: 'xi-xii-science' },
                { name: 'XI-XII Commerce', slug: 'xi-xii-commerce' },
                { name: 'NEET', slug: 'neet' },
                { name: 'JEE', slug: 'jee' },
                { name: 'MHT-CET', slug: 'mht-cet' }
              ].map((course) => (
                <li key={course.slug}>
                  <Link href={`/courses/${course.slug}`} className="text-slate-700 dark:text-slate-400 hover:text-orange-500 dark:hover:text-white transition-colors text-sm font-medium">
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="text-sm flex items-start font-medium">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 text-orange-500 flex-shrink-0" />
                <a href="https://www.google.com/maps/search/New+Panvel+Kalamboli" target="_blank" rel="noopener noreferrer" className="text-slate-700 dark:text-slate-400 hover:text-orange-500 dark:hover:text-white transition-colors">New Panvel & Kalamboli</a>
              </li>
              <li className="text-sm flex items-center font-medium">
                <Phone className="w-4 h-4 mr-2 text-emerald-500 flex-shrink-0" />
                <a href="tel:7977338822" className="text-slate-700 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-white transition-colors">7977338822</a>
              </li>
              <li className="text-sm flex items-center font-medium">
                <Mail className="w-4 h-4 mr-2 text-emerald-500 flex-shrink-0" />
                <a href="mailto:info@anuragclasses.com" className="text-slate-700 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-white transition-colors">info@anuragclasses.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 dark:border-white/10 pt-8 text-center text-slate-600 dark:text-slate-600 text-sm font-medium">© {new Date().getFullYear()} Anurag Classes. All rights reserved.</div>
      </div>
    </footer>
  );
}
