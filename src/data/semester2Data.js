// =========================================================================
// DATA REFLEKSI SEMESTER 2
// =========================================================================

// 1. SLIDE 1 — COVER DATA
export const DATA_COVER = {
  judulKreatif: "REFLEKSI DIRI & TARGET PENGEMBANGAN SISWA SEMESTER 2",
  namaSiswa: "NATHAVIELA THALITA KIRANA",
  nis: "1164/0182.065",
  kelas: "XI SIJA 1",
  fotoDiriPath: "/assets/IDENTITAS_SEMESTER2.png",
}

// 2. SLIDE 2 — REFLEKSI UMUM
export const DATA_REFLEKSI_UMUM = {
  pemahamanDiriSebelumSMK: "Berasal dari boarding school tanpa HP, jadi digitalisasiku minim. Lihat teknologi berkembang cepat, aku ragu bisa mengejar dan mengembangkan skill di bidang ini.",
  targetHarapanAwalKelasX: "Bisa menyamakan posisi dengan teman-teman yang sudah lebih familiar dengan dunia digital.",
  nilaiTerbesarSatuSemester: "Jaringan Dasar, dengan nilai 92.",
  fokusPerbaikanSemesterBerikutnya: "Menghasilkan prestasi nyata di bidang keahlian yang aku tekuni.",
}

// 3. SLIDE 3 — CAPAIAN KARAKTER
export const DATA_CAPAIAN_KARAKTER = {
  keagamaan: {
    deskripsi: "",
    fotoPath: "",
  },
  kebugaran: {
    beepTest: "",
    plank: "",
    pushUp: "",
    sitUp: "",
    deskripsi: "",
    fotoPath: "",
  },
  ketangguhan: {
    deskripsi: "",
    fotoPath: "",
  }
}

export const PERBANDINGAN_KARAKTER = [
  { aspek: 'BTQ/Keagamaan', semester1: 83, semester2: 92 },
  { aspek: 'Beep Test', semester1: 80, semester2: 85 },
  { aspek: 'Baris-Berbaris', semester1: 86, semester2: 96 },
  { aspek: 'Push Up', semester1: 80, semester2: 87 },
  { aspek: 'Sit Up', semester1: 80, semester2: 87 },
  { aspek: 'Plank', semester1: 80, semester2: 90 },
]

// 4. SLIDE 4 — TANTANGAN DAN PEMBELAJARAN
export const DATA_TANTANGAN_PEMBELAJARAN = {
  ringkasanPembelajaranSetahun: "Satu tahun penuh diwarnai berbagai tantangan — mulai dari berakhirnya masa jabatan OSIS, menekuni beragam bidang untuk meraih prestasi, hingga menyelesaikan proyek-proyek sekolah. Perjalanan ini membentuk kemampuan multitalenta yang terus berkembang.",
  tantanganList: [
    {
      tantangan: "Komunikasi Tim",
      deskripsi: "Mengelola koordinasi antara project manager, developer, dan desainer UI/UX yang kerap tumpang tindih dalam pembagian kerja.",
      solusi: "Menerapkan pembagian tugas terstruktur dan mengadakan sesi penyelarasan berkala untuk menyamakan alur kerja."
    },
    {
      tantangan: "Skill Coding",
      deskripsi: "Mempelajari Laravel, API, React, dan JavaScript di tengah padatnya tenggat pengerjaan tugas sekolah.",
      solusi: "Menyusun jadwal belajar pemrograman secara rutin di malam hari serta menerapkan langsung ke proyek praktis."
    },
    {
      tantangan: "AI Enthusiast",
      deskripsi: "Mengeksplorasi deteksi objek, korelasi fitur, scraping data, dan sistem rekap karyawan berbasis AI dengan waktu belajar yang terbatas.",
      solusi: "Menggunakan model prapelatihan (pre-trained) yang disesuaikan secara efisien guna meminimalkan durasi riset."
    },
    {
      tantangan: "Karya Tulis",
      deskripsi: "Mengikuti beberapa lomba cerpen yang kerap berbenturan dengan tenggat sekolah.",
      solusi: "Menyelesaikan prioritas tugas akademik terlebih dahulu sebelum mengalokasikan waktu menulis fiksi secara konsisten."
    }
  ],
  skillsDipelajari: [
    {
      namaSkill: "Komunikasi & Kolaborasi Tim",
      deskripsi: "Koordinasi lintas peran: PM, Developer, UI/UX Designer",
      project: "Proyek Kelompok & OSIS",
      persentase: 85,
      alasan: "Telah sukses memimpin penyelarasan peran dan komunikasi di dua proyek tim serta kepengurusan organisasi OSIS."
    },
    {
      namaSkill: "Web Development",
      deskripsi: "Laravel · REST API · React · JavaScript",
      project: "Proyek SahabatBuku & Portofolio",
      persentase: 90,
      alasan: "Berhasil mengintegrasikan fullstack Laravel dan React secara mandiri untuk platform SahabatBuku dan halaman portofolio."
    },
    {
      namaSkill: "Kecerdasan Buatan (AI)",
      deskripsi: "Deteksi objek · Scraping data · Rekap cerdas berbasis AI",
      project: "Rekap Karyawan AI & Object Detector",
      persentase: 80,
      alasan: "Telah sukses mengimplementasikan deteksi objek YOLOv8 dan pemrosesan data karyawan cerdas berbasis kecerdasan buatan."
    },
    {
      namaSkill: "Karya Tulis",
      deskripsi: "Penulisan cerpen kompetitif di tengah jadwal akademik",
      project: "Lomba Cerpen & Karya Sastra",
      persentase: 75,
      alasan: "Telah menghasilkan beberapa karya sastra orisinal dan aktif berpartisipasi dalam ajang kepenulisan nasional."
    }
  ]
}

