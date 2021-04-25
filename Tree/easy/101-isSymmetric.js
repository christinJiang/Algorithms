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
var isSymmetric = function(root) {
  if (root === null) return true;
  const check = (left, right) => {
    if (left === null && right === null) {
      return true;
    } 
    if (left && right) {
      return left.val === right.val 
        && check(left.left, right.right) && check(left.right, right.left);
    }
    return false;
    // if (left === null || right === null) {
    //   return false;
    // }
    // if (left.val !== right.val) {
    //   return false;
    // }
  }
  return check(root.left, root.right);
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
      list[i].left = list[2 * i + 1];
    }
    if (2 * i + 2 < length) {
      list[i].right = list[2 * i + 2];
    }
  }
  return list[0];
}
// const array = [1,2,2,3,4,4,3];
const array = [1,2,2,null,3,null,3];
const tree = createTree(array);
const result = isSymmetric(tree);
console.log('result', result);