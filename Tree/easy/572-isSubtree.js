/*
另一棵树的子树
给你两棵二叉树 root 和 subRoot 。检验 root 中是否包含和 subRoot 具有相同结构和节点值的子树。如果存在，返回 true ；否则，返回 false 。
二叉树 tree 的一棵子树包括 tree 的某个节点和这个节点的所有后代节点。tree 也可以看做它自身的一棵子树。

示例 1：
输入：root = [3,4,5,1,2], subRoot = [4,1,2]
输出：true

示例 2：
输入：root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
输出：false
 
提示：
root 树上的节点数量范围是 [1, 2000]
subRoot 树上的节点数量范围是 [1, 1000]
-104 <= root.val <= 104
-104 <= subRoot.val <= 104
*/
var isSubtree = function(s, t) {
  if (!s && !t) {
    return true;
  } else if (!s) {
    return false;
  }
  return checkTree(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
};
const checkTree = (s, t) => {
  if (!s && !t) {
    return true;
  }
  if (!s || !t) {
    return false;
  }
  return s.val === t.val && checkTree(s.left, t.left) && checkTree(s.right, t.right);
}
const source1 = {
  val: 3,
  left: {
    val: 4,
    left: {
      val: 1,
    },
    right: {
      val: 2,
    },
  },
  right: {
    val: 5,
  },
};
const target1 = {
  val: 4,
  left: {
    val: 1,
  },
  right: {
    val: 2,
  },
};
const result1 = isSubtree(source1, target1);
console.log('result1', result1);
const source2 = {
  val: 3,
  left: {
    val: 4,
    left: {
      val: 1,
    },
    right: {
      val: 2,
      left: {
        val: 0,
      },
    },
  },
  right: {
    val: 5,
  },
};
const target2 = {
  val: 4,
  left: {
    val: 1,
  },
  right: {
    val: 2,
  },
};
const result2 = isSubtree(source2, target2);
console.log('result2', result2);