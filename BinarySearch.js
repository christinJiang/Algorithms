var arr = [1, 2, 4, 7, 9, 11];
var index = -1;
function binary(arr, low, high, des) {
  if (low <= high) {
      var middle = Math.ceil((low + high)/2);
      if (des === arr[middle]) {
          console.log('des '+middle);
          index = middle;
      } else if (des < arr[middle]) {
          high = middle - 1;
          binary(arr, low, high, des);
      } else {
          low = middle + 1;
          binary(arr, low, high, des)
      }
  }
}

binary(arr, 0, arr.length - 1, 7);
console.log('index ' + index);