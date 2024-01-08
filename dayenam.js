// function deklarasi
console.log(hello());
function hello(){
    return "Hello"
}


// function expression
const sayHai = function(){
    return "Hallo guys"
}

console.log(sayHai());

// arrow function
const hayName = () => "Hallo Name"

console.log(hayName());

const hitungData = () => {
    let a = 10;
    let b = 20
    let hasil = a + b

    // console.log(hasil);
    return "hallo saya di panggil"
}

console.log(hitungData());

function hitungVolume(p,l,t){
    return p*l*t
}

console.log(hitungVolume(10, 5, 5));

function hitungVolume2(p){
    return function(l){
        return function(t){
            return p*l*t
        }
    }
}

console.log(hitungVolume2(10)(10)(10));



