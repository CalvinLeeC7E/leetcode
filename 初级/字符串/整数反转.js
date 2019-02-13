/**
 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

 示例 1:

 输入: 123
 输出: 321
 示例 2:

 输入: -123
 输出: -321
 示例 3:

 输入: 120
 输出: 21
 注意:

 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−(2)31次幂,  (2)31次幂 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
 */
var reverse = function (x) {
  const signed = x < 0 ? -1 : 1;
  const min = -2147483648;
  const max = 2147483647;
  const numStr = '' + x * signed;
  let reverseNumStr = '';
  const len = numStr.length;
  for (let i = len - 1; i >= 0; i--) {
    reverseNumStr += numStr[i];
  }
  let reverseNum = Number(reverseNumStr);
  if (reverseNum >= min && reverseNum <= max) {
    return signed * reverseNum;
  } else {
    return 0;
  }
};
