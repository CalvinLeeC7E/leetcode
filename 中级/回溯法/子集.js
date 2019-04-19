/**
 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。

 说明：解集不能包含重复的子集。

 示例:
 输入: nums = [1,2,3]
 输出:
 [
 [3],
 [1],
 [2],
 [1,2,3],
 [1,3],
 [2,3],
 [1,2],
 []
 ]
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [[]];
  const len = nums.length;
  let tmp = [];

  function search (start) {
    if (start >= len) return tmp.pop();
    for (let i = start; i < len; i++) {
      tmp.push(nums[i]);
      result.push([...tmp]);
      search(i + 1);
    }
    tmp.pop();
  }

  search(0);
  return result;
}
// 高效率解法
// var subsets = function (nums) {
//   let result = [[]]
//   for (let i = 0; i < nums.length; i++) {
//     let vals = nums[i]
//     let n = result.length
//     for (let j = 0; j < n; j++) {
//       let value = result[j].concat(vals)
//       result.push(value)
//     }
//   }
//   return result;
// };
