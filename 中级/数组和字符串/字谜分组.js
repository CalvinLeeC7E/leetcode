/**
 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

 示例:

 输入: ["eat", "tea", "tan", "ate", "nat", "bat"],
 输出:
 [
 ["ate","eat","tea"],
 ["nat","tan"],
 ["bat"]
 ]
 说明：
 所有输入均为小写字母。
 不考虑答案输出的顺序。

 解答思路：
 将字符串重新排序，这样只要排序结果一致的就是一组的。
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const resMap = {};

  function toUni (str) {
    return str.split('').sort().join('')
  }

  for (let item of strs) {
    let uniVal = toUni(item);
    if (resMap[uniVal] === undefined) resMap[uniVal] = [];
    resMap[uniVal].push(item);
  }
  return Object.values(resMap);
};
