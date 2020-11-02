/*
稀疏数组搜索。有个排好序的字符串数组，其中散布着一些空字符串，编写一种方法，找出给定字符串的位置。

示例1:

 输入: words = ["at", "", "", "", "ball", "", "", "car", "", "","dad", "", ""], s = "ta"
 输出：-1
 说明: 不存在返回-1。
示例2:

 输入：words = ["at", "", "", "", "ball", "", "", "car", "", "","dad", "", ""], s = "ball"
 输出：4
提示:

words的长度在[1, 1000000]之间

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sparse-array-search-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

import { strictEqual } from 'assert'

/*
做法不好，应该用二分法
*/

function findString(words: string[], s: string): number {
  const f_w = s[0]
  for (let i = 0; i < words.length; i++) {
    if (words[i].length === 0) continue
    if (words[i][0] < f_w) continue
    else if (words[i][0] > f_w) return -1
    else {
      if (words[i] === s) return i
    }
  }
  return -1
}

strictEqual(
  findString(
    ['at', '', '', '', 'ball', '', '', 'car', '', '', 'dad', '', ''],
    'ta'
  ),
  -1
)
strictEqual(
  findString(
    ['at', '', '', '', 'ball', '', '', 'car', '', '', 'dad', '', ''],
    'ball'
  ),
  4
)
