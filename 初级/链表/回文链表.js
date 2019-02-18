/**
 请判断一个链表是否为回文链表。

 示例 1:
 输入: 1->2
 输出: false

 示例 2:
 输入: 1->2->2->1
 输出: true
 进阶：
 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
 */
var isPalindrome = function (head) {
  let current = head;
  let valArr = [];
  while (current) {
    valArr.push(current.val);
    current = current.next;
  }
  const len = valArr.length;
  const count = Math.floor(len / 2);
  for (let i = 0; i < count; i++) {
    if (valArr[i] !== valArr[len - 1 - i]) {
      return false;
    }
  }
  return true;
};


