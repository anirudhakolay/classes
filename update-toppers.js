const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

const toppers = [
  { name: "Shreyas Makhamle", score: "95.60%", rank: "🥇", college: "Mahatma College" },
  { name: "Princy Dubey", score: "90.17%", rank: "🥈", college: "N.N. Paliwala College" },
  { name: "Gargi Gokhale", score: "83.00%", rank: "🥉", college: "N.N. Paliwala College" },
  { name: "Neha Yadav", score: "83.00%", rank: "🏅", college: "D.D. Vispute College" },
  { name: "Kunal Mahadik", score: "78.00%", college: "HSC" },
  { name: "Sara Rane", score: "76.17%", college: "HSC" },
  { name: "Riddhi Gurav", score: "75.83%", college: "HSC" },
  { name: "Sakshi Khandare", score: "75.83%", college: "HSC" },
  { name: "Bhumika Kalokhe", score: "75.67%", college: "HSC" },
  { name: "Saniya Phadke", score: "74.17%", college: "HSC" },
  { name: "Divya Patil", score: "73.50%", college: "HSC" },
  { name: "Manswi Thakur", score: "73.20%", college: "HSC" },
  { name: "Anushka Pawar", score: "73.00%", college: "HSC" },
  { name: "Rucha Rane", score: "72.80%", college: "HSC" },
  { name: "Komal Ingle", score: "72.60%", college: "HSC" },
  { name: "Akanksha Kale", score: "72.30%", college: "HSC" },
  { name: "Pranali Takkal", score: "72.20%", college: "HSC" }
];

const toppersHtml = toppers.map((t, i) => \`
            <motion.div 
              key={\${i}}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: \${i * 0.05} }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 text-center flex flex-col items-center hover:shadow-md transition-all group"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-slate-50 dark:bg-slate-700 mb-4 overflow-hidden border-2 border-orange-500/20 group-hover:border-orange-500 transition-colors flex items-center justify-center relative shadow-inner">
                {t.rank ? <span className="absolute top-0 right-0 text-xl z-10">{t.rank}</span> : null}
                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-slate-300 dark:text-slate-600" />
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm leading-tight mb-1 line-clamp-1">{t.name}</h4>
              <div className="text-orange-500 font-black text-base sm:text-lg mb-1">{t.score}</div>
              {t.college && <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider line-clamp-1">{t.college}</div>}
            </motion.div>\`).join('');

const achievementsSectionRegex = /<section id="achievements"[\s\S]*?<\/section>/;
const newAchievementsSection = \`
      <section id="achievements" className="py-20 relative z-10 bg-slate-50/50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">Our <span className="text-orange-500">Toppers</span></h2>
            <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-slate-700 dark:text-slate-300 font-medium max-w-2xl mx-auto">Celebrating the hard work and success of our outstanding students.</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 mb-20">
            \${toppersHtml}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { num: "1000+", label: "Students Guided" },
              { num: "10+", label: "Years Excellence" },
              { num: "100%", label: "Dedication" },
              { num: "Top", label: "Results" }
            ].map((stat, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-3xl text-center shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="text-3xl sm:text-4xl font-black text-orange-500 mb-2">{stat.num}</div>
                <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>\`;

content = content.replace(achievementsSectionRegex, newAchievementsSection);
fs.writeFileSync('src/app/page.tsx', content);
