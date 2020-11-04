import { strict, strictEqual } from "assert";

/*
给定一个整数数组 A，如果它是有效的山脉数组就返回 true，否则返回 false。

让我们回顾一下，如果 A 满足下述条件，那么它是一个山脉数组：

A.length >= 3
在 0 < i < A.length - 1 条件下，存在 i 使得：
A[0] < A[1] < ... A[i-1] < A[i]
A[i] > A[i+1] > ... > A[A.length - 1]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-mountain-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
function validMountainArray(A: number[]): boolean {
  let upstairs = true;
  if (A.length < 3) return false;
  if (A[0] >= A[1]) return false;
  for (let i = 1; i < A.length; i++) {
    if (A[i] === A[i - 1]) return false;
    if (!upstairs && A[i] - A[i - 1] > 0) return false;
    if (upstairs && A[i] - A[i - 1] < 0) upstairs = false;
  }
  if (upstairs) return false;
  return true;
}

strictEqual(validMountainArray([2, 1]), false);
strictEqual(validMountainArray([3, 5, 5]), false);
strictEqual(validMountainArray([0, 3, 2, 1]), true);
strictEqual(validMountainArray([0, 2, 3, 3, 5, 2, 1, 0]), false);
