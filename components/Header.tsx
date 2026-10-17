
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { OFFICIAL_INFO } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Beranda', to: '/' },
    { name: 'Profil', to: '/profile' },
    { name: 'Agenda', to: '/agenda' },
    { name: 'Pengumuman', to: '/announcements' },
    { name: 'Berita', to: '/news' },
    { name: 'Layanan', to: '/services' },
    { name: 'Galeri', to: '/gallery' },
    { name: 'PPID', to: '/ppid' },
    { name: 'Kontak', to: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 shadow-sm">
      {/* Top Bar */}
      <div className="bg-blue-950 text-white text-[10px] md:text-xs py-2 px-4 md:px-12 hidden sm:flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <span className="flex items-center"><i className="fas fa-phone-alt mr-2 text-amber-500"></i> {OFFICIAL_INFO.phone}</span>
          <span className="flex items-center"><i className="fas fa-envelope mr-2 text-amber-500"></i> {OFFICIAL_INFO.email}</span>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-amber-500 transition-colors"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="hover:text-amber-500 transition-colors"><i className="fab fa-instagram"></i></a>
          <a href="#" className="hover:text-amber-500 transition-colors"><i className="fab fa-youtube"></i></a>
          <div className="h-3 w-[1px] bg-blue-800 mx-2"></div>
          <Link to="/data-desa" className="font-bold hover:text-amber-500 transition-colors uppercase tracking-widest flex items-center">
            Portal Data <i className="fas fa-external-link-alt ml-1"></i>
          </Link>
        </div>
      </div>

      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-24">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center space-x-3 group">
                <img 
                  className="h-14 w-auto md:h-16 transition-transform group-hover:scale-110" 
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Coat_of_arms_of_South_East_Sulawesi.png" 
                  alt="Logo Sultra" 
                />
                <div className="border-l-2 border-gray-200 pl-3">
                  <h1 className="text-blue-900 font-black text-[10px] md:text-sm leading-tight uppercase">
                    Dinas Pemberdayaan Masyarakat<br/>
                    <span className="text-blue-700">dan Desa Prov. Sultra</span>
                  </h1>
                </div>
              </Link>
            </div>
            
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.name} 
                  to={link.to} 
                  className={({ isActive }) => 
                    `text-[10px] xl:text-[11px] font-black uppercase tracking-tighter transition-all hover:text-blue-900 ${
                      isActive ? 'text-blue-900 border-b-2 border-amber-500 pb-1' : 'text-gray-500'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="h-6 w-[1px] bg-gray-200"></div>
              <button className="text-gray-500 hover:text-blue-900 p-2">
                <i className="fas fa-search text-lg"></i>
              </button>
            </div>

            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-blue-900 p-2 focus:outline-none"
              >
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 py-6 px-4 space-y-4 shadow-2xl animate-fadeIn">
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.to} 
                className={({ isActive }) => 
                  `block px-4 py-3 rounded-xl font-black text-sm uppercase tracking-widest ${
                    isActive ? 'bg-blue-900 text-white' : 'text-gray-700 hover:bg-blue-50'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-4 flex justify-between items-center border-t border-gray-100">
               <Link to="/services" onClick={() => setIsMenuOpen(false)} className="bg-amber-500 text-blue-950 px-6 py-4 rounded-xl font-black w-full text-center uppercase text-xs tracking-widest">
                Layanan Digital
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
