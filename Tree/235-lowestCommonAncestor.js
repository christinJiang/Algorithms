var lowestCommonAncestor = function(root, p, q) {
    
};
const array = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5];
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
const result = lowestCommonAncestor(tree, p, q);