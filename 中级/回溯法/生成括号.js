/**
 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。

 例如，给出 n = 3，生成结果为：
 [
 "((()))",
 "(()())",
 "(())()",
 "()(())",
 "()()()"
 ]
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = [];
  let tmp = [];

  function gen (str, index, leftCount, rightCount) {
    if (index === 2 * n) {
      res.push(tmp.join(''));
      return;
    }
    if (str === '(') {
      if (++leftCount > n) return;
    } else {
      if (++rightCount > n) return;
    }
    tmp[index] = str;
    if (leftCount > rightCount) {
      // 只有左侧括号数量大于右侧括号数量时才可以双选
      gen('(', index + 1, leftCount, rightCount);
      gen(')', index + 1, leftCount, rightCount);
    } else {
      // 只能使用左括号
      gen('(', index + 1, leftCount, rightCount);
    }
  }

  gen('(', 0, 0, 0);
  return res;
}
