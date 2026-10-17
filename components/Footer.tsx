
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                className="h-16 w-auto" 
                src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Coat_of_arms_of_South_East_Sulawesi.png" 
                alt="Logo Sultra" 
              />
              <h2 className="font-bold text-lg uppercase tracking-widest">DPMD SULTRA</h2>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Dinas Pemberdayaan Masyarakat dan Desa Provinsi Sulawesi Tenggara berkomitmen mewujudkan desa mandiri dan masyarakat sejahtera melalui inovasi dan pemberdayaan berkelanjutan.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-blue-900 transition-all">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-blue-900 transition-all">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-blue-900 transition-all">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 border-b border-blue-800 pb-2 uppercase tracking-tight text-amber-500">Navigasi Cepat</h3>
            <ul className="space-y-4 text-sm text-blue-200">
              <li><Link to="/profile" className="hover:text-white transition-colors">Visi & Misi</Link></li>
              <li><Link to="/agenda" className="hover:text-white transition-colors">Agenda Kegiatan</Link></li>
              <li><Link to="/announcements" className="hover:text-white transition-colors">Pengumuman Resmi</Link></li>
              <li><Link to="/data-desa" className="hover:text-white transition-colors">Data Desa Sultra</Link></li>
              <li><Link to="/regulations" className="hover:text-white transition-colors">Produk Hukum</Link></li>
              <li><Link to="/ppid" className="hover:text-white transition-colors">PPID Utama</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 border-b border-blue-800 pb-2 uppercase tracking-tight text-amber-500">Layanan Utama</h3>
            <ul className="space-y-4 text-sm text-blue-200">
              <li><Link to="/services" className="hover:text-white transition-colors">Aplikasi PRODESKEL</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Aplikasi SISKEUDES</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Sistem SIPADES</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">E-Planning Desa</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 border-b border-blue-800 pb-2 uppercase tracking-tight text-amber-500">Akses Pengelola</h3>
            <ul className="space-y-4 text-sm text-blue-200">
              <li>
                <Link to="/admin" className="flex items-center text-amber-500 hover:text-white transition-colors font-bold uppercase tracking-widest text-[10px]">
                  <i className="fas fa-lock mr-2"></i> Portal Admin (Control Panel)
                </Link>
              </li>
              <li className="flex items-start space-x-3 text-blue-200">
                <i className="fas fa-map-marker-alt mt-1 text-amber-500"></i>
                <span>Jl. Haluoleo Komplek Bumi Praja Andounohu, Kendari - 93121</span>
              </li>
              <li className="flex items-center space-x-3 text-blue-200">
                <i className="fas fa-phone-alt text-amber-500"></i>
                <span>(0401) 3121XXX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-blue-900 text-center text-[10px] text-blue-400 uppercase tracking-[0.3em]">
          <p>© 2024 Dinas Pemberdayaan Masyarakat dan Desa Provinsi Sulawesi Tenggara. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
