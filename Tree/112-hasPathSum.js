/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  if (root.val === null) {
    return false;
  }
  if (root.left === null && root.right === null) {
    return root.val === targetSum;
  }
  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};
const Node = val => ({
  val,
  left: null,
  right: null,
});
const createTree = array => {
  if (!Array.isArray || array.length === 0 || array[0] === null) {
    return null;
  }
  const list = [];
  array.forEach(element => {
    list.push(Node(element));
  });
  const length = array.length;
  for (let i = 0; i < length / 2; i++) {
    console.log('i', i);
    if (2 * i + 1 < length) {
      const leftNode = list[2 * i + 1];
      if (leftNode.val !== null) {
        list[i].left = leftNode;
      }
    }
    if (2 * i + 2 < length) {
      const rightNode = list[2 * i + 2];
      if (rightNode.val !== null) {
        list[i].right = rightNode;
      }
    }
  }
  return list[0];
}

const array = [5, 4, 8, 11, null, 13, 14, 7, 2];
const tree = createTree(array);
console.log('tree', JSON.stringify(tree));
const hasPathSumResult = hasPathSum(tree, 22);
console.log('hasPathSumResult', hasPathSumResult);