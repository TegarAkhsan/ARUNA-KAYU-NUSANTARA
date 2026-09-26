import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { FeaturedProducts } from './components/FeaturedProducts';
import { AboutUs } from './components/AboutUs';
import { ProductCatalog } from './components/ProductCatalog';
import { CustomFurniture } from './components/CustomFurniture';
import { ProjectsPortfolio } from './components/ProjectsPortfolio';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ProductDetailModal } from './components/ProductDetailModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import type { Product } from './data/products';
import type { ProjectItem } from './data/projects';

export function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1F1F1D] flex flex-col font-sans selection:bg-[#A47C52] selection:text-white">
      {/* Sticky Luxury Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with High Impact Typography & Visual */}
        <Hero 
          onExploreClick={() => scrollToSection('products')} 
        />

        {/* Short Introduction & Philosophy */}
        <Introduction 
          onAboutClick={() => scrollToSection('about')} 
        />

        {/* Featured Products (Oslo Chair, Arlo Table, Nara Cabinet, Kanso Desk) */}
        <FeaturedProducts 
          onSelectProduct={(product) => setSelectedProduct(product)}
          onViewAllClick={() => scrollToSection('products')}
        />

        {/* About Us Detailed Story & Values */}
        <AboutUs />

        {/* Full Interactive Product Catalog with Filter & Search */}
        <ProductCatalog 
          onSelectProduct={(product) => setSelectedProduct(product)}
        />

        {/* Dedicated Custom Furniture Section (5 Steps Process) */}
        <CustomFurniture />

        {/* Projects / Portfolio Editorial Masonry & Details */}
        <ProjectsPortfolio 
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Comprehensive Services Breakdown */}
        <Services />

        {/* Why Choose Us & Animated Stats Counter */}
        <WhyChooseUs />

        {/* Client & B2B Testimonials */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <FAQ />

        {/* Contact Section, Netlify Forms & Google Maps Location */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp with Status Bubble */}
      <FloatingWhatsApp />

      {/* Product Detail Modal */}
      <ProductDetailModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />

      {/* Project Detail Modal */}
      <ProjectDetailModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}

export default App;
