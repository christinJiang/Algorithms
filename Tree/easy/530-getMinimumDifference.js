/**
530. 二叉搜索树的最小绝对差
给你一个二叉搜索树的根节点 root ，返回 树中任意两不同节点值之间的最小差值 。
差值是一个正数，其数值等于两值之差的绝对值。
示例 1：
输入：root = [4,2,6,1,3]
输出：1
示例 2：
输入：root = [1,0,48,null,null,12,49]
输出：1
提示：
树中节点的数目范围是 [2, 104]
0 <= Node.val <= 105
*/
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