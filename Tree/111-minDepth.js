var minDepth = function(root) {
  if (!root|| root.val === null) {
    return 0;
  }
  if (!root.left && !root.right) {
    return 1;
  }
  let min = Number.MAX_SAFE_INTEGER;
  // min = Math.min(minDepth(root.left), minDepth(root.right), min);
  if (root.left) {
    min = Math.min(minDepth(root.left), min);
  }
  if (root.right) {
    min = Math.min(minDepth(root.right), min);
  }
  return min + 1;
};
const root = {
  val: 3,
  left: {
    val: 9,
  },
  right: {
    val: 20,
    left: {
      val: 15,
    },
    right: {
      val: 7,
    },
  },
};
const result = minDepth(root);
console.log('result', result);