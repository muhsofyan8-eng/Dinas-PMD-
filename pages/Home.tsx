
import React from 'react';
import { Link } from 'react-router-dom';
import NewsSlider from '../components/NewsSlider';
import { SERVICES, DUMMY_NEWS, ANNOUNCEMENTS, ANNOUNCEMENT_LIST, INFOGRAPHICS, VIDEOS, OFFICIAL_INFO } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Announcement Marquee - Now right below menu */}
      <div className="bg-amber-500 py-2.5 overflow-hidden whitespace-nowrap border-b border-amber-600 z-40 relative">
        <div className="animate-marquee inline-block">
          {ANNOUNCEMENTS.map((text, i) => (
            <span key={i} className="mx-8 font-bold text-blue-950 text-sm flex items-center inline-flex">
              <i className="fas fa-bullhorn mr-3"></i> {text}
            </span>
          ))}
          {ANNOUNCEMENTS.map((text, i) => (
            <span key={`dup-${i}`} className="mx-8 font-bold text-blue-950 text-sm flex items-center inline-flex">
              <i className="fas fa-bullhorn mr-3"></i> {text}
            </span>
          ))}
        </div>
      </div>

      {/* News Slider - Now below the marquee */}
      <NewsSlider />

      {/* Vision Section */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
           <div className="md:w-1/2 space-y-6">
              <h4 className="text-blue-900 font-black tracking-[0.2em] uppercase text-xs flex items-center">
                <span className="w-8 h-[2px] bg-amber-500 mr-4"></span>
                Visi Pemerintah Provinsi Sultra
              </h4>
              <h2 className="text-3xl md:text-5xl font-black text-blue-950 leading-tight uppercase tracking-tighter">
                Mewujudkan Sultra <span className="text-amber-600 italic">Aman & Bermartabat</span>
              </h2>
              <p className="text-gray-600 text-lg font-medium leading-relaxed border-l-4 border-amber-500 pl-6 bg-blue-50/50 py-4 rounded-r-xl">
                "{OFFICIAL_INFO.vision}"
              </p>
              <div className="flex space-x-4 pt-4">
                 <Link to="/profile" className="bg-blue-900 text-white px-8 py-4 rounded-xl font-bold uppercase text-xs tracking-widest shadow-xl hover:bg-blue-800 transition-all">
                   Selengkapnya
                 </Link>
                 <Link to="/data-desa" className="bg-white border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-blue-50 transition-all">
                   Data Desa
                 </Link>
              </div>
           </div>
           <div className="md:w-1/2 relative">
              <div className="absolute -inset-4 bg-amber-500/10 rounded-[3rem] blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1589146142502-094e63777d10?q=80&w=1000&auto=format&fit=crop" 
                alt="Sultra Vision" 
                className="relative rounded-[2.5rem] shadow-2xl border-8 border-white object-cover h-[400px] w-full"
              />
           </div>
        </div>
      </section>

      {/* Quick Services Strip */}
      <section className="bg-gray-50 py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-black text-blue-900 uppercase tracking-tighter">Layanan Portal Desa</h2>
             <p className="text-gray-500 font-medium">Akses cepat aplikasi pendukung tata kelola desa Sultra.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <Link 
                key={service.id} 
                to="/services"
                className="group flex flex-col items-center text-center p-8 bg-white rounded-3xl hover:bg-blue-900 transition-all border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="w-20 h-20 bg-blue-50 rounded-[2rem] flex items-center justify-center text-blue-900 mb-6 group-hover:bg-amber-500 group-hover:text-blue-950 transition-all shadow-sm group-hover:rotate-6">
                  <i className={`fas ${service.icon} text-3xl`}></i>
                </div>
                <h3 className="text-blue-950 group-hover:text-white font-black text-sm uppercase tracking-widest mb-2">{service.name}</h3>
                <p className="text-[11px] text-gray-500 group-hover:text-blue-200 font-bold uppercase tracking-tighter">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="relative -mt-12 z-30 max-w-7xl mx-auto px-4 w-full">
        <div className="bg-blue-900 rounded-[2.5rem] shadow-2xl grid grid-cols-2 md:grid-cols-4 p-10 border border-white/10 text-white backdrop-blur-xl">
          {[
            { label: 'Kabupaten/Kota', count: '17', icon: 'fa-landmark' },
            { label: 'Kecamatan', count: '221', icon: 'fa-map-marked-alt' },
            { label: 'Desa (2020)', count: '1.911', icon: 'fa-house-user' },
            { label: 'BUMDes Aktif', count: '1.419', icon: 'fa-store' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 border-r last:border-0 border-white/10">
              <div className="text-amber-500 mb-3">
                <i className={`fas ${stat.icon} text-2xl`}></i>
              </div>
              <div className="text-4xl font-black">{stat.count}</div>
              <div className="text-[10px] text-blue-300 font-bold uppercase tracking-widest mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            <div className="lg:col-span-2 space-y-16">
              <div className="flex justify-between items-end border-b-2 border-blue-900 pb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-10 bg-amber-500 rounded-full"></div>
                  <h2 className="text-blue-900 text-4xl font-black uppercase tracking-tighter italic">Informasi Publik</h2>
                </div>
                <Link to="/news" className="text-blue-900 font-black text-xs uppercase hover:text-amber-600 transition-all flex items-center tracking-widest">
                  Lihat Arsip <i className="fas fa-arrow-right ml-3 text-amber-500"></i>
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-12">
                {DUMMY_NEWS.map((item) => (
                  <div key={item.id} className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all flex flex-col md:flex-row border border-gray-100">
                    <div className="md:w-80 h-72 overflow-hidden relative flex-shrink-0">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                      <div className="absolute top-6 left-6 bg-blue-900/90 backdrop-blur-md text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                        {item.category}
                      </div>
                    </div>
                    <div className="p-10 flex-1 flex flex-col">
                      <div className="text-gray-400 text-xs font-black mb-4 flex items-center uppercase tracking-widest">
                        <i className="far fa-calendar-alt mr-2 text-amber-500"></i> {item.date}
                      </div>
                      <h3 className="text-2xl font-black text-blue-950 mb-5 leading-tight group-hover:text-amber-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-1 line-clamp-3 font-medium">
                        {item.excerpt}
                      </p>
                      <Link to="/news" className="flex items-center text-blue-900 font-black text-xs uppercase tracking-[0.25em] group-hover:translate-x-3 transition-transform">
                        Baca Selengkapnya <i className="fas fa-long-arrow-alt-right ml-4 text-amber-500 text-lg"></i>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-16">
              {/* Official Announcements Widget */}
              <div className="space-y-8">
                <div className="flex items-center space-x-4 border-b-2 border-blue-900 pb-6">
                  <div className="w-2 h-10 bg-amber-500 rounded-full"></div>
                  <h2 className="text-blue-900 text-2xl font-black uppercase tracking-tighter">Pengumuman Terbaru</h2>
                </div>
                <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 space-y-6">
                   {ANNOUNCEMENT_LIST.slice(0, 3).map((item) => (
                     <Link key={item.id} to="/announcements" className="block group border-b border-gray-200 last:border-0 pb-4 last:pb-0 hover:bg-white transition-colors rounded-xl p-3 -mx-3">
                        <div className="flex items-center space-x-2 mb-2">
                           <span className="text-[8px] font-black uppercase tracking-widest bg-blue-900 text-white px-2 py-0.5 rounded">
                             {item.category}
                           </span>
                           <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{item.date}</span>
                        </div>
                        <h4 className="text-blue-950 group-hover:text-amber-600 font-black text-xs uppercase leading-tight tracking-tighter transition-colors line-clamp-2">
                          {item.title}
                        </h4>
                     </Link>
                   ))}
                   <Link to="/announcements" className="w-full py-4 bg-blue-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest text-center block hover:bg-amber-500 hover:text-blue-950 transition-colors">
                     Lihat Semua Pengumuman
                   </Link>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex items-center space-x-4 border-b-2 border-blue-900 pb-6">
                  <div className="w-2 h-10 bg-amber-500 rounded-full"></div>
                  <h2 className="text-blue-900 text-2xl font-black uppercase tracking-tighter">Infografis</h2>
                </div>
                <div className="space-y-8">
                  {INFOGRAPHICS.map((info) => (
                    <div key={info.id} className="group relative rounded-[2rem] overflow-hidden aspect-[4/5] cursor-pointer shadow-xl border border-white">
                      <img src={info.image} alt={info.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/20 to-transparent"></div>
                      <div className="absolute bottom-8 left-8 right-8">
                        <h4 className="text-white font-black text-lg leading-tight uppercase tracking-tight">{info.title}</h4>
                      </div>
                    </div>
                  ))}
                  <Link to="/data-desa" className="w-full py-5 border-2 border-blue-900 text-blue-900 font-black rounded-2xl text-xs uppercase tracking-[0.2em] hover:bg-blue-900 hover:text-white transition-all shadow-lg hover:shadow-blue-900/20 text-center block">
                    Galeri Infografis
                  </Link>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex items-center space-x-4 border-b-2 border-blue-900 pb-6">
                  <div className="w-2 h-10 bg-amber-500 rounded-full"></div>
                  <h2 className="text-blue-900 text-2xl font-black uppercase tracking-tighter">Video Terbaru</h2>
                </div>
                <div className="space-y-8">
                  {VIDEOS.map((vid) => (
                    <div key={vid.id} className="group relative rounded-[2rem] overflow-hidden shadow-xl cursor-pointer">
                      <img src={vid.thumbnail} alt={vid.title} className="w-full h-52 object-cover" />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all backdrop-blur-[2px]">
                         <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-blue-900 shadow-2xl transform scale-75 group-hover:scale-100 transition-transform">
                           <i className="fas fa-play ml-1.5 text-xl"></i>
                         </div>
                      </div>
                      <div className="bg-white p-6">
                        <h4 className="font-black text-sm text-blue-950 uppercase tracking-tighter">{vid.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* AI Assistant Banner */}
      <section className="bg-blue-950 py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/30 rounded-full -mr-64 -mt-64 blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full -ml-64 -mb-64 blur-[100px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center relative z-10">
          <div className="w-24 h-24 bg-amber-500 rounded-[2rem] flex items-center justify-center mb-10 rotate-12 shadow-2xl animate-bounce">
            <i className="fas fa-robot text-blue-950 text-4xl"></i>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tighter max-w-4xl leading-tight">
            Asisten Digital <br/> <span className="text-amber-500">Bumi Praja Sultra</span>
          </h2>
          <p className="text-blue-200 text-xl md:text-2xl max-w-3xl mb-16 leading-relaxed font-medium">
            Portal cerdas berbasis AI untuk menjawab kebutuhan informasi desa se-Sulawesi Tenggara dalam hitungan detik.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link to="/contact" className="bg-white text-blue-900 font-black px-14 py-5 rounded-[2rem] hover:bg-amber-500 hover:text-blue-950 transition-all shadow-2xl uppercase text-sm tracking-[0.2em] transform hover:scale-105">
              Mulai Konsultasi <i className="fas fa-comment-dots ml-3 text-lg"></i>
            </Link>
            <Link to="/services" className="bg-blue-900 text-white font-bold px-14 py-5 rounded-[2rem] border-2 border-blue-800 hover:bg-blue-800 transition-all uppercase text-sm tracking-[0.2em] transform hover:scale-105 shadow-xl">
              Panduan Portal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
