var findTarget = function(root, k) {
  const set = new Set();
  const dfs = (root, k) => {
    if (!root) {
      return false;
    }
    const hasTarget = set.has(k - root.val);
    if (hasTarget) {
      return true;
    }
    if (!set.has(root.val)) {
      set.add(root.val);
    }
    return dfs(root.left, k) || dfs(root.right, k);
  }  
  return dfs(root, k);
};
const root1 = {
  val: 5,
  left: {
    val: 3,
    left: {
      val: 2,
    },
    right: {
      val: 4,
    },
  },
  right: {
    val: 6,
    right: {
      val: 7,
    },
  },
};

const root2 = {
  val: 5,
  left: {
    val: 3,
    left: {
      val: 2,
    },
    right: {
      val: 4,
    },
  },
  right: {
    val: 6,
    right: {
      val: 7,
    },
  },
};

const result1 = findTarget(root1, 9);
console.log('result1', result1);
const result2 = findTarget(root2, 28);
console.log('result2', result2);
