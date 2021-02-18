// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL

const arrayToLinkedList = array => {
  if (!Array.isArray(array) || array.length === 0) {
    return null;
  }
  const preHead = {
    val: null,
    next: null,
  };
  let curNode = preHead;
  array.forEach(val => {
    const node = {
      val,
      next: null,
    }
    curNode.next = node;
    curNode = node;
  });
  return preHead.next;
}

var reverseList = function(head) {
  let prev = null;
  let curr = head;
  while (curr) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
  }
  return prev;
};

const array = [1, 2, 3, 4, 5];
const linkedListResult = arrayToLinkedList(array);
console.log('linkedListResult', JSON.stringify(linkedListResult));
const result = reverseList(linkedListResult);
console.log('result', JSON.stringify(result));
