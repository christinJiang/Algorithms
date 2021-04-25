var minDiffInBST = function(root) {
  const list = [];
  const bst = root => {
    if (!root) {
      return;
    }
    bst(root.left);
    list.push(root.val);
    bst(root.right);
  }
  bst(root);
  let minAbs = Math.abs(list[1] - list[0]);
  for (let i = 1; i < list.length - 1; i += 1) {
    const abs = Math.abs(list[i+1] - list[i]);
    if (abs < minAbs) {
      minAbs = abs;
    }
  }
  return minAbs;
};
const tree = {
  val: 4,
  left: {
    val: 2,
    left: {
      val: 1,
    },
    right: {
      val: 3,
    },
  },
  right: {
    val: 6,
  },
};

const tree2 = {
  val: 1,
  left: {
    val: 0,
  },
  right: {
    val: 48,
    left: {
      val: 12,
    },
    right: {
      val: 49,
    },
  },
};
const result = minDiffInBST(tree2);
console.log('result', result);