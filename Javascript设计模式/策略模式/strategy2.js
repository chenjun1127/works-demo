// 策略接口
class Strategy {
  execute() {}
}

// 具体策略1
class ConcreteStrategy1 extends Strategy {
  execute() {
    console.log('执行策略1');
  }
}

// 具体策略2
class ConcreteStrategy2 extends Strategy {
  execute() {
    console.log('执行策略2');
  }
}

// 环境
class Context {
  constructor(strategy) {
    this.strategy = strategy;
  }

  // 设置策略
  setStrategy(strategy) {
    this.strategy = strategy;
  }

  // 执行策略
  executeStrategy() {
    this.strategy.execute();
  }
}

// 使用示例
const context = new Context(new ConcreteStrategy1());

// 执行策略1
context.executeStrategy();

// 切换策略为策略2
context.setStrategy(new ConcreteStrategy2());

// 执行策略2
context.executeStrategy();
