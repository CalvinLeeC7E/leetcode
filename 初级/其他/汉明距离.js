/**
 两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。

 给出两个整数 x 和 y，计算它们之间的汉明距离。

 注意：
 0 ≤ x, y < 2^31.

 示例:
 输入: x = 1, y = 4
 输出: 2
 解释:
 1   (0 0 0 1)
 4   (0 1 0 0)
 */
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let num = x ^ y;
  let count = 0;
  while (num > 0) {
    count += num & 1;
    num = num >>> 1;
  }
  return count;
};
