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