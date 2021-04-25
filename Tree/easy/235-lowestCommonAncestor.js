var lowestCommonAncestor = function(root, p, q) {
  if (!root || root.val === null || !p || p.val === null || !q || q.val === null) {
    return null;
  }
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else {
    return root;
  }
};
const root = {
  val: 6,
  left: {
    val: 2,
    left: {
      val: 0,
    },
    right: {
      val: 4,
      left: {
        val: 3,
      },
      right: {
        val: 5,
      },
    },
  },
  right: {
    val: 8,
    left: {
      val: 7,
    },
    right: {
      val: 9,
    },
  },
};
const p = {
  val: 3,
}
const q = {
  val: 5,
}
const result = lowestCommonAncestor(root, p, q);
console.log('result', JSON.stringify(result));
/* const array = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5];
const Node = val => ({
  val,
  left: null,
  right: null,
});
const createTree = array => {
  if (!Array.isArray(array) || !Array.length) {
    return null;
  }
  const length = array.length;
  const list = [];
  array.forEach(val => list.push(Node(val)));
  for (let i = 0; i < length / 2; i++) {
    if (2 * i + 1 < length) {
      list[2 * i + 1] = array[2 * i + 1];
    }
    if (2 * i + 2 < length) {
      list[2 * i + 2] = array[2 * i + 2]; 
    }
  }
  return list[0];
}
const tree = createTree(array);
console.log('tree', JSON.stringify(tree));
const p = {
  val: 2,
}
const q = {
  val: 8,
}
const result = lowestCommonAncestor(tree, p, q); */