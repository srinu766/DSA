let nums = [1, 1, 0, 1, 1, 1];
// Output: 3

let nums2 = [1, 0, 1, 1, 0, 1];
// Output: 2

function findMaxConsecutiveOnes(nums) {
  let currCount = 0;
  let maxCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
        currCount++
    }else{
        maxCount = Math.max(currCount, maxCount)
        currCount=0
    }
  }
  return Math.max(maxCount, currCount)
}

console.log(findMaxConsecutiveOnes(nums2))