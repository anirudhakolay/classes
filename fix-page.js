const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// Use a simple replacement for the corrupted parts
// Find the corrupted line
const corruptedLine = '              <h3 className="text-3';
const corruptedIdx = content.indexOf(corruptedLine);

if (corruptedIdx !== -1) {
    // We'll replace the whole section to be safe
    const coursesStart = '<section id="courses"';
    const coursesIdx = content.indexOf(coursesStart);
    const achievementsStart = '<section id="achievements"';
    const achIdx = content.indexOf(achievementsStart);

    if (coursesIdx !== -1 && achIdx !== -1) {
        // Just restore the courses section to a known good state first
        // This is a partial restoration to fix the syntax error
        // I will then re-apply the view more logic carefully
        
        // Let's actually just fix the specific corrupted spot
        const fixSearch = '              <h3 className="text-3\n          </div>\n          <div className="mt-12 text-center mb-16">\n            <button \n              onClick={() => setExpandedSections({...expandedSections, courses: !expandedSections.courses})}\n              className="px-8 py-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold hover:bg-orange-500 hover:text-white transition-all shadow-sm"\n            >\n              {expandedSections.courses ? \'View Less\' : \'View More\'}\n            </button>\n          </div>\nxl font-bold text-slate-900 dark:text-white mb-4">Competitive Exam Preparation</h3>';
        
        const fixedPart = `              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Competitive Exam Preparation</h3>
            </div>
            <div className={\`overflow-hidden transition-all duration-700 \${expandedSections.courses ? 'max-h-[4000px]' : 'max-h-[10px]'}\`}>
              <div className="mt-12 text-center mb-16">
                <button 
                  onClick={() => setExpandedSections({...expandedSections, courses: !expandedSections.courses})}
                  className="px-8 py-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold hover:bg-orange-500 hover:text-white transition-all shadow-sm"
                >
                  {expandedSections.courses ? 'View Less' : 'View More'}
                </button>
              </div>
            </div>`;
            
        // This is still risky. Let's just restore the file from git and start over on the view more part.
    }
}
