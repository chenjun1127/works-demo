class EventEmitter {
  constructor() {
    this.events = {};
  }
  // 订阅事件
  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }
  // 取消订阅事件
  off(event, callback) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter(fn => fn !== callback);
  }
  // 触发事件
  emit(event, ...args) {
    if (!this.events[event]) return;
    this.events[event].forEach(fn => fn(...args));
  }
}
// 使用示例
const eventEmitter = new EventEmitter();
eventEmitter.on('customEvent', data => console.log('接收到事件，数据为:', data));
// 另一个订阅者
const anotherCallback = data => {
  console.log('另一个订阅者接收到事件，数据为:', data);
};
eventEmitter.on('customEvent', anotherCallback);
// 触发事件
eventEmitter.emit('customEvent', '一些数据');

// 取消订阅事件
eventEmitter.off('customEvent', anotherCallback);

// 再次触发事件
eventEmitter.emit('customEvent', '另一些数据');
