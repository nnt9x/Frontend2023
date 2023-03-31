// C2: Theo oclit

let a = 300;
let b = 455;

if (a == b){
    console.log("UCLN = ", a);
}
else{
    while (a != b){
        if( a > b){
            a = a - b;
        }else{
            b = b - a;
        }
    }
    console.log("UCLN = ",a)
}