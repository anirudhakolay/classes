const fs = require('fs');
let c = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. Remove the duplicate Science and Commerce blocks
const duplicateStart = '            {/* Science %'; // Using % as wildcard in my head
// Let's find by exact content
const searchForDupe = '            {/* Science */}\n            <motion.div {...fadeIn} className="glass-card rounded-3xl p-8 border-t-4 border-t-blue-500 flex flex-col h-full bg-white/50 dark:bg-slate-900/50 hover:shadow-xl transition-all group">\n              <Link href="/courses/xi-xii-science" className="flex-1 flex flex-col h-full">\n                <div className="glass w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">\n                  <Microscope className="w-7 h-7 text-blue-500" />\n                </div>\n                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors">Classes XI & XII</h3>\n                <p className="text-blue-600 dark:text-blue-400 text-sm mb-6 font-bold uppercase tracking-wider">Science Stream</p>\n                <div className="space-y-3 mb-8">\n                  {[\'Physics\', \'Chemistry\', \'Mathematics\', \'Biology\'].map((sub, i) => (\n                    <div key={i} className="flex items-center text-slate-800 dark:text-slate-300 font-medium">\n                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>\n                      {sub}\n                    </div>\n                  ))}\n                </div>\n                <div className="pt-6 border-t border-slate-200 dark:border-slate-700 mt-auto flex justify-between items-center">\n                  <p className="text-sm text-slate-600 dark:text-slate-400 font-semibold">Board Prep • Practical Guidance</p>\n                  <ChevronRight className="w-5 h-5 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />\n                </div>\n              </Link>\n            </motion.div>';

// Instead of exact string which is fragile, let's replace the whole grid content.
const gridStart = '<div className="grid md:grid-cols-3 gap-8">';
const gridEnd = '</div>\n          </div>\n\n          {/* Competitive Exams Section Details */}';
const startIdx = c.indexOf(gridStart);
const endIdx = c.indexOf(gridEnd);

if (startIdx !== -1 && endIdx !== -1) {
    const newGrid = `<div className="grid md:grid-cols-3 gap-8">
            {/* Foundational */}
            <motion.div {...fadeIn} className="glass-card rounded-3xl p-8 border-t-4 border-t-orange-500 flex flex-col h-full bg-white/50 dark:bg-slate-900/50 hover:shadow-xl transition-all group">
              <Link target="_blank" rel="noopener noreferrer" href="/courses/viii-to-x" className="flex-1 flex flex-col h-full">
                <div className="glass w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <BookOpen className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors">Classes VIII to X</h3>
                <p className="text-orange-600 dark:text-orange-400 text-sm mb-6 font-bold uppercase tracking-wider">State Board & CBSE</p>
                {showCourseDetails.foundational && (
                  <div className="space-y-3 mb-8 animate-in fade-in slide-in-from-top-2 duration-300">
                    {['Mathematics', 'Science', 'English', 'Social Science', 'Hindi', 'Marathi'].map((sub, i) => (
                      <div key={i} className="flex items-center text-slate-700 dark:text-slate-300 font-medium">
                        <div className="w-2 h-2 rounded-full bg-orange-500 mr-3"></div>
                        {sub}
                      </div>
                    ))}
                  </div>
                )}
                <button 
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); setShowCourseDetails({...showCourseDetails, foundational: !showCourseDetails.foundational}); }}
                  className="mb-6 text-sm font-bold text-orange-500 hover:text-orange-600 transition-colors flex items-center"
                >
                  {showCourseDetails.foundational ? 'Show Less' : 'View Course Details'}
                </button>
                <div className="pt-6 border-t border-slate-200 dark:border-slate-700 mt-auto flex justify-between items-center">
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-semibold">Concept-Based Learning</p>
                  <ChevronRight className="w-5 h-5 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            </motion.div>

            {/* Science */}
            <motion.div {...fadeIn} className="glass-card rounded-3xl p-8 border-t-4 border-t-blue-500 flex flex-col h-full bg-white/50 dark:bg-slate-900/50 hover:shadow-xl transition-all group">
              <Link target="_blank" rel="noopener noreferrer" href="/courses/xi-xii-science" className="flex-1 flex flex-col h-full">
                <div className="glass w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <Microscope className="w-7 h-7 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors">Classes XI & XII</h3>
                <p className="text-blue-600 dark:text-blue-400 text-sm mb-6 font-bold uppercase tracking-wider">Science Stream</p>
                {showCourseDetails.science && (
                  <div className="space-y-3 mb-8 animate-in fade-in slide-in-from-top-2 duration-300">
                    {['Physics', 'Chemistry', 'Mathematics', 'Biology'].map((sub, i) => (
                      <div key={i} className="flex items-center text-slate-700 dark:text-slate-300 font-medium">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                        {sub}
                      </div>
                    ))}
                  </div>
                )}
                <button 
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); setShowCourseDetails({...showCourseDetails, science: !showCourseDetails.science}); }}
                  className="mb-6 text-sm font-bold text-blue-500 hover:text-blue-600 transition-colors flex items-center"
                >
                  {showCourseDetails.science ? 'Show Less' : 'View Course Details'}
                </button>
                <div className="pt-6 border-t border-slate-200 dark:border-slate-700 mt-auto flex justify-between items-center">
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-semibold">Board Prep & Foundation</p>
                  <ChevronRight className="w-5 h-5 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            </motion.div>

            {/* Commerce */}
            <motion.div {...fadeIn} className="glass-card rounded-3xl p-8 border-t-4 border-t-emerald-500 flex flex-col h-full bg-white/50 dark:bg-slate-900/50 hover:shadow-xl transition-all group">
              <Link target="_blank" rel="noopener noreferrer" href="/courses/xi-xii-commerce" className="flex-1 flex flex-col h-full">
                <div className="glass w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <Calculator className="w-7 h-7 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-500 transition-colors">Classes XI & XII</h3>
                <p className="text-emerald-600 dark:text-emerald-400 text-sm mb-6 font-bold uppercase tracking-wider">Commerce Stream</p>
                {showCourseDetails.commerce && (
                  <d
