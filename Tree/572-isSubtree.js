var isSubtree = function(s, t) {
  if (!s && !t) {
    return true;
  } else if (!s) {
    return false;
  }
  return checkTree(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
};
const checkTree = (s, t) => {
  if (!s && !t) {
    return true;
  }
  if (!s || !t) {
    return false;
  }
  return s.val === t.val && checkTree(s.left, t.left) && checkTree(s.right, t.right);
}
const source1 = {
  val: 3,
  left: {
    val: 4,
    left: {
      val: 1,
    },
    right: {
      val: 2,
    },
  },
  right: {
    val: 5,
  },
};
const target1 = {
  val: 4,
  left: {
    val: 1,
  },
  right: {
    val: 2,
  },
};
const result1 = isSubtree(source1, target1);
console.log('result1', result1);
const source2 = {
  val: 3,
  left: {
    val: 4,
    left: {
      val: 1,
    },
    right: {
      val: 2,
      left: {
        val: 0,
      },
    },
  },
  right: {
    val: 5,
  },
};
const target2 = {
  val: 4,
  left: {
    val: 1,
  },
  right: {
    val: 2,
  },
};
const result2 = isSubtree(source2, target2);
console.log('result2', result2);