// =====================================================================
//  DATA PROFIL — satu-satunya bagian yang diubah untuk setiap anggota.
//  Dipakai oleh dua halaman: index.html (home) dan kontak.html.
//  Kosongkan ('') kolom yang tidak dipakai.
// =====================================================================
const PROFIL = {
  nama: "Rozzan Izaz",
  jabatan: "Product Manager",
  organisasi: "Scale Up",
  foto: "img/foto_almet.jpg", // contoh: 'foto/nadia.jpg' (kosong = pakai inisial)
  bio: "Merancang produk digital yang mudah dipakai. Terbuka untuk kolaborasi riset UX dan mentoring.",
  telepon: "+62 823-1766-9743",
  email: "rozzan.ramadhani@gmail.com",
  instagram: "rozzanizaz_", // username tanpa @
  linkedin: "rozzan-izaz-ramadhani-484688291", // bagian setelah linkedin.com/in/
  whatsapp: "6282317669743", // format internasional tanpa + dan spasi

  // -------------------------------------------------------------------
  //  PORTOFOLIO — tampil di bawah bio (index.html), urut dari atas.
  //  gambar   : alamat file, contoh 'img/proyek-1.jpg'.
  //             Kosong ('') = kotak placeholder dulu.
  //  dikerjakan: daftar hal yang kamu kerjakan di proyek itu.
  //  link     : opsional, alamat studi kasus / hasil proyek.
  //  Isi di bawah masih CONTOH — ganti dengan proyekmu sendiri.
  //  Kosongkan daftar (portofolio: []) untuk menyembunyikan section ini.
  // -------------------------------------------------------------------
  portofolio: [
    {
      judul: "Gameloka",
      kategori: "Website Edukasi",
      tahun: "2026",
      gambar: "img/gameloka.png",
      ringkasan:
        "Platfrom Edukasi untuk belajar bahasa betawi bagi anak sekolah.",
      dikerjakan: [
        "Menyusun rancangan anggaran Gameloka",
        "Membuat tampilan UI/UX website",
        "Koordinasi finance dan engineer",
      ],
      link: "https://gameloka.pythonanywhere.com/",
    },
    {
      judul: "SnapPocket",
      kategori: "Website",
      tahun: "2025",
      gambar: "img/snapPocket.png",
      ringkasan: "Platform pemesanan aksesoris photo dan demo-photo.",
      dikerjakan: [
        "Merancang arsitektur website",
        "Integrasi dengan payment method",
      ],
      link: "https://snap-pocket.vercel.app/",
    },
    {
      judul: "Linkert",
      kategori: "NFC Card",
      tahun: "2026",
      gambar: "img/card_formal_1.jpg",
      ringkasan: "One Tap, One Your Identity",
      dikerjakan: [
        "Merancang proyeksi Linkert",
        "Code platform dan integrasi NFC",
        "Presentasi ke stakeholder",
      ],
      link: "",
    },
  ],
};
