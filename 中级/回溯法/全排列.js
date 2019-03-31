/**
 给定一个没有重复数字的序列，返回其所有可能的全排列。

 示例:
 输入: [1,2,3]
 输出:
 [
 [1,2,3],
 [1,3,2],
 [2,1,3],
 [2,3,1],
 [3,1,2],
 [3,2,1]
 ]
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];
  const len = nums.length;
  const log = [];
  let tmp = [];

  function _search (start) {
    if (start === len) {
      result.push([...tmp]);
      return;
    }
    for (let i = 0; i < len; i++) {
      if (!log[i]) {
        tmp[start] = nums[i];
        log[i] = true;
        _search(start + 1);
        log[i] = false;
      }
    }
  }

  _search(0);
  return result;
};
