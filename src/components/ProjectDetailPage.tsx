import React, { useState, useEffect } from 'react';
import { ArrowLeft, MapPin, Calendar, CheckSquare, MessageCircle, Quote, ArrowUpRight, Share2, Check } from 'lucide-react';
import type { ProjectItem } from '../data/projects';
import { projectsData, getProjectInquiryMessage } from '../data/projects';
import { getWhatsAppUrl } from '../data/company';

interface ProjectDetailPageProps {
  project: ProjectItem;
  onBack: () => void;
  onSelectOtherProject: (project: ProjectItem) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  project,
  onBack,
  onSelectOtherProject
}) => {
  const [activePhoto, setActivePhoto] = useState<string>(project.gallery[0] || project.thumbnail);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setActivePhoto(project.gallery[0] || project.thumbnail);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${project.title} — ARUNA Living`,
        text: project.summary,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Find next project for quick navigation
  const currentIndex = projectsData.findIndex((p) => p.id === project.id);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];
  const waUrl = getWhatsAppUrl(getProjectInquiryMessage(project.title));

  return (
    <article className="min-h-screen bg-[#FAF8F5] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Navigation Bar: Back & Share */}
        <div className="flex items-center justify-between py-6 border-b border-[#E7E2DA] mb-10">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-wider uppercase text-[#191816] hover:text-[#C59B6D] transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-[#C59B6D]" />
            <span>Kembali ke Semua Project</span>
          </button>

          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-[#F3EFEA] border border-[#E7E2DA] rounded-full text-xs font-semibold text-[#191816] transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5 text-[#C59B6D]" />}
            <span>{copied ? 'Link Disalin!' : 'Bagikan Project'}</span>
          </button>
        </div>

        {/* Project Header Info */}
        <header className="max-w-4xl mb-12 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono tracking-widest px-3 py-1 bg-[#191816] text-white rounded-full">
              Project {project.code}
            </span>
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#C59B6D]">
              {project.category}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#191816] tracking-tight leading-[1.08]">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-xs text-[#191816]/70 pt-2 font-medium">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#C59B6D]" />
              {project.location}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#C59B6D]" />
              Tahun Pengerjaan {project.year}
            </span>
            <span>•</span>
            <span className="text-[#C59B6D] font-semibold">
              Klien: {project.client}
            </span>
          </div>
        </header>

        {/* Main Widescreen Featured Image with Architectural Curves */}
        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#E7E2DA] aspect-[16/9] lg:aspect-[21/9] bg-[#F3EFEA] mb-8 relative">
          <img
            src={activePhoto}
            alt={project.title}
            className="w-full h-full object-cover object-center transition-all duration-500"
          />
        </div>

        {/* Thumbnails Strip if multi-photos */}
        {project.gallery.length > 1 && (
          <div className="flex gap-4 overflow-x-auto pb-6 mb-16">
            {project.gallery.map((photo, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActivePhoto(photo)}
                className={`relative w-28 sm:w-36 h-20 sm:h-24 rounded-2xl overflow-hidden flex-shrink-0 border-2 transition-all cursor-pointer ${
                  activePhoto === photo
                    ? 'border-[#C59B6D] scale-102 shadow-md'
                    : 'border-transparent opacity-65 hover:opacity-100'
                }`}
              >
                <img src={photo} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Two-Column Editorial Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          {/* Left Column: Narrative Story & Materials */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#191816] mb-4">
                Tentang Proyek &amp; Konsep Desain
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#191816]/80 leading-relaxed font-normal">
                <p>{project.description}</p>
                <p>{project.summary}</p>
              </div>
            </div>

            {/* Material Highlights */}
            <div className="p-8 rounded-3xl bg-white border border-[#E7E2DA] shadow-sm space-y-4">
              <h3 className="text-xs uppercase tracking-wider font-bold text-[#191816]">
                Material Pilihan yang Digunakan
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.materialsUsed.map((mat, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-[#FAF8F5] text-[#191816] text-xs font-semibold rounded-full border border-[#E7E2DA]"
                  >
                    {mat}
                  </span>
                ))}
              </div>
            </div>

            {/* Client Feedback Quote */}
            {project.clientFeedback && (
              <div className="p-8 rounded-3xl bg-[#F3EFEA] border-l-4 border-[#C59B6D] space-y-3">
                <Quote className="w-6 h-6 text-[#C59B6D]" />
                <p className="font-serif text-base sm:text-lg italic text-[#191816]/85 leading-relaxed">
                  "{project.clientFeedback.quote}"
                </p>
                <div className="font-serif text-xs font-bold text-[#191816] pt-1">
                  — {project.clientFeedback.author}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Scope of Work & Direct WhatsApp Card */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-3xl p-8 border border-[#E7E2DA] shadow-sm space-y-6">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#C59B6D] block mb-1">
                  Detail Pelaksanaan
                </span>
                <h3 className="font-serif text-xl font-bold text-[#191816]">
                  Scope of Work
                </h3>
              </div>

              <div className="space-y-3 border-t border-[#E7E2DA] pt-4">
                {project.scope.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#191816]/80 font-medium">
                    <CheckSquare className="w-4 h-4 text-[#C59B6D] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[#E7E2DA]">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 px-6 py-4 bg-[#191816] hover:bg-[#C59B6D] text-white rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-colors shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Tanyakan Project Serupa</span>
                </a>
                <p className="text-[11px] text-center text-[#191816]/50 mt-2">
                  Konsultasikan kebutuhan furniture dengan tim ARUNA Living.
                </p>
              </div>
            </div>

            {/* Next Project Teaser Card */}
            {nextProject && (
              <div
                onClick={() => onSelectOtherProject(nextProject)}
                className="group cursor-pointer bg-white rounded-3xl p-6 border border-[#E7E2DA] hover:border-[#C59B6D] transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-between"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#C59B6D] font-bold block mb-1">
                    Next Project Showcase →
                  </span>
                  <h4 className="font-serif text-base font-bold text-[#191816] group-hover:text-[#C59B6D] transition-colors">
                    {nextProject.title}
                  </h4>
                  <p className="text-xs text-[#191816]/60 mt-0.5">
                    {nextProject.location} • {nextProject.category}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#FAF8F5] group-hover:bg-[#191816] group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </article>
  );
};
