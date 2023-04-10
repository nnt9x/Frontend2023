// map (tao mang mới dựa vào mảng ban đầu - giá trị khác), 
// filter(lọc - mảng mới, gồm các phần tử thuọc mảng ban đầu)

// VD1: Mảng gồm [1, 2, 3, 4] => tạo mảng mới các giá trị mới x^2
let arr1 = [1, 2, 3, 4];
console.log(arr1);
let newArr1 = arr1.map((item) => Math.pow(item, 2));
console.log(newArr1);
// Mo rong: tao mang moi theo cong thuc: f(x) = x^2 + 3x -1
let newArr2 = arr1.map((x) => (x*x + 3*x -1));
console.log(newArr2);

// Binh thuong
let newArr3 = [];
// Duyet cac phan tu trong mang ban dau
// Thay cong thuc -> fx -> them fx vao mang moi
for(let i = 0; i < arr1.length; i++){
    const fx = arr1[i] * arr1[i] + 3*arr1[i] - 1;
    newArr3.push(fx);
}
console.log(newArr3);


// filter -> loc
// let arr1 = [1, 2, 3, 4];
// -> loc ra cac so chan

let newArr4 = arr1.filter((item) => item % 2 == 0);
console.log(newArr4);

// Tao 1 mang moi dua vao mang arr1 
// Chi gom cac so le
// Gia tri moi f(x) = 3*x + 2
let arr = [1, 3, 4, 0]; // [5, 11]

let newArr5 = arr.filter((x)=> (x % 2) != 0)
                .map((x)=> 3*x + 2);
console.log(newArr5);