class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
  static fromArr(arr: (number | null)[]): TreeNode | null {
    if (arr[0] === null) return null
    if (arr.length === 1) return new TreeNode(arr[0])
    if (arr.length === 3)
      return new TreeNode(
        arr[0],
        arr[1] ? new TreeNode(arr[1]) : null,
        arr[2] ? new TreeNode() : null
      )
    const leftPart = arr.slice(3, (arr.length + 3) / 2)
    const rightPart = arr.slice((arr.length + 3) / 2, arr.length - 1)
    return new TreeNode(
      arr[0],
      this.fromArr(arr.slice(1, 2).concat(leftPart)),
      this.fromArr(arr.slice(2, 3).concat(rightPart))
    )
  }

  toString() {
    // 中序遍历
    function _convertTree(root: TreeNode | null): TreeNode[] {
      if (root === null) return []
      return [..._convertTree(root.left), root, ..._convertTree(root.right)]
    }
    return _convertTree(this)
  }
}

console.log(
  TreeNode.fromArr([
    4,
    1,
    6,
    0,
    2,
    5,
    7,
    null,
    null,
    null,
    3,
    null,
    null,
    null,
    8,
  ])
)
