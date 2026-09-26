import { useState, useEffect } from 'react';
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
import { ProjectDetailPage } from './components/ProjectDetailPage';
import type { Product } from './data/products';
import type { ProjectItem } from './data/projects';
import { projectsData } from './data/projects';

export function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Sync hash routing for dedicated project page: #project/{project-id}
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project/')) {
        const projectId = hash.replace('#project/', '');
        const found = projectsData.find((p) => p.id === projectId);
        if (found) {
          setSelectedProject(found);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }
      if (!hash.startsWith('#project/')) {
        setSelectedProject(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectProject = (project: ProjectItem) => {
    setSelectedProject(project);
    window.location.hash = `project/${project.id}`;
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
    window.location.hash = 'projects';
    setTimeout(() => {
      const element = document.getElementById('projects');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const scrollToSection = (id: string) => {
    if (selectedProject) {
      setSelectedProject(null);
      window.location.hash = id;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#191816] flex flex-col font-sans selection:bg-[#C59B6D] selection:text-white">
      {/* Sticky Luxury Navbar */}
      <Navbar />

      {/* Main Content Area: Either Dedicated Project Page or Full Home Showcase */}
      <main className="flex-1">
        {selectedProject ? (
          /* Dedicated Standalone Project Page */
          <ProjectDetailPage 
            project={selectedProject} 
            onBack={handleBackToProjects}
            onSelectOtherProject={handleSelectProject}
          />
        ) : (
          /* Full Homepage Sections */
          <>
            {/* Hero Section with Framed Card Visual & High Impact Typography */}
            <Hero 
              onExploreClick={() => scrollToSection('products')} 
            />

            {/* Short Introduction & Philosophy */}
            <Introduction 
              onAboutClick={() => scrollToSection('about')} 
            />

            {/* Featured Products */}
            <FeaturedProducts 
              onSelectProduct={(product) => setSelectedProduct(product)}
              onViewAllClick={() => scrollToSection('products')}
            />

            {/* About Us Detailed Story with Notched Architectural Frame */}
            <AboutUs />

            {/* Bento Grid Stats & Trust Pillars */}
            <WhyChooseUs />

            {/* Full Interactive Product Catalog with Filter & Search */}
            <ProductCatalog 
              onSelectProduct={(product) => setSelectedProduct(product)}
            />

            {/* Custom Furniture Process: 1st Card Gold, Rest Minimalist */}
            <CustomFurniture />

            {/* Widescreen Projects Portfolio */}
            <ProjectsPortfolio 
              onSelectProject={handleSelectProject}
            />

            {/* Comprehensive Services Breakdown */}
            <Services />

            {/* Client Testimonials with Circular Avatars */}
            <Testimonials />

            {/* Frequently Asked Questions */}
            <FAQ />

            {/* Contact Section, Netlify Forms & Google Maps Location */}
            <ContactSection />
          </>
        )}
      </main>

      {/* Footer with Studio Transformation Banner */}
      <Footer />

      {/* Persistent Floating WhatsApp */}
      <FloatingWhatsApp />

      {/* Product Detail Modal */}
      <ProductDetailModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </div>
  );
}

export default App;
