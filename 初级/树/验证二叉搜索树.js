/**
 给定一个二叉树，找出其最大深度。

 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

 说明: 叶子节点是指没有子节点的节点。

 示例：
 给定二叉树 [3,9,20,null,null,15,7]
 返回它的最大深度3 。
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  let maxDeep = 1;

  function search (node, deep) {
    if (deep > maxDeep) maxDeep = deep;
    if (node && node.left) search(node.left, deep + 1);
    if (node && node.right) search(node.right, deep + 1);
  }

  search(root, 1);
  return maxDeep;
};
var isValidBST = function (root) {
  if (!root) return true;
  let result = true;

  function search (node) {
    if (node) {
      const currentVal = node.val;
      const leftVal = node.left ? node.left.val : currentVal;
      const rightVal = node.right ? node.right.val : currentVal;
      if (currentVal < leftVal || currentVal > rightVal) {
        result = false;
        return;
      }
      if (node.left) search(node.left);
      if (node.right) search(node.right);
    }
  }

  search(root);
  return result;
};

function TreeNode (val) {
  this.val = val;
  this.left = this.right = null;
}

let a1 = new TreeNode(2)
let a2 = new TreeNode(1)
let a3 = new TreeNode(3)
a1.left = a2
a1.right = a3

// let a1 = new TreeNode(5)
// let a2 = new TreeNode(1)
// let a3 = new TreeNode(6)
// let a4 = new TreeNode(3)
// let a5 = new TreeNode(4)
// a1.left = a2
// a1.right = a3
// a3.left = a4
// a3.right = a5

let right = isValidBST(a1)
console.log(right)

