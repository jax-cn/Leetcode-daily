/*
给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数。

对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；当 A[i] 为偶数时， i 也是偶数。

你可以返回任何满足上述条件的数组作为答案。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sort-array-by-parity-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
function sortArrayByParityII(A: number[]): number[] {
  let toExchangeOdd: number[] = [],
    toExchangeEven: number[] = []
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 !== i % 2) {
      // 需要交换
      if (i % 2 === 1) {
        // 奇数
        if (toExchangeEven.length !== 0) {
          const idx = toExchangeEven.pop()!
          const swap = A[idx]
          A[idx] = A[i]
          A[i] = swap
        } else {
          toExchangeOdd.push(i)
        }
      } else {
        // 偶数
        if (toExchangeOdd.length !== 0) {
          const idx = toExchangeOdd.pop()!
          const swap = A[idx]
          A[idx] = A[i]
          A[i] = swap
        } else {
          toExchangeEven.push(i)
        }
      }
    }
  }
  return A
}
