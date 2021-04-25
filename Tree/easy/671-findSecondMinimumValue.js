var findSecondMinimumValue = function(root) {
  if (!root) {
    return -1;
  }
  const min = root.val;
  let secMinVal = root.val;
  const dfs = node => {
    if (!node) {
      return;
    }
    if (secMinVal === min && node.val > min) {
      secMinVal = node.val;
    } else if (secMinVal > min && node.val !== root.val && node.val < secMinVal) {
      secMinVal = node.val;
    }
    dfs(node.left);
    dfs(node.right);
  }
  dfs(root);
  if (secMinVal === min) {
    return -1;
  }
  return secMinVal;
};

const tree1 = {
  val: 2,
  left: {
    val: 2,
  },
  right: {
    val: 5,
    left: {
      val: 5,
    },
    right: {
      val: 7,
    },
  },
};
const tree2 = {
  val: 2,
  left: {
    val: 2,
  },
  right: {
    val: 2,
  },
};
const result1 = findSecondMinimumValue(tree1);
console.log('result1', result1);
const result2 = findSecondMinimumValue(tree2);
console.log('result2', result2);