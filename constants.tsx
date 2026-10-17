
import { NewsItem, ServiceItem, AgendaItem, Announcement } from './types';

export const COLORS = {
  primary: '#1e3a8a', // Deep Blue
  secondary: '#d97706', // Golden Amber
  accent: '#10b981', // Emerald Green
};

export const OFFICIAL_INFO = {
  vision: "Mewujudkan Sulawesi Tenggara Yang Aman, Sejahtera, dan Bermartabat",
  missions: [
    "Meningkatkan kualitas hidup masyarakat agar dapat berdaulat dan aman dalam bidang ekonomi, pangan, pendidikan, kesehatan, lingkungan, politik, serta iman dan taqwa.",
    "Memajukan daya saing wilayah melalui penguatan ekonomi lokal dan peningkatan investasi.",
    "Mewujudkan birokrasi pemerintahan provinsi yang modern, tata kelola pemerintahan yang baik (good village governance) serta peningkatan kapasitas pemerintahan kecamatan dan kelurahan sebagai pusat pelayanan pemerintahan.",
    "Meningkatkan konektivitas dan kemitraan antar pemerintah, swasta, dan masyarakat dalam rangka peningkatan daya saing daerah melalui pembangunan dan perbaikan infrastruktur, dan aspek-aspek sosial ekonomi."
  ],
  address: "Jl. Haluoleo Komplek Bumi Praja Andounohu, Kendari - 93121",
  phone: "(0401) 3121XXX",
  email: "info@dpmd.sultraprov.go.id"
};

export const ANNOUNCEMENTS = [
  "Rencana Strategis Perubahan DPMD Sultra Tahun 2018-2023 Telah Ditetapkan",
  "Mewujudkan Sulawesi Tenggara yang Aman, Sejahtera, dan Bermartabat",
  "Penyaluran Dana Desa Tahap II Tahun 2024 Mulai Dilaksanakan",
  "Pendaftaran Lomba Desa Tingkat Provinsi Telah Dibuka"
];

export const ANNOUNCEMENT_LIST: Announcement[] = [
  {
    id: 1,
    title: "Surat Edaran Gubernur Terkait Pemanfaatan Dana Desa Untuk Ketahanan Pangan 2024",
    date: "28 Mei 2024",
    category: "Surat Edaran",
    isNew: true
  },
  {
    id: 2,
    title: "Pengumuman Hasil Seleksi Administrasi Lomba Desa Tingkat Provinsi Sultra",
    date: "25 Mei 2024",
    category: "Hasil Seleksi",
    isNew: true
  },
  {
    id: 3,
    title: "Jadwal Pelaksanaan Bimbingan Teknis Siskeudes Versi 2.0.6",
    date: "20 Mei 2024",
    category: "Pemberitahuan",
    isNew: false
  },
  {
    id: 4,
    title: "Keputusan Kepala Dinas Terkait Penetapan Desa Mandiri Tahun 2023",
    date: "15 Mei 2024",
    category: "SK Kadis",
    isNew: false
  },
  {
    id: 5,
    title: "Undangan Rapat Koordinasi Percepatan Penyaluran BLT Dana Desa",
    date: "10 Mei 2024",
    category: "Undangan",
    isNew: false
  }
];

export const SERVICES: ServiceItem[] = [
  { id: 1, name: 'Prodeskel', description: 'Profil Desa dan Kelurahan Provinsi Sultra', icon: 'fa-database', link: '#' },
  { id: 2, name: 'Siskeudes', description: 'Sistem Keuangan Desa Terintegrasi', icon: 'fa-money-bill-wave', link: '#' },
  { id: 3, name: 'Sipades', description: 'Sistem Informasi Pengelolaan Aset Desa', icon: 'fa-box', link: '#' },
  { id: 4, name: 'E-Planning', description: 'Perencanaan Pembangunan Desa Digital', icon: 'fa-chart-line', link: '#' },
];

