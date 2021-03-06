var findMode = function(root) {
  const list = [];
  const dfs = (tree) => {
    if (tree && tree.val !== null) {
      dfs(tree.left);
      list.push(tree.val);
      dfs(tree.right);
    }
  }
  dfs(root);
  let result = [];
  if (list.length) {
    let maxCount = 0;
    let count = 0;
    let base;
    for (let i = 0; i < list.length; i++) {
      if (list[i] === base) {
        count += 1;
      } else {
        count = 1;
        base = list[i];
      }
      if (count > maxCount) {
        maxCount = count;
        result = [list[i]];
      } else if (count === maxCount) {
        result.push(list[i]);
      }
    }
  }
  return result;　
};
const root = {
  val: 1,
  right: {
    val: 2,
    left: {
      val: 2,
    },
  }
};
const list = findMode(root);
console.log('list', list);