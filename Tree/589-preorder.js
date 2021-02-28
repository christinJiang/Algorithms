/* const tree = {
  val: 1,
  children: [
    {
      val: 3,
      children: [
        {
          val: 5,
        },
        {
          val: 6,
        }
      ],
    },
    {
      val: 2,
    },
    {
      val: 4,
    }
  ],
}; */

const tree = {
  val: 1, 
  children: [],
}
const preorder = tree => {
  let result = [];
  if (tree && tree.val !== null) {
    result.push(tree.val);
  }
  const children = tree && tree.children;
  if (children && children.length) {
    children.forEach(node => {
      result = result.concat(preOrder(node));
    });
  } 
  return result;
}
const result = preorder(tree);
console.log('result', result);