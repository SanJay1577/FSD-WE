//step1
function insertCardPrompt(cb) {
  console.log("Hi insert your card");
  cb();
}
//step2
function selectAccountType(cb) {
  console.log("Please select a account type");
  //creating our own delay
  setTimeout(() => {
    console.log("account Type selected");
    cb();
  }, 4000);
}
//step3
function processing(cb) {
  console.log("Processing your request");
  setTimeout(() => {
    console.log("Taking time to complete your process");
    cb(); //greeting();
  }, 2000);
}
//step4
function greeting(name) {
  console.log("Your process is completed", name);
}
//callbacks
function handlingCash() {
  insertCardPrompt(() => {
    selectAccountType(() => {
      processing(() => {
        greeting("thanks");
      });
    });
  });
}

//asynchronized callback sample
// function a(cb) {
//   console.log("a");
//   setTimeout(() => {
//     console.log("delay.......");
//     cb();
//   }, 1000);
// }

// function b() {
//   console.log("b");
// }

// function c() {
//   console.log("c");
// }

function greet(fn) {
  //fn -> ()=>{} -> myname("sanjay")
  fn(); // -> my_name()()
}

function my_name(name) {
  console.log(name);
}
//my_name("sanjay")();
const abc = () => {
  my_name("sanjay");
};
// abc();
greet(() => {
  my_name("sanjay");
});

// setTimeout(() => {
//   console.log(10);
//   setTimeout(() => {
//     console.log(9);
//   }, 1000);
// }, 1000);
