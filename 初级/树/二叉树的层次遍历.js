/**
 给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。
 例如:
 给定二叉树: [3,9,20,null,null,15,7]

 返回其层次遍历结果：
 [
 [3],
 [9,20],
 [15,7]
 ]
 */
var levelOrder = function (root) {
  if (!root) return [];
  let result = [];

  function search (node, nowDeep) {
    if (!node) return;
    if (!result[nowDeep]) result[nowDeep] = [];
    result[nowDeep].push(node.val);
    if (node.left) search(node.left, nowDeep + 1);
    if (node.right) search(node.right, nowDeep + 1);
  }

  search(root, 0);
  return result;
};
/*
测试用例

function TreeNode (val) {
  this.val = val;
  this.left = this.right = null;
}

let a1 = new TreeNode(3)
let a2 = new TreeNode(9)
let a3 = new TreeNode(20)
let a4 = new TreeNode(15)
let a5 = new TreeNode(7)
a1.left = a2
a1.right = a3
a3.left = a4
a3.right = a5

let res = levelOrder(a1)
console.log(res)
*/
