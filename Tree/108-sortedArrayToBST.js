var sortedArrayToBST = function(array) {
  if (!Array.isArray(array) || !array.length) {
    return null;
  }
  const middle = array.length >> 1;
  const bst = {
    val: array[middle],
    left: null,
    right: null,
  };
  bst.left = sortedArrayToBST(array.slice(0, middle));
  bst.right = sortedArrayToBST(array.slice(middle + 1));
  return bst;
};
const array = [-10,-3,0,5,9];
const tree = sortedArrayToBST(array);
console.log('tree', JSON.stringify(tree));