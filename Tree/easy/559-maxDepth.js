/*
N 叉树的最大深度
给定一个 N 叉树，找到其最大深度。
最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。
N 叉树输入按层序遍历序列化表示，每组子节点由空值分隔（请参见示例）。

示例 1：
输入：root = [1,null,3,2,4,null,5,6]
输出：3

示例 2：
输入：root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
输出：5
 
提示：
树的深度不会超过 1000 。
树的节点数目位于 [0, 104] 之间。
*/
var maxDepth = function(root) {
  let maxVal = 0;
  const findDepth = (root, depth) => {
    if (!root || root.val === null) {
      return;
    }
    depth += 1;
    maxVal = Math.max(maxVal, depth);
    if (root.children && root.children.length) {
      root.children.forEach(child => {
        findDepth(child, depth);
      });
    }
  }
  findDepth(root, 0);
  return maxVal;
};

const root1 = {
  val: 1,
  children: [
    { val: 3, children: [
      { val: 5 },
      { val: 6 },
    ] },
    { val: 2 },
    { val: 4 },
  ],
};

const root2 = {
  val: 1,
  children: [
    { val: 2 },
    { val: 3, children: [
      { val: 6 },
      { val: 7, children: [
        {
          val: 11,
          children: [
            { val: 14 },
          ],
        }
      ] },
    ], },
    { 
      val: 4, 
      children: [
        {
          val: 8,
          children: [
            { val: 12 },
          ],
         }
      ] },
    { 
      val: 5,
      children: [
        { 
          val: 9,
          children: [
            { val: 13 }
          ],
        },
        { val: 10 },
      ],
    },
  ],
};

const result1 = maxDepth(root1);
console.log('result1', result1);
const result2 = maxDepth(root2);
console.log('result2', result2);

function ad(a,b){
  a +=1;
  return a+b;
};
var aa = 2;
var bb=5;
console.log('result', result, 'aa', aa, 'bb', bb);
var result=ad(aa, bb);
console.log('result', result, 'aa', aa, 'bb', bb);