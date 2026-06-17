const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

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

const achievements = [
  "achievement1.jpg", "achievement2.jpg", "achievement3.jpg", "achievement4.jpg", "achievement5.jpg",
  "IMG-20260617-WA0011.jpg", "IMG-20260617-WA0013.jpg", "IMG-20260617-WA0016.jpg", "IMG-20260617-WA0017.jpg",
  "IMG-20260617-WA0018.jpg", "IMG-20260617-WA0019.jpg", "IMG-20260617-WA0021.jpg", "IMG-20260617-WA0024.jpg",
  "IMG-20260617-WA0030.jpg", "IMG-20260617-WA0031.jpg"
];

const toppersHtml = toppers.map((t, i) => \`
            <motion.div 
                key={\${i}}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: \${i * 0.05} }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 text-center flex flex-col items-center hover:shadow-md transition-all group"
              >
                <div className="w-24 h-32 sm:w-28 sm:h-36 rounded-xl bg-slate-50 dark:bg-slate-700 mb-4 overflow-hidden border-2 border-orange-500/20 group-hover:border-orange-500 transition-colors flex items-center justify-center relative shadow-inner">
                  {t.rank ? <span className="absolute top-1 right-1 text-xl z-10">{t.rank}</span> : null}
                  <Image src={\`/toppers/\${t.img}\`} alt={t.name} fill className="object-cover" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm leading-tight mb-1 line-clamp-2 h-8 flex items-center justify-center">{t.name}</h4>
                <div className="text-orange-500 font-black text-base sm:text-lg mb-1">{t.score}</div>
                {t.college && <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider line-clamp-1">{t.college}</div>}
            </motion.div>\`).join('');

const achievementsHtml = achievements.map((img, i) => \`
            <motion.div 
                key={\${i}}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: \${i * 0.05} }}
                viewport={{ once: true }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 group"
              >
                <Image src={\`/achievements/\${img}\`} alt="Achievement" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
            </motion.div>\`).join('');

// Re-construct the achievements section
const newAchievementsSection = \`      {/* Achievements & Toppers */}
      <section id="achievements" className="py-20 relative z-10 bg-slate-50/50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">Our <span className="text-orange-500">Toppers</span></h2>
            <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 sm:gap-6 mb-20">
            \${toppersHtml}
          </div>

          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">Recent <span className="text-orange-500">Achievements</span></h2>
            <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            \${achievementsHtml}
          </div>
        </div>
      </section>\`;

const achStartIdx = content.indexOf('<section id="achievements"');
const footerStartIdx = content.indexOf('<footer');
content = content.substring(0, achStartIdx) + newAchievementsSection + '\n\n' + content.substring(footerStartIdx);

fs.writeFileSync('src/app/page.tsx', content);
