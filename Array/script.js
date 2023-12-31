const log = (...param) => console.log(...param);
const arr = [3, 5, 6, 8, 9];
log("-----------FOR EACH------------");
//(value, index, accArray)=>{}
//for each iterates into an existing array
arr.forEach((value, index, accArr) => {
  log(`
Index - ${index}
Values - ${value}
Acc- Array - ${accArr}
`);
});

log(`----------MRF-----------`);
log(`-----------Map---------`);
// It will return an new array
const mapReturn = arr.map((value, index, accArr) => {
  log(`
Index - ${index}
Values - ${value}
Acc- Array - ${accArr}
`);
  //adding two extra number to the value
  return (value *= 2);
});
// arr.map(() => {});
log(mapReturn);

// Create a prototype of type
log("--------guvimap--------");
// prototype of map

Array.prototype.zen = function (fn) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(fn(this[i], i, this));
  }
  return newArr;
};

const guviReturn = arr.zen((value, index, accArr) => {
  log(`
Guvi Index - ${index}
Guvi Values - ${value}
Guvi Acc- Array - ${accArr}
`);
  //adding two extra number to the value
  return (value *= 2);
});

log(guviReturn);
console.log(typeof arr);
const nams = ["1", "2", "3"];

log("-------------filter------------");
const filterArr = arr.filter((value, index, accArr) => {
  log(`
          filter Index - ${index}
          Filter Values - ${value}
          Filter- Array - ${accArr}
          `);
  return value % 2 != 0;
});
log(arr);
log(filterArr);

//prototype of filter
Array.prototype.zenFilter = function (cb) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};
log("-----------------------zen filter------");
const zenFilterArr = arr.zenFilter((value, index, accArr) => {
  log(`
                  zen-filter Index - ${index}
                  zen-Filter Values - ${value}
                  zen-Filter- Array - ${accArr}
                  `);
  return value % 2 != 0; //true or false
});

log(arr);
log(zenFilterArr);

log("--------------reduce---------------");

const reducedata = arr.reduce((acc, value) => {
  return (acc += value);
}, 0);
console.log(reducedata);

const datbase = [
  {
    "lbd-device": 1,
    add: "hgfata",
  },
  {
    "lbd-device": 2,
    add: "hg4eta",
  },
];
// "lbd_device"
const newDataArray = datbase.reduce((acc, value) => {
  const modObj = { lbd_device: value["lbd-device"], ...value };
  delete modObj["lbd-device"];
  acc.push(modObj);
  return acc;
}, []);

log(datbase);
log(newDataArray);
log("----------Chaning of an MRF-------------");

//mutiply the given arry by three and find wihch values are even
//and all the even values in the array

const result = arr
  .map((value) => value * 3)
  .filter((value) => value % 2 == 0)
  .reduce((acc, val) => (acc += val), 0);

console.log(result);
