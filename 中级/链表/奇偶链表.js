/**
 给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。

 请尝试使用原地算法完成。你的算法的空间复杂度应为 O(1)，时间复杂度应为 O(nodes)，nodes 为节点总数。

 示例 1:
 输入: 1->2->3->4->5->NULL
 输出: 1->3->5->2->4->NULL

 示例 2:
 输入: 2->1->3->5->6->4->7->NULL
 输出: 2->3->6->7->1->5->4->NULL

 说明:
 应当保持奇数节点和偶数节点的相对顺序。
 链表的第一个节点视为奇数节点，第二个节点视为偶数节点，以此类推。
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
var oddEvenList = function (head) {
  if (head === null) return null;
  let count = 1;
  let currentNode = head;
  let oddNode = currentNode;
  let evenRoot = oddNode.next;
  let eventNode = evenRoot;
  while (currentNode) {
    let relNext = currentNode.next;
    if (count % 2 === 0) {
      let preNext = currentNode.next;
      if (preNext) {
        eventNode.next = currentNode.next.next;
        eventNode = eventNode.next;
      }
    } else {
      let preNext = currentNode.next;
      if (preNext) {
        oddNode.next = currentNode.next.next;
        if (oddNode.next !== null) oddNode = oddNode.next;
      }
    }
    count++;
    currentNode = relNext;
  }
  oddNode.next = evenRoot;
  return head;
};
