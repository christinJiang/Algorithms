/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

const Node = val => ({
  val,
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

// const array = [1, 2, 6, 3, 4, 5, 6];
// const array = [4, 5, 1, 9];
// const array = [1, 1];
const array = [1];
// const array = [];
// const array = [1,1,2,2,2,2];
const head = createLinkedList(array);
console.log('head', JSON.stringify(head));

const removeElements = (head, val) => {
  console.log('removeElements', 'val', val);
  if (!head) {
    return null;
  }
  if (isNaN(val)) {
    return head;
  } 
  const newHead = Node(null);
  newHead.next = head;

  let preNode = newHead;
  let curNode = head;
  while (curNode) {
    console.log('curNode', JSON.stringify(curNode));
    const nextNode = curNode.next;
    console.log('val', val);
    console.log('curNode.val', curNode.val);
    if (curNode.val === val) {
      console.log('nextNode', JSON.stringify(nextNode));
      if (!nextNode) {
        preNode.next = null;
        curNode = null;
        console.log('preNode', preNode);
      } else {
        curNode.val = nextNode.val;
        curNode.next = nextNode.next;
      }
    } else {
      preNode = curNode;
      curNode = curNode.next;
    }
  }
  return newHead.next;
}

const existList = removeElements(head, 1);
console.log('existList', JSON.stringify(existList));
