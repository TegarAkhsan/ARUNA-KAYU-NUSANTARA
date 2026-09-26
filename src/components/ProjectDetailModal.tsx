import React, { useState } from 'react';
import { X, MapPin, Calendar, CheckSquare, MessageCircle, Quote } from 'lucide-react';
import type { ProjectItem } from '../data/projects';
import { getProjectInquiryMessage } from '../data/projects';
import { getWhatsAppUrl } from '../data/company';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const waUrl = getWhatsAppUrl(getProjectInquiryMessage(project.title));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto bg-[#1F1F1D]/75 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-4xl bg-[#FAF9F5] rounded-2xl shadow-2xl border border-[#E8E4DC] overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#FAF9F5]/90 backdrop-blur-md border-b border-[#E8E4DC]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono tracking-widest px-2.5 py-0.5 bg-[#1F1F1D] text-white rounded">
              Project {project.code}
            </span>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#A47C52]">
              {project.category}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-[#1F1F1D]/70 hover:text-[#1F1F1D] hover:bg-[#E8E4DC] transition-colors focus:outline-none"
            aria-label="Tutup jendela proyek"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Main Title & Meta */}
          <div className="border-b border-[#E8E4DC] pb-6">
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#1F1F1D] mb-3">
              {project.title}
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#1F1F1D]/70">
              <span className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-4 h-4 text-[#A47C52]" />
                {project.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 font-medium">
                <Calendar className="w-4 h-4 text-[#A47C52]" />
                Tahun {project.year}
              </span>
              <span>•</span>
              <span className="text-[#A47C52] font-semibold">
                Klien: {project.client}
              </span>
            </div>
          </div>

          {/* Gallery Showcase */}
          <div className="space-y-4">
            <div className="aspect-[16/9] rounded-xl overflow-hidden bg-[#F5F1EA] border border-[#E8E4DC] shadow-inner">
              <img
                src={project.gallery[activeImageIndex] || project.thumbnail}
                alt={`${project.title} showcase`}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {project.gallery.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-1">
                {project.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-24 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                      activeImageIndex === idx
                        ? 'border-[#A47C52] scale-102 shadow-sm'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`view ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Description & Scope Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7 space-y-4">
              <h3 className="font-serif text-lg font-semibold text-[#1F1F1D]">
                Ringkasan Pengerjaan
              </h3>
              <p className="text-sm text-[#1F1F1D]/80 leading-relaxed font-normal">
                {project.description}
              </p>

              {/* Material Highlights */}
              <div className="pt-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#1F1F1D]/60 block mb-2">
                  Material Utama yang Digunakan:
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.materialsUsed.map((mat, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#F5F1EA] text-[#1F1F1D] text-xs font-medium rounded-full border border-[#E8E4DC]"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-5 space-y-6 bg-white p-6 rounded-xl border border-[#E8E4DC]">
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1F1F1D] mb-3 flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-[#A47C52]" />
                  <span>Scope of Work</span>
                </h4>
                <ul className="space-y-2">
                  {project.scope.map((item, idx) => (
                    <li key={idx} className="text-xs text-[#1F1F1D]/80 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A47C52] mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Client Quote if available */}
              {project.clientFeedback && (
                <div className="p-4 rounded-lg bg-[#FAF9F5] border-l-2 border-[#A47C52] space-y-2">
                  <Quote className="w-4 h-4 text-[#A47C52]" />
                  <p className="text-xs italic text-[#1F1F1D]/75 leading-relaxed">
                    "{project.clientFeedback.quote}"
                  </p>
                  <p className="text-[10px] font-semibold text-[#1F1F1D]/60 text-right">
                    — {project.clientFeedback.author}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-4 border-t border-[#E8E4DC]">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-[#1F1F1D] hover:bg-[#A47C52] text-[#FAF9F5] rounded-xl text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-md group"
            >
              <MessageCircle className="w-5 h-5 text-[#F5F1EA]" />
              <span>Tanyakan Project Serupa via WhatsApp</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
