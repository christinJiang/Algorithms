/**
206. 反转链表
给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
示例 1：
输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
示例 2：
输入：head = [1,2]
输出：[2,1]
示例 3：
输入：head = []
输出：[]
 
提示：
链表中节点的数目范围是 [0, 5000]
-5000 <= Node.val <= 5000
进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？
*/
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
