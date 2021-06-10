/* 整数转换英文表示
将非负整数 num 转换为其对应的英文表示。

示例 1：
输入：num = 123
输出：'One Hundred Twenty Three'

示例 2：
输入：num = 12345
输出：'Twelve Thousand Three Hundred Forty Five'

示例 3：
输入：num = 1234567
输出：'One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven'

示例 4：
输入：num = 1234567891
输出：'One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One'
 
提示：0 <= num <= 231 - 1

* @param {number} num
* @return {string}
*/
var numberToWords = function (num) {
  if (num === 0) return 'Zero';
  const unitObj = {
    1: ' One',
    2: ' Two',
    3: ' Three',
    4: ' Four',
    5: ' Five',
    6: ' Six',
    7: ' Seven',
    8: ' Eight',
    9: ' Nine',
    10: ' Ten',
    11: ' Eleven',
    12: ' Twelve',
    13: ' Thirteen',
    14: ' Fourteen',
    15: ' Fifteen',
    16: ' Sixteen',
    17: ' Seventeen',
    18: ' Eighteen',
    19: ' Nineteen'
  }
  const tenObj = {
    2: ' Twenty',
    3: ' Thirty',
    4: ' Forty',
    5: ' Fifty',
    6: ' Sixty',
    7: ' Seventy',
    8: ' Eighty',
    9: ' Ninety'
  }
  const unitList = ['', 'Thousand', 'Million', 'Billion'];
  const convertNumToString = (newNum) => {
    const n1 = parseInt(newNum / 100);
    let str = n1 > 0 ? `${unitObj[n1]} Hundred` : '';
    const n2 = newNum % 100;
    if (n2 < 20 && n2 > 0) {
      str = `${str}${unitObj[n2]}` ;
    } else if (n2 >= 20) {
      const tenCount = parseInt(n2 / 10);
      str = `${str}${tenObj[tenCount]}`;
      const geCount = parseInt(n2 % 10);
      str = geCount ? `${str}${unitObj[geCount]}` : str;
    }
    return str.trim();
  }
  let count = 0;
  let result;
  while (num) {
    const newNum = num % 1000;
    const value = newNum === 0 ? '' : (unitList[count] ? `${convertNumToString(newNum)} ${unitList[count]}` :  convertNumToString(newNum));
    result = result ? (value ? `${value} ${result}` : result) : value;
    count += 1;
    num = parseInt(num / 1000);
  }
  return result;
};
const num = 1000010; // 1234567891;
const result = numberToWords(num);
console.log(result);