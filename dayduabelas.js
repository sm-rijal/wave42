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

// async/await

let isLoading = false
async function getDataUsers(){
    try {
        
        isLoading = true;
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const users = await response.json()
        console.log('async/await',users);
        isLoading = false
        document.getElementById("isLoading").innerHTML = ''
        // for(let i = 0; i < users.length; i++){
        //     document.getElementById("content").innerHTML += 
        //     `
        //         <ul>
        //             <li>${users[i].name}</li>
        //         </ul>
        //     `
        // }

        // menggunakan data sendiri
        // const users = [
        //     {
        //         name: "",
        //         email: ""
        //     },

        // ]

        users.map((item) => {
            document.getElementById("content").innerHTML += 
            `
                <ul>
                    <li>Nama: ${item.name}</li>
                    <li>Email: ${item.email}</li>
                    <li>Alamat: ${item.address.city}</li>
                </ul>
            `
        })

        
    } catch (error) {
        console.log(error);
    }

}

getDataUsers()


function renderUsers(){}

if(isLoading){
    document.getElementById("isLoading").innerHTML = "Loading . . . "
}

