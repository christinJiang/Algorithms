var averageOfLevels = function(root) {
  const result = [];
  if (!root || root.val === null) {
    return result;
  }
  const queue = [root];
  while(queue.length) {
    let total = 0;
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      total += node.val;
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    result.push(total/length);
  }
  return result;  
};
const tree1 = {
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
const result = averageOfLevels(tree1);
console.log(result);