// 5. SLIDE 5 — PORTOFOLIO DAN LOMBA
export const DATA_PORTOFOLIO_LOMBA = {
  lombaList: [
    {
      namaLomba: "NEXUS IMPACT: National Youth Essay Competition 2026",
      kategori: "Karya Tulis",
      icon: "fa-solid fa-pen-nib",
      warna: "#e5345a",
      gambarPath: "/assets/NEXUS IMPACT National Youth Essay Competition 202 .png",
      link: "https://docs.google.com/document/d/1F8Ma_SAzFUNPXmsZgJP3pLq72VImCtYo/edit?usp=sharing&ouid=116011274067610750634&rtpof=true&sd=true"
    },
    {
      namaLomba: "AI Open Innovation Challenge 2026",
      kategori: "Kecerdasan Buatan",
      icon: "fa-solid fa-robot",
      warna: "#6366f1",
      gambarPath: "/assets/AI Open Innovation Challenge 2026.png",
      link: "https://docs.google.com/document/d/1H_FnQGi0qmPrteWljBIqsBZEdZKhJOoaCid4XBuBEDg/edit?usp=sharing"
    },
    {
      namaLomba: "Universitas Pakuan Lomba Cerpen 2026",
      kategori: "Karya Tulis",
      icon: "fa-solid fa-pen-nib",
      warna: "#e5345a",
      gambarPath: "/assets/Universitas Pakuan Lomba Cerpen 2026 .png",
      link: "https://docs.google.com/document/d/1z_o71NnnazekT05yJcdUFjRnvFSBbxX3icewCAI7-Ck/edit?usp=sharing"
    },
    {
      namaLomba: "Halo Mentor NATIONAL BMC COMPETITION 2026",
      kategori: "Bisnis & Inovasi",
      icon: "fa-solid fa-lightbulb",
      warna: "#f59e0b",
      gambarPath: "/assets/Halo Mentor NATIONAL BMC COMPETITION 2026.png",
      link: "https://canva.link/1yry4epyr27n0s1"
    },
    {
      namaLomba: "Coding & Algorithms Tournament (CAT) 2026",
      kategori: "Competitive Programming",
      icon: "fa-solid fa-code",
      warna: "#10b981",
      gambarPath: "/assets/Coding & Algorithms Tournament (CAT) 2026.png"
    },
    {
      namaLomba: "Algoquest: Math, Logic, and Coding Competition",
      kategori: "Competitive Programming",
      icon: "fa-solid fa-code",
      warna: "#10b981",
      gambarPath: "/assets/Algoquest math, logic, and coding competition.png"
    },
    {
      namaLomba: "Universitas Pertamina Competitive Programming",
      kategori: "Competitive Programming",
      icon: "fa-solid fa-code",
      warna: "#10b981",
      gambarPath: "/assets/Universitas Pertamina Competitive Programming.png"
    }
  ],
  projectDtpList: []
}

// 6. SLIDE 6 — PARTISIPASI
export const DATA_PARTISIPASI = {
  kegiatanAkademikList: [
    {
      namaKegiatan: "COMPFEST Academy: Data Science Academy",
      status: "Selesai",
      deskripsi: "Mengikuti program akademi data science yang diselenggarakan oleh COMPFEST UI.",
      gambarPath: "/assets/Compfest.png"
    }
  ],
  praPkl: {
    deskripsi: "",
    fotoPath: "",
  }
}

// 7. SLIDE 7 — KESAN DAN PESAN UNTUK ORANG TUA
export const DATA_KESAN_PESAN_OTU = {
  pesanUntukOrangTua: "",
  fotoBersamaOrangTuaPath: "",
}
