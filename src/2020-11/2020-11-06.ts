/*
给你一个整数数组 arr 。请你将数组中的元素按照其二进制表示中数字 1 的数目升序排序。

如果存在多个数字二进制中 1 的数目相同，则必须将它们按照数值大小升序排列。

请你返回排序后的数组。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sort-integers-by-the-number-of-1-bits
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

function sortByBits(arr: number[]): number[] {
  arr.sort((a, b) => {
    const aLen = a
      .toString(2)
      .split('')
      .filter((s) => s === '1').length
    const bLen = b
      .toString(2)
      .split('')
      .filter((s) => s === '1').length
    return aLen === bLen ? a - b : aLen - bLen
  })
  return arr
}

console.log(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8]))
