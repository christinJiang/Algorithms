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