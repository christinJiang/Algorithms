/*
不同的二叉搜索树 II
给定一个整数 n，生成所有由 1 ... n 为节点所组成的 二叉搜索树 。

示例：
输入：3
输出：
[
  [1,null,3,2],
  [3,2,null,1],
  [3,1,null,null,2],
  [2,1,3],
  [1,null,2,null,3]
]
解释：
以上的输出对应以下 5 种不同结构的二叉搜索树：

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
提示：
0 <= n <= 8
*/
var generateTrees = function(n) {
  let map = new Map();
  function buildTree(start, end) {
    let result = [];
    if (start > end) return [null]; 
    if (map.has(start + '->' + end)) return map.get(start + '->' + end);
    for (let i = start; i <= end; i++) {
      let left = buildTree(start, i - 1);
      let right = buildTree(i + 1, end);
      for (const leftNode of left) {
        for (const rightNode of right) {
          let node = new TreeNode(i);
          node.left = leftNode;
          node.right = rightNode;
          result.push(node);
        }
      }
    }
    map.set(start + '->', end, result);
    return result;
  }
  return buildTree(n);
};
const result = generateTrees(3);
console.log(result);