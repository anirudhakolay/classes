const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

const coursesStart = '<section id="courses"';
const achievementsStart = '<section id="achievements"';
const startIdx = content.indexOf(coursesStart);
const endIdx = content.indexOf(achievementsStart);

if (startIdx !== -1 && endIdx !== -1) {
    const newCoursesSection = "      <section id=\"courses\" className=\"py-20 relative z-10 glass\">\n" +
"        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">\n" +
"          <motion.div {...fadeIn} className=\"text-center mb-16\">\n" +
"            <h2 className=\"text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white\">Courses <span className=\"text-orange-500\">Offered</span></h2>\n" +
"            <div className=\"w-24 h-1.5 bg-orange-500 mx-auto rounded-full\"></div>\n" +
"          </motion.div>\n" +
"\n" +
"          <div className={`overflow-hidden transition-all duration-700 ${expandedSections.courses ? 'max-h-[4000px]' : 'max-h-[900px]'}`}>\n" +
"            <div className=\"grid md:grid-cols-3 gap-8\">\n" +
"              {/* Foundational */}\n" +
"              <motion.div {...fadeIn} className=\"glass-card rounded-3xl p-8 border-t-4 border-t-orange-500 flex flex-col h-full bg-white/50 dark:bg-slate-900/50 hover:shadow-xl transition-all group\">\n" +
"                <Link href=\"/courses/viii-to-x\" className=\"flex-1 flex flex-col h-full\">\n" +
"                  <div className=\"glass w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform\">\n" +
"                    <BookOpen className=\"w-7 h-7 text-orange-500\" />\n" +
"                  </div>\n" +
"                  <h3 className=\"text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors\">Classes VIII to X</h3>\n" +
"                  <p className=\"text-orange-600 dark:text-orange-400 text-sm mb-6 font-bold uppercase tracking-wider\">State Board & CBSE</p>\n" +
"                  <div className=\"space-y-3 mb-8\">\n" +
"                    {['Mathematics', 'Science', 'English', 'Social Science', 'Hindi', 'Marathi'].map((sub, i) => (\n" +
"                      <div key={i} className=\"flex items-center text-slate-700 dark:text-slate-300 font-medium\">\n" +
"                        <div className=\"w-2 h-2 rounded-full bg-orange-500 mr-3\"></div>\n" +
"                        {sub}\n" +
"                      </div>\n" +
"                    ))}\n" +
"                  </div>\n" +
"                  <div className=\"pt-6 border-t border-slate-200 dark:border-slate-700 mt-auto flex justify-between items-center\">\n" +
"                    <p className=\"text-sm text-slate-500 dark:text-slate-400 font-semibold\">Concept-Based Learning</p>\n" +
"                    <ChevronRight className=\"w-5 h-5 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity\" />\n" +
"                  </div>\n" +
"                </Link>\n" +
"              </motion.div>\n" +
"\n" +
"              {/* Science */}\n" +
"              <motion.div {...fadeIn} className=\"glass-card rounded-3xl p-8 border-t-4 border-t-blue-500 flex flex-col h-full bg-white/50 dark:bg-slate-900/50 hover:shadow-xl transition-all group\">\n" +
"                <Link href=\"/courses/xi-xii-science\" className=\"flex-1 flex flex-col h-full\">\n" +
"                  <div className=\"glass w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform\">\n" +
"                    <Microscope className=\"w-7 h-7 text-blue-500\" />\n" +
"                  </div>\n" +
"                  <h3 className=\"text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors\">Classes XI & XII</h3>\n" +
"                  <p className=\"text-blue-600 dark:text-blue-400 text-sm mb-6 font-bold uppercase tracking-wider\">Science Stream</p>\n" +
"                  <div className=\"space-y-3 mb-8\">\n" +
"                    {['Physics', 'Chemistry', 'Mathematics', 'Biology'].map((sub, i) => (\n" +
"                      <div key={i} className=\"flex items-center text-slate-700 dark:text-slate-300 font-medium\">\n" +
"                        <div className=\"w-2 h-2 rounded-full bg-blue-500 mr-3\"></div>\n" +
"                        {sub}\n" +
"                      </div>\n" +
"                    ))}\n" +
"                  </div>\n" +
"                  <div className=\"pt-6 border-t border-slate-200 dark:border-slate-700 mt-auto flex justify-between items-center\">\n" +
"                    <p className=\"text-sm text-slate-500 dark:text-slate-400 font-semibold\">Board Prep & Foundation</p>\n" +
"                    <ChevronRight className=\"w-5 h-5 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity\" />\n" +
"                  </div>\n" +
"                </Link>\n" +
"              </motion.div>\n" +
"\n" +
"              {/* Commerce */}\n" +
"              <motion.div {...fadeIn} className=\"glass-card rounded-3xl p-8 border-t-4 border-t-emerald-500 flex flex-col h-full bg-white/50 dark:bg-slate-900/50 hover:shadow-xl transition-all group\">\n" +
"                <Link href=\"/courses/xi-xii-commerce\" className=\"flex-1 flex flex-col h-full\">\n" +
"                  <div className=\"glass w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform\">\n" +
"                    <Calculator className=\"w-7 h-7 text-emerald-500\" />\n" +
"                  </div>\n" +
"                  <h3 className=\"text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-500 transition-colors\">Classes XI & XII</h3>\n" +
"                  <p className=\"text-emerald-600 dark:text-emerald-400 text-sm mb-6 font-bold uppercase tracking-wider\">Commerce Stream</p>\n" +
"                  <div className=\"space-y-3 mb-8\">\n" +
"                    {['Accounts', 'Economics', 'Business Studies', 'Statistics', 'Mathematics'].map((sub, i) => (\n" +
"                      <div key={i} className=\"flex items-center text-slate-700 dark:text-slate-300 font-medium\">\n" +
"                        <div className=\"w-2 h-2 rounded-full bg-emerald-500 mr-3\"></div>\n" +
"                        {sub}\n" +
"                      </div>\n" +
"                    ))}\n" +
"                  </div>\n" +
"                  <div className=\"pt-6 border-t border-slate-200 dark:border-slate-700 mt-auto flex justify-between items-center\">\n" +
"                    <p className=\"text-sm text-slate-500 dark:text-slate-400 font-semibold\">Concept Clarity & Practice</p>\n" +
"                    <ChevronRight className=\"w-5 h-5 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity\" />\n" +
"                  </div>\n" +
"                </Link>\n" +
"              </motion.div>\n" +
"            </div>\n" +
"          </div>\n" +
"          <div className=\"mt-12 text-center mb-16\">\n" +
"            <button \n" +
"              onClick={() => setExpandedSections({...expandedSections, courses: !expandedSections.courses})}\n" +
"              className=\"px-8 py-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold hover:bg-orange-500 hover:text-white transition-all shadow-sm\"\n" +
"            >\n" +
"              {expandedSections.courses ? 'View Less' : 'View More'}\n" +
"            </button>\n" +
"          </div>\n" +
"\n" +
"          {/* Competitive Exams Section Details */}\n" +
"          <div className=\"mt-16 glass-panel p-8 md:p-12 rounded-3xl border border-orange-500/10\">\n" +
"            <div className=\"text-center mb-10\">\n" +
"              <h3 className=\"text-3xl font-bold text-slate-900 dark:text-white mb-4\">Competitive Exam Preparation</h3>\n" +
"              <p className=\"text-slate-700 dark:text-slate-400 max-w-2xl mx-auto\">We provide rigorous, highly-focused training to help students crack India's toughest entrance examinations with top percentiles.</p>\n" +
"            </div>\n" +
"            \n" +
"     
