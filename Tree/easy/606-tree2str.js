var tree2str = function(root) {
  if (!root) {
    return '';
  }
  if (!root.left && !root.right) {
    return `${root.val}`;
  }
  let result = root.val;
  const leftVal = tree2str(root.left);
  if (root.left) {
    result = `${result}(${leftVal})`;
  } else {
    result = `${result}()`;
  }
  if (root.right) {
    const rightVal = tree2str(root.right);
    result = `${result}(${rightVal})`;
  }
  return result;
};
const root1 = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
    },
  },
  right: {
    val: 3,
  },
};
const root2 = {
  val: 1,
  left: {
    val: 2,
    right: {
      val: 4,
    },
  },
  right: {
    val: 3,
  },
};
const result1 = tree2str(root1);
console.log('result1', result1);
const result2 = tree2str(root2);
console.log('result2', result2);