const arr = [
  {
    name: "vignesh",
  },
  {
    name: "Aathish",
  },
];
const obj = {
  Name: "Vignesh",
  class: "B55WE",
};

//For Each (array) //Best use case is (Array)
arr.forEach((val, idx) => {
  console.log(`
      Value : ${val.name}

      idx : ${idx}

    `);
});

//For each for object
const objKeys = Object.keys(obj);
console.log(objKeys);
objKeys.forEach((key) => {
  console.log(`
  Object key = ${key} : Object Value = ${obj[key]}
  `);
});

//For in (best used object)
for (let key in obj) {
  console.log(`
          Using For in 
          Object key = ${key} : Object Value = ${obj[key]}
          `);
}
//For in (array)
for (let index in arr) {
  console.log(arr[index]);
}

//polyfill for for each
Array.prototype.myForEach = function (fn) {
  for (let i = 0; i < this.length; i++) {
    fn(this[i], i, this);
  }
};

arr.myForEach((val, idx, accArr) => {
  console.log(`
          Value : ${val.name}
          idx : ${idx}
    
        `);
});
console.log(obj);
console.log(obj.Name); //dot operator
console.log(obj["Name"]); //map method

//For of (best in string);
const str = "mynameisguvi";
const value = str.split("");
console.log(value); //[] => foreach or any forloop
//for of in string
for (let s of str) {
  console.log(s);
}

//for of in object
for (let key of objKeys) {
  console.log(key);
}

//for of in array
for (let val of arr) {
  console.log(val);
}

//hositing -> var, let and const
//var - global
//let and const -> srcript(lexical scope)

function fnName() {
  console.log("function called");
}

const arr_func = () => console.log("arr func called");
fnName();
arr_func();

var name = "Rakesh";
const nestObj = {
  name: "Sanjay",
  getName() {
    console.log(this.name);
  },
  studList: {
    name: "Vignesh",
    getName() {
      console.log(this.name);
    },

    getMyName: () => {
      console.log(this.name);
    },
  },
};

nestObj.getName(); //Sanjay
nestObj.studList.getName(); //vignesh
nestObj.studList.getMyName(); //Rakesh

const listofStudents = ["lokesh", "aravind", "lokesh", "vijay", "shalini"];

function listFirtTwoData(data1, data2, ...remaining) {
  //rest
  console.log(`
          first data : ${data1}
          second data : ${data2}
          Remaining : ${remaining}
          `);
}
//spread
listFirtTwoData(...listofStudents);

//array destructuring...

console.log(obj);
console.log(Object.entries(obj)); //[ [key1, val1], [key2, val2]
const [d1, d2] = Object.entries(obj); //[ [key1, val1] [key2, val2]]
console.log("entry 1", d1);
console.log("entry 2", d2);

//object destructuring.....
const { Name: n } = obj;
console.log(n);

const company = "Guvi pvt.ltd";
const Position = "mentor";

const myObj = {
  company, //short hand property
  //position  // will not work if the casing is wrong ,
  position: Position,
};
console.log(myObj);

//class
class Guvi {
  //Encapsulation
  constructor(batch, day, course) {
    //{}
    this.batch = batch;
    this.day = day;
    this.course = course;
  }
  getInfo() {
    console.log(`
          Batch : ${this.batch}
          Day : ${this.day}
          Course : ${this.course}
          `);
  }
}

const newbatch1 = new Guvi("FSD-55", "WeekEnd", "MERN");
console.log(newbatch1);
newbatch1.getInfo();
