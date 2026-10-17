
import React from 'react';
import { AGENDA_DATA } from '../constants';

const Agenda: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header Agenda */}
      <section className="bg-blue-900 py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black uppercase mb-4 tracking-tighter">Agenda Kegiatan</h1>
          <p className="text-blue-200 text-lg">Jadwal kegiatan, workshop, dan konsultasi publik Dinas Pemberdayaan Masyarakat dan Desa Provinsi Sultra.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Side Info / Filters */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 shadow-sm">
              <h3 className="text-blue-900 font-black uppercase tracking-tighter mb-6">Bulan Ini</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-blue-100">
                  <span className="text-sm font-bold text-gray-600">Total Kegiatan</span>
                  <span className="bg-blue-900 text-white w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs">
                    {AGENDA_DATA.length}
                  </span>
                </div>
                <p className="text-xs text-gray-500 italic leading-relaxed">
                  * Jadwal sewaktu-waktu dapat berubah mengikuti kebijakan pimpinan dan protokol teknis yang berlaku.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-[2rem] border border-blue-100">
              <h3 className="text-blue-900 font-black uppercase tracking-tighter mb-4">Butuh Informasi?</h3>
              <p className="text-sm text-gray-600 mb-6">Hubungi sekretariat untuk konfirmasi kehadiran atau permintaan undangan resmi.</p>
              <a href="mailto:info@dpmd.sultraprov.go.id" className="block text-center bg-blue-900 text-white py-3 rounded-xl font-black uppercase text-[10px] tracking-widest shadow-lg hover:bg-amber-500 transition-colors">
                Kirim Email
              </a>
            </div>
          </div>

          {/* Agenda List */}
          <div className="lg:col-span-3 space-y-10">
            {AGENDA_DATA.map((agenda) => (
              <div key={agenda.id} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100 flex flex-col md:flex-row">
                
                {/* Date Part */}
                <div className="bg-blue-900 md:w-48 p-8 flex flex-col items-center justify-center text-white text-center flex-shrink-0 group-hover:bg-amber-500 transition-colors">
                  <span className="text-sm font-black uppercase tracking-widest opacity-80 mb-2">
                    {agenda.date.split(' ')[1]}
                  </span>
                  <span className="text-5xl font-black leading-none mb-2">
                    {agenda.date.split(' ')[0]}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest opacity-80">
                    {agenda.date.split(' ')[2]}
                  </span>
                </div>

                {/* Content Part */}
                <div className="p-8 md:p-12 flex-grow space-y-6">
                  <div className="flex items-center space-x-3">
                    <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${
                      agenda.category === 'Workshop' ? 'bg-emerald-100 text-emerald-600' :
                      agenda.category === 'Rapat' ? 'bg-blue-100 text-blue-600' : 'bg-amber-100 text-amber-600'
                    }`}>
                      {agenda.category}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-black text-blue-950 uppercase tracking-tighter leading-tight group-hover:text-blue-900 transition-colors">
                    {agenda.title}
                  </h2>
                  
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
                    {agenda.description}
                  </p>

                  <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-gray-50">
                    <div className="flex items-center text-sm text-gray-500">
                      <i className="fas fa-clock w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center text-blue-900 mr-3"></i>
                      <span className="font-bold">{agenda.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <i className="fas fa-map-marker-alt w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center text-blue-900 mr-3"></i>
                      <span className="font-bold">{agenda.location}</span>
                    </div>
                  </div>
                </div>

              </div>
            ))}

            {/* Empty State / Coming Soon */}
            <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-[2.5rem] p-12 text-center text-gray-400">
              <i className="fas fa-calendar-plus text-4xl mb-4"></i>
              <p className="font-black uppercase tracking-widest text-xs">Agenda mendatang sedang dalam penyusunan</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Agenda;
