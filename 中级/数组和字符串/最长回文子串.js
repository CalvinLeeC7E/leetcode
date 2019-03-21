/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
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
    wordIndexArr.forEach(fItem => {
      let tmpStr = check(s.slice(fItem, i + 1));
      if (tmpStr.length > longestStr.length) longestStr = tmpStr;
    })
    wordIndexArr.push(i);
  }
  return longestStr;
};
const res = longestPalindrome("abcbbbbbbbbbbbb")
console.log(res)
