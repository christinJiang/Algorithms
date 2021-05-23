/* 二叉树中的最大路径和
路径 被定义为一条从树中任意节点出发，沿父节点-子节点连接，达到任意节点的序列。同一个节点在一条路径序列中 至多出现一次 。该路径 至少包含一个 节点，且不一定经过根节点。
路径和 是路径中各节点值的总和。
给你一个二叉树的根节点 root ，返回其 最大路径和 。

示例 1：
输入：root = [1,2,3]
输出：6
解释：最优路径是 2 -> 1 -> 3 ，路径和为 2 + 1 + 3 = 6

示例 2：
输入：root = [-10,9,20,null,null,15,7]
输出：42
解释：最优路径是 15 -> 20 -> 7 ，路径和为 15 + 20 + 7 = 42
 
提示：
树中节点数目范围是 [1, 3 * 104]
-1000 <= Node.val <= 1000
*/
var maxPathSum = function(root) {
  let maxValue = Number.MIN_SAFE_INTEGER;
  const maxSum = root => {
    if (root === null) return 0;
    const left = maxSum(root.left);
    const right = maxSum(root.right);
    const inSideVal = root.val + left + right;
    maxValue = Math.max(maxValue, inSideVal);
    const outSideVal = root.val + Math.max(left, right);
    return outSideVal > 0 ? outSideVal : 0;
  }
  maxSum(root);
  return maxValue;
};
