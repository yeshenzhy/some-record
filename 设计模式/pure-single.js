/**
 * 纯净的单例模式
 */
class God {

  static instance = null;

  constructor() {
    let { instance } = God;
    this.human = [];
    instance =  instance ? instance : this;
    return instance;
  }

  create(item) {
    this.human.push(item);
  }
}

module.exports = God;