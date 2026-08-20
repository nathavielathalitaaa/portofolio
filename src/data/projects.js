// =========================================================================
// DATA PROJECT PORTOFOLIO NATHAVIELA THALITA KIRANA
// Parsed from projek_lita.txt
// =========================================================================

export const PROJECTS_DATA = [
  {
    id: 'deployx-hris',
    title: 'DeployX — HRIS Sinergi Hotel & Villa',
    subtitle: 'Human Resource Information System untuk Digitalisasi Manajemen SDM',
    description: 'Sistem informasi manajemen sumber daya manusia berbasis web yang dirancang untuk membantu Sinergi Hotel & Villa mengelola data karyawan, absensi, pengajuan dokumen, proses approval, serta administrasi HR secara terpusat dan terdigitalisasi.',
    details: [
      'Mengelola data dan profil karyawan secara terpusat.',
      'Menyediakan sistem pengajuan dan approval dokumen secara digital.',
      'Menerapkan multi-level approval sesuai role dan kewenangan pengguna.',
      'Menyediakan fitur tanda tangan digital pada dokumen.',
      'Mendukung import data karyawan dari Excel.',
      'Menyediakan sistem absensi dengan AI-based name matching.',
      'Menampilkan dashboard analytics berdasarkan role pengguna.',
      'Menyediakan document archive dan audit trail untuk membantu pelacakan aktivitas.',
      'Menggunakan arsitektur berbasis Laravel dengan database relasional.'
    ],
    owner: 'Nathaviela Thalita K.',
    category: 'Web Development / Information System',
    tags: ['Laravel', 'PHP', 'MySQL', 'Blade', 'Tailwind CSS', 'Vite', 'Spatie Permission', 'FPDF', 'FPDI', 'PhpSpreadsheet', 'AI'],
    image: 'https://picsum.photos/seed/deployx-hris/800/600',
    demo: 'https://hrissinergi.remahbiskuit.my.id/login',
    github: 'https://github.com/nathavielathalitaaa/HR-DTP-Project-Final',
    link: 'https://github.com/nathavielathalitaaa/HR-DTP-Project-Final',
    year: '2026',
    role: 'AI Specialist / Developer',
    accentColor: '#E5345A',
    tapeColor: '#FEF08A'
  },
  {
    id: 'bqis',
    title: 'BQIS — Biscuit Quality Intelligence System',
    subtitle: 'Intelligent Decision Support System untuk Analisis Kualitas Biskuit',
    description: 'Platform intelligent decision-support yang memanfaatkan machine learning dan data analytics untuk membantu proses analisis kualitas biskuit. Sistem menggabungkan predictive modeling, explainable AI, clustering, serta automated reporting dalam satu platform berbasis web.',
    details: [
      'Menggunakan machine learning untuk analisis dan prediksi kualitas produk.',
      'Mengimplementasikan XGBoost sebagai model machine learning.',
      'Menyediakan analisis feature importance untuk membantu memahami faktor yang memengaruhi hasil prediksi.',
      'Menggunakan pendekatan explainable AI untuk meningkatkan interpretasi hasil model.',
      'Menerapkan PCA dan clustering untuk eksplorasi pola data.',
      'Menyediakan dashboard interaktif untuk visualisasi hasil analisis.',
      'Menyediakan automated reporting dalam format PDF.',
      'Menggunakan FastAPI sebagai backend service.',
      'Menggunakan React dan Vite sebagai frontend application.',
      'Mengintegrasikan Python, Pandas, NumPy, dan scikit-learn untuk pengolahan data dan machine learning.'
    ],
    owner: 'Nathaviela Thalita K.',
    category: 'Artificial Intelligence / Machine Learning / Data Analytics',
    tags: ['Python', 'FastAPI', 'React', 'Vite', 'XGBoost', 'Pandas', 'NumPy', 'Scikit-learn', 'PCA', 'Clustering', 'Explainable AI', 'Machine Learning'],
    image: 'https://picsum.photos/seed/bqis-system/800/600',
    demo: '#',
    github: 'https://github.com/nathavielathalitaaa/BQIS',
    link: 'https://github.com/nathavielathalitaaa/BQIS',
    year: '2026',
    role: 'AI / Machine Learning Developer',
    accentColor: '#8B5CF6',
    tapeColor: '#A7F3D0'
  },
  {
    id: 'dtp-object-detector',
    title: 'DTP AI Object Detector',
    subtitle: 'Real-Time Computer Vision untuk Object Detection dan Face Emotion Recognition',
    description: 'Aplikasi computer vision berbasis Python yang mampu melakukan deteksi objek secara real-time melalui webcam maupun video. Sistem dikembangkan dengan object detection, Region of Interest, face detection, dan emotion recognition serta dilengkapi monitoring confidence dan FPS.',
    details: [
      'Melakukan object detection secara real-time menggunakan webcam.',
      'Mendukung pemrosesan video untuk kebutuhan deteksi objek.',
      'Mengimplementasikan YOLOv8 untuk object detection.',
      'Menyediakan Region of Interest (ROI) untuk menentukan area deteksi.',
      'Menyediakan pengaturan confidence threshold.',
      'Mengimplementasikan face detection.',
      'Mengintegrasikan face emotion recognition.',
      'Menampilkan statistik hasil deteksi secara real-time.',
      'Menampilkan FPS untuk memantau performa sistem.',
      'Menyediakan antarmuka web untuk menjalankan dan memantau proses detection.'
    ],
    owner: 'Nathaviela Thalita K.',
    category: 'Artificial Intelligence / Computer Vision',
    tags: ['Python', 'YOLOv8', 'OpenCV', 'Flask', 'Computer Vision', 'Object Detection', 'Face Detection', 'Emotion Recognition', 'ROI'],
    image: 'https://picsum.photos/seed/dtp-object-detection/800/600',
    demo: '#',
    github: 'https://github.com/nathavielathalitaaa/skomda_objectetection',
    link: 'https://github.com/nathavielathalitaaa/skomda_objectetection',
    year: '2026',
    role: 'AI Specialist / Computer Vision Developer',
    accentColor: '#10B981',
    tapeColor: '#FDE68A'
  },
  {
    id: 'simora',
    title: 'SIMORA',
    subtitle: 'Sistem Informasi dan Monitoring Berbasis Web',
    description: 'Aplikasi berbasis web yang dikembangkan dengan pendekatan modular untuk mengelola informasi dan proses monitoring secara terstruktur, dengan pemisahan komponen aplikasi, API, database, serta layanan pendukung.',
    details: [
      'Mengembangkan aplikasi menggunakan framework Laravel.',
      'Menggunakan struktur aplikasi modular untuk memisahkan komponen sistem.',
      'Menyediakan backend dan API untuk kebutuhan komunikasi data.',
      'Menggunakan database untuk pengelolaan data aplikasi.',
      'Mengintegrasikan layanan AI pada bagian tertentu dari sistem.',
      'Menyediakan struktur pengujian untuk menjaga kualitas aplikasi.',
      'Mendokumentasikan desain dan handover project untuk mendukung pengembangan lanjutan.'
    ],
    owner: 'Nathaviela Thalita K.',
    category: 'Web Development / Information System',
    tags: ['Laravel', 'PHP', 'API', 'Database', 'AI', 'Web Development'],
    image: 'https://picsum.photos/seed/simora-monitoring/800/600',
    demo: '#',
    github: 'https://github.com/nathavielathalitaaa/SIMORA_sprint',
    link: 'https://github.com/nathavielathalitaaa/SIMORA_sprint',
    year: '2026',
    role: 'Developer',
    accentColor: '#3B82F6',
    tapeColor: '#FBCFE8'
  },
  {
    id: 'sahabatbuku',
    title: 'SahabatBuku',
    subtitle: 'AI Profiling untuk Pendampingan Belajar Siswa SMA/Sederajat',
    description: 'Platform pendampingan belajar berbasis AI yang dirancang untuk siswa SMA/sederajat dengan memanfaatkan AI profiling untuk memahami karakteristik dan kebutuhan belajar siswa, kemudian memberikan pendampingan yang lebih personal berdasarkan materi dari buku resmi Kementerian.',
    details: [
      'Menggunakan AI profiling untuk mengidentifikasi karakteristik dan kebutuhan belajar siswa.',
      'Dirancang khusus untuk mendukung proses pendampingan belajar siswa SMA/sederajat.',
      'Menggunakan buku resmi Kementerian sebagai basis materi pembelajaran.',
      'Mengarahkan proses belajar berdasarkan profil dan kebutuhan masing-masing siswa.',
      'Menggabungkan artificial intelligence dengan konsep personalized learning.',
      'Dikembangkan sebagai platform web untuk mendukung akses dan pengelolaan proses pembelajaran.',
      'Menggunakan Laravel sebagai framework utama aplikasi.'
    ],
    owner: 'Nathaviela Thalita K.',
    category: 'Artificial Intelligence / EdTech',
    tags: ['AI', 'Artificial Intelligence', 'AI Profiling', 'Personalized Learning', 'EdTech', 'Laravel', 'PHP', 'JavaScript', 'Tailwind CSS'],
    image: 'https://picsum.photos/seed/sahabatbuku-ai/800/600',
    demo: '#',
    github: 'https://github.com/lhohelhe/MyProject',
    link: 'https://github.com/lhohelhe/MyProject',
    year: '2026',
    role: 'AI / Product Development',
    accentColor: '#F59E0B',
    tapeColor: '#DDD6FE'
  }
];

export default PROJECTS_DATA;
