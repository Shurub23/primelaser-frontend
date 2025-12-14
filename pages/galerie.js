import Navbar from "../components/Navbar";
import { X, Filter, Eye, EyeOff, Grid3x3, List } from 'lucide-react';
import { useState, useEffect } from 'react';

const Galerie = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' sau 'list'

  // Imagini gratuite de la Unsplash
  const mockGalleryImages = [
    {
      id: 1,
      url_thumb: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300&h=300&fit=crop",
      url_large: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&fit=max",
      title: "Curățare Rugină - Oțel Industrial",
      description: "Îndepărtarea completă a ruginii de pe o structură metalică industrială.",
      category: "metal"
    },
    {
      id: 2,
      url_thumb: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=300&fit=crop",
      url_large: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&fit=max",
      title: "Restaurare Fațadă Istorică",
      description: "Curățare delicată a unei fațade din piatră naturală.",
      category: "monument"
    },
    {
      id: 3,
      url_thumb: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop",
      url_large: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&fit=max",
      title: "Echipamente Industriale",
      description: "Curățare echipamente de producție în industria grea.",
      category: "industrial"
    },
    {
      id: 4,
      url_thumb: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=300&fit=crop",
      url_large: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200&fit=max",
      title: "Suprafețe Metalice Structurale",
      description: "Pregătire suprafață pentru aplicarea vopselei protectoare.",
      category: "metal"
    },
    {
      id: 5,
      url_thumb: "https://images.unsplash.com/photo-1565464027194-7957a2295fb7?w=300&h=300&fit=crop",
      url_large: "https://images.unsplash.com/photo-1565464027194-7957a2295fb7?w=1200&fit=max",
      title: "Statuie Restaurată",
      description: "Curățare fără deteriorare a unei statui din bronz.",
      category: "monument"
    },
    {
      id: 6,
      url_thumb: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=300&fit=crop",
      url_large: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&fit=max",
      title: "Linii de Producție",
      description: "Mentenanță preventivă pe linii de asamblare industrială.",
      category: "industrial"
    },
    // Mai multe pentru aceeași categorie (metal)
    {
      id: 7,
      url_thumb: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=300&fit=crop",
      url_large: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&fit=max",
      title: "Proiect Metal 2",
      description: "Alt proiect de curățare metal.",
      category: "metal"
    },
    {
      id: 8,
      url_thumb: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=300&fit=crop",
      url_large: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&fit=max",
      title: "Proiect Metal 3",
      description: "Încă un proiect metal.",
      category: "metal"
    }
  ];

  const categories = [
    { id: 'all', name: 'Toate', icon: <Filter className="w-4 h-4" /> },
    { id: 'metal', name: 'Curățare Metal' },
    { id: 'monument', name: 'Restaurare Monumente' },
    { id: 'industrial', name: 'Curățare Industrială' }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  // CORECTAT: Filtrare corectă a imaginilor
  const filteredImages = activeCategory === 'all'
    ? mockGalleryImages
    : mockGalleryImages.filter(img => img.category === activeCategory);

  // Numără pozele vizibile per categorie
  const getVisibleCount = (categoryId) => {
    if (categoryId === 'all') return mockGalleryImages.length;
    return mockGalleryImages.filter(img => img.category === categoryId).length;
  };

  // Închide modal-ul când se apasă Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Galeria Noastră</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Descoperă rezultatele remarcabile ale proiectelor noastre de curățare laser
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          
          {/* FILTRU CATEGORII */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Filter className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-900">Filtrează după categorie:</h2>
            </div>
            
            {/* Butoane de filtrare */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map(category => {
                const isActive = activeCategory === category.id;
                const visibleCount = getVisibleCount(category.id);
                
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-3 ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {category.icon && <span>{category.icon}</span>}
                    <span>{category.name}</span>
                    
                    <span className="flex items-center gap-1 text-sm font-normal">
                      {isActive ? (
                        <>
                          <Eye className="w-4 h-4" />
                          <span>({filteredImages.length} vizibile)</span>
                        </>
                      ) : (
                        <>
                          <EyeOff className="w-4 h-4" />
                          <span>({getVisibleCount(category.id)} ascunse)</span>
                        </>
                      )}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Contor și opțiuni de afișare */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 p-4 bg-slate-50 rounded-lg">
              <div className="text-center sm:text-left">
                <div className="inline-block bg-blue-50 px-4 py-2 rounded-lg">
                  <span className="font-semibold text-blue-700">
                    Categoria "{categories.find(c => c.id === activeCategory)?.name}": {filteredImages.length} poze
                  </span>
                </div>
              </div>
              
              {/* Butoane pentru schimbarea modului de afișare */}
              <div className="flex items-center gap-2">
                <span className="text-slate-600 font-medium">Afișare:</span>
                <div className="flex bg-slate-100 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-4 py-2 rounded-md flex items-center gap-2 transition-all ${
                      viewMode === 'grid' 
                        ? 'bg-white shadow-md text-blue-600' 
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Grid3x3 className="w-4 h-4" />
                    <span>Grilă</span>
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`px-4 py-2 rounded-md flex items-center gap-2 transition-all ${
                      viewMode === 'list' 
                        ? 'bg-white shadow-md text-blue-600' 
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <List className="w-4 h-4" />
                    <span>Listă</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Grid - CORECTAT: Se umple corect orizontal */}
          <div className={`
            ${viewMode === 'grid' 
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6' 
              : 'flex flex-col gap-4'
            }
          `}>
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className={`
                  bg-white border border-slate-200 rounded-xl overflow-hidden cursor-pointer 
                  hover:shadow-xl transition-all duration-300 hover:-translate-y-1
                  ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''}
                  ${viewMode === 'grid' ? 'h-full' : ''}
                `}
                onClick={() => setSelectedImage(image)}
              >
                {/* Thumbnail */}
                <div className={`
                  ${viewMode === 'grid' 
                    ? 'aspect-square' 
                    : viewMode === 'list' 
                      ? 'md:w-48 md:h-48 w-full h-48' 
                      : ''
                  }
                  bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden
                `}>
                  <img
                    src={image.url_thumb}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg transform -translate-y-2 opacity-0 hover:opacity-100 hover:translate-y-0 transition-all duration-300">
                      <span className="text-slate-900 font-semibold text-sm">Apasă pentru a mări</span>
                    </div>
                  </div>
                </div>
                
                {/* Informații imagine */}
                <div className={`p-4 ${viewMode === 'list' ? 'md:flex-1' : ''}`}>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{image.title}</h3>
                  <p className="text-slate-600 text-sm mb-3 line-clamp-2">{image.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                      {image.category === 'metal' ? 'Metal' : 
                       image.category === 'monument' ? 'Monument' : 'Industrial'}
                    </span>
                    <span className="text-slate-500 text-xs">
                      ID: {image.id}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mesaj dacă nu sunt poze în categorie */}
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">🖼️</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Nicio poză în această categorie</h3>
              <p className="text-slate-600 mb-4">Încă nu avem poze în categoria selectată.</p>
              <button
                onClick={() => setActiveCategory('all')}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                ← Vezi toate pozele
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal - SIMPLIFICAT și CORECTAT */}
      {selectedImage && (
        <>
          {/* Overlay întunecat */}
          <div 
            className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          />
          
          {/* Modal centrat pe ecran */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
              <div className="relative">
                {/* Buton închidere */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 bg-white rounded-full p-3 hover:bg-slate-100 transition-all duration-200 shadow-lg hover:scale-110"
                >
                  <X className="w-6 h-6 text-slate-700" />
                </button>
                
                {/* Imagine mare - centrată și scalată corect */}
                <div className="flex justify-center items-center bg-slate-900 p-4">
                  <img
                    src={selectedImage.url_large}
                    alt={selectedImage.title}
                    className="max-w-full max-h-[60vh] object-contain rounded-lg"
                  />
                </div>
                
                {/* Detalii imagine */}
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{selectedImage.title}</h3>
                      <p className="text-slate-600">{selectedImage.description}</p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                        {selectedImage.category === 'metal' ? 'Curățare Metal' : 
                         selectedImage.category === 'monument' ? 'Restaurare Monumente' : 
                         'Curățare Industrială'}
                      </span>
                      <div className="text-sm text-slate-500">
                        Poza {selectedImage.id} din {filteredImages.length}
                      </div>
                    </div>
                  </div>
                  
                  {/* Navigare rapidă între poze */}
                  <div className="flex justify-between items-center mt-6 pt-6 border-t border-slate-200">
                    <button
                      onClick={() => {
                        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
                        const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
                        setSelectedImage(filteredImages[prevIndex]);
                      }}
                      className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
                    >
                      ← Anterior
                    </button>
                    
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Închide (ESC)
                    </button>
                    
                    <button
                      onClick={() => {
                        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
                        const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
                        setSelectedImage(filteredImages[nextIndex]);
                      }}
                      className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
                    >
                      Următor →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Info Section */}
      <section className="py-10 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-lg font-semibold text-slate-900 mb-6 text-center">Cum funcționează galeria</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="text-2xl mb-2">1️⃣</div>
                <h4 className="font-semibold text-slate-900 mb-2">Filtrare</h4>
                <p className="text-slate-600 text-sm">Alege o categorie pentru a vedea doar pozele relevante</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="text-2xl mb-2">2️⃣</div>
                <h4 className="font-semibold text-slate-900 mb-2">Vizualizare</h4>
                <p className="text-slate-600 text-sm">Apasă pe orice poză pentru a o vedea la dimensiune maximă</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="text-2xl mb-2">3️⃣</div>
                <h4 className="font-semibold text-slate-900 mb-2">Navigare</h4>
                <p className="text-slate-600 text-sm">Folosește săgețile în modal pentru a naviga între poze</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Galerie;
