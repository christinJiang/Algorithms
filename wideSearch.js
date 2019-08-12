function wideSearch(node) {
  if (!!node) {
    const nodeList = [];
    let queue = [];
    queue.push(node);
    nodeList.push(node.name);
    while (!!queue.length) {
      let element = queue.shift();
      const children = element.children;
      for (var j = 0; j < (children && children.length); j++) {
        nodeList.push(children[j].name)
        queue.push(children[j])
      }
    }
    return nodeList;
  }
}

const node = {
  name: 'node',
  children: [{name: 'node1', children: [{name: 'node11'}, {name: 'node12'}]},
  {name: 'node2', children: [{name: 'node21'}, {name: 'node22'}]},
  {name: 'node3', children: [{name: 'node31'}, {name: 'node32'}]}]
} 
const nodes = wideSearch(node);
console.log('nodes', nodes)