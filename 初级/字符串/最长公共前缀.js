/**
 编写一个函数来查找字符串数组中的最长公共前缀。

 如果不存在公共前缀，返回空字符串 ""。

 示例 1:

 输入: ["flower","flow","flight"]
 输出: "fl"
 示例 2:

 输入: ["dog","racecar","car"]
 输出: ""
 解释: 输入不存在公共前缀。
 说明:

 所有输入只包含小写字母 a-z 。
 */
var longestCommonPrefix = function (strs) {
  var minLen = Math.min.apply(null, strs.map(item => item.length))
  var len = strs.length;
  if (len === 1) return strs[0];
  var res = '';
  for (var i = 0; i < minLen; i++) {
    var count = 0;
    for (var j = 0; j < len - 1; j++) {
      count += strs[j][i] === strs[j + 1][i] ? 1 : -1;
    }
    if (count === len - 1) {
      res += strs[0][i];
    } else {
      break;
    }
  }
  return res;
};
