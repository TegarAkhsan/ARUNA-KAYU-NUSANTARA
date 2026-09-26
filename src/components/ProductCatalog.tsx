import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Eye, MessageCircle } from 'lucide-react';
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
    <section id="products" className="py-24 sm:py-32 bg-[#F5F1EA]/40 border-t border-[#E8E4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#A47C52] block mb-3">
            Product Portfolio
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1F1F1D] mb-4">
            Koleksi Furniture Pilihan
          </h2>
          <p className="text-sm sm:text-base text-[#1F1F1D]/70 leading-relaxed">
            Eksplorasi lini furniture lepasan (loose furniture) dan kreasi custom kami, diproduksi menggunakan kayu solid bersertifikat dan craftsmanship presisi.
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
                    ? 'bg-[#1F1F1D] text-[#FAF9F5] shadow-sm'
                    : 'bg-white text-[#1F1F1D]/70 hover:text-[#1F1F1D] hover:bg-[#E8E4DC]/60 border border-[#E8E4DC]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#1F1F1D]/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Cari produk atau material..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white text-xs text-[#1F1F1D] rounded-full border border-[#E8E4DC] focus:outline-none focus:border-[#A47C52] placeholder:text-[#1F1F1D]/40 shadow-sm"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#1F1F1D]/40 hover:text-[#1F1F1D]"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-[#E8E4DC] p-8">
            <SlidersHorizontal className="w-8 h-8 text-[#A47C52]/60 mx-auto mb-3" />
            <h3 className="font-serif text-lg text-[#1F1F1D] font-medium">Tidak ada produk ditemukan</h3>
            <p className="text-xs text-[#1F1F1D]/60 mt-1 max-w-sm mx-auto">
              Silakan coba kata kunci lain atau hubungi kami untuk mendiskusikan kebutuhan custom furniture Anda.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-[#F5F1EA] text-[#1F1F1D] rounded-full text-xs font-semibold hover:bg-[#E8E4DC] transition-colors"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group flex flex-col bg-white rounded-xl overflow-hidden border border-[#E8E4DC] hover:border-[#A47C52]/40 transition-all duration-300 hover:shadow-lg"
              >
                {/* Image */}
                <div
                  className="relative aspect-square overflow-hidden bg-[#F5F1EA] cursor-pointer"
                  onClick={() => onSelectProduct(product)}
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-108"
                    loading="lazy"
                  />
                  {product.badge && (
                    <div className="absolute top-3 right-3 px-2 py-0.5 bg-[#A47C52] text-white text-[10px] tracking-wider uppercase font-medium rounded">
                      {product.badge}
                    </div>
                  )}

                  {/* Hover Quick Overlay */}
                  <div className="absolute inset-0 bg-[#1F1F1D]/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 p-3">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct(product);
                      }}
                      className="px-4 py-2 bg-white text-[#1F1F1D] rounded-full text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5 shadow-md hover:bg-[#FAF9F5] transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#A47C52]" />
                      <span>Lihat Detail</span>
                    </button>
                    <a
                      href={getWhatsAppUrl(getProductInquiryMessage(product.name))}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 bg-[#A47C52] text-white rounded-full hover:bg-[#8e6942] transition-colors shadow-md"
                      title="Chat WhatsApp"
                      aria-label={`Chat WhatsApp untuk ${product.name}`}
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#A47C52] mb-1">
                      {product.subcategory}
                    </div>
                    <h3
                      onClick={() => onSelectProduct(product)}
                      className="font-serif text-base font-semibold text-[#1F1F1D] group-hover:text-[#A47C52] transition-colors cursor-pointer line-clamp-1"
                    >
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#1F1F1D]/65 mt-1.5 line-clamp-2">
                      {product.shortDescription}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#E8E4DC] flex items-center justify-between">
                    <div>
                      <span className="block text-[10px] uppercase text-[#1F1F1D]/50">Mulai</span>
                      <span className="font-serif text-xs font-semibold text-[#1F1F1D]">
                        {product.price}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => onSelectProduct(product)}
                      className="text-xs font-medium text-[#A47C52] hover:underline"
                    >
                      Lihat Info →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Custom Order Callout Bar */}
        <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-[#1F1F1D] text-[#FAF9F5] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-xl">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A47C52] font-semibold block mb-2">
              Kebutuhan Ukuran atau Desain Khusus?
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold mb-2">
              Kami Menghadirkan Solusi Custom Furniture
            </h3>
            <p className="text-xs sm:text-sm text-[#FAF9F5]/70 leading-relaxed">
              Bawa denah ruang, sketsa, atau gambar kerja 3D Anda. Tim desainer &amp; teknisi kami siap mewujudkannya dengan kayu jati solid pilihan.
            </p>
          </div>
          <div>
            <a
              href="#custom"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#A47C52] hover:bg-[#8e6942] text-white rounded-full text-xs font-semibold tracking-wider uppercase transition-colors shadow-md whitespace-nowrap"
            >
              <span>Pelajari Layanan Custom</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
