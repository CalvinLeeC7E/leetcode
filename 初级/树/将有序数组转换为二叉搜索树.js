/**
 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。

 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

 示例:
 给定有序数组: [-10,-3,0,5,9],
 一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：
       0
      / \
    -3   9
    /   /
 -10  5
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  function createTree (lIndex, rIndex) {
    if (lIndex > rIndex) return null;
    let mIndex = Math.floor(lIndex + (rIndex - lIndex) / 2);
    let tree = new TreeNode(nums[mIndex]);
    tree.left = createTree(lIndex, mIndex - 1);
    tree.right = createTree(mIndex + 1, rIndex);
    return tree;
  }

  return createTree(0, nums.length - 1);
};
