/**
 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

 示例：
 输入：1->2->4, 1->3->4
 输出：1->1->2->3->4->4
 */
var mergeTwoLists = function (l1, l2) {
  let current1 = l1;
  let current2 = l2;
  let head = null;
  let newCurrent = null;

  function ListNode (val) {
    this.val = val;
    this.next = null;
  }

  function makeNode (node) {
    if (head === null) {
      head = new ListNode(node.val);
      newCurrent = head;
    } else {
      newCurrent.next = new ListNode(node.val);
      newCurrent = newCurrent.next;
    }
    return node.next;
  }

  while (current1 || current2) {
    if (current1 && current2) {
      if (current2.val > current1.val) {
        current1 = makeNode(current1);
      } else {
        current2 = makeNode(current2);
      }
    } else if (current1) {
      current1 = makeNode(current1);
    } else if (current2) {
      current2 = makeNode(current2);
    }
  }
  return head;
};