export const AGENDA_DATA: AgendaItem[] = [
  {
    id: 1,
    title: 'Rapat Koordinasi Penyaluran Dana Desa Semester II',
    date: '15 Juni 2024',
    time: '09:00 - 13:00 WITA',
    location: 'Aula Bahteramas Kantor Gubernur Sultra',
    category: 'Rapat',
    description: 'Sinkronisasi data realisasi penyaluran dana desa tahap I dan persiapan penyaluran tahap II bagi seluruh Kepala PMD Kabupaten/Kota.'
  },
  {
    id: 2,
    title: 'Workshop Digitalisasi Administrasi Desa',
    date: '20 Juni 2024',
    time: '08:30 - 16:00 WITA',
    location: 'Hotel Plaza Kubra, Kendari',
    category: 'Workshop',
    description: 'Pelatihan intensif penggunaan aplikasi Prodeskel dan Siskeudes versi terbaru bagi operator desa terpilih.'
  },
  {
    id: 3,
    title: 'Sosialisasi Pembentukan BUMDes Bersama',
    date: '25 Juni 2024',
    time: '10:00 - 12:00 WITA',
    location: 'Virtual via Zoom Meeting',
    category: 'Sosialisasi',
    description: 'Panduan tata cara pembentukan dan legalitas BUMDes Bersama untuk mengoptimalkan potensi ekonomi antar desa.'
  }
];

export const DUMMY_NEWS: NewsItem[] = [
  {
    id: 1,
    title: 'Pelatihan Peningkatan Kapasitas Aparatur Desa Se-Sulawesi Tenggara',
    excerpt: 'DPMD Sultra menyelenggarakan bimbingan teknis untuk memperkuat tata kelola keuangan desa di 17 Kabupaten/Kota.',
    date: '15 Mei 2024',
    category: 'Pembangunan',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Pencanangan Desa Digital Mandiri di Kawasan Pesisir Buton',
    excerpt: 'Langkah strategis DPMD Sultra dalam mempercepat digitalisasi layanan masyarakat hingga ke pelosok desa.',
    date: '12 Mei 2024',
    category: 'Inovasi',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Gelar Teknologi Tepat Guna Nusantara XXV Tahun 2024',
    excerpt: 'Inovator dari Sulawesi Tenggara menampilkan karya unggulan dalam pemanfaatan limbah pertanian di ajang nasional.',
    date: '10 Mei 2024',
    category: 'Teknologi',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop'
  }
];

export const GALLERY_DATA = [
  { id: 1, title: "Bimtek Keuangan Desa", date: "20 Mei 2024", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop", category: "Kegiatan" },
  { id: 2, title: "Kunjungan Lapangan Konawe", date: "18 Mei 2024", image: "https://images.unsplash.com/photo-1577416416829-d4368c3b853d?q=80&w=1200&auto=format&fit=crop", category: "Pembangunan" },
  { id: 3, title: "Rapat Koordinasi BUMDes", date: "15 Mei 2024", image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop", category: "Pemberdayaan" },
  { id: 4, title: "Lomba Desa Tingkat Provinsi", date: "10 Mei 2024", image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=1200&auto=format&fit=crop", category: "Kegiatan" },
  { id: 5, title: "Launching Desa Digital", date: "05 Mei 2024", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop", category: "Inovasi" },
  { id: 6, title: "Penyaluran Bantuan Sembako", date: "02 Mei 2024", image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop", category: "Sosial" },
];

export const INFOGRAPHICS = [
  { id: 1, title: "Alur Penyaluran Dana Desa 2024", image: "https://images.unsplash.com/photo-1551288049-bbda3865c170?q=80&w=400&h=600&fit=crop" },
  { id: 2, title: "Statistik Kemiskinan Ekstrem Desa", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&h=600&fit=crop" },
  { id: 3, title: "Capaian Indeks Desa Membangun", image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=400&h=600&fit=crop" },
];

export const VIDEOS = [
  { id: 1, title: "Profil DPMD Sultra 2024", thumbnail: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=600&h=350&fit=crop" },
  { id: 2, title: "Sukses BUMDes Konawe Selatan", thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&h=350&fit=crop" },
];
