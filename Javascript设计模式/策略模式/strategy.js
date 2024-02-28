const strategyAdd = {
  execute: function (a, b) {
    return a + b;
  }
};
const strategySubtract = {
  execute: function (a, b) {
    return a - b;
  }
};

const strategyMultiply = {
  execute: function (a, b) {
    return a * b;
  }
};

// 定义一个上下文对象，它包含一个策略属性，可以在运行时更改策略
const context = {
  strategy: null,
  setStrategy: function (strategy) {
    this.strategy = strategy;
  },
  executeStrategy: function (a, b) {
    if (this.strategy) {
      return this.strategy.execute(a, b);
    } else {
      throw new Error('Strategy not set.');
    }
  }
};

context.setStrategy(strategyAdd);
console.log(context.executeStrategy(10, 5));
context.setStrategy(strategySubtract);
console.log(context.executeStrategy(10, 5));
context.setStrategy(strategyMultiply);
console.log(context.executeStrategy(10, 5));
