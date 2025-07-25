//  write a function that returns the second largest number in as a array.
let array = [5, 0, 7, 10, 8, 17, 17];

function findSecondLargest(arr){
    if(arr.length < 2) return null
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for(let i=0; i<arr.length; i++){
        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i]
        }else if(arr[i] > secondLargest && arr[i] !== largest){
            secondLargest = arr[i] 
        }
    }
    return secondLargest
}

const result = findSecondLargest(array)

console.log("result", result)