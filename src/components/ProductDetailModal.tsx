import React, { useState } from 'react';
import { X, MessageCircle, Ruler, CheckCircle2, Shield, Truck } from 'lucide-react';
import type { Product } from '../data/products';
import { getProductInquiryMessage } from '../data/products';
import { getWhatsAppUrl } from '../data/company';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const waUrl = getWhatsAppUrl(getProductInquiryMessage(product.name));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto bg-[#1F1F1D]/70 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Backdrop click */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-4xl bg-[#FAF9F5] rounded-2xl shadow-2xl border border-[#E8E4DC] overflow-hidden my-auto max-h-[90vh] flex flex-col">
        
        {/* Top Bar with Close */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#FAF9F5]/90 backdrop-blur-md border-b border-[#E8E4DC]">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono tracking-widest px-2 py-0.5 bg-[#1F1F1D] text-white rounded">
              {product.code}
            </span>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#A47C52]">
              {product.category} • {product.subcategory}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-[#1F1F1D]/70 hover:text-[#1F1F1D] hover:bg-[#E8E4DC] transition-colors focus:outline-none"
            aria-label="Tutup jendela"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Gallery Section */}
            <div className="md:col-span-6 space-y-4">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#F5F1EA] border border-[#E8E4DC] shadow-inner">
                <img
                  src={product.images[activeImageIndex] || product.images[0]}
                  alt={`${product.name} detail view`}
                  className="w-full h-full object-cover object-center transition-all duration-300"
                />
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-1">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                        activeImageIndex === idx
                          ? 'border-[#A47C52] scale-102 shadow-sm'
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`thumb ${idx}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Key Trust Notes */}
              <div className="grid grid-cols-3 gap-3 pt-3 text-center">
                <div className="p-2.5 rounded-lg bg-[#F5F1EA] border border-[#E8E4DC]">
                  <Shield className="w-4 h-4 mx-auto text-[#A47C52] mb-1" />
                  <span className="text-[10px] text-[#1F1F1D]/80 block font-medium">Garansi 1 Tahun</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#F5F1EA] border border-[#E8E4DC]">
                  <Truck className="w-4 h-4 mx-auto text-[#A47C52] mb-1" />
                  <span className="text-[10px] text-[#1F1F1D]/80 block font-medium">Kirim Se-Indonesia</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#F5F1EA] border border-[#E8E4DC]">
                  <CheckCircle2 className="w-4 h-4 mx-auto text-[#A47C52] mb-1" />
                  <span className="text-[10px] text-[#1F1F1D]/80 block font-medium">QC 3 Tahap</span>
                </div>
              </div>
            </div>

            {/* Product Details Section */}
            <div className="md:col-span-6 space-y-6">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1F1D]">
                  {product.name}
                </h2>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="font-serif text-xl sm:text-2xl font-semibold text-[#A47C52]">
                    {product.price}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1F1F1D]/70">
                  Deskripsi Produk
                </h4>
                <p className="text-sm text-[#1F1F1D]/80 leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>

              {/* Specification Table from Brief */}
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#1F1F1D]/70">
                  <Ruler className="w-3.5 h-3.5 text-[#A47C52]" />
                  <span>Spesifikasi Teknis</span>
                </div>
                
                <div className="overflow-hidden rounded-xl border border-[#E8E4DC] bg-white text-xs">
                  <table className="w-full text-left border-collapse">
                    <tbody>
                      <tr className="border-b border-[#E8E4DC]/60">
                        <td className="py-2.5 px-3.5 font-medium text-[#1F1F1D]/60 bg-[#F5F1EA]/50 w-1/3">Material</td>
                        <td className="py-2.5 px-3.5 text-[#1F1F1D] font-medium">{product.specification.material}</td>
                      </tr>
                      {product.specification.upholstery && (
                        <tr className="border-b border-[#E8E4DC]/60">
                          <td className="py-2.5 px-3.5 font-medium text-[#1F1F1D]/60 bg-[#F5F1EA]/50">Upholstery</td>
                          <td className="py-2.5 px-3.5 text-[#1F1F1D]">{product.specification.upholstery}</td>
                        </tr>
                      )}
                      {product.specification.finish && (
                        <tr className="border-b border-[#E8E4DC]/60">
                          <td className="py-2.5 px-3.5 font-medium text-[#1F1F1D]/60 bg-[#F5F1EA]/50">Finishing</td>
                          <td className="py-2.5 px-3.5 text-[#1F1F1D]">{product.specification.finish}</td>
                        </tr>
                      )}
                      <tr className="border-b border-[#E8E4DC]/60">
                        <td className="py-2.5 px-3.5 font-medium text-[#1F1F1D]/60 bg-[#F5F1EA]/50">Dimensi (P x T x L)</td>
                        <td className="py-2.5 px-3.5 text-[#1F1F1D]">
                          {product.specification.width} (W) × {product.specification.height} (H) × {product.specification.depth} (D)
                        </td>
                      </tr>
                      <tr className="border-b border-[#E8E4DC]/60">
                        <td className="py-2.5 px-3.5 font-medium text-[#1F1F1D]/60 bg-[#F5F1EA]/50">Berat Estimasi</td>
                        <td className="py-2.5 px-3.5 text-[#1F1F1D]">{product.specification.weight}</td>
                      </tr>
                      {product.specification.leadTime && (
                        <tr>
                          <td className="py-2.5 px-3.5 font-medium text-[#1F1F1D]/60 bg-[#F5F1EA]/50">Lead Time Produksi</td>
                          <td className="py-2.5 px-3.5 text-[#1F1F1D]">{product.specification.leadTime}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Available Colors */}
              {product.availableColors && product.availableColors.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1F1F1D]/70">
                    Pilihan Warna Finishing
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.availableColors.map((color, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-[#F5F1EA] text-[#1F1F1D] border border-[#E8E4DC]"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* WhatsApp Action Button with Exact Brief Text */}
              <div className="pt-2">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-[#1F1F1D] hover:bg-[#A47C52] text-[#FAF9F5] rounded-xl text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-xl group"
                >
                  <MessageCircle className="w-5 h-5 text-[#F5F1EA] group-hover:scale-110 transition-transform" />
                  <span>Tanyakan Produk via WhatsApp</span>
                </a>
                <p className="text-[11px] text-center text-[#1F1F1D]/50 mt-2">
                  Chat langsung terhubung dengan tim sales &amp; estimator ARUNA Living.
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
