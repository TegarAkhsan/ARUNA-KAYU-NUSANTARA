import React from 'react';
import { ArrowRight, Eye, MessageCircle } from 'lucide-react';
import type { Product } from '../data/products';
import { productsData, getProductInquiryMessage } from '../data/products';
import { getWhatsAppUrl } from '../data/company';

interface FeaturedProductsProps {
  onSelectProduct: (product: Product) => void;
  onViewAllClick: () => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  onSelectProduct,
  onViewAllClick,
}) => {
  const featuredList = productsData.filter((p) => p.featured);

  return (
    <section className="py-24 sm:py-32 bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] font-semibold text-[#A47C52] mb-3">
              <span>Curated Collection</span>
              <span className="w-8 h-[1px] bg-[#A47C52]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1F1F1D]">
              Featured Furniture
            </h2>
          </div>
          <div>
            <button
              type="button"
              onClick={onViewAllClick}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#1F1F1D] hover:text-[#A47C52] transition-colors group cursor-pointer"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4 text-[#A47C52] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* 4 Featured Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredList.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col bg-white rounded-xl overflow-hidden border border-[#E8E4DC] hover:border-[#A47C52]/40 transition-all duration-300 hover:shadow-xl"
            >
              {/* Product Image Frame */}
              <div 
                className="relative aspect-[4/4] overflow-hidden bg-[#F5F1EA] cursor-pointer"
                onClick={() => onSelectProduct(product)}
              >
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />
                
                {/* Code badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#1F1F1D]/80 backdrop-blur-md text-[#FAF9F5] text-[10px] tracking-widest font-mono rounded">
                  {product.code}
                </div>

                {/* Category & Badge */}
                {product.badge && (
                  <div className="absolute top-3 right-3 px-2.5 py-1 bg-[#A47C52] text-white text-[10px] tracking-wider uppercase font-medium rounded shadow-sm">
                    {product.badge}
                  </div>
                )}

                {/* Hover Quick Action Overlay */}
                <div className="absolute inset-0 bg-[#1F1F1D]/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProduct(product);
                    }}
                    className="px-4 py-2 bg-white text-[#1F1F1D] rounded-full text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5 shadow-md hover:bg-[#FAF9F5] transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#A47C52]" />
                    <span>Detail</span>
                  </button>
                  <a
                    href={getWhatsAppUrl(getProductInquiryMessage(product.name))}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2.5 bg-[#A47C52] text-white rounded-full hover:bg-[#8e6942] transition-colors shadow-md"
                    title="Tanyakan via WhatsApp"
                    aria-label={`Tanyakan ${product.name} via WhatsApp`}
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col flex-1 justify-between bg-white">
                <div>
                  <div className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#A47C52] mb-1">
                    {product.category}
                  </div>
                  <h3 
                    onClick={() => onSelectProduct(product)}
                    className="font-serif text-lg font-semibold text-[#1F1F1D] group-hover:text-[#A47C52] transition-colors cursor-pointer"
                  >
                    {product.name}
                  </h3>
                  
                  {/* Material summary */}
                  <div className="mt-2 text-xs text-[#1F1F1D]/60 flex flex-wrap gap-1.5">
                    {product.materialsSummary.map((m, idx) => (
                      <span key={idx} className="inline-block bg-[#F5F1EA] px-2 py-0.5 rounded text-[11px]">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-[#E8E4DC] flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] tracking-wider text-[#1F1F1D]/50 uppercase">Harga</span>
                    <span className="font-serif text-sm font-semibold text-[#1F1F1D]">
                      {product.price}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onSelectProduct(product)}
                    className="text-xs font-semibold text-[#A47C52] hover:underline"
                  >
                    Spesifikasi →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
