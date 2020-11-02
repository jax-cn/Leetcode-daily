/*
实现一个MyQueue类，该类用两个栈来实现一个队列。


示例：

MyQueue queue = new MyQueue();

queue.push(1);
queue.push(2);
queue.peek();  // 返回 1
queue.pop();   // 返回 1
queue.empty(); // 返回 false

说明：

你只能使用标准的栈操作 -- 也就是只有 push to top, peek/pop from top, size 和 is empty 操作是合法的。
你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。
假设所有操作都是有效的 （例如，一个空的队列不会调用 pop 或者 peek 操作）。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/implement-queue-using-stacks-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

class MyQueue {
  stack1: number[] = []
  stack2: number[] = []
  constructor() {}

  push(x: number): void {
    this.stack1.push(x)
  }

  pop(): number {
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop()!)
    }
    let result = this.stack2.pop()
    while (this.stack2.length > 0) {
      this.stack1.push(this.stack2.pop()!)
    }
    return result!
  }

  peek(): number {
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop()!)
    }
    let result = this.stack2.pop()
    this.stack2.push(result!)
    while (this.stack2.length > 0) {
      this.stack1.push(this.stack2.pop()!)
    }
    return result!
  }

  empty(): boolean {
    return this.stack1.length <= 0
  }
}
