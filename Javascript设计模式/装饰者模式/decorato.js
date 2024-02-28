// 组件接口
class Coffee {
  cost() {
    return 5;
  }
}
// 具体接口
class SimpleCoffee extends Coffee {}
class CoffeeDecorator extends Coffee {
  constructor(coffee) {
    super();
    this._coffee = coffee;
  }
  cost() {
    return this._coffee.cost();
  }
}
// 具体装饰者1
class MilkDecorator extends CoffeeDecorator {
  cost() {
    return this._coffee.cost() + 1;
  }
}
// 具体装饰者2
class SugarDecorator extends CoffeeDecorator {
  cost() {
    return this._coffee.cost() + 2;
  }
}
// 使用示例
const simpleCoffee = new SimpleCoffee();
console.log('Cost of simple coffee:', simpleCoffee.cost());

const milkCoffee = new MilkDecorator(simpleCoffee);
console.log('Cost of milk coffee:', milkCoffee.cost());

const sugarMilkCoffee = new SugarDecorator(milkCoffee);
console.log('Cost of sugar milk coffee:', sugarMilkCoffee.cost());
