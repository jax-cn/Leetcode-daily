import ListNode from './libs/ListNode'

/*
给定一个单链表 L：L0→L1→…→Ln-1→Ln ，
将其重新排列后变为： L0→Ln→L1→Ln-1→L2→Ln-2→…

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

示例 1:

给定链表 1->2->3->4, 重新排列为 1->4->2->3.
示例 2:

给定链表 1->2->3->4->5, 重新排列为 1->5->2->4->3.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reorder-list
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
function reorderList(head: ListNode | null): void {
  if (head === null) return
  let point = head
  const stack = [head]
  while (point.next !== null) {
    stack.push(point.next)
    point = point.next
  }
  let start = 0,
    end = stack.length - 1,
    prev: ListNode | null = null
  while (start < end) {
    prev !== null && (prev.next = stack[start])
    stack[start].next = stack[end]
    prev = stack[end]
    start++
    end--
  }
  if (prev === null) return
  if (start === end) {
    prev!.next = stack[start]
    stack[start].next = null
  } else {
    prev!.next = null
  }
}

const node = new ListNode(1)
console.log(node.toString())
reorderList(node)
console.log(node.toString())
