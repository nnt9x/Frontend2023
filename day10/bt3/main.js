/*BT3. Nhập x, kiểm tra x có phải là số nguyên tố hay ko?
(Ko cân làm giao diện)
*/

let x = 11;
// Mac dinh x la nguyen to
let flag = true;

for (let i = 2; i < x; i++) {
  if (x % i == 0) {
    flag = false;
    break;
  }
}
if (flag == true) {
  console.log("Là nguyên tố!");
} else {
  console.log("Không là nguyên tố!");
}
