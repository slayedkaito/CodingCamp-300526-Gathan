# CodingCamp-300526-Gathan
 Tugas CodingCamp - Expense & Budget Visualizer

Halo! Ini adalah tugas pertama saya di CodingCamp. Saya membuat aplikasi web sederhana untuk mencatat pengeluaran harian dan melihat statistiknya dalam bentuk grafik pie chart.

Aplikasi ini dibuat murni menggunakan HTML, CSS, dan JavaScript biasa (Vanilla JS) tanpa framework apa-apa sesuai dengan aturan tugas.

## Fitur Utama (MVP)
* **Input Form:** Bisa masukkan nama barang, jumlah uang, sama pilih kategori (Makanan, Transportasi, atau Hiburan). Ada validasinya juga biar ga ada kolom yang kosong.
* **Daftar Transaksi:** Semua pengeluaran bakal muncul di list bawahnya dan bisa di-scroll kalau udah banyak. Terus ada tombol buat hapus kalau salah input.
* **Total Saldo:** Angka total saldo di paling atas bakal otomatis berubah/ngitung sendiri kalau kita nambah atau hapus pengeluaran.
* **Grafik Pie Chart:** Pakai bantuan Chart.js buat nampilin persentase pengeluaran berdasarkan kategorinya biar keliatan estetik.

## Cara Pakai / Jalankan Proyek
1. Clone atau download repository ini ke laptop.
2. Buka folder proyeknya.
3. Klik dua kali pada file `index.html` buat buka aplikasinya langsung di browser (Chrome/Edge/Safari).
4. Selesai! Data bakal kesimpen otomatis di browser masing-masing karena pakai LocalStorage.

## Struktur Folder
Sesuai dengan constraint dari kelas, foldernya dibuat rapi kayak gini:
* `index.html` -> File utama buat kerangka web.
* `css/style.css` -> Cuma ada 1 file CSS buat desain (saya coba bikin tema glassmorphic mirip iOS/Apple).
* `js/script.js` -> Cuma ada 1 file JS buat nyimpen logika aplikasi dan LocalStorage.
* `.kiro/` -> Folder konfigurasi wajib dari editor Kiro (isi file config.json kosong buat trigger Git).

## Kendala & Catatan Hubungan (Refleksi)
Awalnya rada bingung pas bagian chart-nya karena belum pernah pakai library luar kayak Chart.js, tapi setelah baca dokumentasi akhirnya bisa konek juga sama data array dari JavaScript-nya. Sempat ada masalah juga sama folder `.kiro` yang ga kebaca sama Git karena awalnya kosong, tapi diakalin pake file json kosongan di dalemnya dan akhirnya berhasil ke-push ke GitHub Desktop!

---
*Dibuat oleh Gathan Alfarabi Agusti untuk pemenuhan tugas CodingCamp.*
