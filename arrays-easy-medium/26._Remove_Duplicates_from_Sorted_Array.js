function removeDuplicates(nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[x]) {
      x = x + 1;
      nums[x] = nums[i];
    }
  }
  return x + 1;
}

let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// console.log(removeDuplicates(arr)); //5

function removeDublicatesReturnUnique(nums) {
  let uniqueArr = [];

  for (let i = 0; i < nums.length; i++) {
    let Duplicate  = false;

    for (let j = 0; j < uniqueArr.length; j++) {
      if (nums[i] === uniqueArr[j]) {
        Duplicate  = true;
        break;
      }
    }
    if (!Duplicate) {
      uniqueArr.push(nums[i]);
    }
  }
  return uniqueArr;
}

console.log(removeDublicatesReturnUnique(arr));
