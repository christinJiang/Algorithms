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