/**
 给定一个Excel表格中的列名称，返回其相应的列序号。

 例如:
 A -> 1
 B -> 2
 C -> 3
 ...
 Z -> 26
 AA -> 27
 AB -> 28
 ...

 示例 1:
 输入: "A"
 输出: 1

 示例 2:
 输入: "AB"
 输出: 28

 示例 3:
 输入: "ZY"
 输出: 701
 */
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  let result = 0;
  const len = s.length;
  let base = 'A'.charCodeAt(0);
  for (let i = len - 1; i >= 0; i--) {
    let itemNum = s[i].charCodeAt(0) - base + 1;
    result += itemNum * Math.pow(26, len - i - 1);
  }
  return result;
};
