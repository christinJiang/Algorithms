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
  p.next = !l1 ? l2 : l1; 
  return head;
};
const arrayToLinkedList = (array = []) => {
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
const l1 = arrayToLinkedList([1, 2, 4]);
const l2 = arrayToLinkedList([1, 3, 4]);
console.log('l1', JSON.stringify(l1));
console.log('l2', JSON.stringify(l2));

const resultList = mergeTwoLists(l1, l2);
console.log('resultList', JSON.stringify(resultList));

const mergeTwoLists2 = (l1, l2) => {
  if (!l1) {
    return l2;
  } else if (!l2) {
    return l1;
  } else if (l1.value <= l2.value) {
    l1.next = mergeTwoLists2(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists2(l1, l2.next);
    return l2;
  }
}
const resultList2 = mergeTwoLists2(l1, l2);
console.log('resultList2', JSON.stringify(resultList2));

const linkedListToArray = linkedList => {
  const result = [];
  if (!linkedList) {
    return result;
  }
  if (linkedList.value) {
    result.push(linkedList.value);
  }
  while (linkedList.next) {
    linkedList = linkedList.next;
    result.push(linkedList.value);
  }
  return result;
}

const resultArray = linkedListToArray(resultList);
console.log('resultArray', resultArray);
const resultArray2 = linkedListToArray(resultList2);
console.log('resultArray2', resultArray2);