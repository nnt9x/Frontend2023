
const arr1 = [0, 1, 2, 3, 5, -10, 30, 2, -10, 70, 1, 2, 7, 3, 4,5 ];
/**
 * Tim vi tri dau tien min trong mang
 * @param {number[]} arr 
 * @returns {number} 
 */
function indexMinItems(arr){
    let min = arr[0];
    let indexMin = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
            indexMin = i;
        }
    }
    return indexMin;
}

console.log(indexMinItems(arr1));