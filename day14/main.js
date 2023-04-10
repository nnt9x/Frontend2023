//  Tạo mảng điểm số
let marks = [6, 8, 10, 9, 7];
// Lâý dữ liệu mảng => truy cập qua chỉ số.
// Giá trị đầu tiên, index = 0
// giá trị cuối, index = 4

console.log("Phần tử đầu tiên: ", marks[0]);
console.log("Phần tử cuối: ", marks[4]);

// Thay đổi giá trị trong mảng -> thay đổi bằng phép gán
// marks[0] = 8;
// console.log(marks);

// Thêm 1 giá trị mới vào cuối cùng của mảng
let newSize = marks.push(20);
console.log(marks, "Size", newSize);

// Chèn 1 giá trị vào vi trị cụ thể
// marks.splice(1,0,0);


// DInh nghia 1 hàm insert
function insertArray(arr, index, value){
    arr.splice(index,0,value);
}
console.log("Mang truoc khi insert:", marks);

insertArray(marks, 2 , -1);
console.log("Mang sau khi insert: ", marks);

// Xoa phan tu
// C1: Xoa vi tri cuoi dung pop()
console.log(marks);
marks.pop();
console.log(marks);
// C2: Xoa vi tri dau tien shift()
marks.shift();
console.log(marks);
// C3: Xoa theo vi tri index?
function deleteArray(arr, index){
    arr.splice(index, 1);
}
deleteArray(marks,2);
console.log(marks);

