/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeDuplicateNodes = function(head) {
  const set = new Set();
  let preNode = {
    val: null,
    next: head,
  };
  let curNode = head;
  while (curNode) {
    const { val } = curNode;
    if (set.has(val)) {
      const nextNode = curNode.next;
      if (nextNode) {
        curNode.val = curNode.next.val;
        curNode.next = curNode.next.next;
      } else {
        curNode = null;
        preNode.next = null;
      }
    } else {
      set.add(val);
      preNode = curNode;
      curNode = curNode.next;
    }
  }
  return head;
};

const Node = val => ({
  val,
  next: null,
});

const arrayToLinkedList = array => {
  const preHead = Node(null);
  if (!Array.isArray(array) || array.length === 0) {
    return preHead.next;
  }
  let curNode = preHead;
  array.forEach(item => {
    const node = Node(item);
    curNode.next = node;
    curNode = node;
  });
  return preHead.next;
}

// const array = [1, 2, 3, 3, 2, 1];
const array = [1, 1, 1, 1, 2];
const linkedList = arrayToLinkedList(array);
console.log('linkedList', JSON.stringify(linkedList));
const result = removeDuplicateNodes(linkedList);
console.log('result', JSON.stringify(result));
