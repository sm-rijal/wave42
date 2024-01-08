// jika umur dia diatas 17 tahun maka dia sudah bisa nyoblos, kalau belum dia belum bisa nyoblos

// let umur = 19

let hasil

// > lebih besar, < lebih kecil
// if(umur >= 17){
//     console.log("sudah bisa nyoblos");
//     hasil = "sudah bisa nyoblos"
// } else {
//     console.log("belum bisa nyoblos");
// }

// =, ==, ===

// == ngecek perbandingan value tidak sampai ke tipe datanya
// === mengecek sampai ke tipe datanya

// if(umur == 17){
//     console.log("sudah bisa nyoblos");
// } else {
//     console.log("belum bisa nyoblos");
// }

let umur = "18"

// if(umur != 17){
//     console.log("sudah bisa nyoblos");
// } else {
//     console.log("belum bisa nyoblos");
// }

// if(umur !== 18){
//     console.log("sudah bisa nyoblos");
// } else {
//     console.log("belum bisa nyoblos");
// }


// let laki = true
// let perempuan = true
// if(laki != true && perempuan != true){
//     console.log("normal"); // true
// } else {
//     console.log("tidak normal"); // false
// }


// jika hari senin, selasa, rabu, ada kelas, kalau bukan ga ada kelas

// operator || OR

// Kalau menggunakan operator && harus semua kondisi bernilai true
// Kalau menggunakan operator || kalau salah satunya ada true maka hasilnya true
// let student = "SMA"
// let student2 = "Kuliah"
// if(student == "SMA" || student2 == "Kuliah"){
//     console.log("Selamat anda sudah dewasa");
// } else {
//     console.log("belum dewasa");
// }


// let laki = true
// if(laki){
//     console.log("laki"); // true
// } else {
//     console.log("tidak laki"); // false
// }

// ? true
// : false

// let result = laki ? "Laki-laki" : "bukan laki"
// console.log(result);

// let tahun = 1945

// if(tahun < 1945){
//     console.log("masih di jajah");
// } else if(tahun > 1945){
//     console.log("sudah merdeka");
// } else {
//     console.log("indonesia tahun merdeka");
// }

// let nilai = 85

// if (nilai >= 85) {
//     console.log("A")
// }
// else if (nilai >= 75 && nilai < 85) {
//     console.log("B")
// }
// else if (nilai >= 65 && nilai < 75) {
//     console.log("C")
// }
// else if (nilai >= 55 && nilai < 65) {
//     console.log("D")
// }
// else {
//     console.log("E");
// }

// function tagihanWarungMadura(isPelanggan){
//     return (isPelanggan ? 50000 : 100000)
// }

// console.log(tagihanWarungMadura(false));

// let a = 10_000_000
// let b = 50_000

// console.log(a+b);

// SWITCH CASE


let a = 2 + 2


switch(a){
    case 3 :
        console.log("Terlalu kecil");
    break;
    case 4 :
        console.log("Benar sekali");
    break;
    case 5 :
        console.log("Terlalu besar");
    break;
    default :
        console.log("Tidak tahu");
}


// buat kondisi apa saja menggunakan switch case
