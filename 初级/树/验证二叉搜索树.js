/**
 给定一个二叉树，判断其是否是一个有效的二叉搜索树。

 假设一个二叉搜索树具有如下特征：
 节点的左子树只包含小于当前节点的数。
 节点的右子树只包含大于当前节点的数。
 所有左子树和右子树自身必须也是二叉搜索树。
 */
var isValidBST = function (root) {
  if (!root) return true;

  let valArr = []

  function search (node) {
    if (node) {
      search(node.left)
      valArr.push(node.val)
      search(node.right)
    }
  }

  search(root);
  const len = valArr.length;
  for (let i = 0; i < len - 1; i++) {
    if (valArr[i] >= valArr[i + 1]) return false;
  }
  return true;
};
/**
 * test
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
 */
