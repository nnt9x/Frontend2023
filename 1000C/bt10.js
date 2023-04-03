// Tính t =  x^n
// n: là số nguyên

// TH1: n = 0 -> t = 1
// TH2: n dương -> (x * x* x* x...*x) n lần
// TH3: n âm   -> 1/ x^|n| -> lại tương tự TH2

/**
 * Hàm mũ
 * @param {number} x - số thực
 * @param {number} n - số nguyên
 * @returns - số thực
 */
function hamMu(x, n){
    if(n == 0){
        return 1;
    }
    else if(n > 0){
        let t = 1;
        for(let i = 1; i <= n; i++){
            t = t * x;
        }
        return t;
    }
    else{
        let t = 1;
        let n1 = n * -1;
        for(let i = 1; i <= n1; i++){
            t = t * x;
        }
        return 1/t;
    }
}

console.log(hamMu(-1.2333434,0));
console.log(hamMu(2, 3));
console.log(hamMu(2, -3));