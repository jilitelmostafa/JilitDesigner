
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ProjectCategory } from '../types';
import { ExternalLink, Eye, ChevronDown } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | string>(ProjectCategory.ALL);
  const [visibleCount, setVisibleCount] = useState(4);

  const categories = [ProjectCategory.ALL, ...Object.values(ProjectCategory).filter(c => c !== ProjectCategory.ALL)];

  const filteredProjects = activeCategory === ProjectCategory.ALL 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  const displayedProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  const resetFilters = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(cat === ProjectCategory.BOOK_COVER ? 8 : 4); 
  };

  const isBookCategory = activeCategory === ProjectCategory.BOOK_COVER;

  return (
    <section id="portfolio" className="py-24 bg-gray-50 dark:bg-slate-900/50 transition-colors">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="space-y-4 text-center lg:text-right">
            <h3 className="text-[#1abf96] dark:text-[#1abf96] font-bold uppercase tracking-widest text-sm">معرض الأعمال</h3>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">آخر مشاريـعي المنـجزة</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl">استعراض لأبرز التصاميم التي قمت بتنفيذها في مختلف المجالات الإبداعية.</p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => resetFilters(cat)}
                className={`px-5 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-[#1abf96] text-white shadow-lg shadow-[#1abf96]/30 ring-2 ring-[#1abf96] ring-offset-2 dark:ring-offset-slate-900' 
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-gray-400 hover:bg-teal-50 dark:hover:bg-slate-700 hover:text-[#1abf96]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className={`grid gap-6 md:gap-8 ${
          isBookCategory 
            ? 'grid-cols-2 md:grid-cols-4 lg:grid-cols-6' // Library style: small & elegant
            : 'grid-cols-1 md:grid-cols-2' // Normal style: big & professional
        }`}>
          {displayedProjects.map((project, idx) => (
            <div 
              key={project.id} 
              className="group relative flex flex-col items-center animate-in fade-in slide-in-from-bottom-5"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className={`relative w-full ${isBookCategory ? 'aspect-[2/3]' : 'aspect-[16/10]'} bg-white dark:bg-slate-800 rounded-2xl overflow-hidden book-shadow transition-all duration-500 group-hover:-translate-y-2`}>
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                />
                
                <div className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                   {!isBookCategory && <span className="text-[#1abf96] text-[10px] font-bold uppercase mb-2">{project.category}</span>}
                   <h4 className={`text-white font-bold leading-tight mb-2 ${isBookCategory ? 'text-[10px]' : 'text-sm'}`}>{project.title}</h4>
                   <div className="flex gap-2">
                     <button className="p-2 bg-[#1abf96] text-white rounded-full hover:bg-teal-600 transition-colors">
                       <Eye size={isBookCategory ? 14 : 18} />
                     </button>
                   </div>
                </div>
              </div>

              <div className="mt-3 text-center w-full">
                <h4 className={`font-bold text-slate-800 dark:text-gray-100 truncate group-hover:text-[#1abf96] transition-colors ${isBookCategory ? 'text-xs' : 'text-lg'}`}>
                  {project.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {hasMore && (
          <div className="mt-16 text-center">
            <button 
              onClick={handleShowMore}
              className="group inline-flex items-center gap-3 px-8 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-black rounded-full shadow-lg hover:shadow-[#1abf96]/10 hover:bg-[#1abf96] hover:text-white transition-all duration-300 border border-gray-100 dark:border-white/5"
            >
              عرض المزيد
              <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
