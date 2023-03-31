let a = 30;
let b = 40;

// C1: đơn giản
let t = a;
if( a > b){
    t = b;
}

let ucln = 1;

for(let j = t; j >= 1; j--){
    if(a % j == 0 && b % j == 0){
        ucln = j;
        // Break -> tìm 1 trường hợp đầu tiên
        break;
    }
}

console.log("UCLN = ", ucln);

// Ko tối ưu -> C2: theo ơclit
