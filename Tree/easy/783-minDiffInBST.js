/*
二叉搜索树节点最小距离
给你一个二叉搜索树的根节点 root ，返回 树中任意两不同节点值之间的最小差值 。
差值是一个正数，其数值等于两值之差的绝对值。

示例 1：
输入：root = [4,2,6,1,3]
输出：1

示例 2：
输入：root = [1,0,48,null,null,12,49]
输出：1
 
提示：
树中节点的数目范围是 [2, 100]
0 <= Node.val <= 105
*/
var minDiffInBST = function(root) {
  const list = [];
  const bst = root => {
    if (!root) {
      return;
    }
    bst(root.left);
    list.push(root.val);
    bst(root.right);
  }
  bst(root);
  let minAbs = Math.abs(list[1] - list[0]);
  for (let i = 1; i < list.length - 1; i += 1) {
    const abs = Math.abs(list[i+1] - list[i]);
    if (abs < minAbs) {
      minAbs = abs;
    }
  }
  return minAbs;
};
const tree = {
  val: 4,
  left: {
    val: 2,
    left: {
      val: 1,
    },
    right: {
      val: 3,
    },
  },
  right: {
    val: 6,
  },
};

const tree2 = {
  val: 1,
  left: {
    val: 0,
  },
  right: {
    val: 48,
    left: {
      val: 12,
    },
    right: {
      val: 49,
    },
  },
};
const result = minDiffInBST(tree2);
console.log('result', result);