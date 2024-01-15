let warna1 = "hijau"
let warna2 = "merah"
let warna3 = "biru"

// let warna = ["hijau","merah","biru","kuning","merah","biru"]
// console.log(warna);
// console.log(warna[2]);
// console.log(warna.length);

// warna[2] = "hitam"
// console.log('data sebelum',warna);
// warna.push("putih")
// console.log('data sesudah push',warna);
// warna.pop()
// warna.shift()
// warna.unshift("ungu")
// console.log(warna);

// warna.forEach(function(item){
    // console.log(item);  
// })

// arrow function foreach
// warna.forEach((item) => console.log(item))

// let filterWarna = warna.filter((item) => item === "merah")
// console.log(filterWarna);

// let angka = [1,2,3,4]

// let result = angka.filter((a) => a > 2) 
// console.log(result);

// let findWarna = warna.find((item) => item === "merah")
// console.log(findWarna);

// let result = angka.map((item) => {
//     return console.log(item);
// })

// let result2 = angka.map((item) => item * 2)

// console.log(result);

// let mamals = ["dogs","cats"]
// let birds = ["eagles","penguins"]
// let animals = mamals.concat(birds)
// console.log(animals);



// let warna = ["hijau","merah","biru"]
// let warnaBaru = [...warna]

// warnaBaru.push("putih")
// console.log(warna);
// console.log(warnaBaru);

// let sort = angka.sort((a, b) => b - a)
// console.log(sort);


// buatkan contoh dari foreach, map, filter, find, sort
// buatkan contoh dari materi looping kemarin menggunakan map
// buatkan fizzbuzz

// let contoh = ["fizz"]
// let result = contoh.map((item) => {
//     return item + "buzz"
// })
// console.log(result);

// Aditya
// let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// let hasil = angka.map((angka) => {
//     if (angka % 3 === 0 && angka % 5 === 0) {
//     return "FizzBuzz";
//     } else if (angka % 3 === 0) {
//     return "Fizz";
//     } else if (angka % 5 === 0) {
//     return "Buzz";
//     } else {
//     return angka;
//     }
// });
// console.log(hasil);

// nur rifqi
// let data2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// data2.map((item) => {
//     if (item % 3 == 0 && item % 5 == 0){
//         console.log("Fizzbuzz", item);
//     }
//     else if (item % 3 == 0) {
//         console.log("Fizz", item);
//     }
//     else if (item % 5 == 0) {
//         console.log("Buzz", item);
//     }
//     else {
//         console.log(item);
//     }
// })


// // Faris Hasan

// const arr = [];

// for (let i = 1; i <= 100; i++) {
//      arr.push(i);
// }

// let result = arr.map((data) => {
//     if (data % 3 == 0 && data % 5 == 0) {
//         console.log(data, 'FizzBuzz');
//     } else if (data % 3 == 0) {
//         console.log(data, 'Fizz');
//     } else if (data % 5 == 0) {
//         console.log(data, 'Buzz');
//     }
// })

// const number = [12, 23, 34, 12, 45, 56]
// console.log(number);
// //expected results = [23, 34, 45, 56]
// let filterData = number.filter((item) => item !== 12)
// console.log(filterData);
// console.log(number);

// const hewan = ['Anjing', 'Kuda', 'Kucing', 'Sapi', 'Gajah']
//gimana hapus data yg ada kata 'ing'

const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry']; 
const keyword = 'an'; 
const filteredFruits = fruits.filter(fruit => fruit.includes(keyword)); 
console.log(filteredFruits);


let contohNama =["mariana","day-day","djumi"];
let sumber= 'a';
let ganti= 'e';

var newNama = contohNama.map(item=>item.replaceAll(sumber,ganti));
console.log(newNama);


let data1= "1"
let data= "10"
let tampungAngka=[];

for (let j=Number(data1);j<=data;j++)
{
    tampungAngka.push(j);
}

let genap=0 
let ganjil=0
let tampungGen=[];
let tampungGan=[];
//console.log(typeof ganjil); cek tipe data
let hitAngka = tampungAngka.map((item)=>
{
    if(item%2==0)
    {
        genap=genap+item;
        tampungGen.push(item)
        return genap;
    }
    else
    {
        ganjil=ganjil+item;
        tampungGan.push(item);
        return ganjil;
    }
})

console.log('data ganjil',tampungGan, '=', ganjil);
console.log('data genap',tampungGen, '=' ,genap);
