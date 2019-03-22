/**
 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

 示例 1：
 输入: "babad"
 输出: "bab"
 注意: "aba" 也是一个有效答案。

 示例 2：
 输入: "cbbd"
 输出: "bb"
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // TODO 性能优化
  const len = s.length;
  if (len === 0) return '';
  const haveFindWord = {};
  let longestStr = s[0];

  function check (str) {
    const len = str.length;
    const count = Math.floor(len / 2);
    for (let i = 0; i < count; i++) {
      if (str[i] !== str[len - i - 1]) return '';
    }
    return str;
  }

  for (let i = 0; i < len; i++) {
    const item = s[i];
    if (haveFindWord[item] === undefined) {
      haveFindWord[item] = [i];
      continue;
    }
    const wordIndexArr = haveFindWord[item];
    for (let j = 0; j < wordIndexArr.length; j++) {
      let tmpStr = check(s.slice(wordIndexArr[j], i + 1));
      if (tmpStr.length > longestStr.length) {
        longestStr = tmpStr;
        break;
      }
    }
    wordIndexArr.push(i);
  }
  return longestStr;
};
