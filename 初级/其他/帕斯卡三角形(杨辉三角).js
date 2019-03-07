/**
 在杨辉三角中，每个数是它左上方和右上方的数的和。

 示例:
 输入: 5
 输出:
 [
 [1],
 [1,1],
 [1,2,1],
 [1,3,3,1],
 [1,4,6,4,1]
 ]
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const result = [[1]]
  if (numRows === 0) return [];
  if (numRows === 1) return result;
  for (let rowIndex = 1; rowIndex < numRows; rowIndex++) {
    const preRow = result[rowIndex - 1];
    result[rowIndex] = result[rowIndex] || [];
    for (let rowItemIndex = 0; rowItemIndex < rowIndex + 1; rowItemIndex++) {
      result[rowIndex][rowItemIndex] = (preRow[rowItemIndex - 1] || 0) + (preRow[rowItemIndex] || 0)
    }
  }
  return result;
};
