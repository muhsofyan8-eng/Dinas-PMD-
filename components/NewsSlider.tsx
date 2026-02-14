
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SLIDES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1920&auto=format&fit=crop',
    category: 'Pembangunan',
    title: 'Peningkatan Kapasitas Aparatur Desa Se-Sultra',
    description: 'DPMD Sultra menyelenggarakan bimbingan teknis untuk memperkuat tata kelola keuangan desa di 17 Kabupaten/Kota demi transparansi anggaran.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1920&auto=format&fit=crop',
    category: 'Inovasi',
    title: 'Pencanangan Desa Digital Mandiri Kawasan Pesisir',
    description: 'Langkah strategis dalam mempercepat digitalisasi layanan masyarakat hingga ke pelosok desa untuk kemudahan akses informasi publik.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1920&auto=format&fit=crop',
    category: 'Teknologi',
    title: 'Gelar Teknologi Tepat Guna Nusantara 2024',
    description: 'Inovator dari Sulawesi Tenggara menampilkan karya unggulan dalam pemanfaatan limbah pertanian di ajang bergengsi tingkat nasional.',
  }
];

const NewsSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[550px] overflow-hidden bg-blue-950">
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
            index === current ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-105 translate-x-full'
          }`}
        >
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/40 to-transparent z-10"></div>
          
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 z-20 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className={`max-w-2xl space-y-6 transition-all duration-700 delay-300 ${index === current ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <span className="inline-block bg-amber-500 text-blue-950 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                  {slide.category}
                </span>
                <h2 className="text-3xl md:text-6xl font-black text-white leading-tight uppercase tracking-tighter drop-shadow-2xl">
                  {slide.title}
                </h2>
                <p className="text-sm md:text-lg text-gray-200 font-medium leading-relaxed line-clamp-3 md:line-clamp-none drop-shadow-lg">
                  {slide.description}
                </p>
                <div className="pt-4">
                  <Link
                    to="/news"
                    className="inline-flex items-center bg-white text-blue-900 font-black px-8 py-4 rounded-xl hover:bg-amber-500 transition-all shadow-2xl uppercase text-xs tracking-widest group"
                  >
                    Baca Selengkapnya
                    <i className="fas fa-arrow-right ml-3 group-hover:translate-x-2 transition-transform text-amber-500"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Controls */}
      <div className="absolute bottom-10 right-10 z-30 flex space-x-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current ? 'w-10 h-3 bg-amber-500' : 'w-3 h-3 bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Side Buttons */}
      <button 
        onClick={() => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md text-white flex items-center justify-center transition-all opacity-0 md:opacity-100 hover:scale-110"
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button 
        onClick={() => setCurrent((prev) => (prev + 1) % SLIDES.length)}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md text-white flex items-center justify-center transition-all opacity-0 md:opacity-100 hover:scale-110"
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default NewsSlider;
