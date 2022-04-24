function print(a) {
  console.log('before', a);
  a.b = 2;
  console.log('after', a);
}
var a={
  b: 1,
}
print(a);
console.log('out',a);

function main() {
  let num1 = 10;
  let num2 = 20;
  swap(num1, num2);
  console.log("num1 = ", num1);
  console.log("num2 = ", num2);
}

function swap(a, b) {
  var temp = a;
  a = b;
  b = temp;
  console.log("a = ", a);
  console.log("b = ", b);
}

main();