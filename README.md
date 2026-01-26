# 💰 CuanKu — Dashboard Keuangan Profesional

CuanKu adalah aplikasi **dashboard keuangan berbasis web** yang membantu pengguna mencatat pemasukan dan pengeluaran, melihat ringkasan keuangan bulanan, serta mengelola riwayat transaksi dengan antarmuka modern bergaya *glassmorphism*.

---

## ✨ Fitur Utama

* 🔐 **Autentikasi Pengguna**

  * Mengecek status login melalui endpoint `/api/me`
  * Redirect otomatis ke halaman login jika belum terautentikasi

* 📊 **Ringkasan Keuangan Bulanan**

  * Total pemasukan
  * Total pengeluaran
  * Saldo akhir
  * Filter bulan (bulan ini, 1 bulan lalu, 3 bulan lalu)

* ➕ **Tambah Transaksi**

  * Pemasukan / Pengeluaran
  * Nominal
  * Tanggal transaksi
  * Keterangan opsional

* ✏️ **Edit Transaksi (Modal)**

  * Ubah tipe transaksi
  * Perbarui nominal, tanggal, dan keterangan

* 🗑️ **Hapus Transaksi**

  * Konfirmasi sebelum penghapusan

* 📜 **Riwayat Transaksi**

  * Ditampilkan dalam bentuk tabel
  * Ikon aksi (edit & hapus)

---

## 🧩 Teknologi yang Digunakan

* **HTML5** — Structure page
* **CSS3** — Styling (glassmorphism, responsive layout)
* **Vanilla JavaScript (ES6)** — Logic application
* **Hono** — Backend Service
* **Drizzle** — ORM to Database
* **Supabase** — Database for Data

---

## 🎨 Desain UI

* Tema gelap modern
* Efek *glass blur* menggunakan `backdrop-filter`
* Responsif (mobile & desktop)
* Warna status:

  * 🟢 Hijau: Pemasukan
  * 🔴 Merah: Pengeluaran

---

## 🔌 Integrasi API

Aplikasi ini bergantung pada REST API berikut:

### 🔐 Autentikasi

* `GET /api/me`

  * Mengecek user login

### 📥 Transaksi

* `GET /api/transactions?year=YYYY&month=MM`

  * Mengambil transaksi & ringkasan bulanan

* `POST /api/transactions`

  * Menambahkan transaksi baru

* `GET /api/transactions/:id`

  * Mengambil detail transaksi

* `PUT /api/transactions/:id`

  * Memperbarui transaksi

* `DELETE /api/transactions/:id`

  * Menghapus transaksi

---

## 🚀 Cara Menjalankan

1. Pastikan backend API sudah berjalan
2. Simpan file HTML ini sebagai `index.html`
3. Letakkan di root atau folder public server
4. Akses melalui browser modern (Chrome, Edge, Firefox)

---

## 📌 Catatan Penting

* Aplikasi ini **tidak menggunakan framework frontend**
* Semua logika state dikelola di sisi client
* Keamanan & validasi data sepenuhnya bergantung pada backend

---

## 📄 Lisensi

Bebas digunakan untuk pembelajaran dan pengembangan internal.

---

> Dibuat dengan ❤️ untuk membantu mengelola keuangan secara rapi dan profesional.
