const arr1 = [0, 1, 2, 3, -10, 30, 2, 70, 1, 2, 7, 3, 4];
const arr2 = [0, 1, 2, 99, -10, 30, 2, 50, 1, 2, 8, 3, 4];

/**
 * Tìm số lớn nhất trong mảng số
 * @param {number} arr 
 * @returns {number} số lớn nhất
 */
function maxArray(arr){
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
console.log(maxArray(arr1));
console.log(maxArray(arr2));