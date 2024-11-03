//! IF ELSE
/**
 * Fungsi Kondisi adalah sebuah fitur dalam pemrograman yang 
 * memungkinkan program untuk membuat keputusan berdasarkan nilai 
 * tertentu. Dengan kata lain, program akan menjalankan kode yang 
 * berbeda tergantung pada apakah suatu kondisi terpenuhi atau tidak.
 */

//! if ... else ... basic structure

// if (condition1) {
//   // blok code yg dijalankan jika kondisi bernilai true (kondisi terpenuhi)
// } else {
//   // blok code yg dijalankan jika kondisi bernilai false (kondisi tidak terpenuhi)
// }

// const angkaPertama = 10;
// const angkaKedua = 10;
// const angkaKetiga = 32;

// if (angkaPertama == angkaKedua) {
  //   console.log("Kode jika true");
  // } else {
  //   console.log("Kode jika kondisi bernilai false");
  // }

//? bagaimana jika banyak kondisi? tambahkan if lagi!
// if (angkaPertama == angkaKedua) {
//   console.log("Kode jika true");
// } else if (angkaPertama > angkaKetiga) {
//   console.log("Kode jika kondisi 1 bernilai false dan kondisi 2 bernilai true");
// } else {
//   console.log("Kode jika kondisi 1 dan 2 false");
// }

// //! IF ELSE TERNARY

/**
 * If else ternary adalah sebuah cara singkat dalam pemrograman
 *  untuk menuliskan kondisi if else dalam satu baris. Ini sering 
 * disebut juga sebagai operator ternary. Operator ini sangat berguna 
 * ketika kita ingin mengambil keputusan sederhana berdasarkan suatu 
 * kondisi dan hasilnya langsung kita simpan ke dalam sebuah variabel.
 */

// (condition)
//   ? "if true"
//   : (condition2)
//   ? 'if kondisi 2 true'
//   : 'if kondisi 2 false';

// angkaPertama > angkaKedua
//   ? console.log("Angka Pertama lebih besar dari angka Kedua")
//   : console.log("Angka Pertama lebih kecil dari angka Kedua");

// //! KETIKA ADA ELSE IF DI TERNARY
// angkaPertama > angkaKedua // kondisi pertama
//   ? console.log("Angka Pertama lebih besar dari angka Kedua")
//   : angkaPertama > angkaKetiga // kondisi kedua
//   ? console.log("Angka Pertama lebih besar dari angka Ketiga")
//   : console.log("Angka Pertama lebih kecil dari angka Kedua dan Ketiga"); // kondisi ketiga jika tidak ada yang memenuhi

//! SWITCH CASE
/**
 * Switch case adalah struktur kontrol dalam pemrograman yang memungkinkan 
 * kita untuk mengevaluasi sebuah ekspresi dan menjalankan blok kode yang 
 * sesuai dengan nilai ekspresi tersebut. Ini sering digunakan sebagai 
 * alternatif untuk banyak kondisi if-else berturut-turut, terutama ketika 
 * kita membandingkan nilai yang sama dengan beberapa nilai yang berbeda.
 */

const nilai = 50;

switch (true) {
	case nilai > 80:
		console.log("Sangat Bagus");
		break;
	case nilai <= 79 && nilai > 60:
		console.log("Bagus");
		break;
	case nilai <= 60 && nilai > 40:
		console.log("Cukup");
		break;
	case nilai <= 40:
		console.log("Kurang");
		break;
	default:
		console.log("Tidak Lulus");
		break;
}

// const nilai = "A"
// if (nilai === "A") {
//   console.log("Sangat Bagus");
// } else if (nilai === "B") {
//   console.log("Bagus");
// }
