"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function InquiryPage() {
    const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    mobile: '',
    class: '',
    school: '',
    course: '',
    message: ''
  });
const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const message = `*New Enquiry for Anurag Classes*%0A%0A` +
      `*Student Name:* ${formData.studentName}%0A` +
      `*Parent Name:* ${formData.parentName || 'N/A'}%0A` +
      `*Mobile:* ${formData.mobile}%0A` +
      `*Class:* ${formData.class}%0A` +
      `*School:* ${formData.school || 'N/A'}%0A` +
      `*Course:* ${formData.course}%0A` +
      `*Message:* ${formData.message || 'N/A'}`;
    
    const whatsappUrl = `https://wa.me/917977338822?text=${message}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-slate-900 dark:text-white">Send an <span className="text-gradient bg-gradient-to-r from-emerald-500 to-teal-500">Enquiry</span></h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto font-medium">
            Have questions about our courses, admissions, or fees? Fill out the form below and our team will get back to you shortly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Form Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden bg-white/70 dark:bg-slate-900/70"
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Enquiry Sent Successfully!</h3>
                <p className="text-slate-700 dark:text-slate-300 font-medium">Thank you for reaching out. Our team will contact you within 24 hours.</p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-slate-700 dark:text-slate-400 font-bold">Student Name *</label>
                    <input required type="text" className="w-full bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-400 transition-colors shadow-sm" placeholder="John Doe" value={formData.studentName} onChange={(e) => setFormData({...formData, studentName: e.target.value})} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-slate-700 dark:text-slate-400 font-bold">Parent Name</label>
                    <input type="text" className="w-full bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-400 transition-colors shadow-sm" placeholder="Jane Doe" value={formData.parentName} onChange={(e) => setFormData({...formData, parentName: e.target.value})} />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-slate-700 dark:text-slate-400 font-bold">Mobile Number *</label>
                    <input required type="tel" pattern="[0-9]{10}" className="w-full bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-400 transition-colors shadow-sm" placeholder="10-digit number" value={formData.mobile} onChange={(e) => setFormData({...formData, mobile: e.target.value})} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-slate-700 dark:text-slate-400 font-bold">Class / Standard *</label>
                    <select required value={formData.class} onChange={(e) => setFormData({...formData, class: e.target.value})} className="w-full bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-400 transition-colors appearance-none shadow-sm cursor-pointer">
                      <option value="" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">Select Class</option>
                      <option value="8" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">Class VIII</option>
                      <option value="9" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">Class IX</option>
                      <option value="10" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">Class X</option>
                      <option value="11" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">Class XI</option>
                      <option value="12" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">Class XII</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-slate-700 dark:text-slate-400 font-bold">School / College Name</label>
                    <input type="text" className="w-full bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-400 transition-colors shadow-sm" placeholder="XYZ School" value={formData.school} onChange={(e) => setFormData({...formData, school: e.target.value})} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-slate-700 dark:text-slate-400 font-bold">Course Interested *</label>
                    <select required value={formData.course} onChange={(e) => setFormData({...formData, course: e.target.value})} className="w-full bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-400 transition-colors appearance-none shadow-sm cursor-pointer">
                      <option value="" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">Select Course</option>
                      <option value="state" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">State Board</option>
                      <option value="cbse" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">CBSE</option>
                      <option value="icse" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">ICSE</option>
                      <option value="science" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">Science (XI-XII)</option>
                      <option value="commerce" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">Commerce (XI-XII)</option>
                      <option value="neet" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">NEET</option>
                      <option value="jee" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">JEE</option>
                      <option value="mhtcet" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">MHT-CET</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-slate-700 dark:text-slate-400 font-bold">Message</label>
                  <textarea rows={4} className="w-full bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-400 transition-colors resize-none shadow-sm" placeholder="Any specific questions?" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
                </div>

                <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all flex items-center justify-center">
                  Submit Enquiry <Send className="w-5 h-5 ml-2" />
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card p-6 md:p-8 rounded-3xl bg-white/70 dark:bg-slate-900/70">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start text-slate-800 dark:text-slate-300">
                  <div className="glass p-3 rounded-xl mr-4 mt-1 bg-white dark:bg-slate-800"><Phone className="w-5 h-5 text-emerald-500"/></div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">Phone</p>
                    <p className="font-medium mt-1">7977338822</p>
                    <p className="font-medium">8369293124</p>
                  </div>
                </div>
                <div className="flex items-start text-slate-800 dark:text-slate-300">
                  <div className="glass p-3 rounded-xl mr-4 mt-1 bg-white dark:bg-slate-800"><Mail className="w-5 h-5 text-emerald-500"/></div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">Email</p>
                    <p className="font-medium mt-1">info@anuragclasses.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 md:p-8 rounded-3xl bg-white/70 dark:bg-slate-900/70">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                <MapPin className="w-6 h-6 mr-3 text-emerald-500" /> Our Branches
              </h3>
              
              <div className="mb-6 pb-6 border-b border-slate-200 dark:border-slate-800">
                <h4 className="text-lg font-bold text-orange-500 mb-2">New Panvel Branch</h4>
                <p className="text-slate-700 dark:text-slate-400 text-sm leading-relaxed font-medium">
                  Shop No. 33 & 34/29<br/>
                  Near Bantia School, Sector 13<br/>
                  New Panvel East<br/>
                  Panvel, Maharashtra – 410206
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-orange-500 mb-2">Kalamboli Branch</h4>
                <p className="text-slate-700 dark:text-slate-400 text-sm leading-relaxed font-medium">
                  F -Type 14, Sector 4E,<br/>
                  Kalamboli Market,<br/>
                  Above Durga Collection, Kalamboli
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-6xl mx-auto mt-12 glass-panel p-4 rounded-3xl bg-white/70 dark:bg-slate-900/70 overflow-hidden h-96 relative"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.3364239843657!2d73.1112973!3d18.9781601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c12dd18f994b%3A0xe13c43bbfa4a24bc!2sAnurag%20Classes!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl shadow-sm"
          ></iframe>
        </motion.div>
      </div>
    </main>
  );
}
