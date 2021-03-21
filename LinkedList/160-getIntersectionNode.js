/* 输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
输出：Reference of the node with value = 8
输入解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/intersection-of-two-linked-lists
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
var getIntersectionNode = function(headA, headB) {
  while (headA) {
    headA.flag = true;
    headA = headA.next;
  }  
  while (headB) {
    if (headB.flag) {
      return headB;
    }
    headB = headB.next;
  }
  return null;
};

const node4 = {
  val: 4,
  next: null,
};
const node1 = {
  val: 1,
  next: null,
};
const node8 = {
  val: 8,
  next: null,
};
const node4_ = {
  val: 4,
  next: null,
};
const node5 = {
  val: 5,
  next: null,
};
561
const node5_ = {
  val: 5,
  next: null,
};
const node6 = {
  val: 6,
  next: null,
};
const node1_ = {
  val: 1,
  next: null,
};
// [4,1,8,4,5]
const listA = node4;
node4.next = node1;
node1.next = node8;
node8.next = node4_;
node4_.next = node5;
// [5,6,1,8,4,5]
listB = node5_;
node5_.next = node6;
node6.next = node1_;
node1_.next = node8;
node8.next = node4_;
node4_.next = node5;

const result = getIntersectionNode(listA, listB);
console.log('result', result);