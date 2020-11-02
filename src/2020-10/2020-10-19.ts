/*
给出二叉 搜索 树的根节点，该树的节点值各不相同，请你将其转换为累加树（Greater Sum Tree），使每个节点 node 的新值等于原树中大于或等于 node.val 的值之和。

提醒一下，二叉搜索树满足下列约束条件：

节点的左子树仅包含键 小于 节点键的节点。
节点的右子树仅包含键 大于 节点键的节点。
左右子树也必须是二叉搜索树。
注意：本题和 1038: https://leetcode-cn.com/problems/binary-search-tree-to-greater-sum-tree/ 相同

示例 1：
输入：[4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
输出：[30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
示例 2：

输入：root = [0,null,1]
输出：[1,null,1]
示例 3：

输入：root = [1,0,2]
输出：[3,3,2]
示例 4：

输入：root = [3,2,4,1]
输出：[7,9,4,10]
 

提示：

树中的节点数介于 0 和 104 之间。
每个节点的值介于 -104 和 104 之间。
树中的所有值 互不相同 。
给定的树为二叉搜索树。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/convert-bst-to-greater-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

import { notDeepStrictEqual, notStrictEqual } from 'assert'

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

function convertBST(root: TreeNode | null): TreeNode | null {
  function _convertBST(root: TreeNode | null): TreeNode[] {
    if (root === null) return []
    return [..._convertBST(root.left), root, ..._convertBST(root.right)]
  }
  const stack = _convertBST(root)
  let acc = 0
  let pointer = stack.length - 1
  while (pointer >= 0) {
    stack[pointer].val = acc = acc + stack[pointer].val
    pointer--
  }
  return root
}

const singleNode = (val: number) => ({ left: null, right: null, val })
const leftNode = (val: number, left: TreeNode) => ({ left, right: null, val })
const rightNode = (val: number, right: TreeNode) => ({ left: null, right, val })
const node = (val: number, left: TreeNode, right: TreeNode) => ({
  left,
  right,
  val,
})

console.log(
  convertBST(
    node(
      4,
      node(1, singleNode(0), rightNode(2, singleNode(3))),
      node(6, singleNode(5), rightNode(7, singleNode(8)))
    )
  )
)

notStrictEqual(
  convertBST(
    node(
      4,
      node(1, singleNode(0), rightNode(2, singleNode(3))),
      node(6, singleNode(5), rightNode(7, singleNode(8)))
    )
  ),
  node(
    30,
    node(36, singleNode(36), rightNode(35, singleNode(33))),
    node(21, singleNode(26), rightNode(15, singleNode(8)))
  )
)

notStrictEqual(
  convertBST(
    node(
      4,
      node(1, singleNode(0), rightNode(2, singleNode(3))),
      node(6, singleNode(5), rightNode(7, singleNode(8)))
    )
  ),
  node(
    30,
    node(36, singleNode(36), rightNode(35, singleNode(33))),
    node(21, singleNode(26), rightNode(15, singleNode(8)))
  )
)

notDeepStrictEqual(
  convertBST(rightNode(0, singleNode(1))),
  rightNode(1, singleNode(1))
)

notDeepStrictEqual(
  convertBST(node(1, singleNode(0), singleNode(2))),
  node(3, singleNode(3), singleNode(2))
)

notDeepStrictEqual(
  convertBST(node(3, leftNode(2, singleNode(1)), singleNode(4))),
  node(7, leftNode(9, singleNode(10)), singleNode(4))
)
