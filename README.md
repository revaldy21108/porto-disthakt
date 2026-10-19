# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

# Revaldisthakt Studio | React + Tailwind CSS

**Nama  :** Revaldy Dearly Zaliandy  
**NIM   :** 2511035  
**Kelas :** Pendidikan Ilmu Komputer C (Semester 3)  
**Matkul:** Pemrograman Internet

## Deskripsi
Website company profile/portofolio untuk Revaldisthakt Studio, identitas proyek kreatif yang berangkat dari portofolio Revaldy. Website menampilkan informasi tentang profil, visi dan misi, area layanan, dokumentasi proyek pembelajaran, serta formulir kontak dengan validasi sederhana.

Konten dan gambar diadaptasi dari portofolio HTML, CSS, dan JavaScript sebelumnya. Implementasi ini menggunakan React, React Router, Tailwind CSS v4, komponen yang dapat digunakan ulang, serta data array yang dirender menggunakan `map()`.

## Halaman
1. **Beranda** (`/`)            : Hero, ringkasan, layanan unggulan, proyek pilihan.
2. **Tentang** (`/about`)       : Cerita singkat, visi-misi, nilai kerja, profil dan fokus tim.
3. **Layanan** (`/services`)    : Daftar area layanan dan alur kerja.
4. **Portofolio** (`/portfolio`): Galeri enam dokumentasi proyek pembelajaran.
5. **Kontak** (`/contact`)      : Formulir nama, email, pesan dengan validasi sisi klien, lokasi, dan tautan sosial.

## Teknologi
- React + Vite
- Tailwind CSS v4 dengan plugin Vite resmi
- React Router untuk navigasi antarhalaman
- CSS manual hanya untuk font, reset dasar, dan beberapa efek dekoratif
- `Navbar`, `Footer`, `Card`, `ProjectCard`, dan `SectionHeading` sebagai komponen reusable

## Cara menjalankan
Pastikan Node.js dan npm telah terpasang.

```bash
npm install
npm run dev
```

Buka alamat lokal yang ditampilkan Vite di terminal. Untuk menguji build produksi:

```bash
npm run build
npm run preview
```

## Struktur folder

```text
porto-disthakt/
|-- node_modules/
|-- public/                 # Berupa Template Icon/SVG
|-- src/
|   |-- assets/             # Template Aset
|   |-- img/                # Aset Gambar Portofolio
|   |-- components/         # Navbar, Footer, Card, ProjectCard, SectionHeading
|   |-- data/content.js     # Array layanan, proyek, dan profil tim
|   |-- pages/              # Home, About, Services, Portfolio, Contact
|   |-- App.jsx
|   |-- index.css
|   '-- main.jsx
|-- reference-original/     # Salinan sumber HTML/CSS/JS lama untuk referensi
|-- .gitignore
|-- .oxlintrc.json
|-- index.html
|-- package-lock.json
|-- package.json
|-- README.md
'-- vite.config.js
```

## Screenshot halaman
Simpan screenshot aktual dari kelima halaman setelah menjalankan aplikasi, lalu letakkan di `docs/screenshots/` dengan nama berikut:
- `home.png`
- `about.png`
- `services.png`
- `portfolio.png`
- `contact.png`

README ini menyiapkan daftar screenshot yang dibutuhkan. Screenshot aktual belum disertakan karena perlu diambil dari aplikasi yang sudah dijalankan pada browser.

## Catatan
- Formulir kontak melakukan validasi di browser, belum mengirim data ke backend atau email.
- Kartu kedua dan ketiga di bagian tim merupakan **area fokus layanan**, bukan identitas orang yang diklaim sebagai anggota tim.
- Folder `node_modules/` dan hasil build `dist/` tidak disertakan dalam repository.
