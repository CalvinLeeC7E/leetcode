/**
 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

 示例：
 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 输出：7 -> 0 -> 8
 原因：342 + 465 = 807

 解题思路：
 不要偷懒，如果直接准换成数字计算会有溢出，按位相加遍历。
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let rootL1 = l1;
  let rootL2 = l2;
  let resNode = null;
  let resNodeRoot = resNode;

  function makeNode (val) {
    if (resNode === null) {
      resNodeRoot = new ListNode(val);
      resNode = resNodeRoot;
    } else {
      resNode.next = new ListNode(val);
      resNode = resNode.next;
    }
  }

  let tmpVal = 0;
  while (rootL1 !== null || rootL2 !== null) {
    if (rootL1) {
      tmpVal += rootL1.val;
      rootL1 = rootL1.next;
    }
    if (rootL2) {
      tmpVal += rootL2.val;
      rootL2 = rootL2.next;
    }
    if (tmpVal >= 10) {
      if (tmpVal === 10) {
        makeNode(0);
      } else {
        makeNode(tmpVal - 10);
      }
      tmpVal = 1;
    } else {
      makeNode(tmpVal);
      tmpVal = 0;
    }
  }
  if (tmpVal === 1) {
    makeNode(tmpVal);
  }
  return resNodeRoot;
}
