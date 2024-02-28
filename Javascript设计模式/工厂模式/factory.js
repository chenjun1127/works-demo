// 产品接口
class Product {
  operation() {}
}

// 具体产品1
class ConcreteProduct1 extends Product {
  operation() {
    return '具体产品1的操作';
  }
}

// 具体产品2
class ConcreteProduct2 extends Product {
  operation() {
    return '具体产品2的操作';
  }
}

// 工厂接口
class Factory {
  createProduct() {}
}

// 具体工厂1
class ConcreteFactory1 extends Factory {
  createProduct() {
    return new ConcreteProduct1();
  }
}

// 具体工厂2
class ConcreteFactory2 extends Factory {
  createProduct() {
    return new ConcreteProduct2();
  }
}

// 使用示例
const factory1 = new ConcreteFactory1();
const product1 = factory1.createProduct();
console.log(product1.operation());

const factory2 = new ConcreteFactory2();
const product2 = factory2.createProduct();
console.log(product2.operation());
