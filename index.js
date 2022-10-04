const Singleton = require('./singleton');


// Singleton
const singleton = new Singleton();
const singleton2 = new Singleton();
const singleton3 = new Singleton();
const singleton4 = new Singleton();

singleton.increase();
singleton2.increase();
singleton3.increase();
singleton4.increase();
singleton2.increase();
singleton.getCounter(); // will return 5;
