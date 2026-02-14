
import React from 'react';
import { DUMMY_NEWS } from '../constants';

const News: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-blue-900 py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black uppercase mb-4">Arsip Berita</h1>
          <p className="text-blue-200">Informasi terbaru seputar kegiatan DPMD dan kabar pembangunan desa di Sulawesi Tenggara.</p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {DUMMY_NEWS.map((item) => (
            <div key={item.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100 flex flex-col">
              <div className="h-56 overflow-hidden relative">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                <span className="absolute top-4 left-4 bg-amber-500 text-blue-950 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">{item.category}</span>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="text-gray-400 text-xs font-bold mb-3 flex items-center">
                  <i className="far fa-calendar-alt mr-2 text-amber-500"></i> {item.date}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4 group-hover:text-amber-600 transition-colors">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3">{item.excerpt}</p>
                <button className="mt-auto text-blue-900 font-black text-xs uppercase tracking-widest flex items-center group-hover:translate-x-2 transition-transform">
                  Selengkapnya <i className="fas fa-arrow-right ml-2 text-amber-500"></i>
                </button>
              </div>
            </div>
          ))}
          {/* Repeat for mock extra news */}
          {[1, 2, 3].map(i => (
            <div key={`extra-${i}`} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100 flex flex-col opacity-60 grayscale hover:grayscale-0">
               <div className="h-56 bg-gray-200 flex items-center justify-center">
                  <i className="far fa-image text-4xl text-gray-300"></i>
               </div>
               <div className="p-8">
                 <div className="h-4 w-24 bg-gray-200 rounded mb-4"></div>
                 <div className="h-6 w-full bg-gray-200 rounded mb-4"></div>
                 <div className="h-4 w-full bg-gray-100 rounded"></div>
               </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default News;
