/*
左叶子之和
给定二叉树的根节点 root ，返回所有左叶子之和。

示例 1：
输入: root = [3,9,20,null,null,15,7] 
输出: 24 
解释: 在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24

示例 2:
输入: root = [1]
输出: 0
 
提示:
节点数在 [1, 1000] 范围内
-1000 <= Node.val <= 1000
*/
var sumOfLeftLeaves = function(root) {
  const dfs = (tree, isLeft) => {
    if (!tree || tree.val === null) {
      return 0;
    }
    if (!tree.left && !tree.right && isLeft) {
      return tree.val;
    }
    return dfs(tree.left, true) + dfs(tree.right, false);
  }
  return dfs(root, false);
};
const root = {
  val: 3,
  left: {
    val: 9,
  },
  right: {
    val: 20,
    left: {
      val: 20,
    },
    right: {
      val: 7,
    },
  },
};

const result = sumOfLeftLeaves(root);
console.log('result', result);