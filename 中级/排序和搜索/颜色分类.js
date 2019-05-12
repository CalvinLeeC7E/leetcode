/**
 * 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

 注意:
 不能使用代码库中的排序函数来解决这道题。

 示例:
 输入: [2,0,2,1,1,0]
 输出: [0,0,1,1,2,2]

 进阶：
 一个直观的解决方案是使用计数排序的两趟扫描算法。
 首先，迭代计算出0、1 和 2 元素的个数，然后按照0、1、2的排序，重写当前数组。
 你能想出一个仅使用常数空间的一趟扫描算法吗？
 */
/**
 * 解题思路，将等于2的都剪切到数组的末尾，等于0的剪切至数组的开头。
 */
var sortColors = function (nums) {
  const len = nums.length;
  let i = 0;
  let count = 0;
  while (count < len) {
    const val = nums[i];
    if (val === 2) {
      nums.splice(i, 1);
      nums.push(2);
    } else if (val === 0) {
      nums.splice(i, 1);
      nums.unshift(0);
      i++;
    } else {
      i++;
    }
    count++;
  }
};
