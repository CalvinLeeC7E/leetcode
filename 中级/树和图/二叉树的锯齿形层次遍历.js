/**
 给定一个二叉树，返回其节点值的锯齿形层次遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

 例如：
 给定二叉树 [3,9,20,null,null,15,7],

     3
    / \
   9  20
     /  \
   15    7

 返回锯齿形层次遍历如下：
 [
 [3],
 [20,9],
 [15,7]
 ]
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (root === null) return [];
  let stack = [[root]];

  function search (node) {
    if (!node) return null;
    let tmp = [];
    if (node.left) tmp.push(node.left);
    if (node.right) tmp.push(node.right);
    return tmp;
  }

  // 循环每一层
  for (let i = 0; i < stack.length; i++) {
    let layerNodes = [];
    for (let j = 0; j < stack[i].length; j++) {
      let nextLayerNodes = search(stack[i][j]);
      layerNodes.push(...nextLayerNodes);
    }
    if (layerNodes.length > 0) stack.push(layerNodes);
  }
  // 按照题目规则，整理答案
  stack = stack.map((item, index) => {
    let res = item.map(_item => _item.val);
    return index % 2 === 0 ? res : res.reverse();
  });
  return stack;
};
