var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let preCheck = Math.floor(n / 2) + 1;
    let nextCheck = [isBadVersion(preCheck) ? 1 : n]
    let check = undefined
    while (check = nextCheck.pop()) {
      console.log(check)
      if (isBadVersion(check)) {
        if (check - preCheck === 1) {
          return check
        }
      }
      let tmp = preCheck + Math.floor((check - preCheck) / 2)
      preCheck = check
      nextCheck.push(tmp)
    }
  };
};

function test (version) {
  return [8].includes(version)
}

let first = solution(test)(8)
console.log('firstVersion', first)
