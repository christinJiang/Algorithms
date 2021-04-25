/**
 * @param {TreeNode} root
 * @return {string[]}
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