/*
最接近原点的K个点
我们有一个由平面上的点组成的列表 points。需要从中找出 K 个距离原点 (0, 0) 最近的点。

（这里，平面上两点之间的距离是欧几里德距离。）

你可以按任何顺序返回答案。除了点坐标的顺序之外，答案确保是唯一的。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/k-closest-points-to-origin
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

import { strictEqual } from 'assert'

function kClosest(points: number[][], K: number): number[][] {
  const distanceMap = new Map<number[], number>()
  points.map((point) => {
    const [x, y] = point
    const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
    distanceMap.set(point, distance)
  })
  const result = []
  let t = 0
  const sortedPoint = Array.from(distanceMap.entries()).sort(
    (a, b) => a[1] - b[1]
  )
  while (t < K) {
    result.push(sortedPoint[t][0])
    t++
  }
  return result
}

strictEqual(
  kClosest(
    [
      [1, 3],
      [-2, 2],
    ],
    1
  ).toString(),
  [[-2, 2]].toString()
)
strictEqual(
  kClosest(
    [
      [3, 3],
      [5, -1],
      [-2, 4],
    ],
    2
  ).toString(),
  [
    [3, 3],
    [-2, 4],
  ].toString()
)
