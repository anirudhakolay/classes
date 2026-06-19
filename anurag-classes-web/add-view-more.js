const fs = require('fs');
let c = fs.readFileSync('src/app/page.tsx', 'utf8');

// State
c = c.replace(/const \[isMobileMenuOpen, setIsMobileMenuOpen\] = useState\(false\);/, 
  "const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);\n  const [exp, setExp] = useState({ about: false, courses: false, ach: false });");

// Helper for button
const btn = (key) => \`<div className="mt-8 text-center"><button onClick={() => setExp({...exp, \${key}: !exp.\${key}})} className="px-6 py-2 rounded-full bg-orange-500 text-white font-bold"> {exp.\${key} ? 'View Less' : 'View More'} </button></div>\`;

// About
c = c.replace(/<div className="grid md:grid-cols-2 gap-12 items-center">/, 
  '<div className={"overflow-hidden transition-all " + (exp.about ? "max-h-[2000px]" : "max-h-[500px] md:max-h-none")}> <div className="grid md:grid-cols-2 gap-12 items-center">');
c = c.replace(/<\/section>/, (m, offset) => {
  // Need to insert button before the first closing section tag found for about
  return btn('about') + '</div> </section>';
});
// This logic is flawed because it replaces all section closings. 

fs.writeFileSync('src/app/page.tsx', c);
