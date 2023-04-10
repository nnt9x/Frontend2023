const arr1 = [0, 1, 2, 3, -10, 30, 2, 70, 1, 2, 7, 3, 4,5 ];
const arr2 = [1, -3, -3, -5];

function lastEvenNumberArray(arr){
    let t = -1;
    for(let i = arr.length -1; i >= 0; i --){
        if(arr[i] % 2 == 0){
            t = arr[i];
            break;
        }
    }
    return t;
}

console.log(lastEvenNumberArray(arr1));
console.log(lastEvenNumberArray(arr2));