/*
给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

示例:

输入: [1,2,3,null,5,null,4]
输出: [1, 3, 4]
解释:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-tree-right-side-view
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

import { notStrictEqual } from 'assert'

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

function rightSideView(root: TreeNode | null): number[] {
  if (root === null) return []
  let nextLevel: TreeNode[] = [root],
    view: number[] = []
  while (nextLevel.length) {
    view.push(nextLevel[nextLevel.length - 1].val)
    nextLevel = nextLevel.reduce<TreeNode[]>((p, c) => {
      c.left && p.push(c.left)
      c.right && p.push(c.right)
      return p
    }, [])
    if (nextLevel.length === 0) break
  }
  return view
}

notStrictEqual(rightSideView(null), [])
notStrictEqual(
  rightSideView({
    left: { val: 2, left: null, right: null },
    right: null,
    val: 1,
  }),
  [1, 2]
)
notStrictEqual(
  rightSideView({
    right: { val: 2, left: null, right: null },
    left: null,
    val: 1,
  }),
  [1, 2]
)
notStrictEqual(
  rightSideView({
    left: { val: 2, left: null, right: null },
    right: { val: 3, left: null, right: null },
    val: 1,
  }),
  [1, 3]
)
notStrictEqual(
  rightSideView({
    left: { val: 2, left: { val: 3, left: null, right: null }, right: null },
    right: {
      val: 3,
      left: { val: 5, left: null, right: null },
      right: {
        val: 4,
        left: { val: 6, left: null, right: null },
        right: null,
      },
    },
    val: 1,
  }),
  [1, 3, 4, 6]
)
