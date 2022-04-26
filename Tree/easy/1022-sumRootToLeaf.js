/**
从根到叶的二进制数之和
给出一棵二叉树，其上每个结点的值都是 0 或 1 。每一条从根到叶的路径都代表一个从最高有效位开始的二进制数。
例如，如果路径为 0 -> 1 -> 1 -> 0 -> 1，那么它表示二进制数 01101，也就是 13 。
对树上的每一片叶子，我们都要找出从根到该叶子的路径所表示的数字。
返回这些数字之和。题目数据保证答案是一个 32 位 整数。

示例 1：
输入：root = [1,0,1,0,1,0,1]
输出：22
解释：(100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22

示例 2：
输入：root = [0]
输出：0

提示：
树中的节点数在 [1, 1000] 范围内
Node.val 仅为 0 或 1 

Definition for a binary tree node.
 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function(root) {
  let total = 0;
  if (!root || root.val === null) {
    return 0;
  }

  const dfs = (root, sum) => {
    if (Number.isNaN(root.val)) {
      return;
    }
    const temp = (sum << 1) + root.val;
    if (root.left === null && root.right === null) {
      total += temp;
      return;
    }
    if (root.left) {
      dfs(root.left, temp);
    }
    if (root.right) {
      dfs(root.right, temp);
    }
  }
  dfs(root, 0);
  return total;
};

const Node = val => ({
  val,
  left: null,
  right: null,
});

const createTree = array => {
  if (!Array.isArray(array) || array.length === 0) {
    return null;
  }
  const list = [];
  const length = array.length;
  array.forEach(val => list.push(Node(val)));
  for (let i = 0; i < length / 2; i++) {
    if (2 * i + 1 < length) {
      list[i].left = list[2 * i + 1];
    }
    if (2 * i + 2 < length) {
      list[i].right = list[2 * i + 2];
    }
  }
  return list[0];
}

const array = [1, 0, 1, 0, 1, 0, 1];
const tree = createTree(array);
console.log('tree', JSON.stringify(tree));
const total = sumRootToLeaf(tree);
console.log('total', total);