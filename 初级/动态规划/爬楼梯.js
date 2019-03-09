/**
 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

 注意：给定 n 是一个正整数。

 示例 1：
 输入： 2
 输出： 2
 解释： 有两种方法可以爬到楼顶。
 1.  1 阶 + 1 阶
 2.  2 阶

 示例 2：
 输入： 3
 输出： 3
 解释： 有三种方法可以爬到楼顶。
 1.  1 阶 + 1 阶 + 1 阶
 2.  1 阶 + 2 阶
 3.  2 阶 + 1 阶
 */
/**
 * @param {number} n
 * @return {number}
 */
// 这道题的结果集，恰巧符合斐波那契数列
var climbStairs = function (n) {
  if (n === 0 || n === 1) return 1;
  let a = 1, b = 1;
  for (let i = 1; i < n; i++) {
    [a, b] = [b, a + b]
  }
  return b;
}
/*
// 笨方法
var climbStairs = function (n) {
  if (n == 0) return 0;
  let resultCount = 1;
  // 在组合中可以使用2的总个数
  let twoCount = Math.floor(n / 2);
  for (let i = 1; i <= twoCount; i++) {
    // 当前组合的总格子数量，使用1的数量加上使用2的数量
    let count = n - 2 * i + i;
    // 实现组合求和公式C(n,m)计算公式
    let canChoose = count;
    let chooseCount = i;
    for (let j = 1; j < i; j++) {
      canChoose = canChoose * (count - j);
    }
    for (let k = 1; k < i; k++) {
      chooseCount = chooseCount * (i - k);
    }
    resultCount += canChoose / chooseCount;
  }
  return resultCount;
};
*/
