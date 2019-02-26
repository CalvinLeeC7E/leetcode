var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let currentVal = 1 + Math.floor((n - 1) / 2)
    let preVal = currentVal
    let firstBug = null
    let queue = [isBadVersion(currentVal) ? 1 : n]
    while (currentVal = queue.pop()) {
      console.log('currentVal', currentVal)
      console.log('preVal', preVal)
      if (isBadVersion(currentVal)) {
        firstBug = currentVal
      } else {

      }
      if (currentVal - preVal > 0) {
        queue.push(Math.floor(preVal + (currentVal - preVal) / 2))
        preVal = currentVal
      } else {
        
      }
    }
    return firstBug
  }
  /*
  return function (n) {
    let preCheck = Math.floor(n / 2) + 1;
    let first = null;
    let nextCheck = [n];
    if (isBadVersion(preCheck)) {
      first = preCheck;
      nextCheck = [1];
    }
    let check = undefined;
    while (check = nextCheck.pop()) {
      let tmp;
      if (isBadVersion(check)) {
        if (check < first) first = check;
        tmp = preCheck + Math.floor((check - preCheck) / 2);
      } else {
        tmp = check + Math.floor((first - check) / 2);
      }
      if (tmp === check || tmp === preCheck || tmp === first) {
        break;
      }
      preCheck = check;
      nextCheck.push(tmp);
    }
    return first;
  };
  */
};

function test (version) {
  return [7, 8].includes(version)
}

let first = solution(test)(8)
console.log('firstVersion', first)
