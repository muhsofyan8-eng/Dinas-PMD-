
import React from 'react';
import { OFFICIAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-blue-900 py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black uppercase mb-4">Hubungi Kami</h1>
          <p className="text-blue-200 text-lg">Kami siap melayani pertanyaan dan aspirasi Anda secara terbuka dan akuntabel.</p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info & Map */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-black text-blue-900 uppercase">Kantor DPMD Sultra</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 flex-shrink-0 shadow-sm">
                    <i className="fas fa-map-marker-alt text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 uppercase text-[10px] tracking-widest mb-1">Alamat Kantor</h4>
                    <p className="text-gray-700 font-medium">{OFFICIAL_INFO.address}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 flex-shrink-0 shadow-sm">
                    <i className="fas fa-phone-alt text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 uppercase text-[10px] tracking-widest mb-1">Telepon / Fax</h4>
                    <p className="text-gray-700 font-medium">{OFFICIAL_INFO.phone}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 flex-shrink-0 shadow-sm">
                    <i className="fas fa-envelope text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 uppercase text-[10px] tracking-widest mb-1">Email Resmi</h4>
                    <p className="text-gray-700 font-medium">{OFFICIAL_INFO.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2.5rem] overflow-hidden h-96 shadow-2xl bg-gray-100 flex items-center justify-center border-8 border-gray-50 relative group">
               <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-all"></div>
               <div className="text-center p-8 relative z-10">
                 <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl text-blue-900">
                    <i className="fas fa-map-marked-alt text-3xl"></i>
                 </div>
                 <p className="text-blue-900 font-black uppercase tracking-[0.2em] text-xs mb-2">Lokasi Strategis</p>
                 <p className="text-gray-500 font-medium text-sm">Klik untuk melihat di Google Maps</p>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-12 rounded-[2.5rem] border border-gray-100 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full -mr-16 -mt-16"></div>
            <h3 className="text-3xl font-black text-blue-900 mb-8 uppercase tracking-tighter">Kirim Pesan</h3>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] ml-2">Nama Lengkap</label>
                  <input type="text" className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-amber-500 focus:ring-0 outline-none transition-all bg-gray-50/50" placeholder="Contoh: Budi Santoso" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] ml-2">Email</label>
                  <input type="email" className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-amber-500 focus:ring-0 outline-none transition-all bg-gray-50/50" placeholder="alamat@email.com" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] ml-2">Subjek Aspirasi</label>
                <select className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-amber-500 focus:ring-0 outline-none transition-all bg-gray-50/50 appearance-none">
                  <option>Informasi Dana Desa</option>
                  <option>Pengaduan Pelayanan</option>
                  <option>Konsultasi BUMDes</option>
                  <option>Lainnya</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] ml-2">Detail Pesan</label>
                <textarea rows={6} className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-amber-500 focus:ring-0 outline-none transition-all bg-gray-50/50" placeholder="Tuliskan pesan Anda secara jelas..."></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-900 text-white py-5 rounded-2xl font-black uppercase tracking-[0.3em] hover:bg-amber-500 hover:text-blue-900 transition-all shadow-2xl transform hover:scale-[1.02]">
                Kirim Pesan Sekarang <i className="fas fa-paper-plane ml-3"></i>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
