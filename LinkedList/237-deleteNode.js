/**
 * Definition for singly-linked list
 */
/**
 * @param {ListNode} newNode
 * @return {void} Do not return anything, modify newNode in-place instead.
 */

const Node = (value) => ({
  value,
  next: null,
});

const createLinkedList = array => {
  if (!Array.isArray(array) || array.length === 0) {
    return;
  }
  let newNode = Node(array[0]);
  const head = newNode;
  let p = head;

  for (let i = 1; i < array.length; i++) {
    newNode = Node(array[i]);
    p.next = newNode;
    p = newNode;
  }
  return head;
};

const array = [4,5,1,9];
const linkedList = createLinkedList(array);
console.log('linkedList', JSON.stringify(linkedList));

const deleteNode = (linkedList, node) => {
  let { value } = node || {};
  if (!value) {
    return linkedList;
  } 
  // the first node is the deleted node
  if (linkedList.value === value) {
    linkedList.value = linkedList.next.value;
    linkedList.next = linkedList.next.next;
    return linkedList;
  }
  // the middle node in list is the deleted node
  let p = linkedList;
  while (p.next && p.next.next) {
    const nodeValue = p.next.value;
    if ( nodeValue === value) {
      console.log('nodeValue', nodeValue);
      p.next.value = p.next.next.value;
      p.next.next = p.next.next.next;
      return linkedList;
    } else {
      p = p.next;
    }
  }
  // the last node is the deleted node
  if (!p.next.next && (p.next.value === value)) {
    p.next = null;
  }
  return linkedList;
}

const existList = deleteNode(linkedList, Node(4));
console.log('existList', JSON.stringify(existList));

const deleteNode2 = function(node) {
  node.value = node.next.value;
  node.next = node.next.next;
}