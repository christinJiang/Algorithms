function gap(n) {
  function deep(value) {
    const devideValue = parseInt(value / 2, 10);
    let deValue = value % 2;
    if (devideValue) {
      const leftValue = deep(devideValue);
      deValue = String(leftValue) + String(deValue);
    }
    return deValue;
  }
  return deep(n);
}


function bGap(n) {
  const str = gap(n);
  console.log('str', str);
  let p = q = 0;
  let max = 0;
  const { length } = str;
  while (p < length - 1) {
    p++;
    if (str.charAt(p) === '1') {
      if (str.charAt(q) === '1') {
        max = Math.max(max, p - q - 1);
      }
      q = p;  
    }  
  }
  return max;
};
const result = bGap(1041);
console.log('result', result);