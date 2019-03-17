/**
 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

 示例 1:
 输入: "abcabcbb"
 输出: 3
 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

 示例 2:
 输入: "bbbbb"
 输出: 1
 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

 示例 3:
 输入: "pwwkew"
 输出: 3
 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let uniWordMap = {};
  let count = 0;
  let maxCount = count;
  const len = s.length;
  for (let i = 0; i < len; i++) {
    let item = s[i];
    if (uniWordMap[item] !== undefined) {
      i = uniWordMap[item];
      uniWordMap = {};
      count = 0;
    } else {
      uniWordMap[item] = i;
      count++;
    }
    if (count > maxCount) {
      maxCount = count;
    }
  }
  return maxCount;
};
/*
let uniWordMap = {};
  let count = 0;
  let maxCount = count;
  const len = s.length;
  for (let i = 0; i < len; i++) {
    let item = s[i];
    let countMap = uniWordMap[item];
    if (countMap === undefined) {
      countMap = 1
      uniWordMap[item] = 1;
    } else {
      countMap++;
      uniWordMap[item] = countMap;
    }
    if (countMap > 1) {
      count = 1;
    } else {
      count++;
    }
    console.log(uniWordMap)
    if (count > maxCount) {
      maxCount = count;
    }
  }
  return maxCount;
 */
