// if, if..else

// Cú pháp

/*
if(condition){
    // Khối lệnh sẽ thực thi khi condition = true
}
*/

// Nhập vào số x, hỏi x là chẵn hay lẻ?
let x = 11;
if (x % 2 == 0) {
  console.log("x là số chẵn");
}
if (x % 2 != 0) {
  console.log("x là số lẻ");
}

// if..else
// VD: Nếu x chia hết cho 2 thì x là số chẵn, ngược lại x là số lẻ

/*
Cú pháp:
if(condition){
    // Khối lệnh chạy khi condition = true
}
else{
    // Khối lệnh chạy khi condition = false
}
*/
if (x % 2 != 0) {
  console.log("x la so le");
} else {
  console.log("x la so chan");
}

/*
Nhap vao nam x, hoi x la nam nhuan hay ko nhuan??
input: x so nguyen
output: x la nam nhuan hay ko nhuận??

// Định nghĩa năm nhuận??
// Tìm biểu thức logic

*/

x = 2024;
if (x % 400 == 0 || (x % 4 == 0 && x % 100 != 0)) {
  console.log(x, " la nam nhuan");
} else {
  console.log(x, "khong la nam nhuan");
}

// If..elseif...else
// VD: Nếu trời quang mây -> học thể dục ngoài trời
// Hoặc nếu trời nắng hoặc mưa -> học thể dục trong nhà
// Còn lại thì nghỉ học

let thoiTiet = "tuyet";

if (thoiTiet == "quang may") {
  console.log("Học thể dục ngoài trời");
} else if (thoiTiet == "nang" || thoiTiet == "mua") {
  console.log("Hoc trong nha");
} else {
  console.log("Nghi hoc");
}

/*
Giai phuong trinh bac nhat: ax + b = 0;
Input: a, b
Output: x?

*/
// a == 0 && b == 0 -> VSN
// a == 0 && b != 0 -> VN
// a != 0  -> x = -b/a

let a = 0;
let b = 1;
// C1: toan bo if
if (a == 0 && b == 0) {
  console.log("Vô số nghiệm");
}
if (a == 0 && b != 0) {
  console.log("Vô nghiệm");
}
if (a != 0) {
  console.log("x = ", -b / a);
}
// C2: if - else
if (a == 0) {
  // Kiem tra tiep b
  if (b != 0) {
    console.log("Vô nghiệm");
  } else {
    console.log("Vô số nghiệm");
  }
} else {
  console.log("x = ", -b / a);
}

// C3: if..else-if..else
if (a != 0) {
  console.log("x = ", -b / a);
} else if (b == 0) {
  console.log("Vô số nghiệm");
} else {
  console.log("Vô nghiệm");
}

