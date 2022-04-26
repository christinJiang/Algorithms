/*
两数之和 IV - 输入 BST
给定一个二叉搜索树 root 和一个目标结果 k，如果 BST 中存在两个元素且它们的和等于给定的目标结果，则返回 true。

示例 1：
输入: root = [5,3,6,2,4,null,7], k = 9
输出: true

示例 2：
输入: root = [5,3,6,2,4,null,7], k = 28
输出: false
 
提示:
二叉树的节点个数的范围是  [1, 104].
-104 <= Node.val <= 104
root 为二叉搜索树
-105 <= k <= 105
*/
var findTarget = function(root, k) {
  const set = new Set();
  const dfs = (root, k) => {
    if (!root) {
      return false;
    }
    const hasTarget = set.has(k - root.val);
    if (hasTarget) {
      return true;
    }
    if (!set.has(root.val)) {
      set.add(root.val);
    }
    return dfs(root.left, k) || dfs(root.right, k);
  }  
  return dfs(root, k);
};
const root1 = {
  val: 5,
  left: {
    val: 3,
    left: {
      val: 2,
    },
    right: {
      val: 4,
    },
  },
  right: {
    val: 6,
    right: {
      val: 7,
    },
  },
};

const root2 = {
  val: 5,
  left: {
    val: 3,
    left: {
      val: 2,
    },
    right: {
      val: 4,
    },
  },
  right: {
    val: 6,
    right: {
      val: 7,
    },
  },
};

const result1 = findTarget(root1, 9);
console.log('result1', result1);
const result2 = findTarget(root2, 28);
console.log('result2', result2);
