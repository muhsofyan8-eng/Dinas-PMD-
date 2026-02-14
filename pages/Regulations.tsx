
import React from 'react';

const Regulations: React.FC = () => {
  const docs = [
    { type: 'UU', title: 'Undang-Undang Nomor 6 Tahun 2014 tentang Desa', date: '2014' },
    { type: 'PP', title: 'PP Nomor 11 Tahun 2021 tentang BUMDes', date: '2021' },
    { type: 'PERGUB', title: 'Pergub Sultra Nomor 65 Tahun 2016 tentang Kedudukan DPMD', date: '2016' },
    { type: 'PERMEN', title: 'Permendesa Nomor 3 Tahun 2021 tentang Pendaftaran BUMDes', date: '2021' },
    { type: 'PERDA', title: 'Perda Provinsi Sultra Nomor 13 Tahun 2016 tentang OPD', date: '2016' },
  ];

  return (
    <div className="bg-gray-50">
      <section className="bg-blue-900 py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black uppercase mb-4">Produk Hukum</h1>
          <p className="text-blue-200">Basis regulasi dan kebijakan pemberdayaan desa di Sulawesi Tenggara.</p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100">
          <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-blue-50/50">
            <h2 className="text-xl font-black text-blue-900 uppercase">Arsip Regulasi</h2>
            <div className="relative">
              <input type="text" placeholder="Cari regulasi..." className="pl-10 pr-4 py-2 rounded-full border border-gray-200 text-sm focus:ring-2 focus:ring-blue-900 outline-none w-64" />
              <i className="fas fa-search absolute left-4 top-2.5 text-gray-400"></i>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-400 text-[10px] font-black uppercase tracking-widest border-b border-gray-100">
                  <th className="px-8 py-4">Tipe</th>
                  <th className="px-8 py-4">Judul Dokumen</th>
                  <th className="px-8 py-4">Tahun</th>
                  <th className="px-8 py-4">Aksi</th>
                </tr>
              </thead>
              <tbody className="text-sm font-medium">
                {docs.map((doc, idx) => (
                  <tr key={idx} className="hover:bg-blue-50/50 border-b border-gray-50 transition-colors">
                    <td className="px-8 py-6">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black ${
                        doc.type === 'UU' ? 'bg-red-100 text-red-600' : 
                        doc.type === 'PERGUB' ? 'bg-amber-100 text-amber-600' : 'bg-blue-100 text-blue-600'
                      }`}>
                        {doc.type}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-blue-900">{doc.title}</td>
                    <td className="px-8 py-6 text-gray-500">{doc.date}</td>
                    <td className="px-8 py-6">
                      <button className="text-blue-900 hover:text-amber-500 font-bold flex items-center space-x-2 transition-colors">
                        <i className="fas fa-download"></i> <span>Unduh</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Regulations;
