var sumOfLeftLeaves = function(root) {
  const dfs = (tree, isLeft) => {
    if (!tree || tree.val === null) {
      return 0;
    }
    if (!tree.left && !tree.right && isLeft) {
      return tree.val;
    }
    return dfs(tree.left, true) + dfs(tree.right, false);
  }
  return dfs(root, false);
};
const root = {
  val: 3,
  left: {
    val: 9,
  },
  right: {
    val: 20,
    left: {
      val: 20,
    },
    right: {
      val: 7,
    },
  },
};

const result = sumOfLeftLeaves(root);
console.log('result', result);