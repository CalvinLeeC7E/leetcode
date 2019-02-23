/**
 给定一个二叉树，检查它是否是镜像对称的。
 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的。
 */
var isSymmetric = function (root) {
  // 获取本层兄弟节点
  function getSibling (nodes) {
    const sibling = [];
    for (let item of nodes) {
      if (item === null) continue;
      sibling.push(item.left);
      sibling.push(item.right);
    }
    return sibling;
  }

  // 检查本层值是否对称
  function check (values) {
    const valuesLen = values.length;
    const len = Math.floor(valuesLen / 2);
    for (let i = 0; i < len; i++) {
      if (values[i] !== values[valuesLen - 1 - i]) return false;
    }
    return true;
  }

  // 广度优先
  let nodes = [root]
  while (nodes.length) {
    const sibling = getSibling(nodes);
    const siblingValues = sibling.map(item => item ? item.val : '');
    nodes = sibling.filter(item => item);
    if (nodes.length > 0 && check(siblingValues) === false) return false;
  }
  return true;
};
/*
function TreeNode (val) {
  this.val = val;
  this.left = this.right = null;
}

// let a1 = new TreeNode(1)
// let a2 = new TreeNode(2)
// let a3 = new TreeNode(2)
// let a4 = new TreeNode(3)
// let a5 = new TreeNode(3)
// a1.left = a2
// a1.right = a3
// a2.right = a4
// a3.right = a5

let a1 = new TreeNode(1)
let a2 = new TreeNode(2)
let a3 = new TreeNode(2)
let a4 = new TreeNode(3)
let a5 = new TreeNode(4)
let a6 = new TreeNode(4)
let a7 = new TreeNode(3)
a1.left = a2
a1.right = a3
a2.left = a4
a2.right = a5
a3.left = a6
a3.right = a7

let res = isSymmetric(a1)
console.log(res)
*/
