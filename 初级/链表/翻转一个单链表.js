/**
 反转一个单链表。

 示例:
 输入: 1->2->3->4->5->NULL
 输出: 5->4->3->2->1->NULL

 进阶:
 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (head === null) return head;
  let stack = [];
  let current = head;
  while (current) {
    stack.push(current);
    current = current.next;
  }
  for (let i = stack.length - 1; i >= 0; i--) {
    stack[i].next = i === 0 ? null : stack[i - 1];
  }
  return stack[stack.length - 1];
};
