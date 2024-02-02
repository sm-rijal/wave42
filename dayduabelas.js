// const myPromise = new Promise((resolve, reject) => {
//     // NGAMBIL DATA API ->
//     resolve("Helo World")
// })

// // console.log(myPromise);

// myPromise.then((result) => {
//     // console.log(result);
// })



// function inputPassword(password){
//     return new Promise((resolve, reject) => {

        
//         if(password === "1234"){
//             resolve("Password benar!")
//         } else {
//             reject("Password salah")
//         }
        
//     }).then((resolve) => {
//         console.log(resolve);  //hasil ketika benar (menggunakan hasil dari resolve)
//     }).catch((reject) => {
//         console.log(reject); // hasil ketika ada error (menggunakan hasil dari reject)
//     })
// }

// inputPassword("1234")


// promise api
// function getUsers(){
//     return new Promise((resolve, reject) => {
//         // ambil data dari api
//         fetch("https://jsonplaceholder.typicode.com/users")
//         .then((response) => { 
//             return response.json()   
//         }).then((res) => {
//             console.log(res);
//             resolve(res)
//         })
//         .catch((err) => {
//             console.log(err);
//             reject(err)
//         })
//     })
// }

// getUsers()


// async function fetchData (url) => {
//     const response = await fetch(url)
//     const data = await response.json()

//     return data
// }

// const data = []

// function kirimData(){
//     const nama = document.getElementById("nama").value
//     const alamat = document.getElementById("alamat").value
//     console.log(nama)

//     const body = {
//         nama: nama,
//         alamat: alamat
//     }

//     data.push(body)
    
//     console.log(data);
// }

const fetchData = async (url) => {
    const response = await fetch(url)
    const data = await response.json()

    return data
}


let isLoading = false

async function getDataUsers(){
    try {
        
        isLoading = true;
        const users = await fetchData("http://localhost:3000/users")
        isLoading = false;
        renderUsers(users);
        
    } catch (error) {
        console.log(error);
    }

}


function renderUsers(users){
    document.getElementById("isLoading").innerHTML = ''
    users.map((item) => {
        document.getElementById("content").innerHTML += 
        `
            <table border=1>
                <tr>
                    <td>${item.nama}</td>
                    <td>${item.alamat}</td>
                </tr>
            </table>
        `
    })
}

async function getDataProducts(){
    try {
        
        isLoading = true;
        // const response = await fetch("http://localhost:3000/products")
        // const products = await response.json()
        const products = await fetchData("http://localhost:3000/products")
        console.log('data products',products);
        isLoading = false
        document.getElementById("isLoading").innerHTML = ''

        products.map((item) => {
            document.getElementById("content2").innerHTML += 
            `
                <table border=1>
                    <tr>
                        <td>${item.nama}</td>
                        <td>${item.harga}</td>
                    </tr>
                </table>
            `
        })

        
    } catch (error) {
        console.log(error);
    }

}

getDataUsers()
getDataProducts()


if(isLoading){
    document.getElementById("isLoading").innerHTML = "Loading . . . "
}

