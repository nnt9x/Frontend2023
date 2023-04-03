// 1. Hàm không có tham số và không có gía trị trả về.

/**
 * Hàm lấy ra thông tin ngôn ngữ lập trình
 * @return void
 */
function getProgramingLanguage(){
    console.log("Javascript");
}
getProgramingLanguage();

// Viết hàm getRandomNumber -> in ra các số ngẫu nhiên 1-100

function getRandomNumber(){
    console.log(Math.floor(Math.random() * 100) + 1);
}

getRandomNumber();
getRandomNumber();

// 2. Hàm không có tham số và có giá trị trả về.
// Viết hàm tạo số ngẫu nhiên, sau đó tính tổng 2 kết quả gần nhất

/**
 * Tạo số ngẫu nhiên 1 - 100
 * @returns int - số nguyên
 */
function getRandomNumber1(){
    // Tạo ra số ngẫu nhiên
    const rd = Math.floor(Math.random() * 100) + 1;
    // Trả kết quả về bằng từ khoá return
    return rd;
}

let rd1 = getRandomNumber1();
let rd2 = getRandomNumber1();
console.log(rd1, rd2,"Tổng =", rd1 + rd2);

//3. Hàm có tham số và không có giá trị trả về.
// Viết 1 hàm tính chu vi hình chữ nhật?

/**
 * Hàm tính chu vi hình chữ nhật
 * @param {number} chieuDai - phải là số dương
 * @param {number} chieuRong - phải là số dương
 */
function tinhChuViHCN(chieuDai, chieuRong){
    if(chieuDai <= 0 || chieuRong <= 0){
        console.log("Không hợp lê!");
    }
    else{
        const cv= (chieuDai + chieuRong) * 2;  
        console.log("Chu vi là:",cv);  
    }
}
tinhChuViHCN(1, 2);
tinhChuViHCN(-1, 2);
tinhChuViHCN(1.4, 0);


// 4. Hàm có tham số và có giá trị trả về.
// Viết 1 hàm tính chu vi hình tròn với số PI = 3.1415

/**
 * Hàm tính chu vi hình tròn
 * @param {number} banKinh - phải là số dương
 * @returns -1 nếu không hợp lệ
 */
function tinhChuViHinhTron(banKinh){
    if(banKinh <= 0){
        return -1;
    }
    else{
        const PI = 3.14;
        let cv = 2 * PI * banKinh;
        return cv;
    }
}

console.log(tinhChuViHinhTron(-2));
