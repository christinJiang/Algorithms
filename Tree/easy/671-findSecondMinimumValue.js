/*
二叉树中第二小的节点
给定一个非空特殊的二叉树，每个节点都是正数，并且每个节点的子节点数量只能为 2 或 0。如果一个节点有两个子节点的话，那么该节点的值等于两个子节点中较小的一个。
更正式地说，即 root.val = min(root.left.val, root.right.val) 总成立。
给出这样的一个二叉树，你需要输出所有节点中的 第二小的值 。
如果第二小的值不存在的话，输出 -1 。

示例 1：
输入：root = [2,2,5,null,null,5,7]
输出：5
解释：最小的值是 2 ，第二小的值是 5 。

示例 2：
输入：root = [2,2,2]
输出：-1
解释：最小的值是 2, 但是不存在第二小的值。
 
提示：
树中节点数目在范围 [1, 25] 内
1 <= Node.val <= 231 - 1
对于树中每个节点 root.val == min(root.left.val, root.right.val)
*/
var findSecondMinimumValue = function(root) {
  if (!root) {
    return -1;
  }
  const min = root.val;
  let secMinVal = root.val;
  const dfs = node => {
    if (!node) {
      return;
    }
    if (secMinVal === min && node.val > min) {
      secMinVal = node.val;
    } else if (secMinVal > min && node.val !== root.val && node.val < secMinVal) {
      secMinVal = node.val;
    }
    dfs(node.left);
    dfs(node.right);
  }
  dfs(root);
  if (secMinVal === min) {
    return -1;
  }
  return secMinVal;
};

const tree1 = {
  val: 2,
  left: {
    val: 2,
  },
  right: {
    val: 5,
    left: {
      val: 5,
    },
    right: {
      val: 7,
    },
  },
};
const tree2 = {
  val: 2,
  left: {
    val: 2,
  },
  right: {
    val: 2,
  },
};
const result1 = findSecondMinimumValue(tree1);
console.log('result1', result1);
const result2 = findSecondMinimumValue(tree2);
console.log('result2', result2);