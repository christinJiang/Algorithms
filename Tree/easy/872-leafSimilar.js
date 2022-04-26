
/*
叶子相似的树
请考虑一棵二叉树上所有的叶子，这些叶子的值按从左到右的顺序排列形成一个 叶值序列 。

举个例子，如上图所示，给定一棵叶值序列为 (6, 7, 4, 9, 8) 的树。
如果有两棵二叉树的叶值序列是相同，那么我们就认为它们是 叶相似 的。
如果给定的两个根结点分别为 root1 和 root2 的树是叶相似的，则返回 true；否则返回 false 。

示例 1：
输入：root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
输出：true

示例 2：
输入：root1 = [1,2,3], root2 = [1,3,2]
输出：false

提示：
给定的两棵树结点数在 [1, 200] 范围内
给定的两棵树上的值在 [0, 200] 范围内
*/
var leafSimilar = function(root1, root2) {
  const getLeafList = root => {
    if (!root.left && !root.right) {
      
    }
  }  
};
const createTree = array => {
  if (!Array.isArray(array) || !array.length) {
    return null;
  }
  const list = [];
  array.forEach(val => {
    list.push({
      val,
      left: null,
      right: null,
    });
  });
  const length = array.length;
  for (let i = 0; i < length / 2; i += 1) {
    if (2 * i + 1 < length) {
      list[i].left = list[2 * i + 1];
    }
    if (2 * i + 2 < length) {
      list[i].right = list[2 * i + 2];
    }
  }
  return list[0];
}
const list1 = [3,5,1,6,2,9,8,null,null,7,4];
const list2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8];
const root1 = createTree(list1);
console.log('root1', JSON.stringify(root1));
const root2 = createTree(list2);
console.log('root2', JSON.stringify(root2));
const result = leafSimilar(root1, root2);
console.log('result', result);



