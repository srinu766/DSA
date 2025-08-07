let nums1 = [1, 2, 3, 0, 0, 0],
  m = 3;
let nums2 = [2, 5, 6],
  n = 3;

function merge(nums1, m, nums2, n) {
  for (let i = m; i < nums1.length; i++) {
    nums1[i] = nums2[i - m];
  }
 return nums1.sort((a, b) => a - b);
}


console.log(merge(nums1, m, nums2, n));
