/*
你有一个日志数组 logs。每条日志都是以空格分隔的字串。

对于每条日志，其第一个字为字母与数字混合的 标识符 ，除标识符之外的所有字为这一条日志的 内容 。

除标识符之外，所有字均由小写字母组成的，称为 字母日志
除标识符之外，所有字均由数字组成的，称为 数字日志
题目所用数据保证每个日志在其标识符后面至少有一个字。

请按下述规则将日志重新排序：

所有 字母日志 都排在 数字日志 之前。
字母日志 在内容不同时，忽略标识符后，按内容字母顺序排序；在内容相同时，按标识符排序；
数字日志 应该按原来的顺序排列。
返回日志的最终顺序。

 

示例 ：

输入：["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
输出：["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]
 

提示：

0 <= logs.length <= 100
3 <= logs[i].length <= 100
logs[i] 保证有一个标识符，并且标识符后面有一个字。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reorder-data-in-log-files
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

function isString(a: string) {
  return Number.isNaN(Number(a[a.indexOf(' ') + 1]))
}

function reorderLogFiles(logs: string[]): string[] {
  return logs.sort((a, b) => {
    console.log(a, b)
    const aSplitIndex = a.indexOf(' ')
    const bSplitIndex = b.indexOf(' ')
    const isAString = Number.isNaN(Number(a[aSplitIndex + 1]))
    const isBString = Number.isNaN(Number(b[bSplitIndex + 1]))
    if (!isAString && isBString) return 1
    else if (!isAString && !isBString) return 0
    else if (!isBString) return -1
    else {
      const aType: any = a.substring(0, aSplitIndex)
      const aContent: any = a.substring(aSplitIndex + 1)
      const bType: any = b.substring(0, bSplitIndex)
      const bContent: any = b.substring(bSplitIndex + 1)
      if (aContent === bContent) return aType > bType ? 1 : -1
      else return aContent > bContent ? 1 : -1
    }
  })
}

console.log(
  reorderLogFiles([
    'a1 9 2 3 1',
    'g1 act car',
    'zo4 4 7',
    'ab1 off key dog',
    'a8 act zoo',
  ])
)
// ["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]
