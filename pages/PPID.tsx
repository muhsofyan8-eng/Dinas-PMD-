
import React from 'react';

const PPID: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-blue-900 py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black uppercase mb-4">PPID</h1>
          <p className="text-blue-200">Pejabat Pengelola Informasi dan Dokumentasi - Transparansi Informasi Publik DPMD Sultra.</p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl font-black text-blue-900 mb-6">Maklumat Pelayanan</h2>
              <div className="bg-blue-50 p-8 rounded-3xl border-l-8 border-amber-500 italic text-gray-700">
                "Kami berkomitmen memberikan pelayanan informasi publik dengan cepat, tepat waktu, biaya ringan, dan cara sederhana sesuai dengan standar operasional prosedur yang telah ditetapkan."
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-black text-blue-900">Alur Permohonan Informasi</h2>
              <div className="space-y-4">
                {[
                  "Pemohon mengisi formulir permohonan informasi.",
                  "Petugas memberikan tanda bukti penerimaan.",
                  "PPID memproses permintaan dalam jangka waktu maksimal 10 hari kerja.",
                  "Pemohon menerima pemberitahuan tertulis mengenai status permohonan.",
                  "Pemohon menerima informasi yang diminta atau alasan penolakan."
                ].map((step, i) => (
                  <div key={i} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl">
                    <div className="w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-gray-700 font-medium">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-blue-950 p-8 rounded-3xl text-white shadow-2xl">
              <h3 className="text-xl font-bold mb-6 border-b border-white/20 pb-4 uppercase">Kategori Informasi</h3>
              <ul className="space-y-4 text-sm font-medium">
                <li className="flex items-center hover:text-amber-500 cursor-pointer">
                  <i className="fas fa-file-pdf mr-3"></i> Informasi Berkala
                </li>
                <li className="flex items-center hover:text-amber-500 cursor-pointer">
                  <i className="fas fa-bolt mr-3"></i> Informasi Serta Merta
                </li>
                <li className="flex items-center hover:text-amber-500 cursor-pointer">
                  <i className="fas fa-clock mr-3"></i> Informasi Tersedia Setiap Saat
                </li>
                <li className="flex items-center hover:text-amber-500 cursor-pointer">
                  <i className="fas fa-lock mr-3"></i> Informasi Dikecualikan
                </li>
              </ul>
              <button className="w-full mt-8 bg-amber-500 text-blue-950 py-3 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-amber-400 transition-all">
                Ajukan Online
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PPID;
