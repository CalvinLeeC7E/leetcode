/**
 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

 给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。

 示例 1:
 输入: [1,2,3,1]
 输出: 4
 解释: 偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
 偷窃到的最高金额 = 1 + 3 = 4 。

 示例 2:
 输入: [2,7,9,3,1]
 输出: 12
 解释: 偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
 偷窃到的最高金额 = 2 + 9 + 1 = 12 。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // 将问题拆解为一个个的子问题，每个问题只考虑选和不选，使用递归的形式计算出最优解。
  const len = nums.length;
  if (len === 0) return 0;
  if (len === 1) return nums[0];
  if (nums.every(item => item === 0)) return 0;
  const roomCache = {};

  function room (index) {
    if (nums[index] === undefined) return 0;
    if (roomCache[index]) return roomCache[index];
    let choose = nums[index] + room(index - 2);
    let notChoose = room(index - 1);
    let max = Math.max(choose, notChoose);
    roomCache[index] = max;
    return max;
  }

  let maxRob = room(len - 1);
  return maxRob;
};
