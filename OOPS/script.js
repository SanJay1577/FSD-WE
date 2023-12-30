//factory method
function manufactureCar(name, engine, bodyType) {
  return {
    name,
    engine,
    bodyType,
    startmanufacturing: function () {
      console.log(`
              Started the manufacturing car ${name}
              with engine capacity of ${engine} liter
              and this is of type ${bodyType}
                                      `);
    },
  };
}

const virtus = manufactureCar("virtus", "1", "sedan");
console.log(virtus);
virtus.startmanufacturing();

const polo = manufactureCar("polo", "1.5", "hatchback");
console.log(polo);
polo.startmanufacturing();

//this
// holds the data of immediate parent object
// ifinside arrow methos always target global object
var name = "globalname";
const outerobj = {
  name: "aravind",
  batch: "weekend",
  innerobj: {
    name: "sanjay",
    getdetails: function () {
      console.log(this.name);
    },
    getdata: () => {
      console.log(this.name);
    },
    getglobalinarrow() {
      // id we want to target immediate parent
      // wrap up arrow in normal method
      const arrowmethod = () => {
        console.log(this.name);
      };
      arrowmethod();
    },
  },
};
outerobj.innerobj.getdetails();
outerobj.innerobj.getdata();
outerobj.innerobj.getglobalinarrow();

//constructor functions
function ManufactCar(name, engine, bodyType) {
  // {} empty object
  this.name = `${name} volkswagon`;
  this.engine = engine;
  this.bodyType = bodyType;
  this.startmanufacture = function () {
    console.log(`
          Started the manufacturing car ${this.name}
          with engine capacity of ${this.engine} liter
          and this is of type ${this.bodyType}
                                  `);
  };
}
const tiguan = new ManufactCar("Tiguan", 2, "SUV");
console.log(tiguan);
tiguan.startmanufacture();

//prototypes
ManufactCar.prototype.getNameOfCar = function () {
  console.log(`The name of the car is ${this.name}`);
};

const passat = new ManufactCar("passat", 2, "sedan");
console.log(passat);
passat.startmanufacture();
passat.getNameOfCar();

//class
//4 pilliars
// encapsulation -> ability to definde data using a method
//inheritance -> ability to get data from parent
//abstraction -> ability to hide the functionality of an value.
//polymorphism -> ability top change the natural form of a data
class CarProduction {
  constructor(name, engine, bodyType) {
    this.name = `${name} volkswagon`;
    this.engine = engine;
    this.bodyType = bodyType;
  }

  startcarmanufacture() {
    console.log(`
          Started the manufacturing car ${this.name}
          with engine capacity of ${this.engine} liter
          and this is of type ${this.bodyType}
                                  `);
  }
}

class Feature extends CarProduction {
  constructor(name, engine, bodyType, color) {
    super(name, engine, bodyType);
    this.color = color;
  }
  //abstraction
  getcarBHP() {
    let bhp = (this.engine * 100) / 1.8;
    console.log(`${bhp.toFixed(1)} BHP`);
  }

  //polymorphism
  getName() {
    console.log(`${this.name} 😎`);
  }
}

const vento = new Feature("vento", 2, "sedan", "red");
console.log(vento);
//inheritance
vento.startcarmanufacture();
vento.getcarBHP();
vento.getName();
