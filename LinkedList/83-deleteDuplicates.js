/*
83. 删除排序链表中的重复元素
给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。
示例 1：
输入：head = [1,1,2]
输出：[1,2]
示例 2：
输入：head = [1,1,2,3,3]
输出：[1,2,3]
 
提示：
链表中节点数目在范围 [0, 300] 内
-100 <= Node.val <= 100
题目数据保证链表已经按升序 排列
*/
var deleteDuplicates = function(head) {
  let node = head;
  while (node && node.next) {
    if (node.val === node.next.val) {
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }
  return head;
};
const link0 = {
  val: 1,
  next: {
    val: 1,
    next: {
      val: 1,
    },
  },
};
const link1 = {
  val: 1,
  next: {
    val: 1,
    next: {
      val: 2,
    },
  },
};
const link2 = {
  val: 1,
  next: {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 3,
        },
      },
    },
  },
};
const result0 = deleteDuplicates(link0);
console.log('result0', result0);
const result1 = deleteDuplicates(link1);
console.log('result1', result1);
const result2 = deleteDuplicates(link2);
console.log('result2', result2);