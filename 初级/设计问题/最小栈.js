/**
 设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。

 push(x) -- 将元素 x 推入栈中。
 pop() -- 删除栈顶的元素。
 top() -- 获取栈顶元素。
 getMin() -- 检索栈中的最小元素。

 示例:
 MinStack minStack = new MinStack();
 minStack.push(-2);
 minStack.push(0);
 minStack.push(-3);
 minStack.getMin();   --> 返回 -3.
 minStack.pop();
 minStack.top();      --> 返回 0.
 minStack.getMin();   --> 返回 -2.
 */
/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = [];
  this._minStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x);
  if (this._minStack.length === 0) {
    this._minStack.push(x);
  } else {
    if (x <= this._minStack[this._minStack.length - 1]) {
      this._minStack.push(x);
    }
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let item = this.stack.pop();
  if (item === this._minStack[this._minStack.length - 1]) {
    this._minStack.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this._minStack[this._minStack.length - 1];
};
