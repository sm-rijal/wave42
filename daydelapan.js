// console.log("Hai Binar");
// console.log("Hai Binar");
// console.log("Hai Binar");
// console.log("Hai Binar");
// console.log("Hai Binar");
// console.log("Hai Binar");
// console.log("Hai Binar");
// console.log("Hai Binar");
// console.log("Hai Binar");
// console.log("Hai Binar");

// for(let data = 1; data <= 10; data++){
//     console.log("Hai Binar", data, 'x');
// }

// for(let i = 0; i < 10; i++){
//     console.log(i);
// }

// challenge
// buatkan looping 1 - 10 kemudian 
// ganjil 1
// genap 2
// ganjil 3

// for (let i=1;i<=10;i++)
// {if (i%2==0)
// {console.log(i,"genap");}
// else{
// console.log(i,"ganjil");}
// }

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//       console.log("Genap=", i);
//     } else {
//       console.log("Ganjil=", i);
//     }
// }

// challange
// data = [2,6,10,2]
// result = 0
// 2 + 6 + 10 + 2

// let order = [
//     {
//         name: "Rinso",
//         harga: 10000,
//     },
//     {
//         name: "Soklin",
//         harga: 15000,
//     },
// ]


// looping
// kondisi i < data.length; i++

// data[i] + result

// Arinal
// let data = [2,6,10,2,4]
// let result = 0;
// console.log('jumlah data',data.length);

// for(let i = 0; i < data.length; i++){
//     result += data[i];
// }
// console.log(`Hasilnya adalah ${result}`);

// Mariana
// let datas =[2,5,6,10]
// let hasil =0;

// for (let i=0;i<datas.length;i++){
//     hasil = hasil + datas[i];
// }
// console.log(hasil);

// Faris Hasan
// let arr = [2, 6, 10, 2];
// let sum = null;
// for (let index = 1; index < 3; index++) {
//     sum = sum + arr[index];
// }
// console.log(sum, 'faris');

// console.log(2 + undefined); // NAN
// console.log(2 + null); // 2


// let course = [
//     {
//         title: "UI/UX"
//     },
//     {
//         title: "Product Manager"
//     },
//     {
//         title: "Front End"
//     },
//     {
//         title: "Backend"
//     },
// ]

// for(let index = 0; index < course.length; index++){

//     console.log(course[index]);
// }

// for (let index = 0; index < 5; index++) {
//     console.log();
// }


// While
// let index = 0
// while (index < 10) {
//     // console.log(index);
//     index++;
// }

// let data = [2,5,6,10]; 
// let hasil = 0;

// let i=0;
// while(i < data.length) 
// { 
//     hasil = hasil + data[i];  
//     i++; 
// } 
// console.log(hasil);

// let w = 6
// while (w < 5) {
//     console.log(w, 'while');
//     w++
// }

// do while
// let i = 6
// do {
//     console.log(i, 'do');
//     i++;
// } while (i < 5);


// latihan
// 1 - 20
// for(let i = 0; i < 20; i++)
// genap =  [2,4,6,8,10 ...]
// ganjil = [1,3,5,7,9,11 ...]

// let genap = []
// let ganjil = []

// -------------
// Arinal
// let ganjil = [], genap = [];
// for(let i = 1; i <= 20; i++){
// if(i % 2 == 0) genap.push(i)
// else ganjil.push(i)
// }
// console.log('ini adalah data ganjil', ganjil);
// console.log('ini adalah data genap', genap);

// Mariana
// let ganjil=[]; 
// let genap=[]; 
 
// for(let a=1;a<=20;a++) 
// { 
//     if(a%2==0) 
//     { 
//         genap.push(a); 
//     } 
//     else {ganjil.push(a)} 
// } 
// console.log(ganjil); 
// console.log(genap);


// Aditya
// let genap = [];
// let ganjil = [];

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     genap.push(i);
//   } else {
//     ganjil.push(i);
//   }
// }

// console.log("Angka genap", genap);
// console.log("Angka ganjil", ganjil);

// Nur Rifqi
// let ganjil=[]
// let genap=[]
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 !==0) {
//         ganjil.push(i)
//     }
//     else {
//         genap.push(i)        
//     }
// }
// console.log("ganjil = ",ganjil)
// console.log("genap = ",genap)


// let data = ["Ayam", "Bebek", "Burung"]
// data.push("Angsa") // memasukan data
// data.pop() // menghapus index data yang terakhir
// data.shift() // menghapus data index yang pertama
// data.splice(1, 1)
// console.log(data);

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(3, 5);

// console.log(citrus);


// challenge
// data
// 1 - 50
// atau
// 1 - 100

// Tampilkan text FizzBuzz
// jika sisa bagi 3 dan 5 sama dengan 0
// maka tampilkan FizzBuuzz
// jika sisa bagi 3 sama dengan 0
// maka tampilkan Fizz
// jika sisa bagi 5 sama dengan 0
// maka tampilkan Buzz

// FizzBuzz
// Fizz
// Buzz

// Mariana
// for (let b=1;b<=50;b++) 
// { 
//     if(b%3==0 && b%5==0) 
//     {console.log(b, "fizzbus krn habis dibagi 3 dan 5");} 
//     else if (b%3==0) 
//     {console.log(b, "fizz krn habis dibagi 3");} 
//     else if(b%5==0) 
//     {console.log(b, "bus krn habis di bagi 5");} 
// }

// Arinal
// for(let i = 1; i <= 20; i++) {
//     if(i % 3 == 0 && i % 5 ==0) console.log('FizzBuzz')
//     else if(i % 3 == 0) console.log('Fizz')
//     else if(i % 5 == 0) console.log('Buzz')
// }

// Sani Pramudita
// for (let index = 0; index <= 50; index++) {
//     if (index % 3 == 0 && index % 5 == 0) {
//         console.log(index, "FizzBuzz");
//     } else if (index % 3 == 0) {
//         console.log(index, "Fizz");
//     } else if (index % 5 == 0) {
//         console.log(index, "Buzz");
//     } else {
//         console.log(index,"");
//     }
    
// }

// Nur Rifqi
// for(let i = 1; i <= 20; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz",i);
//     }
//     else if (i % 3 === 0) {
//         console.log("fizz",i);
//     }
//     else if (i % 5 === 0) {
//         console.log("Buzz",i);
//     }
//     else {
//         console.log(i);
//     }
// }

// Putu
// for (let indeks = 1; indeks <= 50; indeks++) {
//     if (indeks % 3 == 0 && indeks % 5 ==0) {
//         console.log("fizzbuzz", indeks)
//     }
//     else if (indeks % 3 ==0) 
//         console.log("fizz", indeks)
    
//     else if (indeks % 5 ==0) 
//         console.log("buzz", indeks)}

// Syawadhilah
// for(let i =1 ; i < 50; i++){
//     if(i %3 === 0 && i %5 == 0 ){
//         console.log(i,"FizzBuzz")
//     }else if(i %3 ==0 ){
//         console.log("Fizz",i);
//     }else if (i% 5 ==0){
//         console.log("Buzz", i);
//     } else{
//         console.log(i);
//     }
// }