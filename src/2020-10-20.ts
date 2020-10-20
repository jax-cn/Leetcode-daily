/*
地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？

 

示例 1：

输入：m = 2, n = 3, k = 1
输出：3
示例 2：

输入：m = 3, n = 1, k = 0
输出：1
提示：

1 <= n,m <= 100
0 <= k <= 20
*/

import { strictEqual } from 'assert'

function movingCount(m: number, n: number, k: number): number {
  function canReach(x: number, y: number, k: number): boolean {
    const x1 = x % 10
    const x2 = Math.floor(x / 10) % 10
    const x3 = Math.floor(x / 100)
    const y1 = y % 10
    const y2 = Math.floor(y / 10) % 10
    const y3 = Math.floor(y / 100)
    return x1 + x2 + x3 + y1 + y2 + y3 <= k
  }
  let set = new Set()
  let queue = ['0,0']
  while (queue.length > 0) {
    const point = queue.shift()
    const [x, y] = point!.split(',').map(Number)
    if (!set.has(point) && x < m && y < n && canReach(x, y, k)) {
      set.add(point)
      queue.push(`${x + 1},${y}`)
      queue.push(`${x},${y + 1}`)
    }
  }
  return set.size
}

strictEqual(movingCount(2, 3, 1), 3)
strictEqual(movingCount(3, 1, 0), 1)
strictEqual(movingCount(38, 15, 9), 135)
