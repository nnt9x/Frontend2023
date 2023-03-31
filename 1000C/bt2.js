// Input n: [1..]

let n = 10;

if(n < 1){
    console.log("Không hợp lệ!");
}
else{
    // Hợp lệ -> tính
    let t = 0;
    for(let i = 1; i <= n; i++){
        t = t + i*i;
    }
    console.log("t = ", t);
    
}