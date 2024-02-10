//Create element
const mainDivEle = document.createElement("div");
//set Atrribute
mainDivEle.setAttribute("class", "dom-class");
mainDivEle.setAttribute("id", "dom-id");
console.log(mainDivEle);

//get element by id
const selectedEle = document.getElementById("div-id");
console.log(selectedEle);

// Mini Task
// Create a anchortag
// href and traget = _blank
// console.log(anchor element)

// querySelector
let queryElement = document.querySelector(".query-class");
queryElement.style.color = "crimson";
console.log(queryElement);

//querySelectorAll
const colors = ["crimson", "green", "orange", "red"];

let allQueryClass = document.querySelectorAll(".query-class");
for (let i = 0; i < allQueryClass.length; i++) {
  allQueryClass[i].style.color = colors[i];
  console.log(allQueryClass[i]);
}

//Inner Html
const sampleContainer = document.querySelector(".container");
sampleContainer.innerHTML += `
  Hello
 <p class="bg-dark">Demo Para</p>
<button>Save</button>
`;
//Inner Text
const textCon = document.querySelector(".sample-ele-1");
textCon.innerText = `New Text content     added by inner text`;

//Text Content
const textCon2 = document.querySelector(".sample-ele-2");
textCon2.textContent = `New Text content    added by text content`;
//with trim
console.log(textCon.innerText);
//actual value without trim
console.log(textCon2.textContent);

let newEle = document.createElement("div");
newEle.setAttribute("class", "card");
newEle.innerHTML += `
<h1>Name : Sanjay</h1>
<p>Batch : FSD-WE</p>
<p>Poistion : Mentor</p>
`;

let anchorTag = document.createElement("a");
anchorTag.setAttribute("href", "https://google.com/");
anchorTag.setAttribute("target", "_blank");
anchorTag.textContent = "Google";

let appendData = document.querySelector(".append-data");
let append = appendData.append(newEle, anchorTag, "Text Content");

// "Document -
// createElement,
// setAttribute
// getElementById,
// querySelector vs querySelectorAll
// innerHTML vs innerText vs TextContent
// appendChild vs append"
