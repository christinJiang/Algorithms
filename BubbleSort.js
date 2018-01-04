function bubbleSort(arr) {
  var i = arr.length;
  while (i > 0) {
    for (var j = 0; j < i; j ++) {
      if (arr[j + 1] < arr[j]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    i--;
  }
  return arr;
};

var array = [2, 7, 6, 1, 0, 8];
array = bubbleSort(array);
console.log(array);