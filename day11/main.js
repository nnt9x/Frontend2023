/*
Vòng lặp: for và while
- For: dùng cho các công việc hữu hạn, biết rõ 
điểm bắt đầu kết thúc của biến đếm.
- While: dùng cho các công việc, chỉ biét điều 
kiện lặp.

- Trong quá trình thực hiện vòng lặp:
-> Thoát hoặc bỏ qua 1 số TH -> làm thế nào?

break: thoát khỏi vòng lặp hiện tại
continue: bỏ qua vòng lặp hiện tại, bắt đầu vòng lặp mới
*/

// VD1: In ra cac gia trị a -> b, nếu có TH giá trị đó chia hết
// Cho 7 thì dừng lại

let a = 10, b = 25;

for(let i = a; i <= b; i++){
    if(i % 7 == 0){
        break;
    }
    console.log(i);
}
console.log("\n\n");

for(let i = a; i <= b; i++){
    if(i % 7 == 0){
        continue;
    }
    console.log(i);
}


// VD: vong lap long nhau
/*
vong lap 1{
  vong lap 2{
     // Neu co break???
  }
}
*/
let isBreak = false;

for(let i = 1; i <= 5; i++){
    console.log("Vòng lặp lớn chạy lần thứ",i)
    for(let j = 1; j < 10; j++){
        if(j == 5) {
            isBreak = true;
            break;
        }
        console.log(j);
    } 
    console.log("-------------");
    if(isBreak == true) break;
}

