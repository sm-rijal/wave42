// Sync
// console.log("Hallo Binarian");
// console.log("Javascript");
// console.log("Developer");

// Async
// console.log("Satu");
// setTimeout(() => {
//     for(let i = 0; i < 100; i++){
//         console.log("loading...");
//     }
//     console.log("dua");
// }, 1000)

// console.log("Tiga");


// setTimeout(function() {
//     console.log('PI =', pi);
// },1000)
// // const pi = 3.14;
// console.log('loading ...');


// let pi
// setTimeout(function() {
//     console.log("satu");
//     pi = 3.14;
// },0)

// setTimeout(function() {
//     console.log("dua");
//     console.log('PI =', pi);
// },1000)

// console.log('loading ...');


// let j="."
// setTimeout(()=>{
//     for(let i=0;i<10;i++)
//     {
//         j=j+".";
//         console.log("loading");
//     }
//     console.log(j);
//     console.log("terima kasih sudah menunggu");
// },1000)

// let product
// setTimeout(() => {
//     product = [
//         {
//             name: "",
//             harga: 20000
//         },
//         {
//             name: "",
//             harga: 15000
//         },
//     ]
// }, 3000)


// function hallo(nilai, callback){
//     // callback(nilai * nilai)
//     function hitung() {
//         console.log(nilai * nilai);
//     }
    
// }

// // hallo(5, console.log)


// function kuadrat(x){
//     setTimeout(() => {
//         x * x
//     }, 3000)
// }

// function kuadrat2(x, cb){
//     setTimeout(() => {
//         cb(x * x)
//     }, 100)
// }

// console.log(kuadrat(5));
// kuadrat2(5, console.log)



// const download = (url, cb) => {
//     console.log("download from", url);
//     cb()
// }

// function download2(url, cb) {
//     console.log("download from", url);
//     cb()
// }

// const url1 = "url1.com"
// const url2 = "url2.com"
// const url3 = "url3.com"

// download(url1, () => {
//     download(url2, () => {
//         download(url3, () => {
//             console.log("download complete !");
//         })
//     })
// })


let data = []
function hitung(){
    // console.log("kirim chat");
    data.push("muncul iklan")
}

setInterval(() => {
    hitung();
    console.log(data);

}, 3000)

// fundamental
// variable, tipe data, array, object, kondisi, function, looping