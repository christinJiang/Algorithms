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



