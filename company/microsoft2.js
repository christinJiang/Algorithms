function solution(S) {
  let str = S;
  const result = [];
  let start = 0;
  let set = new Set();
  while (str.length && start < str.length) {
    const char = str.charAt(start);
    if (set.has(char)) {
      str = str.slice(start);
      start = 0;
      result.push(Array.from(set));
      set = new Set();
    } else {
      set.add(char);
      start += 1;
    }
  }
  if (set.size) {
    result.push([ ...Array.from(set)]);
  }
  return result.length;
}
const str1 = 'abacdec';
const count = solution(str1);
console.log('count', count);

const str2 = 'dddd';
const count1 = solution(str2);
console.log('count1', count1);

const str3 = 'cycle';
const count2 = solution(str3);
console.log('count2', count2);