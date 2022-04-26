/*
合并二叉树
给你两棵二叉树： root1 和 root2 。
想象一下，当你将其中一棵覆盖到另一棵之上时，两棵树上的一些节点将会重叠（而另一些不会）。你需要将这两棵树合并成一棵新二叉树。合并的规则是：如果两个节点重叠，那么将这两个节点的值相加作为合并后节点的新值；否则，不为 null 的节点将直接作为新二叉树的节点。
返回合并后的二叉树。
注意: 合并过程必须从两个树的根节点开始。

示例 1：
输入：root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
输出：[3,4,5,5,4,null,7]

示例 2：
输入：root1 = [1], root2 = [1,2]
输出：[2,2]
 
提示：
两棵树中的节点数目在范围 [0, 2000] 内
-104 <= Node.val <= 104
*/
var mergeTrees = function(root1, root2) {
  if (!root1 && !root2) {
    return null;
  }
  if (!root1 || !root2) {
    return root1 || root2;
  }
  if (root1.val === null) {
    root1.val = 0;
  }
  if (root2.val === null) {
    root2.val = 0;
  }
  root1.val += root2.val;
  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right);
  return root1;
};
const Node = val => ({
  val,
  left: null,
  right: null,
});
const createTree = array => {
  if (!Array.isArray(array) || !array.length) {
    return null;
  }
  const list = [];
  array.forEach(val => list.push(Node(val)));
  const length = array.length;
  for (let i = 0; i < length / 2; i++) {
    if (2 * i + 1 < length) {
      list[i].left = list[2 * i + 1];
    }
    if (2 * i + 2 < length) {
      list[i].right = list[2 * i + 2];
    }
  }
  return list[0];
}
const array1 = [1, 3, 2, 5];
const tree1 = createTree(array1);
const array2 = [2, 1, 3, null, 4, null, 7];
const tree2 = createTree(array2);
const resultTrees = mergeTrees(tree1, tree2);
console.log('resultTrees', resultTrees);