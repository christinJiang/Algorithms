var mergeTrees = function(root1, root2) {
  if (!root1 && !root2) {
    return null;
  }
  if (!root1 || !root2) {
    return root1 || root2;
  }
  if (root1.val === null) {
    root1.val = 0;
  }
  if (root2.val === null) {
    root2.val = 0;
  }
  root1.val += root2.val;
  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right);
  return root1;
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
const array1 = [1, 3, 2, 5];
const tree1 = createTree(array1);
const array2 = [2, 1, 3, null, 4, null, 7];
const tree2 = createTree(array2);
const resultTrees = mergeTrees(tree1, tree2);
console.log('resultTrees', resultTrees);