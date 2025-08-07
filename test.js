let arr1 = [1,2,3,0,0,0];
let val1 = 3
let arr2 = [2,5,6]
let val2 = 3
// [1,2,2,3,5,6]

function mergeSort(arr1, val1, arr2, val2){
    
    for(let i=val1; i<arr1.length;i++){
        arr1[i] = arr2[i-val1]
    }
    return arr1.sort((a,b)=>a-b)
}

console.log(mergeSort(arr1, val1, arr2, val2))
