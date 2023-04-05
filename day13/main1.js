// Arrow function -> khai bao ham
// ngan hon

function myFunc(a, b) {
  return a * b;
}

let myFunc1 = (a, b) => a * b;

console.log(myFunc(2, 3));
console.log(myFunc1(2, 3));

// Tinh trung binh cong 3 so a, b, c
function tbc(a, b, c){
    let t = a + b + c;
    let tbc = t/3;
    return tbc;
}

let tbc1 = (a, b, c) => {
    let tbc = (a + b + c)/3;
    return tbc;
}

let tbc2 = (a, b, c) => (a + b + c)/3;

console.log(tbc(4, 5, 6));
console.log(tbc1(4, 5,6));

// Chuyen ham sau sang arrow function

/*
let example1 = function(a, b, c, d){
    a = a * b + c - d;
    d = b + c * a;
    console.log(a + d);
}
*/
let example1 = (a, b, c, d) => console.log(a * b + c - d + b + c * a);

/*
let example2 = function(x, y, z){
    z = z + (x + y)/2;
    return x * y * z;
}
*/
let example2 = (x, y, z) => {
    z = z + (x + y)/2;
    return x * y * z;
}

