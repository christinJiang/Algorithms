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

}

const array = [3,9,20,null,null,15,7];
const treeResult = createTree(array);
console.log('treeResult', JSON.stringify(treeResult));