import React, { useState, useMemo } from 'react';
import { ArrowUpRight, MapPin, Calendar } from 'lucide-react';
import type { ProjectItem, ProjectCategory } from '../data/projects';
import { projectCategories, projectsData } from '../data/projects';

interface ProjectsPortfolioProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsPortfolio: React.FC<ProjectsPortfolioProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projectsData;
    return projectsData.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#FAF9F5] border-t border-[#E8E4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#A47C52] block mb-3">
              Selected Works
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1F1F1D]">
              Portofolio Project
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#1F1F1D]/70 max-w-md">
            Dokumentasi hasil pengerjaan furniture residential prestisius, cafe, hotel, dan ruang komersial yang telah kami selesaikan di Surabaya dan kota lainnya.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#1F1F1D] text-[#FAF9F5] shadow-sm'
                  : 'bg-white text-[#1F1F1D]/70 hover:text-[#1F1F1D] hover:bg-[#E8E4DC]/60 border border-[#E8E4DC]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const isFeatured = index === 0;
            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`group cursor-pointer bg-white rounded-2xl overflow-hidden border border-[#E8E4DC] hover:border-[#A47C52] transition-all duration-300 hover:shadow-xl flex flex-col justify-between ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Thumbnail Image Container */}
                <div className={`relative overflow-hidden bg-[#F5F1EA] ${isFeatured ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1D]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  {/* Floating Tags */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-2.5 py-1 bg-[#1F1F1D]/80 backdrop-blur-md text-white text-[10px] font-mono tracking-widest rounded">
                      {project.code}
                    </span>
                    <span className="px-2.5 py-1 bg-white/90 backdrop-blur-md text-[#1F1F1D] text-[10px] uppercase tracking-wider font-semibold rounded">
                      {project.category}
                    </span>
                  </div>

                  {/* Corner Action Icon */}
                  <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-white text-[#1F1F1D] flex items-center justify-center shadow-md group-hover:bg-[#A47C52] group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Info Card Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-[#A47C52] font-medium mb-2">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {project.location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {project.year}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1F1F1D] group-hover:text-[#A47C52] transition-colors mb-2">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#1F1F1D]/70 line-clamp-2 leading-relaxed mb-4">
                      {project.summary}
                    </p>
                  </div>

                  {/* Scope Badges */}
                  <div className="pt-4 border-t border-[#E8E4DC] flex flex-wrap gap-1.5">
                    {project.scope.slice(0, 3).map((item, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-[#FAF9F5] border border-[#E8E4DC] text-[#1F1F1D]/80 text-[11px] rounded-md font-medium"
                      >
                        {item}
                      </span>
                    ))}
                    {project.scope.length > 3 && (
                      <span className="px-2 py-1 text-[#A47C52] text-[11px] font-semibold">
                        +{project.scope.length - 3} lainnya
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
