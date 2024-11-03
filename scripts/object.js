// ============== OBJECT ==============
// OBJECT BERFUNGSI UNTUK MENYIMPAN DATA DENGAN KEY DAN VALUE

const siswa = {
  nama: "Udin",
  umur: 20,
  alamat: "Jl. Tukad Pakerisan",
};

// ============== GET VALUE ==============
// GET VALUE BERFUNGSI UNTUK MENGAMBIL VALUE DARI KEY YANG DIINGINKAN
const namaSiswa = siswa["nama"];
console.log("GET VALUE: " + namaSiswa);

// ============== GET KEYS ==============
// GET KEYS BERFUNGSI UNTUK MENGAMBIL SEMUA KEY DARI OBJECT
const keys = Object.keys(siswa);
console.log("GET KEYS: " + keys);

// ============== GET VALUES ==============
// GET VALUES BERFUNGSI UNTUK MENGAMBIL SEMUA VALUE DARI OBJECT
const values = Object.values(siswa);
console.log("GET VALUES: " + values);

// ============== GET ENTRIES ==============
// GET ENTRIES BERFUNGSI UNTUK MENGAMBIL SEMUA KEY DAN VALUE DARI OBJECT MENJADI ARRAY DUA DIMENSI (MULTIDIMENSIONAL ARRAY)
const entries = Object.entries(siswa);
console.log("GET ENTRIES: " + entries);