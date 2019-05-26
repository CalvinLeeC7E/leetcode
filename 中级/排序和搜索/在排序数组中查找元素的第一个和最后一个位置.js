/**
 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

 你的算法时间复杂度必须是 O(log n) 级别。

 如果数组中不存在目标值，返回 [-1, -1]。

 示例 1:
 输入: nums = [5,7,7,8,8,10], target = 8
 输出: [3,4]

 示例 2:
 输入: nums = [5,7,7,8,8,10], target = 6
 输出: [-1,-1]
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let start = 0;
  let end = nums.length;
  let itemIndex = -1;
  let result = [-1, -1];
  // 找到target开始位置
  while (start < end) {
    let index = Math.floor((start + end) / 2);
    let item = nums[index];
    if (item < target) {
      start = index + 1;
    } else {
      if (item === target) {
        itemIndex = index;
        break;
      }
      end = index;
    }
  }
  if (itemIndex === -1) return result;
  // 找出所有target
  result = [itemIndex, itemIndex];
  start = itemIndex - 1;
  end = itemIndex + 1;
  while (nums[start] === target || nums[end] === target) {
    if (nums[start] === target) {
      result[0] = start;
      start--;
    }
    if (nums[end] === target) {
      result[1] = end;
      end++;
    }
  }
  return result;
};
