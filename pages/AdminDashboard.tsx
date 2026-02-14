
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Simple mock login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') { // Contoh password sederhana
      setIsLoggedIn(true);
    } else {
      alert('Password salah!');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-blue-950 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-[2rem] shadow-2xl w-full max-w-md">
          <div className="text-center mb-8">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Coat_of_arms_of_South_East_Sulawesi.png" 
              alt="Logo" 
              className="h-20 mx-auto mb-4"
            />
            <h1 className="text-2xl font-black text-blue-900 uppercase">Control Panel</h1>
            <p className="text-gray-500 text-sm">Portal Pengelola DPMD Sultra</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest block mb-2">Password Akses</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-blue-900 outline-none transition-all"
                placeholder="Masukkan password..."
              />
            </div>
            <button type="submit" className="w-full bg-blue-900 text-white py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-amber-500 hover:text-blue-900 transition-all shadow-xl">
              Masuk Dashboard
            </button>
            <Link to="/" className="block text-center text-xs font-bold text-gray-400 hover:text-blue-900">
              <i className="fas fa-arrow-left mr-2"></i> Kembali ke Website
            </Link>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white flex flex-col">
        <div className="p-8 border-b border-white/10">
          <div className="flex items-center space-x-3">
             <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Coat_of_arms_of_South_East_Sulawesi.png" className="h-10" alt="Logo" />
             <span className="font-black text-xs uppercase tracking-tighter">Admin Portal</span>
          </div>
        </div>
        <nav className="flex-1 p-6 space-y-2">
          {[
            { id: 'overview', label: 'Ringkasan', icon: 'fa-th-large' },
            { id: 'news', label: 'Kelola Berita', icon: 'fa-newspaper' },
            { id: 'announcements', label: 'Pengumuman', icon: 'fa-bullhorn' },
            { id: 'services', label: 'Layanan Digital', icon: 'fa-cogs' },
            { id: 'users', label: 'User Admin', icon: 'fa-users-cog' },
          ].map((item) => (
            <button 
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-4 px-4 py-3 rounded-xl font-bold text-sm transition-all ${
                activeTab === item.id ? 'bg-amber-500 text-blue-950' : 'hover:bg-white/5'
              }`}
            >
              <i className={`fas ${item.icon} w-5`}></i>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="p-6 border-t border-white/10">
          <button onClick={() => setIsLoggedIn(false)} className="w-full bg-red-500/20 text-red-400 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all">
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-black text-blue-900 uppercase tracking-tighter">
              {activeTab === 'overview' && 'Dashboard Overview'}
              {activeTab === 'news' && 'Manajemen Berita'}
              {activeTab === 'announcements' && 'Update Pengumuman'}
              {activeTab === 'services' && 'Konfigurasi Layanan'}
            </h2>
            <p className="text-gray-500 text-sm font-medium">Selamat datang, Administrator DPMD.</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-3 bg-white rounded-xl shadow-sm text-gray-400 hover:text-blue-900">
               <i className="fas fa-bell"></i>
            </button>
            <div className="h-10 w-10 bg-amber-500 rounded-full flex items-center justify-center font-black text-blue-900 shadow-lg">
               A
            </div>
          </div>
        </header>

        {activeTab === 'overview' && (
          <div className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: 'Total Berita', val: '124', icon: 'fa-copy', color: 'text-blue-600' },
                { label: 'Data Desa Terinput', val: '1.911', icon: 'fa-database', color: 'text-emerald-600' },
                { label: 'Aspirasi Masuk', val: '12', icon: 'fa-envelope-open', color: 'text-amber-600' },
              ].map((s, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{s.label}</p>
                    <p className="text-3xl font-black text-blue-900">{s.val}</p>
                  </div>
                  <div className={`text-2xl ${s.color}`}>
                    <i className={`fas ${s.icon}`}></i>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
               <h3 className="font-black text-blue-900 uppercase mb-6 flex items-center">
                 <i className="fas fa-history mr-3 text-amber-500"></i> Aktifitas Terakhir
               </h3>
               <div className="space-y-4">
                  {[
                    'Update Pengumuman "Penyaluran Dana Desa Tahap II"',
                    'Menambahkan Berita "Pelatihan Peningkatan Kapasitas"',
                    'Update Profil Pejabat Struktural',
                  ].map((act, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                       <span className="text-sm font-medium text-gray-600">{act}</span>
                       <span className="text-[10px] font-bold text-gray-400 uppercase">2 Jam Lalu</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        )}

        {activeTab === 'news' && (
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
             <div className="p-8 border-b border-gray-100 flex justify-between items-center">
                <h3 className="font-black text-blue-900 uppercase">Daftar Artikel Berita</h3>
                <button className="bg-blue-900 text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center shadow-lg hover:bg-amber-500 transition-all">
                  <i className="fas fa-plus mr-2"></i> Tulis Berita
                </button>
             </div>
             <table className="w-full text-left">
                <thead className="bg-gray-50 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                   <tr>
                      <th className="px-8 py-4">Judul Artikel</th>
                      <th className="px-8 py-4">Kategori</th>
                      <th className="px-8 py-4">Status</th>
                      <th className="px-8 py-4">Aksi</th>
                   </tr>
                </thead>
                <tbody className="text-sm font-bold text-blue-900">
                   {[1, 2, 3].map((_, i) => (
                     <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50">
                        <td className="px-8 py-6">Pelatihan Peningkatan Kapasitas Aparatur...</td>
                        <td className="px-8 py-6"><span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-[10px]">Pembangunan</span></td>
                        <td className="px-8 py-6"><span className="text-emerald-500 flex items-center"><i className="fas fa-check-circle mr-2"></i> Publish</span></td>
                        <td className="px-8 py-6 space-x-2">
                           <button className="p-2 text-blue-400 hover:text-blue-900"><i className="fas fa-edit"></i></button>
                           <button className="p-2 text-red-400 hover:text-red-600"><i className="fas fa-trash"></i></button>
                        </td>
                     </tr>
                   ))}
                </tbody>
             </table>
          </div>
        )}

        {(activeTab === 'announcements' || activeTab === 'services') && (
          <div className="max-w-2xl bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
             <div className="space-y-8">
                <div>
                   <label className="text-xs font-black text-gray-400 uppercase tracking-widest block mb-3">Teks Headline (Marquee)</label>
                   <textarea rows={3} className="w-full p-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-blue-900 focus:bg-white outline-none transition-all" defaultValue="Rencana Strategis Perubahan DPMD Sultra Tahun 2018-2023 Telah Ditetapkan..."></textarea>
                </div>
                <button className="bg-amber-500 text-blue-950 px-10 py-4 rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl hover:scale-105 transition-all">
                   Simpan Perubahan
                </button>
             </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
