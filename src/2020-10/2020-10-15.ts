/*
给定一个字符串 s，计算具有相同数量0和1的非空(连续)子字符串的数量，并且这些子字符串中的所有0和所有1都是组合在一起的。

重复出现的子串要计算它们出现的次数。

示例 1 :

输入: "00110011"
输出: 6
解释: 有6个子串具有相同数量的连续1和0：“0011”，“01”，“1100”，“10”，“0011” 和 “01”。

请注意，一些重复出现的子串要计算它们出现的次数。

另外，“00110011”不是有效的子串，因为所有的0（和1）没有组合在一起。
示例 2 :

输入: "10101"
输出: 4
解释: 有4个子串：“10”，“01”，“10”，“01”，它们具有相同数量的连续1和0。
注意：

s.length 在1到50,000之间。
s 只包含“0”或“1”字符。


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/count-binary-substrings
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

import { strictEqual } from 'assert'

function countBinarySubstrings(s: string): number {
  const arr = s.split('')
  let a = 0,
    b = 1,
    prechar = arr[0],
    result = 0
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === prechar) {
      b++
    } else {
      result += Math.min(a, b)
      a = b
      b = 1
      prechar = arr[i]
    }
  }
  result += Math.min(a, b)
  return result
}

strictEqual(countBinarySubstrings('00110011'), 6)
strictEqual(countBinarySubstrings('10101'), 4)
strictEqual(countBinarySubstrings('00111'), 2)
strictEqual(countBinarySubstrings('0100110'), 5)

/*
假设你有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花卉不能种植在相邻的地块上，它们会争夺水源，两者都会死去。

给定一个花坛（表示为一个数组包含0和1，其中0表示没种植花，1表示种植了花），和一个数 n 。能否在不打破种植规则的情况下种入 n 朵花？能则返回True，不能则返回False。

示例 1:

输入: flowerbed = [1,0,0,0,1], n = 1
输出: True
示例 2:

输入: flowerbed = [1,0,0,0,1], n = 2
输出: False
注意:

数组内已种好的花不会违反种植规则。
输入的数组长度范围为 [1, 20000]。
n 是非负整数，且不会超过输入数组的大小。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/can-place-flowers
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let isStart = true,
    count = 0
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      count++
    } else {
      n -= Math.floor((count - (isStart ? 0 : 1)) / 2)
      isStart = false
      count = 0
      if (n < 0) return true
    }
  }
  n -= Math.floor((count + (isStart ? 1 : 0)) / 2)
  return n <= 0
}

strictEqual(canPlaceFlowers([1, 0, 0, 0, 1], 1), true)
strictEqual(canPlaceFlowers([1, 0, 0, 0, 1], 2), false)
strictEqual(canPlaceFlowers([0], 1), true)
strictEqual(canPlaceFlowers([0, 0], 1), true)
strictEqual(canPlaceFlowers([0, 1], 1), false)
strictEqual(canPlaceFlowers([0, 0], 2), false)
strictEqual(canPlaceFlowers([1, 0], 1), false)
strictEqual(canPlaceFlowers([0, 1, 0, 0, 1, 0], 1), false)
strictEqual(canPlaceFlowers([0, 1, 0, 0, 0, 1, 0], 1), true)
strictEqual(canPlaceFlowers([0, 0, 1, 0, 0, 1, 0], 1), true)
strictEqual(canPlaceFlowers([0, 1, 0, 0, 1, 0, 0], 1), true)
strictEqual(canPlaceFlowers([0, 1, 0, 0, 0, 1, 0, 0], 2), true)
strictEqual(canPlaceFlowers([0, 1, 0, 0, 0, 1, 0, 0], 3), false)
