/**
 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

 注意：答案中不可以包含重复的三元组。

 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

 满足要求的三元组集合为：
 [
 [-1, 0, 1],
 [-1, -1, 2]
 ]
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) return [];
  if (nums.every(item => item === 0)) return [[0, 0, 0]];
  nums = nums.sort((a, b) => a - b);
  let chooseI = 0;
  let head = chooseI + 1;
  let tail = nums.length - 1;
  let results = [];
  let hashMap = {};

  while (chooseI < nums.length - 2) {
    if (head >= tail) {
      chooseI++;
      head = chooseI + 1;
      tail = nums.length - 1;
      continue;
    }
    if (nums[chooseI] > 0) break;
    const val = nums[chooseI] + nums[head] + nums[tail];
    if (val === 0) {
      let result = [nums[chooseI], nums[head], nums[tail]];
      let key = `${nums[chooseI]}${nums[head]}${nums[tail]}`;
      if (!hashMap[key]) {
        hashMap[key] = true;
        results.push(result);
      }
      head++;
      tail--;
    } else if (val < 0) {
      head++;
    } else if (val > 0) {
      tail--;
    }
  }
  return results;
};
