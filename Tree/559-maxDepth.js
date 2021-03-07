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