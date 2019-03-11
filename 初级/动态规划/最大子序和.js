/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const len = nums.length;

  function sumArr (index) {
    if (nums[index] === undefined) return 0
    let maxVal = Math.max(nums[index] + sumArr(index + 1), sumArr(index + 1))
    console.log('maxVal', maxVal)
    return maxVal
  }

  let max = sumArr(0)
  console.log(max)
};
maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
