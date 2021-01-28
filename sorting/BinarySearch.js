function bSearch(list, value, low, high) {
  let index = -1;
  const middle = low + parseInt((high - low) / 2 );
  if (list[middle] === value) {
    index = middle;
  } else if (list[middle] < value) {
    index = bSearch(list, value, middle + 1, high);
  } else {
    index = bSearch(list, value, low, middle - 1);
  }
  return index;
}


function binarySearch(list, value) {
  return bSearch(list, value, 0, list.length - 1);
}

const str = 'A E E L M O P R S T X'; // 'S O R T E X A M P L E';
const list = str?.split(' ');
console.log('list', list)
const index = binarySearch(list, 'X');
console.log('index', index);