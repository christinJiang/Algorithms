/*
二叉树的直径
给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点。
示例 :
给定二叉树

          1
         / \
        2   3
       / \     
      4   5    
返回 3, 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]。
注意：两结点之间的路径长度是以它们之间边的数目表示。
*/
var diameterOfBinaryTree = function(root) {
  let maxVal = 0;
  const depth = tree => {
    if (!tree || tree.val === null) {
      return 0;
    }
    const left = depth(tree.left);
    const right = depth(tree.right);
    maxVal = Math.max(maxVal, left + right + 1);
    return Math.max(left, right) + 1;
  }
  depth(root);
  return maxVal - 1;
};

const root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
    },
    right: {
      val: 5,
    },
  },
  right: {
    val: 3,
  },
};
const result = diameterOfBinaryTree(root);
console.log('result', result);