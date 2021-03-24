/*
杨辉三角
给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。

在杨辉三角中，每个数是它左上方和右上方的数的和。

示例:
输入: 5
输出:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/
var generate = function(numRows) {
  const rows = [];
  if (numRows === 0) {
    return rows;
  } else if (numRows === 1) {
    rows.push([1]);
  } else {
    rows.push([1]);
    rows.push([1, 1]);
    for (let i = 2; i < numRows; i++) {
      const row = [1];
      for (let j = 1; j < i; j++) {
        row.push(rows[i-1][j-1] + rows[i-1][j]);
      }
      row.push(1);
      rows.push(row);
    }
  }
  return rows;
};

var generate2 = function(numRows) {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
      const row = new Array(i + 1).fill(1);
      for (let j = 1; j < row.length - 1; j++) {
          row[j] = rows[i - 1][j - 1] + rows[i - 1][j];
      }
      rows.push(row);
  }
  return rows;
};

const result = generate2(5);
console.log(result);