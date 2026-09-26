import React from 'react';
import { ArrowRight, Eye, MessageCircle, ShoppingBag } from 'lucide-react';
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
    <section className="py-24 sm:py-32 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#C59B6D] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C59B6D]" />
              <span>Curated Selection</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#191816] tracking-tight">
              Featured Furniture
            </h2>
          </div>
          <div>
            <button
              type="button"
              onClick={onViewAllClick}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#191816] hover:text-[#C59B6D] transition-colors group cursor-pointer"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4 text-[#C59B6D] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* 4 Featured Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {featuredList.map((product) => (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="group cursor-pointer flex flex-col bg-white rounded-3xl overflow-hidden border border-[#E7E2DA] hover:border-[#C59B6D]/60 transition-all duration-300 hover:shadow-xl relative"
            >
              {/* Product Image Frame */}
              <div className="relative aspect-[4/4] overflow-hidden bg-[#F3EFEA]">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106"
                  loading="lazy"
                />
                
                {/* Code badge */}
                <div className="absolute top-3.5 left-3.5 px-2.5 py-1 bg-[#191816]/80 backdrop-blur-md text-white text-[10px] tracking-widest font-mono rounded-full">
                  {product.code}
                </div>

                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-3.5 right-3.5 px-2.5 py-1 bg-[#C59B6D] text-white text-[10px] tracking-wider uppercase font-semibold rounded-full shadow-sm">
                    {product.badge}
                  </div>
                )}

                {/* Hover Quick Action Overlay */}
                <div className="absolute inset-0 bg-[#191816]/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 p-4">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProduct(product);
                    }}
                    className="px-4 py-2 bg-white text-[#191816] rounded-full text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5 shadow-md hover:bg-[#FAF8F5] transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#C59B6D]" />
                    <span>Detail</span>
                  </button>
                  <a
                    href={getWhatsAppUrl(getProductInquiryMessage(product.name))}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2.5 bg-[#C59B6D] text-white rounded-full hover:bg-[#b0875b] transition-colors shadow-md"
                    title="Tanyakan via WhatsApp"
                    aria-label={`Tanyakan ${product.name} via WhatsApp`}
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col flex-1 justify-between bg-white relative">
                <div>
                  <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#C59B6D] mb-1">
                    {product.category}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#191816] group-hover:text-[#C59B6D] transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  
                  {/* Material summary */}
                  <div className="mt-2 text-xs text-[#191816]/60 flex flex-wrap gap-1.5">
                    {product.materialsSummary.map((m, idx) => (
                      <span key={idx} className="inline-block bg-[#F3EFEA] px-2.5 py-0.5 rounded-full text-[10px] font-medium text-[#191816]/80">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Union Shape Area: Price on left, Circle Cart Button on right */}
                <div className="mt-5 pt-4 border-t border-[#E7E2DA] flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-[#191816]/50 font-semibold leading-none mb-1">
                      Starting From
                    </span>
                    <span className="font-serif text-sm sm:text-base font-bold text-[#191816]">
                      {product.price.replace('Starting from ', '')}
                    </span>
                  </div>

                  {/* Circular Cart Action Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProduct(product);
                    }}
                    className="w-10 h-10 rounded-full bg-[#191816] group-hover:bg-[#C59B6D] text-white flex items-center justify-center transition-all duration-300 shadow-md group-hover:scale-105 active:scale-95 cursor-pointer"
                    title={`Pesan ${product.name}`}
                    aria-label={`Pesan ${product.name}`}
                  >
                    <ShoppingBag className="w-4 h-4 text-white" />
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
