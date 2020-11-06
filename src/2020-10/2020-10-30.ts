/*
给定一棵二叉树，返回所有重复的子树。对于同一类的重复子树，你只需要返回其中任意一棵的根结点即可。

两棵树重复是指它们具有相同的结构以及相同的结点值。

示例 1：

        1
       / \
      2   3
     /   / \
    4   2   4
       /
      4
下面是两个重复的子树：

      2
     /
    4
和

    4
因此，你需要以列表的形式返回上述重复子树的根结点。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-duplicate-subtrees
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// class TreeNode {
//   val: number
//   left: TreeNode | null
//   right: TreeNode | null
//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = val === undefined ? 0 : val
//     this.left = left === undefined ? null : left
//     this.right = right === undefined ? null : right
//   }
// }

function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
  if (root === null) return []
  const duplicateSubtrees: Set<TreeNode> = new Set()
  const serialMap: Map<string, TreeNode> = new Map()
  lookup(root)
  return Array.from(duplicateSubtrees.values())
  function lookup(node: TreeNode | null) {
    if (node === null) return 'NaN'
    const serial: string = `${node.val},${lookup(node.left)}.${lookup(
      node.right
    )}`
    if (serialMap.has(serial)) {
      duplicateSubtrees.add(serialMap.get(serial)!)
    } else {
      serialMap.set(serial, node)
    }
    return serial
  }
}

const tree = new TreeNode(0)
tree.left = new TreeNode(0)
tree.left.left = new TreeNode(0)
tree.right = new TreeNode(0)
tree.right.right = new TreeNode(0)
tree.right.right.right = new TreeNode(0)

console.log(findDuplicateSubtrees(tree))
