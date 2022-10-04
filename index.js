const Singleton = require('./singleton');
const { Driver, OnStartCommand, OnSwitchOffCommand, Engine } = require('./command');


// Singleton pattern example:
const singleton = new Singleton();
const singleton2 = new Singleton();
const singleton3 = new Singleton();
const singleton4 = new Singleton();

singleton.increase();
singleton2.increase();
singleton3.increase();
singleton4.increase();
singleton2.increase();
singleton.getCounter(); // will print 5;

// Command pattern example:
const engine = new Engine();
const onStartCommand = new OnStartCommand(engine);
const onSwitchOffCommand = new OnSwitchOffCommand(engine);
const driver = new Driver();

driver.execute(onStartCommand);
engine.getState(); // will print true;
driver.execute(onSwitchOffCommand);
engine.getState(); // will print false;

