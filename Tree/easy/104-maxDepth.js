var maxDepth = function(root) {
  if (!root || root.val === null) {
    return 0;
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
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
const root1 = {
  val: 2,
  right: {
    val: 3,
    right: {
      val: 4, 
      right: {
        val: 5,
        right: {
          val: 6,
        },
      }
    }
  },
};
const result = maxDepth(root1);
console.log('result', result);