const arr1 = [0, 1, 2, 3, -10, 30, 2, 70, 1, 2, 7, 3, 4];
const arr2 = [0, -2, -4, -5];

/**
 * 
 * @param {number} arr 
 * @returns {number} -1 nêú không tìm thấy
 */
function firstPositiveNumberArray(arr){
    let t = -1;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            t = arr[i];
            break;
        }
    }
    return t;
}
console.log(firstPositiveNumberArray(arr1));
console.log(firstPositiveNumberArray(arr2));