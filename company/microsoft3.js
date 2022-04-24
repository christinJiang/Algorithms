function solution(T) {
  const unique = [];
  const result = [];
  function deepSearch(node) {
    const index = unique.findIndex(item => item === node.x);
    if (index > -1) {
      result.push([ ...unique]);
      return true;
    }
    unique.push(node.x);
    if (node.l) {
      deepSearch(node.l);
    }
    if (node.r) {
      deepSearch(node.r);
    }
    if (!node.l && !node.r) {
      result.push([ ...unique]);
    }
    unique.pop();
    return false;
  }
  deepSearch(T);
  console.log('result', result);
  let max = 0;
  result.forEach(list => {
    max = Math.max(max, list.length);
  });
  return max;
}
const node1 = {
  x: 1,
  l: {
    x: 2,
    l: {
      x: 1,
    },
    r: {
      x: 2,
    },
  },
  r: {
    x: 2,
    l: {
      x: 4,
    },
    r: {
      x: 1,
    },
  },
};
const result = solution(node1);
console.log('result', result);

const node2 = {
  x: 1,
  l: {
    x: 2,
    l: {
      x: 3,
      l: {
        x: 2,
      },
    },
    r: {
      x: 6,
    },
  },
  r: {
    x: 3,
    l: {
      x: 3,
    },
    r: {
      x: 1,
      l: {
        x: 5,
      },
      r: {
        x: 6
      },
    },
  },
};
const result2 = solution(node2);
console.log('result2', result2);