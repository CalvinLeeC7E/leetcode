/**
 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

 有效字符串需满足：
 左括号必须用相同类型的右括号闭合。
 左括号必须以正确的顺序闭合。
 注意空字符串可被认为是有效字符串。

 示例 1:
 输入: "()"
 输出: true

 示例 2:
 输入: "()[]{}"
 输出: true

 示例 3:
 输入: "(]"
 输出: false

 示例 4:
 输入: "([)]"
 输出: false

 示例 5:
 输入: "{[]}"
 输出: true
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const len = s.length;
  const ruleMap = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  for (let i = 0; i < len; i++) {
    const item = s[i];
    if (ruleMap[item]) {
      stack.push(item);
    } else {
      if (ruleMap[stack.pop()] !== item) return false;
    }
  }
  return stack.length === 0;
};
