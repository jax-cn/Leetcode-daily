class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
  // 完全二叉树层序遍历还原二叉树
  // static fromLevelOrderTraversal(arr: (number | null)[]): TreeNode | null {
  //   if (arr.length === 0 || (arr.length === 1 && arr[0] === null)) return null
  //   if (arr.length)
  // }

  toString() {
    // 中序遍历
    function _convertTree(root: TreeNode | null): TreeNode[] {
      if (root === null) return []
      return [..._convertTree(root.left), root, ..._convertTree(root.right)]
    }
    return _convertTree(this)
  }
}

// console.log(
//   TreeNode.fromArr([
//     4,
//     1,
//     6,
//     0,
//     2,
//     5,
//     7,
//     null,
//     null,
//     null,
//     3,
//     null,
//     null,
//     null,
//     8,
//   ])
// )
