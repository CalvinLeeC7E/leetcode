/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const convertMap = {
    'I': 1,
    'IV': 4,
    'V': 5,
    'IX': 9,
    'X': 10,
    'XL': 40,
    'L': 50,
    'XC': 90,
    'C': 100,
    'CD': 400,
    'D': 500,
    'CM': 900,
    'M': 1000
  };
  const len = s.length;
  let result = 0;
  for (let i = 0; i < len; i++) {
    let currentItem = s[i];
    let nextItem = s[i + 1] || '';
    if (convertMap[currentItem + nextItem]) {
      result += convertMap[currentItem + nextItem];
      i++;
    } else {
      result += convertMap[currentItem];
    }
  }
  return result;
};

romanToInt('MCMXCIV')
