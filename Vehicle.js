class Vehicle {
  #name;
  #model;

  constructor() {
    this.#name;
    this.#model;
  }
  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  get model() {
    return this.#model;
  }
  set model(model) {
    this.#model = model;
  }
}

module.exports = Vehicle;
