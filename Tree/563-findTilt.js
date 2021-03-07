var findTilt = function(root) {
  let total = 0;
  const getTilt = root => {
    if (!root || root.val === null) {
      return 0;
    }
    const left = getTilt(root.left);
    const right = getTilt(root.right);
    const tilt = Math.abs(left - right);
    total += tilt;
    return root.val + left + right;
  }
  getTilt(root);
  return total;
};
const root1 = {
  val: 1,
  left: {
    val: 2,
  },
  right: {
    val: 3,
  },
};
const root2 = {
  val: 4,
  left: {
    val: 2,
    left: {
      val: 3,
    },
    right: {
      val: 5,
    },
  },
  right: {
    val: 9,
    right: {
      val: 7,
    },
  },
};
const root3 = {
  val: 21,
  left: {
    val: 7,
    left: {
      val: 1,
      left: {
        val: 3,
      },
      right: {
        val: 3,
      },
    },
    right: {
      val: 1,
    },
  },
  right: {
    val: 14,
    left: {
      val: 2,
    },
    right: {
      val: 2,
    },
  },
};
const result1 = findTilt(root1);
console.log('result1', result1);
const result2 = findTilt(root2);
console.log('result2', result2);
const result3 = findTilt(root3);
console.log('result3', result3);