/*
二叉树的层平均值
给定一个非空二叉树的根节点 root , 以数组的形式返回每一层节点的平均值。与实际答案相差 10-5 以内的答案可以被接受。

示例 1：
输入：root = [3,9,20,null,null,15,7]
输出：[3.00000,14.50000,11.00000]
解释：第 0 层的平均值为 3,第 1 层的平均值为 14.5,第 2 层的平均值为 11 。
因此返回 [3, 14.5, 11] 。

示例 2:
输入：root = [3,9,20,15,7]
输出：[3.00000,14.50000,11.00000]
 
提示：
树中节点数量在 [1, 104] 范围内
-231 <= Node.val <= 231 - 1
*/
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