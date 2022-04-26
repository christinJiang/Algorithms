/**
 * @param {TreeNode} root
 * @return {string[]}
二叉树的所有路径
给你一个二叉树的根节点 root ，按 任意顺序 ，返回所有从根节点到叶子节点的路径。
叶子节点 是指没有子节点的节点。

示例 1：
输入：root = [1,2,3,null,5]
输出：["1->2->5","1->3"]

示例 2：
输入：root = [1]
输出：["1"]
 
提示：
树中节点的数目在范围 [1, 100] 内
-100 <= Node.val <= 100 
 */
var binaryTreePaths = function(root) {
  const result = [];
  const findPaths = (tree, string) => {
    if (!tree || tree.val === null) {
      return;
    }
    string = `${string}${tree.val}`;
    if (!tree.left && !tree.right) {
      result.push(string);
      return
    }
    string = `${string}->`;
    if (tree.left) {
      findPaths(tree.left, string);
    } 
    if (tree.right) {
      findPaths(tree.right, string);
    }
  }
  findPaths(root, '');
  return result;
};
const tree = {
  val: 1,
  left: {
    val: 2,
    right: {
      val: 5,
    },
  },
  right: {
    val: 3,
  },
};
const result = binaryTreePaths(tree);
console.log('result', result);