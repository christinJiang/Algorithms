/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

const arrayToLinkedList = array => {
  if (!Array.isArray(array) || array.length === 0) {
    return null;
  }
  const preHead = {
    val: null,
    next: null,
  }
  let curNode = preHead;
  array.forEach(item => {
    const node = {
      val: item,
      next: null,
    };
    curNode.next = node;
    curNode = node;
  });
  return preHead.next;
}

const linkedListToArray = head => {
  const array = [];
  if (!head) {
    return array;
  }
  while (head) {
    array.push(head.val);
    head = head.next;
  }
  return array;
}
var isPalindrome = function(head) {
  const array = [];
  while (head) {
    array.push(head.val);
    head = head.next;
  }
  const length = array.length;
  let isPalindrome = true;
  for (let i = 0, j = length -1; i < length / 2, j >= length / 2 ; i++, j--) {
    if (array[i] !== array[j]) {
      isPalindrome = false;
    }
  }
  return isPalindrome;
};
// const array = [1, 2, 2, 1];
// const array = [1, 2];
// const array = [];
const array = [1,1,2,1];
const linkedListResult = arrayToLinkedList(array);
console.log('linkedListResult', JSON.stringify(linkedListResult));
const arrayResult = linkedListToArray(linkedListResult);
console.log('arrayResult', arrayResult);
const isPalindromeResult = isPalindrome(linkedListResult);
console.log('isPalindromeResult', isPalindromeResult);
