function solution(A) {
  var ans = 0;
  for (i = 1; i < A.length; i++) {
      if (ans > A[i]) {
          ans = A[i];
      }
  }
  return ans;
}
A = [-1, 1, -2, 2]