/* 恢复二叉搜索树
给你二叉搜索树的根节点 root ，该树中的两个节点被错误地交换。请在不改变其结构的情况下，恢复这棵树。
进阶：使用 O(n) 空间复杂度的解法很容易实现。你能想出一个只使用常数空间的解决方案吗？

示例 1：
输入：root = [1,3,null,null,2]
输出：[3,1,null,null,2]
解释：3 不能是 1 左孩子，因为 3 > 1 。交换 1 和 3 使二叉搜索树有效。

示例 2：
输入：root = [3,1,4,null,null,2]
输出：[2,1,4,null,null,3]
解释：2 不能在 3 的右子树中，因为 2 < 3 。交换 2 和 3 使二叉搜索树有效。
 
提示：
树上节点的数目在范围 [2, 1000] 内
-231 <= Node.val <= 231 - 1
*/
const inOrder = (root, nums) => {
  if (root === null || root.val === null) return;
  inOrder(root.left, nums);
  nums.push(root.val);
  inOrder(root.right, nums);
}
const findTwoSwapped = nums => {
  let x = y = -1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] < nums[i]) {
      y = nums[i + 1];
      if (x === -1) {
        x = nums[i];
      } else break;
    }
  }
  return [x, y];
}
const recover = (root, count, first, second) => {
  if (root !== null) {
    if (root.val === first || root.val === second) {
      root.val = root.val === first ? second : first; 
      if (--count === 0) return;
    }
    recover(root.left, count, first, second);
    recover(root.right, count, first, second);
  }
}
var recoverTree = function(root) {
  const nums = [];
  inOrder(root, nums);
  const [first, second] = findTwoSwapped(nums);
  recover(root, 2, first, second);
  return root;
};

