/*
给出一个无重叠的 ，按照区间起始端点排序的区间列表。

在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。

 

示例 1：

输入：intervals = [[1,3],[6,9]], newInterval = [2,5]
输出：[[1,5],[6,9]]
示例 2：

输入：intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
输出：[[1,2],[3,10],[12,16]]
解释：这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/insert-interval
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
function insert(intervals: number[][], newInterval: number[]): number[][] {
  if (intervals.length === 0) return [newInterval];
  let startInterval = newInterval[0],
    endInterval = newInterval[1];
  let deleteFrom = 0,
    deleteNum = 0;
  const [start, end] = newInterval;
  if (start < intervals[0][0]) {
    startInterval = start;
  }
  if (end < intervals[0][0]) {
    endInterval = end;
    deleteNum = 0;
  }
  for (let i = 0; i < intervals.length; i++) {
    const [s1, e1] = intervals[i];
    const [s2] =
      i + 1 === intervals.length
        ? [Number.POSITIVE_INFINITY]
        : intervals[i + 1];
    if (start >= s1 && e1 <= e1) {
      startInterval = s1;
      deleteFrom = i;
    }
    if (end >= s1 && e1 <= e1) {
      endInterval = e1;
      deleteNum = i - deleteFrom + 1;
    }
    if (start > e1 && start < s2) {
      startInterval = start;
      deleteFrom = i + 1;
    }
    if (end > e1 && end < s2) {
      endInterval = end;
      deleteNum = i - deleteFrom + 1;
    }
  }
  intervals.splice(deleteFrom, deleteNum, [startInterval, endInterval]);
  return intervals;
}

// console.log(insert([[3, 5]], [1, 2]));
console.log(
  insert(
    [
      [1, 2],
      [4, 5],
      [6, 7],
      [9, 10],
      [12, 16],
    ],
    [2, 17]
  )
);
