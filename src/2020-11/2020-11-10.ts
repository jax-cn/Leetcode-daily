/*
实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。

如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。

必须原地修改，只允许使用额外常数空间。

以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1



来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/next-permutation
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

import { strictEqual } from 'assert'

/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  let t = nums.length - 1
  let minidx = nums.length - 1
  let maxidx = nums.length - 1
  while (t > 0) {
    if (nums[t] > nums[t - 1]) {
      minidx = t - 1
      break
    }
    t--
  }
  if (t !== 0) {
    // 说明并不是最大的序列
    t = nums.length - 1
    while (t > minidx) {
      if (nums[t] > nums[minidx]) {
        maxidx = t
        break
      }
      t--
    }
    const swap = nums[minidx]
    nums[minidx] = nums[maxidx]
    nums[maxidx] = swap
    let i = minidx + 1,
      j = nums.length - 1
    while (i < j) {
      const swap = nums[i]
      nums[i] = nums[j]
      nums[j] = swap
      i++
      j--
    }
  } else {
    t = Math.ceil(nums.length / 2)
    while (t < nums.length) {
      const swapidx = nums.length - 1 - t
      const swap = nums[swapidx]
      nums[swapidx] = nums[t]
      nums[t] = swap
      t++
    }
  }
}
