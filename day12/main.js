// Đinh nghia ham
function inThongTin(hoTen, tuoi){
    console.log(hoTen.toUpperCase()+",",tuoi,"tuổi");
}

// Goi ham va truyen tham so
inThongTin("Nguyen Van A", 20);
// In tiep ra thong tin nguoi B, nguoi C
inThongTin("nguyen van b", 19);

// In thông tin người c
inThongTin("nguyen THI C", 21);

// VD1: Định nghĩa 1 hàm tên tinhTong, có 2 tham số truyền vào
// là x và y.
// Thân hàm: in ra tổng x và y theo chuỗi: "Tong=...";
// Test

/*
 x      | y
 1      | 2
 3      | 4
 5      | 6
 1.34   | -1.23345
*/


/**
 * Hàm tính tổng 2 số
 * @param {number} x 
 * @param {number} y 
 * @return void
 */
function tinhTong(x, y){
    console.log("Tong=",(x+y));
}
tinhTong(1, 2);
tinhTong(3, 4);
tinhTong(5, 6);
tinhTong(1.34, -1.23345);
