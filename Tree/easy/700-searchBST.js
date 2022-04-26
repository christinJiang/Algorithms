/*
二叉搜索树中的搜索
给定二叉搜索树（BST）的根节点 root 和一个整数值 val。
你需要在 BST 中找到节点值等于 val 的节点。 返回以该节点为根的子树。 如果节点不存在，则返回 null 。

示例 1:
输入：root = [4,2,7,1,3], val = 2
输出：[2,1,3]

Example 2:
输入：root = [4,2,7,1,3], val = 5
输出：[]
 
提示：
数中节点数在 [1, 5000] 范围内
1 <= Node.val <= 107
root 是二叉搜索树
1 <= val <= 107
*/
var searchBST = function(root, val) {
  if (root === null || root.val === null) {
    return null;
  }
  if (root.val === val) {
    return root;
  } else if (val < root.val) {
    return searchBST(root.left, val);
  } else {
    return searchBST(root.right, val);
  }
};
const root = {
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
    val: 7,
  },
};

const result = searchBST(root, 3);
console.log('result', JSON.stringify(result));

const Node = val => ({
  val,
  left: null,
  right: null,
});
const createBST = array => {
  if (!Array.isArray(array) || !array.length) {
    return null;
  }
  const length = array.length;
  const middle = parseInt(length / 2);
  const list = [];
  list.push(Node(array[middle]));
  for (let i = middle - 1, j = middle + 1; i >= 0, j < length; i--, j++) {
    list.push(Node(array[i]));
    list.push(Node(array[j]));
  }
  if (length % 2 === 0) {
    list.push(Node(array[0]));
  }
  for (let i = 0; i < length / 2; i++) {
    if (2 * i + 1 < length) {
      list[i].left = list[2 * i + 1];
    }
    if (2 * i + 2 < length) {
      list[i].right = list[2 * i + 2];
    }
  }
  return list[0];
};

// const array = [4, 2, 7, 1, 3];
// const array = [1,2,3,4,7];
// const tree = createBST(array);
// console.log('tree', JSON.stringify(tree));

// var arr = [1,2,3,4];
// var change = arr => {
//   var length = arr.length;
//   var middle = parseInt(length / 2);
//   var result = [];
//   result.push(arr[middle]);
//   for(var i=middle -1, j=middle+1;i>=0,j<length;i--,j++) {
//     result.push(arr[i]);
//     result.push(arr[j]);
//   }
//   if (length%2===0) {
//     result.push(arr[0]);
//   }
//   return result;
// }
// let changed = change(arr);
// console.log(changed);