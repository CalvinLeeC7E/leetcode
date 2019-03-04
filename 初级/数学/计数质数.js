/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  if (n <= 1) return 0;
  let count = 0;
  let nums = [];
  for (let i = 2; i <= n; i++) {
    if (nums[i] === undefined) {
      count++;
      let j = 2;
      while (i * j <= n) {
        nums[i * j] = true;
        j++;
      }
    }
  }
  return count;
};

let res = countPrimes(100)
console.log(res)
