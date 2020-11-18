/*
在一条环路上有 N 个加油站，其中第 i 个加油站有汽油 gas[i] 升。

你有一辆油箱容量无限的的汽车，从第 i 个加油站开往第 i+1 个加油站需要消耗汽油 cost[i] 升。你从其中的一个加油站出发，开始时油箱为空。

如果你可以绕环路行驶一周，则返回出发时加油站的编号，否则返回 -1。

说明: 

如果题目有解，该答案即为唯一答案。
输入数组均为非空数组，且长度相同。
输入数组中的元素均为非负数。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/gas-station
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

import { strictEqual } from 'assert'

function canCompleteCircuit(gas: number[], cost: number[]): number {
  const net = cost.map((c, i) => gas[i] - c)
  for (let i = 0; i < cost.length; i++) {
    let coord = i === gas.length - 1 ? 0 : i + 1,
      remain = net[i]
    while (remain > 0 && coord !== i) {
      remain = remain + net[coord]
      coord = coord === gas.length - 1 ? 0 : coord + 1
    }
    if (remain >= 0 && coord === i) return i
  }
  return -1
}

strictEqual(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]), 3)
strictEqual(canCompleteCircuit([2, 3, 4], [3, 4, 3]), -1)
