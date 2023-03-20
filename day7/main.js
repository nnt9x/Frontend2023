// Khai báo số nguyên a = 5, sau đó in ra màn hình

// Khai báo biến var (variable) hoặc let (bổ sung ES6)
var a = 5;
console.log(a);

// Khai báo biến b (số thực) -> in ra kết quả a + b
// 5.5
var b = 5.5;
console.log(a + b);

// Khai báo chuỗi "Hello world" -> in ra màn hình
var s = "Hello world";
console.log(s);

// -> Cách khai báo: ?
// var (let) ten_bien = <gia_tri>


/*
Quy tắc đặt tên biến:
- Chưa số, chữ cái, kí tự đặc biệt $, _
- Tên biến ko bắt đầu bằng số
- Có phân biệt viết hoa và viết thường y và Y là khác nhau
- Tên biến ko trùng vs từ khoá...
- ko chứa khoảng trắng

-> JavaScript có thể đặt tên theo phong cách 
* camel:
VD: lưu trữ họ tên học sinh
hoTenHocSinh = "Nguyen Van A"
hoVaTen

* lowcase:
ho_va_ten
* pascal -> Hoa hoa tất cả từ đầu tiên
-> Đặt tên cho class 
VD: HocSinh 

* uppercase: viết hoa toàn bộ -> thường dùng cho hằng số

const PI = 3.14; 

*/

// VD: 
// 1a = 5; -> lỗi do bắt đầu bằng số
var _a = 10;
var $a = 20;
var __ = 8;
var a123 = "Hello";

// var for = "Vong lap"; -> lỗi do trùng tên keyword JavaScript

// hoc sinh = "hello"; -> lỗi do chứa khoảng trắng



