// nama, alamat, agama, kewarganegaraan
// let nama = "Samsul"
// let alamat = "Jakarta"
// let agama = "Islam"
// let kewarganegaraan = "Indonesia"

// let nama2 = "Rijal"
// let alamat2 = "Tangerang"
// let agama2 = "Islam"
// let kewarganegaraan2 = "Indonesia"

// // Object
// let biodata = {
//     nama: "Samsul", 
//     alamat: {
//         provinsi: "DKI",
//         Kota: "Jakarta Selatan",
//         Kelurahan: "abcd",
//         Kecamatan: "abcd"
//     }, 
//     agama: "Islam",
//     kewarganegaraan: "Indonesia",
//     hobi: ["berenang","maen bola","nonton tv"]
// }

// console.log(biodata);
// console.log(biodata.alamat);
// console.log(biodata.alamat.provinsi);
// console.log(biodata.hobi);
// console.log(biodata.hobi[0]);

// Object constructor
// const student = new Object()
// student.nama = "Budi"
// student.umur = 18

// console.log(student);

// function constructor
// function User(nama, umur){
//     this.name = nama; 
//     this.age = umur
// }

// const student = new User("Asep", 18)
// console.log(student);


// let data = {
//     'nama-depan': "Faris",
//     alamat: "Tangerang"
// }

// console.log(data["nama-depan"]);

// ===========================================
// object assign - menggabungkan object

// const student = Object.assign(
//     {
//         nama: "Budi",
//         age: "20"
//     }
// )

// console.log(student);
// const name = {
//     nama: "Budi"
// }

// const age = {
//     age: 20
// }


// const student = Object.assign({}, name, age)
// console.log(student);


// =======================================================


// function constructor
// function User(nama, umur){
//     this.name = nama; 
//     this.age = umur
// }

// const dataStudent = new User("Asep", 18)
// console.log(dataStudent);

// // Class
// class Student {
//     constructor(nama, umur){
//         this.name = nama; 
//         this.age = umur
//     }
// }

// const dataStudent2 = new Student("Arif", 20)
// console.log(dataStudent2);

// const myInfo = {
//     name: "Robert",
//     age: 25,
//     hobbies: ["Fishing", "Riding"],
//     family: {
//         father: "Jumedi",
//         mother: "Siti",
//         siblings: ["Andrew", "Celine"]
//     }
// }

// console.log(myInfo);

// // const name = myInfo.name
// const father = myInfo.family.father
// const mother = myInfo["family"]["mother"]
// console.log(father);
// console.log(mother);

// // detsructuring
// const {name, age, hobbies} = myInfo
// console.log(name);
// console.log(age);
// console.log(hobbies);



const myInfo = {
    name: "Robert",
    age: 25
}

// for in
for(const key in myInfo){
    console.log(key);
    console.log(myInfo[key]);
}

// for of
for(const [key, value] of Object.entries(myInfo)){
    console.log(key, value);
}

// for each
Object.keys(myInfo).forEach((key) => {
    console.log(key, myInfo[key]);
})


// array object
let biodata1 = {
    nama: "Samsul", 
    alamat: {
        provinsi: "DKI",
        Kota: "Jakarta Selatan",
        Kelurahan: "abcd",
        Kecamatan: "abcd"
    }, 
    agama: "Islam",
    kewarganegaraan: "Indonesia",
    hobi: ["berenang","maen bola","nonton tv"]
}
let biodata2 = {
    nama: "Rijal", 
    alamat: {
        provinsi: "DKI",
        Kota: "Jakarta Selatan",
        Kelurahan: "abcd",
        Kecamatan: "abcd"
    }, 
    agama: "Islam",
    kewarganegaraan: "Indonesia",
    hobi: ["berenang","maen bola","nonton tv"]
}

let biodata = [
    {
        nama: "Samsul", 
        alamat: {
            provinsi: "DKI",
            Kota: "Jakarta Selatan",
            Kelurahan: "abcd",
            Kecamatan: "abcd"
        }, 
        agama: "Islam",
        kewarganegaraan: "Indonesia",
        hobi: ["berenang","maen bola","nonton tv"]
    },
    {
        nama: "Rijal", 
        alamat: {
            provinsi: "DKI",
            Kota: "Jakarta Selatan",
            Kelurahan: "abcd",
            Kecamatan: "abcd"
        }, 
        agama: "Islam",
        kewarganegaraan: "Indonesia",
        hobi: ["berenang","maen bola","nonton tv"]
    }
]

console.log(biodata);