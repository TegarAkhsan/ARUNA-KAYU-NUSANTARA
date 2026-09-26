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
    <section id="projects" className="py-24 sm:py-32 bg-[#FAF8F5] border-t border-[#E7E2DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Exact Style from Reference: 'A Curated Selection of Our Interior Projects') */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#C59B6D] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C59B6D]" />
            <span>Selected Portfolio</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#191816] tracking-tight mb-4">
            A Curated Selection of <br />
            Our Furniture &amp; Interior Projects
          </h2>
          <p className="text-xs sm:text-sm text-[#191816]/70 max-w-lg mx-auto leading-relaxed">
            Eksplorasi portofolio pengerjaan furniture custom kami untuk hunian pribadi, villa, hotel, dan kantor di Surabaya dan sekitarnya.
          </p>
        </div>

        {/* Filter Categories Pill Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#191816] text-white shadow-sm'
                  : 'bg-white text-[#191816]/70 hover:text-[#191816] hover:bg-[#F3EFEA] border border-[#E7E2DA]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Widescreen Cinematic Project Cards (Matching Reference Visual) */}
        <div className="space-y-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer bg-white rounded-[2rem] overflow-hidden border border-[#E7E2DA] hover:border-[#C59B6D]/60 transition-all duration-300 hover:shadow-xl grid grid-cols-1 lg:grid-cols-12 items-stretch"
            >
              {/* Image Container with Custom Rounding */}
              <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto overflow-hidden bg-[#F3EFEA]">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#191816]/60 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />
                
                {/* Floating Category Tag */}
                <div className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-[#191816]/70 backdrop-blur-md text-white text-[11px] uppercase tracking-wider font-semibold">
                  {project.category}
                </div>
              </div>

              {/* Text & Meta Column */}
              <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-center gap-3 text-xs text-[#C59B6D] font-semibold mb-3">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {project.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {project.year}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#191816] group-hover:text-[#C59B6D] transition-colors mb-4">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#191816]/75 leading-relaxed mb-6 font-normal">
                    {project.summary}
                  </p>

                  {/* Scope tags */}
                  <div className="space-y-1.5 border-t border-[#E7E2DA] pt-4">
                    <span className="text-[10px] uppercase tracking-wider text-[#191816]/50 font-semibold block mb-2">
                      Scope of Work:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.scope.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 bg-[#FAF8F5] border border-[#E7E2DA] text-[#191816] text-[11px] rounded-lg font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom View Project Trigger */}
                <div className="pt-8 flex items-center justify-between border-t border-[#E7E2DA] mt-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#C59B6D] group-hover:underline">
                    View Project Case Study
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#191816] group-hover:bg-[#C59B6D] text-white flex items-center justify-center transition-colors shadow-sm">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
