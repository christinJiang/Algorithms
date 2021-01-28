function merge(list, copyList, low, middle, high) {
  for(let i = low; i <= high; i++ ) {
    copyList[i] = list[i];
  }
  let i = low;
  let j = middle + 1;
  for (let k = low; k <= high; k++) {
    if (i > middle) {
      list[k] = copyList[j];
      j++;
    } else if (j > high) {
      list[k] = copyList[i];
      i++;
    } else if (copyList[i] <= copyList[j]) {
      list[k] = copyList[i];
      i++;
    } else if (copyList[i] > copyList[j]) {
      list[k] = copyList[j];
      j++;
    }
  }
}

function sort(list, copyList, low, high) {
  if (high <= low) {
    return;
  }
  const middle = parseInt(low + (high - low) / 2);
  console.log('middle', middle);
  sort(list, copyList, low, middle);
  sort(list, copyList, middle + 1, high);
  merge(list, copyList, low, middle, high);
}

function mergeSort(list) {
  const copyList = [];
  sort(list, copyList, 0, list.length - 1);
  return list.join(' ');;
}

const str ='S O R T E X A M P L E';
const list = str?.split(' ');
console.log('list', list)
const sortedStr = mergeSort(list);
console.log(sortedStr);
// A E E L M O P R S T X

// 0 1 2 3 4 5 6 7 8 9 10
// S O R T E X A M P L E
// middle    5
//     2   
//   1
// 0          
//        4
//       3 
//                 8
//               7
//             6
//                   9      