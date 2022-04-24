/**
501. 二叉搜索树中的众数
给你一个含重复值的二叉搜索树（BST）的根节点 root ，找出并返回 BST 中的所有 众数（即，出现频率最高的元素）。
如果树中有不止一个众数，可以按 任意顺序 返回。
假定 BST 满足如下定义：
结点左子树中所含节点的值 小于等于 当前节点的值
结点右子树中所含节点的值 大于等于 当前节点的值
左子树和右子树都是二叉搜索树
示例 1:
输入：root = [1,null,2,2]
输出：[2]
示例 2：
输入：root = [0]
输出：[0]
提示：
树中节点的数目在范围 [1, 104] 内
-105 <= Node.val <= 105
*/
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