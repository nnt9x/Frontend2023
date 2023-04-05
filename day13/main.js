//  Truyen theo tham tri
let x = 10;

function tangXlen1DonVi(x){
    x = x + 1;
    console.log(x);
}

tangXlen1DonVi(x);
console.log(x);

// Truyen theo tham chiếu
let car = {name:"Honda", color:"red"};
let car1 = {name:"Huyndai", color:"blue"};

function thayDoiMauXe(car){
    car.color = "white";
}
// Xe luc ban dau
console.log(car);
console.log(car1);

// Thay doi mau xe
thayDoiMauXe(car);
thayDoiMauXe(car1);
// In ra sau khi thay doi
console.log(car);
console.log(car1);