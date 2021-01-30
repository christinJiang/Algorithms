function swap(list, i, j) {
  let value = list[i];
  list[i] = list[j];
  list[j] = value;
}

function heapify(list, n, i) {
  while(2 * i <= n) {
    let maxPosition = i;
    if (list[i] < list[2 * i]) {
      maxPosition = 2 * i;
    }
    if (list[maxPosition] < list[2 * i + 1]) {
      maxPosition = 2 * i + 1;
    }
    if (maxPosition === i) return;
    swap(list, i, maxPosition);
    i = maxPosition;
  }
}

function sort(list) {
  let sortedStr = '';
  while(list.length > 1) {
    sortedStr = `${sortedStr}${list[1]}`;
    list[1] = list[list.length - 1]
    list.pop();
    heapify(list, list.length, 1);
  }
  return sortedStr;
}
 
function heapSort(list) {
  const n = list.length;
  for (let i = parseInt(n / 2); i >= 1; i--) {
    heapify(list, n, i)
  }
  return sort(list);
}


const str = 'S O R T E X A M P L E';
const list = str?.split(' ');
list.unshift('0');
console.log('list', list)
const sortedStr = heapSort(list);
console.log('sortedStr', sortedStr);