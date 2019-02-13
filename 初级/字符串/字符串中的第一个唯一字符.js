/**
 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

 案例:

 s = "leetcode"
 返回 0.

 s = "loveleetcode",
 返回 2.


 注意事项：您可以假定该字符串只包含小写字母。
 */
var firstUniqChar = function (s) {
  let len = s.length;
  let index = -1;
  for (let i = 0; i < len; i++) {
    let notFound = true;
    for (let j = 0; j < len; j++) {
      if (i == j) continue;
      if (s[i] == s[j]) {
        notFound = false;
        break;
      }
    }
    if (notFound) {
      return i;
    }
  }
  return index;
};
