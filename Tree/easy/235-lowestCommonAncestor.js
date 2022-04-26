/** 
二叉搜索树的最近公共祖先
给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。
百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

例如，给定如下二叉搜索树:  root = [6,2,8,0,4,7,9,null,null,3,5]

示例 1:
输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
输出: 6 
解释: 节点 2 和节点 8 的最近公共祖先是 6。

示例 2:
输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
输出: 2
解释: 节点 2 和节点 4 的最近公共祖先是 2, 因为根据定义最近公共祖先节点可以为节点本身。
 
说明:
所有节点的值都是唯一的。
p、q 为不同节点且均存在于给定的二叉搜索树中。  
*/
var lowestCommonAncestor = function(root, p, q) {
  if (!root || root.val === null || !p || p.val === null || !q || q.val === null) {
    return null;
  }
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else {
    return root;
  }
};
const root = {
  val: 6,
  left: {
    val: 2,
    left: {
      val: 0,
    },
    right: {
      val: 4,
      left: {
        val: 3,
      },
      right: {
        val: 5,
      },
    },
  },
  right: {
    val: 8,
    left: {
      val: 7,
    },
    right: {
      val: 9,
    },
  },
};
const p = {
  val: 3,
}
const q = {
  val: 5,
}
const result = lowestCommonAncestor(root, p, q);
console.log('result', JSON.stringify(result));
/* const array = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5];
const Node = val => ({
  val,
  left: null,
  right: null,
});
const createTree = array => {
  if (!Array.isArray(array) || !Array.length) {
    return null;
  }
  const length = array.length;
  const list = [];
  array.forEach(val => list.push(Node(val)));
  for (let i = 0; i < length / 2; i++) {
    if (2 * i + 1 < length) {
      list[2 * i + 1] = array[2 * i + 1];
    }
    if (2 * i + 2 < length) {
      list[2 * i + 2] = array[2 * i + 2]; 
    }
  }
  return list[0];
}
const tree = createTree(array);
console.log('tree', JSON.stringify(tree));
const p = {
  val: 2,
}
const q = {
  val: 8,
}
const result = lowestCommonAncestor(tree, p, q); */