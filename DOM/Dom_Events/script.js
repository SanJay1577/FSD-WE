const result = document.querySelector(".res-div");

function exe_alert() {
  // it doesn'ty return anything
  alert("Hi you have clicked alert button");
}

function exe_confirm() {
  // It returns a boolean
  const con_result = confirm("Do you want to continue");
  if (con_result) {
    result.innerText = "User want's to continue";
  } else {
    result.innerText = "User want's to cancel";
  }
}

function exe_prompt() {
  // It return the given input field values as string or(null)
  const prt_result = prompt("Hi what is your name?", "default value");
  if (!prt_result) {
    result.innerText = `User canceld the operation`;
  } else {
    result.innerText = `User's name is ${prt_result}`;
  }
}

let timeoutCount = 10; //8
function timeout_counter() {
  result.innerText = timeoutCount; //9
  timeoutCount--; //1 -1 -> 0
  const id = setTimeout(timeout_counter, 1000);
  if (timeoutCount < 0) {
    clearTimeout(id);
    result.innerText = "Your time is up😅";
  }
}

let intervalTimer = 10;
function interval_counter() {
  let int_id = setInterval(() => {
    result.innerText = intervalTimer;
    intervalTimer--;
    if (intervalTimer < 0) {
      clearInterval(int_id);
      result.innerText = "Your time is up😅";
    }
  }, 1000);
}

const form = document.querySelector(".form-field");
console.log(form);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let batch = document.getElementById("batch").value;
  let table = document.getElementById("stud-table");
  let row = table.insertRow();
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  cell1.innerText = name;
  cell2.innerText = batch;
  form.reset();
});

// <!-- "Window - Common Util functions
// setTimeout vs setInterval
// prompt, Alert, confirm
// working with events" -->
