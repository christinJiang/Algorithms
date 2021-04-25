
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root || root.val === null) {
    return null;
  }
  const left = invertTree(root.left);
  const right = invertTree(root.right);
  root.left = right;
  root.right = left;
  return root;
};
const Node = val => ({
  val,
  left: null,
  right: null,
});
const createTree = array => {
  if (!Array.isArray(array) || !array.length) {
    return null;
  }
  const list = [];
  array.forEach(val => list.push(Node(val)));

  const length = array.length;
  for (let i = 0; i < length / 2; i++) {
    if (2 * i + 1 < length) {
      const leftNode = list[2 * i + 1];
      list[i].left = leftNode;
    }
    if (2 * i + 2 < length) {
      const rightNode = list[2 * i + 2];
      list[i].right = list[2 * i + 2];
    }
  }
  return list[0];
}

const array = [4, 2, 7, 1, 3, 6, 9];
const tree = createTree(array);
console.log('tree', JSON.stringify(tree));
invertTree(tree);
console.log('invertTree', JSON.stringify(tree));