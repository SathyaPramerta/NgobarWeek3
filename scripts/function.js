/**
 * Dalam pemrograman, Fungsi atau Function adalah blok kode yang dapat digunakan 
 * berulang kali untuk melakukan tugas tertentu. Ini seperti sebuah 
 * mesin yang menerima input, memprosesnya, dan menghasilkan output. 
 * Dengan menggunakan fungsi, kita dapat membuat kode lebih modular, 
 * terorganisir, dan mudah dipelihara.
 * 
 * Untuk menjalankan fungsi, kita cukup menuliskan nama fungsinya diikuti oleh 
 * tanda kurung (). Jika fungsi memiliki parameter, kita perlu memberikan nilai-nilai 
 * yang sesuai di dalam kurung.
 */

//! function basic structure !//

// function namaFunction() {
//    #blok code
// }

// namaFunction(); // <- cara memanggil function

//!=============== REGULAR FUNCTION ================

// function cetakAngka() {
//   console.log(80);
// }

// cetakAngka();

//!================ ARROW FUNCTION =================

// const cetakNama = () => console.log("Pak Muku");

// cetakNama();

//!=========== FUNCTION DENGAN PARAMETER ===========
/**
 * Fungsi dengan parameter adalah fungsi yang dapat menerima nilai 
 * dari luar fungsi saat dipanggil. Nilai-nilai ini disebut sebagai 
 * parameter dan digunakan di dalam fungsi untuk melakukan perhitungan 
 * atau tindakan tertentu. Parameter memungkinkan kita membuat fungsi yang 
 * lebih fleksibel dan dapat digunakan dalam berbagai situasi.
 * 
 * Anggap parameter itu input yang diterima oleh function :)
 */

// function namaFunction(parameter) {
//   #code
// }

// Regular Function
function penjumlahan(a, b) {
  return a + b;
}
const hasilPenjumlahan = penjumlahan(5, 10);
console.log(hasilPenjumlahan);

// Arrow Function
const perkalian = (a, b) => a * b;
console.log(perkalian(5, 10));