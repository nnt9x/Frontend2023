// Tao mang
let arr = [];
for(let i = 0; i < 10; i++){
    // 0 -> 999
    const n = Math.floor(Math.random() * 1000)
    arr.push(n);
}
// a. In ra mang vua tao
console.log(arr);
// b. Tìm số lớn nhất
// Duyệt mảng -> dùng for
// Tìm ra lớn nhất
let max = arr[0];
for(let i = 1; i < arr.length; i++){
    if(max < arr[i]){
        max = arr[i];
    }
}
console.log("Max = ", max);

// c. Tinhs tong so duong trongg mang
let t = 0;
arr.forEach(item => {
    if(item > 0){
        t = t + item;
    }
});
console.log("Tổng t = ", t);