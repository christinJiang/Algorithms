function deepSearch(node) {
  if (!!node) {
    const nodeList = [];
    const stack = [];
    stack.push(node)
    
    while(!!stack.length) {
      const element = stack.pop();
      nodeList.push(element.name);
      const children = element.children;
      if (!!children) {
        for (let i = children.length - 1; i >= 0; i--) {
          stack.push(children[i]);
        }
      }
    }
    return nodeList;
  }
}

function deepSearchRecursion(node) {
  if (!!node) {
    const nodeList = [];
    nodeList.push(node.name)
    const children = node.children;
    if (children) {
      for (let i = children.length - 1; i >= 0; i--) {
        deepSearchRecursion(children[i])
      }
    }
  } 
}

const node = {
  name: 'node',
  children: [
  {name: 'node1', children: [{name: 'node11', 
  children: [{name: 'node111', }, {name: 'node112'}]}, {name: 'node12', children: [{name: 'node121', }, {name: 'node122'}]}]},
  {name: 'node2', children: [{name: 'node21'}, {name: 'node22'}]},
  {name: 'node3', children: [{name: 'node31'}, {name: 'node32'}]}]
} 
const nodes = deepSearch(node);
console.log('nodes', nodes)

const nodes2 = deepSearchRecursion(node);
console.log('nodes2', nodes2)