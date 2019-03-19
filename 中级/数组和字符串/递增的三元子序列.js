/**
 给定一个未排序的数组，判断这个数组中是否存在长度为 3 的递增子序列。

 数学表达式如下:

 如果存在这样的 i, j, k,  且满足 0 ≤ i < j < k ≤ n-1，
 使得 arr[i] < arr[j] < arr[k] ，返回 true ; 否则返回 false 。
 说明: 要求算法的时间复杂度为 O(n)，空间复杂度为 O(1) 。

 示例 1:
 输入: [1,2,3,4,5]
 输出: true

 示例 2:
 输入: [5,4,3,2,1]
 输出: false

 解题思路：
 先找到两个点并且连成的直线是增区间，那么此时查找到比a2再大一些的点即可。
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let a1 = Number.MAX_SAFE_INTEGER;
  let a2 = Number.MAX_SAFE_INTEGER;
  for (let item of nums) {
    if (a1 >= item) {
      a1 = item
    } else {
      if (a2 >= item) {
        a2 = item
      } else {
        return true
      }
    }
  }
  return false;
};
