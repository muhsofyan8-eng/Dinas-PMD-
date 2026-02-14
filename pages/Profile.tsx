
import React from 'react';
import { OFFICIAL_INFO } from '../constants';

const Profile: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header Profile */}
      <section className="bg-blue-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">Profil Dinas</h1>
          <p className="text-blue-200 max-w-2xl mx-auto">Mengenal lebih dekat Dinas Pemberdayaan Masyarakat dan Desa Provinsi Sulawesi Tenggara berdasarkan Rencana Strategis.</p>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-amber-500/20 rounded-3xl blur-xl group-hover:bg-amber-500/30 transition-all"></div>
            <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop" alt="Team Work" className="relative rounded-3xl shadow-2xl" />
          </div>
          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-1 bg-amber-500"></div>
                <h2 className="text-3xl font-black text-blue-900 uppercase">Visi</h2>
              </div>
              <p className="text-gray-800 text-xl font-medium leading-relaxed italic border-l-4 border-amber-500 pl-6 bg-amber-50/50 py-4 rounded-r-xl">
                "{OFFICIAL_INFO.vision}"
              </p>
            </div>
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-1 bg-amber-500"></div>
                <h2 className="text-3xl font-black text-blue-900 uppercase">Misi</h2>
              </div>
              <ul className="space-y-6">
                {OFFICIAL_INFO.missions.map((misi, i) => (
                  <li key={i} className="flex items-start space-x-4 group">
                    <span className="bg-blue-900 text-white w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 font-black text-sm mt-1 shadow-lg group-hover:bg-amber-500 group-hover:text-blue-900 transition-colors">
                      {i+1}
                    </span>
                    <span className="text-gray-700 leading-relaxed font-medium">{misi}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Kepegawaian & Sumber Daya */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl">
               <h3 className="text-2xl font-black text-blue-900 mb-8 uppercase tracking-tighter">Sumber Daya Manusia (2020)</h3>
               <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: 'Golongan IV', val: '9 Orang' },
                    { label: 'Golongan III', val: '76 Orang' },
                    { label: 'Golongan II', val: '7 Orang' },
                    { label: 'Kontak Sopir', val: '2 Orang' },
                  ].map((it, i) => (
                    <div key={i} className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                      <div className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">{it.label}</div>
                      <div className="text-xl font-black text-blue-900">{it.val}</div>
                    </div>
                  ))}
               </div>
               <div className="mt-8 pt-6 border-t border-gray-100">
                 <p className="text-sm text-gray-500 font-medium">Total Pegawai: <span className="font-black text-blue-900">92 Orang</span> (Data Renstra 2018-2023)</p>
               </div>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl">
               <h3 className="text-2xl font-black text-blue-900 mb-8 uppercase tracking-tighter">Realisasi Anggaran</h3>
               <div className="space-y-6">
                  {[
                    { year: '2018', real: '11.897.590.506', perc: '96%' },
                    { year: '2019', real: '12.127.109.439', perc: '90%' },
                    { year: '2020', real: '10.862.769.927', perc: '85%' },
                  ].map((it, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-2xl border border-gray-100">
                      <div>
                        <span className="text-xs font-black text-gray-400 uppercase mr-3">Tahun {it.year}</span>
                        <span className="text-blue-900 font-bold">Rp {it.real}</span>
                      </div>
                      <span className="bg-amber-100 text-amber-600 px-3 py-1 rounded-full text-[10px] font-black">{it.perc}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Struktur Organisasi */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-blue-900 text-3xl md:text-4xl font-black uppercase tracking-tighter">Struktur Organisasi</h2>
            <div className="h-1.5 w-24 bg-amber-500 mx-auto rounded-full"></div>
          </div>
          <div className="space-y-12">
             <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {[
                  "Bidang Pemerintahan Desa & Kelurahan",
                  "Bidang Pembangunan Desa & Kawasan Perdesaan",
                  "Bidang Pemberdayaan Kelembagaan & Sosbud Masyarakat",
                  "Bidang Usaha Ekonomi Desa, SDA & Teknologi Tepat Guna"
                ].map((bidang, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border-2 border-gray-100 border-b-4 border-b-blue-900 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-900 font-black">
                      {i+1}
                    </div>
                    <span className="text-blue-950 font-bold text-xs uppercase leading-tight">{bidang}</span>
                  </div>
                ))}
             </div>
             <div className="bg-gray-50 p-8 rounded-3xl shadow-inner border border-gray-100 overflow-hidden text-center">
                <p className="text-gray-400 font-black uppercase tracking-widest text-xs mb-8">Visualisasi Hierarki Dinas</p>
                <div className="max-w-xl mx-auto space-y-4">
                   <div className="bg-blue-900 text-white p-4 rounded-xl font-bold">KEPALA DINAS</div>
                   <div className="w-1 h-8 bg-gray-300 mx-auto"></div>
                   <div className="bg-blue-800 text-white p-4 rounded-xl font-bold">SEKRETARIS</div>
                   <div className="w-1 h-8 bg-gray-300 mx-auto"></div>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="bg-amber-500 text-blue-950 p-3 rounded-xl text-[10px] font-black uppercase">Subbag Umum</div>
                      <div className="bg-amber-500 text-blue-950 p-3 rounded-xl text-[10px] font-black uppercase">Subbag Keuangan</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
