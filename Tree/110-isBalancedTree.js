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
var isBalanced = function(root) {

};
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
  for (let i = 0; i < array.length; i ++) {
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

const array = [3,9,20,null,null,15,7];
const treeResult = createTree(array);
console.log('treeResult', JSON.stringify(treeResult));
