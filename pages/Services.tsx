
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <section className="bg-blue-900 py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black uppercase mb-4">Layanan Digital</h1>
          <p className="text-blue-200">Portal aplikasi terintegrasi untuk mendukung tata kelola desa di Sulawesi Tenggara.</p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-start hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-900 mb-6">
                <i className={`fas ${service.icon} text-2xl`}></i>
              </div>
              <h3 className="text-2xl font-black text-blue-900 mb-4">{service.name}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {service.description}. Aplikasi ini dirancang untuk memudahkan sinkronisasi data dari tingkat desa hingga ke provinsi.
              </p>
              <button className="mt-auto bg-blue-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-amber-500 hover:text-blue-900 transition-all flex items-center">
                Akses Aplikasi <i className="fas fa-external-link-alt ml-3"></i>
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-blue-50 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <h2 className="text-3xl font-black text-blue-900">Butuh Bantuan Teknis?</h2>
          <p className="text-gray-700">Jika Anda admin desa yang mengalami kendala login atau operasional aplikasi, silakan hubungi tim IT DPMD Sultra.</p>
          <button className="bg-amber-500 text-blue-900 px-12 py-4 rounded-2xl font-black uppercase tracking-widest shadow-lg">
             Hubungi Helpdesk
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
