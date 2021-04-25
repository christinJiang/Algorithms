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
 * @return {boolean}
 */
const isBalanced = function (root) {
  if (!root) return true;
  return Math.abs(height(root.left) - height(root.right)) <= 1
    && isBalanced(root.left) && isBalanced(root.right);
};

const height = node => {
  if (node === null || node.val === null) {
    return 0;
  }
  return Math.max(height(node.left), height(node.right)) + 1;
}

const Node = val => ({
  val,
  left: null,
  right: null,
});

const createTree = array => {
  if (!Array.isArray(array) || array.length === 0 || array[0] === null) {
    return null;
  }
  const list = [];
  for (let i = 0; i < array.length; i++) {
    list.push(Node(array[i]));
  }
  for (let i = 0; i < array.length / 2; i++) {
    if (2 * i + 1 < array.length) {
      const leftNode = list[2 * i + 1];
      if (leftNode.val !== null) {
        list[i].left = leftNode;
      }
    }

    if (2 * i + 2 < array.length) {
      const rightNode = list[2 * i + 2];
      if (rightNode.val !== null) {
        list[i].right = rightNode;
      }
    }
  }
  return list[0];
}

const array = [3, 9, 20, null, null, 15, 7];
// const array = [3,9,20,15,7,null,null,1];
const treeResult = createTree(array);
// console.log('treeResult', JSON.stringify(treeResult));
const balancedResult = isBalanced(treeResult);
console.log('balancedResult', balancedResult);