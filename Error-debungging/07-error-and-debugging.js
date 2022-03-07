/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Kesalahan Ketik
/// - Kesalahan Referensi
/// - Kesalahan Rentang
/// - Kesalahan sintaks

/// TULIS ANALISIS ANDA DI SINI
// (---'JAWABAN NOMOR 1'---);
// 1. Type error = type error object merepresentasikan kesalahan saat operasi tidak dapat dilakukan, biasanya (tetapi tidak secara eksklusif) ketika nilai bukan tipe yang diharapkan.
// 2. Kesalahan Referensi = Objek ReferenceError mewakili kesalahan ketika variabel yang tidak ada atau belum diinisialisasi dalam lingkup saat ini direferensikan.
// 3. Range Error = Objek RangeError menunjukkan kesalahan ketika nilai tidak dalam set atau rentang nilai yang diizinkan.
// 4. Kesalahan Sintaks = objek SyntaxError menunjukkan kesalahan saat mencoba menafsirkan kode yang tidak valid secara sintaksis. Itu dilemparkan ketika mesin JavaScript menemukan token atau urutan token yang tidak sesuai dengan sintaks bahasa saat mengurai kode.


/// Soal - 02
/// Kamu diminta untuk melakukan analisis terhadap baris kode di bawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode di bawah apa yang akan terjadi?
/// - apabila terjadi kesalahan, termasuk dalam kategori kesalahan tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// TULIS ANALISIS ANDA DI SINI
// (---'JAWABAN NOMOR 2'---);
// 1. akan terjadi kesalahan
// 2. kategori var const
// 3. karena setelah kita membuat variabel, baru kita bisa untuk console di bawah dan bukan di atas karena variabel scope nya tidak pas



konsol . log ( gajiDenganVar )
konsol . log ( gajiDenganConst )

var  gajiDenganVar  =  15000000 ;
const  gajiWithConst  =  15000000 ;