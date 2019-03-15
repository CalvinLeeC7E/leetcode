/**
 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

 注意：答案中不可以包含重复的三元组。

 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

 满足要求的三元组集合为：
 [
 [-1, 0, 1],
 [-1, -1, 2]
 ]

 解题思路：
 首先对目标数组排序，因为3个数字之和为0，那么一定是有正数和负数，那么当第一个选择的数字大于0就可以停止循环了（数组有序那么此时后面全是正数）。
 在第一个选择的数字后面应用head与tail指针，分别从选中数字的下一个和数组的尾部开始向中间查找和为零的三元组。
 当head与tail相等或大于时，选择的第一个数字后移一位，再开始head与tail的查找过程。
 如此反复，即可找到符合结果的三元组。
 由于题目要求答案中不可以包含重复的三元组，那么我们用缓存来去除重复值。
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
