const Node = value => ({
  value,
  next: null, 
});

var mergeTwoLists = function(l1, l2) {
  let node;
  if (l1.value <= l2.value) {
    node = Node(l1.value);
    l1 = l1.next;
  } else {
    node = Node(l2.value);
    l2 = l2.next;
  }
  const head = node;
  let p = node;
  while (l1 && l2) {
    if (l1.value <= l2.value) {
      node = Node(l1.value);
      l1 = l1.next;
    } else {
      node = Node(l2.value);
      l2 = l2.next;
    }
    p.next = node;
    p = node;
  }
  while (l1) {
    node = Node(l1.value);
    l1 = l1.next;
    p.next = node;
    p = node;
  }
  while (l2) {
    node = Node(l2.value);
    l2 = l2.next;
    p.next = node;
    p = node;
  }
  return head;
};
const generateList = (array = []) => {
  if (!Array.isArray(array) || array.length === 0) {
    return;
  }
  let node = Node(array[0]);
  const head = node;
  let p = node
  for (let i = 1; i < array.length; i++) {
    node = Node(array[i]);
    p.next = node;
    p = node;
  }
  return head;
}
const l1 = generateList([1, 2, 4]);
const l2 = generateList([1, 3, 4]);
console.log('l1', JSON.stringify(l1));
console.log('l2', JSON.stringify(l2));

const result = mergeTwoLists(l1, l2);
console.log('result', JSON.stringify(result));