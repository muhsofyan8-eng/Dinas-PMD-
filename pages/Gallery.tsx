
import React, { useState } from 'react';
import { GALLERY_DATA } from '../constants';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-blue-900 py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black uppercase mb-4 tracking-tighter">Galeri Kegiatan</h1>
          <p className="text-blue-200 text-lg">Dokumentasi visual berbagai inisiatif dan program pemberdayaan masyarakat di Sulawesi Tenggara.</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERY_DATA.map((item) => (
            <div 
              key={item.id} 
              className="group relative rounded-[2rem] overflow-hidden shadow-lg cursor-pointer aspect-[4/3]"
              onClick={() => setSelectedImage(item.image)}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <span className="bg-amber-500 text-blue-950 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest w-fit mb-3">
                  {item.category}
                </span>
                <h3 className="text-white font-black text-xl leading-tight uppercase tracking-tighter">{item.title}</h3>
                <p className="text-blue-200 text-xs mt-2 font-bold uppercase tracking-widest">{item.date}</p>
              </div>
              {/* Permanent small label for mobile */}
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white w-10 h-10 rounded-full flex items-center justify-center lg:hidden">
                <i className="fas fa-expand"></i>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-8 right-8 text-white text-3xl hover:text-amber-500 transition-colors">
            <i className="fas fa-times"></i>
          </button>
          <img 
            src={selectedImage} 
            alt="Preview" 
            className="max-w-full max-h-full rounded-2xl shadow-2xl object-contain" 
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Footer Banner */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <i className="fas fa-camera-retro text-4xl text-blue-900"></i>
          <h2 className="text-3xl font-black text-blue-900 uppercase">Dokumentasi Transparan</h2>
          <p className="text-gray-600 font-medium">Setiap gambar mencerminkan komitmen kami dalam membangun desa-desa mandiri di bumi Sulawesi Tenggara.</p>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
