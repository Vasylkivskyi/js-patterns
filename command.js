class Driver {
  execute(command) {
    command.execute();
  }
}

class OnStartCommand {
  constructor(engine) {
    this.engine = engine
  }

  execute() {
    this.engine.on();
  }
}

class OnSwitchOffCommand {
  constructor(engine) {
    this.engine = engine;
  }

  execute() {
    this.engine.off();
  }
}

class Engine {
  constructor() {
    this.state = false;
  }

  on() {
    this.state = true;
  }
  off() {
    this.state = false;
  }

  getState() {
    console.log('Is engine turned on? ==>', this.state);
  }
}

module.exports = {
  Driver, 
  OnStartCommand, 
  OnSwitchOffCommand, 
  Engine
}