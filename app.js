const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("tutorial", (num1, num2) => {
  console.log(`The sum is: ${num1 + num2}`);
});

eventEmitter.emit("tutorial", 2, 4);

class Person extends EventEmitter {
  constructor(name) {
    super();
    this._name = name;
  }
  get name() {
    return this._name;
  }

}

let person = new Person("John");
let christina = new Person("Christina");

christina.on('name',()=>{
console.log('My name is: '+christina.name);
});

person.on("name", () => {
  console.log("My name is: " + person.name);
});

person.emit("name");
christina.emit("name");
