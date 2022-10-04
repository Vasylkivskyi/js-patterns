let instance;

class Singleton {
  constructor() {
    if(!instance) instance = this;
    instance.count = 0
  }

  increase() {
    instance.count++
  }

  decrease() {
    instance.count--
  }

  getCounter() {
    console.log('Singleton pattern:', instance.count)
  }
}

module.exports = Singleton;