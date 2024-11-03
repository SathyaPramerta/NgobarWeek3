/**
 * Variabel dalam pemrograman, termasuk JavaScript, bisa diibaratkan 
 * sebagai sebuah kotak. Kotak ini kita beri nama (yaitu nama variabel), 
 * dan di dalamnya kita bisa menyimpan berbagai macam data, seperti angka, 
 * teks, atau bahkan objek yang lebih kompleks.
 */

// Deklarasi variabel
// var/let/const namaVariable = value;
var angkaPertama = 12;
let angkaKedua = 24;
const angkaKetiga = 55;

//! var
/**
 * Cara lama untuk mendefinisikan variabel. Variabel yang 
 * didefinisikan dengan var memiliki scope yang lebih luas dan 
 * beberapa perilaku yang mungkin tidak diinginkan dalam kode modern.
 */
console.log("angka pertama adalah" + angkaPertama);
angkaPertama = "string";
console.log('angkaPertama diubah menjadi = ' + angkaPertama);

//! let
/**
 * Cara yang lebih modern dan disarankan untuk mendefinisikan variabel. 
 * Variabel let memiliki scope yang lebih terbatas dan menghindari beberapa 
 * masalah yang terkait dengan var.
 */
console.log(`angka kedua adalah ${angkaKedua}`);
angkaKedua = true;
console.log('angkaKedua diubah menjadi = ' + angkaKedua);

//! const
/**
 * Digunakan untuk mendefinisikan variabel yang nilainya tidak bisa diubah 
 * setelah diinisialisasi.
 */
console.log('angka ketiga adalah' + angkaKetiga);
angkaKetiga = 6;
console.log('angka ketiga adalah' + angkaKetiga);


//! NOTE NOTE NOTE NOTE NOTE NOTE NOTE NOTEE NOTE NOTE NOTE NOTE !//
/** 
 * VAR dan LET valunya bisa diubah! Tapi const nggak bisa :v 
 */