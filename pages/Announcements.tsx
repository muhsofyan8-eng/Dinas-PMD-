
import React, { useState } from 'react';
import { ANNOUNCEMENT_LIST } from '../constants';

const Announcements: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAnnouncements = ANNOUNCEMENT_LIST.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-blue-900 py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black uppercase mb-4 tracking-tighter">Pengumuman Resmi</h1>
          <p className="text-blue-200 text-lg">Informasi, surat edaran, dan pengumuman terbaru dari DPMD Provinsi Sulawesi Tenggara.</p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4">
        {/* Filter / Search Bar */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="relative w-full md:w-96">
            <input 
              type="text" 
              placeholder="Cari pengumuman..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-amber-500 outline-none transition-all shadow-sm"
            />
            <i className="fas fa-search absolute left-5 top-5 text-gray-400"></i>
          </div>
          <div className="flex items-center space-x-2 text-sm font-bold text-gray-500 uppercase tracking-widest">
            <i className="fas fa-filter text-blue-900"></i>
            <span>Menampilkan {filteredAnnouncements.length} Dokumen</span>
          </div>
        </div>

        {/* Announcements List */}
        <div className="space-y-4">
          {filteredAnnouncements.map((item) => (
            <div 
              key={item.id} 
              className="group bg-white rounded-2xl border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between hover:shadow-2xl hover:border-blue-100 transition-all cursor-pointer"
            >
              <div className="flex items-center space-x-6 w-full md:w-3/4">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-colors flex-shrink-0">
                  <i className="fas fa-file-pdf text-2xl"></i>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <span className="text-[10px] font-black uppercase tracking-widest bg-amber-100 text-amber-700 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    {item.isNew && (
                      <span className="animate-pulse bg-red-500 text-white text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-tighter">
                        Terbaru
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg md:text-xl font-black text-blue-950 uppercase tracking-tighter group-hover:text-blue-900 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">
                    Dipublikasikan: {item.date}
                  </p>
                </div>
              </div>
              <div className="mt-6 md:mt-0 w-full md:w-auto">
                <button className="w-full md:w-auto flex items-center justify-center space-x-3 bg-blue-900 text-white px-8 py-4 rounded-xl font-black uppercase text-xs tracking-[0.2em] shadow-lg group-hover:bg-amber-500 group-hover:text-blue-950 transition-all">
                  <span>Unduh Dokumen</span>
                  <i className="fas fa-download"></i>
                </button>
              </div>
            </div>
          ))}

          {filteredAnnouncements.length === 0 && (
            <div className="py-20 text-center border-2 border-dashed border-gray-100 rounded-[2.5rem]">
              <i className="fas fa-search text-4xl text-gray-200 mb-4"></i>
              <p className="text-gray-400 font-black uppercase tracking-widest text-xs">Pengumuman tidak ditemukan</p>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-gray-50 py-20 mt-20">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
           <div className="w-20 h-20 bg-blue-100 rounded-[2rem] flex items-center justify-center mx-auto text-blue-900 shadow-inner">
             <i className="fas fa-info-circle text-3xl"></i>
           </div>
           <h2 className="text-3xl font-black text-blue-900 uppercase tracking-tighter italic">Transparansi Informasi Publik</h2>
           <p className="text-gray-600 font-medium leading-relaxed">
             Dokumen-dokumen di atas merupakan wujud keterbukaan informasi publik Dinas Pemberdayaan Masyarakat dan Desa Provinsi Sulawesi Tenggara sesuai dengan amanat UU No. 14 Tahun 2008.
           </p>
        </div>
      </section>
    </div>
  );
};

export default Announcements;
