// Logika untuk kedua halaman. Data diambil dari PROFIL di data.js.
// Setiap fungsi hanya mengisi elemen yang ada di halaman yang sedang dibuka.

const $ = (id) => document.getElementById(id);

function isiTeks(id, teks) {
  const el = $(id);
  if (el) el.textContent = teks || '';
}

function inisial(nama) {
  return nama
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((kata) => kata[0].toUpperCase())
    .join('');
}

function aturLink(id, url) {
  const el = $(id);
  if (!el) return;
  if (url) {
    el.href = url;
  } else {
    el.removeAttribute('href');
    el.setAttribute('aria-disabled', 'true');
  }
}

// Alamat halaman home, dipakai untuk tombol Share dan isi kartu kontak
function alamatHome() {
  return new URL('index.html', location.href).href.replace(/index\.html$/, '');
}

// Membuat isi kartu kontak (vCard 3.0) dari data PROFIL
function buatVCard(p) {
  const bagianNama = p.nama.trim().split(' ');
  const namaBelakang = bagianNama.length > 1 ? bagianNama.pop() : '';
  const namaDepan = bagianNama.join(' ');
  return [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${namaBelakang};${namaDepan};;;`,
    `FN:${p.nama}`,
    p.organisasi && `ORG:${p.organisasi}`,
    p.jabatan && `TITLE:${p.jabatan}`,
    p.telepon && `TEL;TYPE=CELL:${p.telepon.replace(/[\s-]/g, '')}`,
    p.email && `EMAIL;TYPE=INTERNET:${p.email}`,
    `URL:${alamatHome()}`,
    'END:VCARD',
  ].filter(Boolean).join('\r\n');
}

function tampilkanToast(pesan) {
  const toast = $('toast');
  if (!toast) return;
  toast.textContent = pesan;
  toast.classList.add('show');
  clearTimeout(tampilkanToast.timer);
  tampilkanToast.timer = setTimeout(() => toast.classList.remove('show'), 2200);
}

function render(p) {
  // Teks yang dipakai di kedua halaman
  isiTeks('nama', p.nama);
  isiTeks('jabatan', p.jabatan);
  isiTeks('organisasi', p.organisasi);
  isiTeks('email', p.email || '—');
  isiTeks('telepon', p.telepon || '—');
  isiTeks('bio', p.bio);

  // Home: foto besar di atas
  const hero = $('hero');
  if (hero) {
    if (p.foto) {
      hero.style.backgroundImage = `url("${p.foto}")`;
      hero.classList.add('has-photo');
    } else {
      isiTeks('hero-initials', inisial(p.nama));
    }
  }
  aturLink('link-email-row', p.email && `mailto:${p.email}`);

  // Halaman kontak: foto bulat
  const avatar = $('avatar');
  if (avatar) {
    if (p.foto) avatar.style.backgroundImage = `url("${p.foto}")`;
    else avatar.textContent = inisial(p.nama);
  }

  aturLink('link-instagram', p.instagram && `https://instagram.com/${p.instagram}`);
  aturLink('link-linkedin', p.linkedin && `https://www.linkedin.com/in/${p.linkedin}`);
  aturLink('link-whatsapp', p.whatsapp && `https://wa.me/${p.whatsapp}`);
  aturLink('link-email', p.email && `mailto:${p.email}`);

  // Tombol simpan kontak: membuat file .vcf langsung di browser
  const tombolSimpan = $('btn-save-contact');
  if (tombolSimpan) {
    tombolSimpan.href = 'data:text/vcard;charset=utf-8,' + encodeURIComponent(buatVCard(p));
    tombolSimpan.download = p.nama.toLowerCase().replace(/\s+/g, '-') + '.vcf';
  }
}

// Tombol Share: menu bagikan bawaan ponsel, atau salin link
const tombolShare = $('btn-share');
if (tombolShare) {
  tombolShare.addEventListener('click', async () => {
    const url = alamatHome();
    try {
      if (navigator.share) {
        await navigator.share({ title: PROFIL.nama, text: `Profil ${PROFIL.nama}`, url });
      } else {
        await navigator.clipboard.writeText(url);
        tampilkanToast('Link profil tersalin');
      }
    } catch (err) {
      // Pengguna menutup menu bagikan: tidak perlu melakukan apa-apa
    }
  });
}

document.title = `${PROFIL.nama} · Linkert`;
render(PROFIL);
