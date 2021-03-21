var hasCycle = function(head) {
  const map = new Map();
  map.set(head);
  while(head) {
    head = head.next;
    if (map.has(head)) {
      return true;
    }
    map.set(head, true);
  }
  return false;  
};