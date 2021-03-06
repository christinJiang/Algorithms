var getMinimumDifference = function(root) {
  const list = [];
  const dfs = tree => {
    if (!tree || tree.val === null) {
      return;
    }
    dfs(tree.left);
    list.push(tree.val);
    dfs(tree.right);
  }
  dfs(root);

  let base = list[1];
  let minAbsVal = Math.abs(list[1] - list[0]);
  for (let i = 2; i < list.length; i += 1) {
    const absVal = Math.abs(list[i] - base);
    if (absVal < minAbsVal) {
      minAbsVal= absVal;
    }
    base = list[i];
  }
  return minAbsVal;
};
const root = {
  val: 1,
  right: {
    val: 3,
    left: {
      val: 2,
    },
  },
};
const result = getMinimumDifference(root);
console.log('result', result);