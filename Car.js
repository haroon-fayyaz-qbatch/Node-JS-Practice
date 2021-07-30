const vehicle=require("./Vehicle");

class Car extends vehicle {
  #noOfDoors;
  constructor() {
    super();
    this.#noOfDoors;
  }

  get doors() {
    return this.#noOfDoors;
  }

  set doors(doors){
    this.#noOfDoors =doors;
  }
}

let toyota = new Car();

toyota.doors=4;
toyota.name="Toyota";
toyota.model="2014";

console.log(toyota.name+ ' '+ toyota.doors+ ' '+toyota.model);
