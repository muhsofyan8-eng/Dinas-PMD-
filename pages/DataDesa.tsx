
import React from 'react';

const DataDesa: React.FC = () => {
  const stats = [
    { label: 'Jumlah Desa', value: '1.911', unit: 'Desa', color: 'bg-blue-600' },
    { label: 'Jumlah BUMDes', value: '1.419', unit: 'Unit', color: 'bg-amber-600' },
    { label: 'Jumlah Kecamatan', value: '221', unit: 'Kecamatan', color: 'bg-emerald-600' },
    { label: 'IDM Mandiri', value: '189', unit: 'Desa', color: 'bg-indigo-600' },
  ];

  return (
    <div className="bg-white">
      <section className="bg-blue-900 py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black uppercase mb-4">Statistik Desa</h1>
          <p className="text-blue-200">Visualisasi data dan angka capaian pembangunan desa Provinsi Sulawesi Tenggara.</p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((s, i) => (
            <div key={i} className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 flex flex-col items-center text-center">
              <div className={`w-12 h-12 ${s.color} rounded-2xl mb-4 shadow-lg`}></div>
              <div className="text-4xl font-black text-blue-900 mb-1">{s.value}</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100">
            <h3 className="text-2xl font-black text-blue-900 mb-8 uppercase tracking-tighter">Capaian Indeks Desa Membangun</h3>
            <div className="space-y-6">
              {[
                { name: 'Desa Mandiri', value: '10%' },
                { name: 'Desa Maju', value: '25%' },
                { name: 'Desa Berkembang', value: '45%' },
                { name: 'Desa Tertinggal', value: '20%' },
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-xs font-bold uppercase">
                    <span>{item.name}</span>
                    <span className="text-blue-900">{item.value}</span>
                  </div>
                  <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full" style={{ width: item.value }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-950 p-10 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
            <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter">Integrasi Portal Data</h3>
            <p className="text-blue-200 mb-8 leading-relaxed font-medium">
              Sistem informasi desa yang terintegrasi menyediakan akses data real-time bagi para pemangku kepentingan untuk mendukung pengambilan kebijakan berbasis data.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center"><i className="fas fa-check-circle text-amber-500 mr-3"></i> Profil Desa Sultra</li>
              <li className="flex items-center"><i className="fas fa-check-circle text-amber-500 mr-3"></i> Monitoring Dana Desa</li>
              <li className="flex items-center"><i className="fas fa-check-circle text-amber-500 mr-3"></i> Database BUMDes Terpadu</li>
            </ul>
            <button className="bg-white text-blue-900 px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-amber-500 hover:text-blue-950 transition-all">
              Buka Portal Data Terpadu
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataDesa;
