/*
给你一个回文字符串 palindrome ，请你将其中 一个 字符用任意小写英文字母替换，使得结果字符串的字典序最小，且 不是 回文串。

请你返回结果字符串。如果无法做到，则返回一个空串。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/break-a-palindrome
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
function breakPalindrome(palindrome: string): string {
  let t = 0
  if (palindrome.length === 1) return ''
  while (t < Math.floor(palindrome.length / 2)) {
    if (palindrome[t] !== 'a') {
      const result = palindrome.split('')
      result.splice(t, 1, 'a')
      return result.join('')
    }
    t++
  }
  const result = palindrome.split('')
  result.splice(palindrome.length - 1, 1, 'b')
  return result.join('')
}
