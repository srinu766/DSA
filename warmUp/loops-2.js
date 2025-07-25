// #1 write a function that searches for an element in an array and returns the index, if the element not present then return -1.

let array = [4, 2, 0, 10, 8, 30];

function SearchElement(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      return i;
    }
  }
  return -1;
}

// console.log(SearchElement(array, 4)); //0
// console.log(SearchElement(array, 10)); //3
// console.log(SearchElement(array, 49)); //-1





// #2  write a function that returns numbers of negative numbers in as a array.

let array2 = [2, -9, 17, 0, 1, -10, -4, 8];

function countNegative(arr){
    let count =0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] < 0){
            count++;
        }
    }
    return count;
}


const result = countNegative(array2);
// console.log(result);


// #3  write a function that returns numbers of Largest numbers in as a array.
let array3 = [5, 0, 7, 10, 8, 17, 1];
let array4 = [-2,-4,-8]

function findLargest(arr){
  // let largestNumber = -Infinity
   let largestNumber = arr[0]
  for(let i=0; i<arr.length; i++){
    if(arr[i] > largestNumber){
      largestNumber = arr[i]
    }
  }
  return largestNumber;
}

const result3 = findLargest(array4)
// console.log("result3", result3)


// #4  write a function that returns numbers of Smallest numbers in as a array.
let array5 = [5, 0, 7, 10, 8, 17, 1];
let array6 = [-2,-4,-8]

function findSmallest(arr){
  let smallest = Infinity;

  for(let i=0; i<arr.length; i++){
    if(arr[i] < smallest){
      smallest = arr[i];
    }
  }
  return smallest;
}

const result4 = findSmallest(array5)
console.log(result4)