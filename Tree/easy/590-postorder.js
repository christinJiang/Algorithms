
var postorder = function(root) {
  let result = [];
  const children = root && root.children;
  if (children) {
    children.forEach(node => {
      result = result.concat(postorder(node));
    });
  }  
  if (root && root.val !== null) {
    result.push(root.val);
  }
  return result;
};
const tree = {
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
        },
      ],
    },
    {
      val: 2,
    },
    {
      val: 4,
    },
  ],
};

const result = postorder(tree);
console.log('result', result);