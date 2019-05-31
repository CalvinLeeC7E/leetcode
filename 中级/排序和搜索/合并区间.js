/**
 给出一个区间的集合，请合并所有重叠的区间。

 示例 1:
 输入: [[1,3],[2,6],[8,10],[15,18]]
 输出: [[1,6],[8,10],[15,18]]
 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].

 示例 2:
 输入: [[1,4],[4,5]]
 输出: [[1,5]]
 解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
 */
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const _intervals = [].concat(intervals);
  _intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < _intervals.length - 1;) {
    const item = _intervals[i];
    const nextItem = _intervals[i + 1];
    if (nextItem[0] !== undefined && item[0] <= nextItem[0] && nextItem[0] <= item[1]) {
      _intervals.splice(i, 2, [item[0], Math.max(item[1], nextItem[1])]);
    } else {
      i++;
    }
  }
  return _intervals;
};
