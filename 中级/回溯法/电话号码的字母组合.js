/**
 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

 手机九宫格输入法

 示例:
 输入："23"
 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

 说明:
 尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) return [];
  const numMap = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  };
  const digitsArr = [];
  for (let item of digits) {
    digitsArr.push(numMap[item]);
  }
  const result = [];
  const tmp = [];

  function _search (start) {
    const words = digitsArr[start];
    if (!words) {
      result.push(tmp.join(''));
      return;
    }
    for (let i = 0; i < words.length; i++) {
      tmp[start] = words[i];
      _search(start + 1);
    }
  }

  _search(0);
  return result;
};
