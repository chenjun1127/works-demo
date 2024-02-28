class Subject {
  constructor() {
    this.observers = [];
  }
  addObserver(observer) {
    this.observers.push(observer);
  }
  removeObserver(observerToRemove) {
    this.observers = this.observers.filter(observer => observer !== observerToRemove);
  }
  notify() {
    this.observers.forEach(observer => {
      observer.update(); // 通知观察者更新
    });
  }
  // ... 其他必要的方法
  setState(state) {
    this.state = state;
    this.notify();
  }
}
class Observer {
  constructor(name) {
    this.name = name;
  }
  update() {
    console.log(`${this.name} 收到通知，进行更新。`);
  }
}

// 使用示例
const subject = new Subject();
const observer1 = new Observer('观察者1');
const observer2 = new Observer('观察者2');
subject.addObserver(observer1);
subject.addObserver(observer2);
subject.setState("new state");
