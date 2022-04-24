/**
203. 移除链表元素
给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
示例 1：
输入：head = [1,2,6,3,4,5,6], val = 6
输出：[1,2,3,4,5]
示例 2：
输入：head = [], val = 1
输出：[]
示例 3：
输入：head = [7,7,7,7], val = 7
输出：[]

提示：
列表中的节点数目在范围 [0, 104] 内
1 <= Node.val <= 50
0 <= val <= 50
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
