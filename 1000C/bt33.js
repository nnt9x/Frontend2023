// Input: n, n >= 1
// n = 1-> S(n) = căn (2)
// n = 2 -> S(n) = căn (2 + căn (2) )

// Đặt t = 0
// -> s(1) = căn (2 + t)  -> gán lại t = căn (2 + t)
// -> s(2) = căn (2 + t)

/**
 * Tính căn Sn
 * @param {number} n - số nguyên lớn hơn hoặc bằng 1
 * @returns -1 nếu n < 1 -> không thoả mãn
 */
function sn(n) {
  if (n < 1) {
    return -1;
  }
  let t = 0;
  for (let i = 0; i < n; i++) {
    t = Math.sqrt(2 + t);
  }
  return t;
}

console.log(sn(1));
console.log(sn(2));