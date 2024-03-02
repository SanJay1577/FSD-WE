// primtive data types
var number = 10; // number
var name1 = "sanjay"; // string
var percentage = 6.5; // number
var flag = true; // boolean

console.log(number, typeof number);
console.log(name1, typeof name1);
console.log(percentage, typeof percentage);
console.log(flag, typeof flag);

// Non primitive data types
//array
// collection of data types
const arr = [10, "Sanjay", percentage, false, { mentor: "sanjay" }];
console.log(arr);
//object JSON -> Javascript object notation
//key and value
const obj = {
  mentor: "sanjay",
  batchSize: 50,
  isStarted: true,
  arr: [1, 2, "d"],
};
console.log(obj);

// copy by value and copy by reference
var num1 = 10;
var num2 = num1;
num2 = 15;
console.log("num1 ", num1);
console.log("num2 ", num2);

//copy by refernce
let studArr = ["Aathish", "Ramya", "Amar"];
let studArrCopy = studArr;
studArrCopy[0] = "Amar";
console.log("student array", studArr);
console.log("student copy", studArrCopy);
// deep copy
const oldObject = { name: "vinoth" }; //tte541
const newObejct = Object.assign({}, oldObject); //kjhj512
newObejct.name = "pradeep";
console.log("old", oldObject);
console.log("new ", newObejct);

// JSON object iteration
// way 1) dot notation
console.log(obj.mentor); // preferable
//way 2) map iterarion
console.log(obj["mentor"]);
//array iteration
console.log(arr[0]);

const nestObj = [
  {
    class: "FSD",
    studend: [
      {
        name: "siva",
        stack: [
          "html",
          "css",
          {
            js: ["react", " angular"],
          },
        ],
      },
      {
        name: "chandru",
        stack: [
          "html",
          "css",
          {
            js: ["vue", " react"],
          },
        ],
      },
    ],
  },
];

console.log("siva's -", nestObj[0].studend[0].stack[2].js[0]);
console.log("chandru's", nestObj[0].studend[1].stack[2].js[0]);

// XML HttP Request
// https://restcountries.com/v3.1/all

let xhr = new XMLHttpRequest();
console.log(xhr); //object
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function () {
  const data = JSON.parse(xhr.response);
  console.log(data);
};

let dummyJson = {
  name: "sanjay",
};

const strJSon = JSON.stringify(dummyJson);
console.log(strJSon);
const data1 = JSON.parse(strJSon);
console.log(data1);
