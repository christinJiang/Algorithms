/**
234. 回文链表
给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。
示例 1：
输入：head = [1,2,2,1]
输出：true
示例 2：
输入：head = [1,2]
输出：false
 
提示：
链表中节点数目在范围[1, 105] 内
0 <= Node.val <= 9
进阶：你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
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
