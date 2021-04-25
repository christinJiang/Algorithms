var diameterOfBinaryTree = function(root) {
  let maxVal = 0;
  const depth = tree => {
    if (!tree || tree.val === null) {
      return 0;
    }
    const left = depth(tree.left);
    const right = depth(tree.right);
    maxVal = Math.max(maxVal, left + right + 1);
    return Math.max(left, right) + 1;
  }
  depth(root);
  return maxVal - 1;
};

const root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
    },
    right: {
      val: 5,
    },
  },
  right: {
    val: 3,
  },
};
const result = diameterOfBinaryTree(root);
console.log('result', result);