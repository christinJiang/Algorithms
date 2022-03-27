/* 给定一个起始下标为 0 的非空数组 A 用来表示一个链表结构，这个链表遵循如下构造：

链表头（第一个节点）是数组中下标为 0 的元素；
下标为 K 的节点的值为 A[K]；
对于数组中下标为 K 的节点，其下一个节点的下标为 A[K]；
如果一个节点的值为−1，则这个节点是链表的最后一个节点。
例如，对于如下的数组A：

  A[0] = 1
  A[1] = 4
  A[2] = -1
  A[3] = 3
  A[4] = 2
*/ 
function solution(A) {
  let count = 0;
  if (Array.isArray(A) && A.length) {
    let valueIndex = A[0];
    count += 1;
    while (valueIndex !== -1) {
      valueIndex = A[valueIndex];
      count += 1;
    }
  }
  return count;
}
