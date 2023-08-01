<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Ambil data dari permintaan POST
    $nama = $_POST['nama'] ?? '';
    $pesan = $_POST['pesan'] ?? '';

    // Ganti dengan nomor WhatsApp tujuan yang ingin Anda kirimkan pesan
    $nomorTujuan = '6289515960034';

    // Pesan yang akan dikirimkan
    $pesanWhatsapp = "Nama: $nama\nPesan: $pesan";

    // Kirim pesan WhatsApp ke nomor tujuan menggunakan metode yang sesuai (misalnya, simpan di database, kirim melalui WhatsApp Gateway, atau gunakan Twilio)
    // Di sini, kita akan mencetak pesan untuk memeriksa apakah data dari frontend telah diterima oleh backend dengan benar.
    echo $pesanWhatsapp;
}
?>
