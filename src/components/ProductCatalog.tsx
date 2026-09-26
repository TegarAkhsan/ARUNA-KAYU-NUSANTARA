import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Eye, MessageCircle, ShoppingBag } from 'lucide-react';
import type { Product, ProductCategory } from '../data/products';
import { productCategories, productsData, getProductInquiryMessage } from '../data/products';
import { getWhatsAppUrl } from '../data/company';

interface ProductCatalogProps {
  onSelectProduct: (product: Product) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onSelectProduct }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return productsData.filter((p) => {
      const matchCategory = selectedCategory === 'All' || p.category === selectedCategory;
      const matchSearch =
        searchQuery === '' ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.subcategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.materialsSummary.some((m) => m.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="products" className="py-24 sm:py-32 bg-[#FAF8F5] border-t border-[#E7E2DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#C59B6D] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C59B6D]" />
            <span>Product Catalog</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#191816] tracking-tight mb-4">
            Koleksi Furniture Pilihan
          </h2>
          <p className="text-sm text-[#191816]/70 leading-relaxed max-w-lg mx-auto">
            Eksplorasi lini furniture lepasan dan kreasi custom kami, diproduksi menggunakan kayu solid pilihan dan craftsmanship presisi.
          </p>
        </div>

        {/* Filter Controls: Categories & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto">
            {productCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#191816] text-white shadow-sm'
                    : 'bg-white text-[#191816]/70 hover:text-[#191816] hover:bg-[#F3EFEA] border border-[#E7E2DA]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#191816]/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Cari produk atau material..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white text-xs text-[#191816] rounded-full border border-[#E7E2DA] focus:outline-none focus:border-[#C59B6D] placeholder:text-[#191816]/40 shadow-sm"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#191816]/40 hover:text-[#191816]"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Product Grid with Union Circle Cart Button */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-[#E7E2DA] p-8">
            <SlidersHorizontal className="w-8 h-8 text-[#C59B6D]/60 mx-auto mb-3" />
            <h3 className="font-serif text-lg text-[#191816] font-medium">Tidak ada produk ditemukan</h3>
            <p className="text-xs text-[#191816]/60 mt-1 max-w-sm mx-auto">
              Silakan coba kata kunci lain atau hubungi kami untuk mendiskusikan kebutuhan custom furniture Anda.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-[#F3EFEA] text-[#191816] rounded-full text-xs font-semibold hover:bg-[#E7E2DA] transition-colors"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => onSelectProduct(product)}
                className="group cursor-pointer flex flex-col bg-white rounded-3xl overflow-hidden border border-[#E7E2DA] hover:border-[#C59B6D]/60 transition-all duration-300 hover:shadow-xl relative"
              >
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden bg-[#F3EFEA]">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106"
                    loading="lazy"
                  />
                  {product.badge && (
                    <div className="absolute top-3.5 right-3.5 px-2.5 py-1 bg-[#191816]/80 backdrop-blur-md text-white text-[10px] tracking-wider uppercase font-semibold rounded-full shadow-sm">
                      {product.badge}
                    </div>
                  )}

                  {/* Hover Quick Overlay */}
                  <div className="absolute inset-0 bg-[#191816]/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 p-3">
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
                      title="Chat WhatsApp"
                      aria-label={`Chat WhatsApp untuk ${product.name}`}
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between bg-white relative">
                  <div>
                    <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#C59B6D] mb-1">
                      {product.subcategory}
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#191816] group-hover:text-[#C59B6D] transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#191816]/65 mt-1.5 line-clamp-2 leading-relaxed font-normal">
                      {product.shortDescription}
                    </p>
                  </div>

                  {/* Union Shape Area: Price on left, integrated Circle Cart Button on right */}
                  <div className="mt-5 pt-4 border-t border-[#E7E2DA] flex items-center justify-between">
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-[#191816]/50 font-semibold leading-none mb-1">
                        Starting From
                      </span>
                      <span className="font-serif text-sm sm:text-base font-bold text-[#191816]">
                        {product.price.replace('Starting from ', '')}
                      </span>
                    </div>

                    {/* Integrated Circular Action Button (Union Shape Style) */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct(product);
                      }}
                      className="w-10 h-10 rounded-full bg-[#191816] group-hover:bg-[#C59B6D] text-white flex items-center justify-center transition-all duration-300 shadow-md group-hover:scale-105 active:scale-95 cursor-pointer"
                      title={`Pesan / Tanyakan ${product.name}`}
                      aria-label={`Pesan ${product.name}`}
                    >
                      <ShoppingBag className="w-4 h-4 text-white" />
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

        {/* Custom Order Callout Bar */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-[#191816] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-xl">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#C59B6D] font-semibold block mb-2">
              Kebutuhan Ukuran atau Desain Khusus?
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-2">
              Kami Menghadirkan Solusi Custom Furniture
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
              Bawa denah ruang, sketsa, atau gambar kerja 3D Anda. Tim desainer &amp; teknisi kami siap mewujudkannya dengan kayu jati solid pilihan.
            </p>
          </div>
          <div>
            <a
              href="#custom"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C59B6D] hover:bg-[#b0875b] text-white rounded-full text-xs font-semibold tracking-wider uppercase transition-colors shadow-md whitespace-nowrap"
            >
              <span>Pelajari Layanan Custom</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
