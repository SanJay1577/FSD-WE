const API = "https://65e294dca8583365b31844ea.mockapi.io/student";

const studContainer = document.getElementById("student-data");
const studentForm = document.getElementById("student-form");
let editId;
//CRUD - CREATE READ UPDATE DELETE

//helper function
//Get API   // READ
async function getStudentsData(id) {
  try {
    const res = await fetch(`${API}/${id}`, {
      method: "GET",
    });
    const data = await res.json();
    //display all students info in UI
    mapAllStudents(data);
  } catch (error) {
    console.log(error);
  }
}

//POST API (To add new data) //CREATE

async function addNewStudentData(payload) {
  try {
    const res = await fetch(API, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    //display all students info
    appendNewStudent(data);
  } catch (error) {
    console.log(error);
  }
}

//PUT API (To Edit a data)  //UPDATE

async function editStudent(payload, id) {
  try {
    const res = await fetch(`${API}/${id}`, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (data) {
      location.reload();
    }
  } catch (error) {
    console.log(error);
  }
}

//DELETE API (To delete a data) //DELETE

async function deleteStudent(id, parent) {
  try {
    const res = await fetch(`${API}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (data) {
      parent.remove();
    } else {
      console.log("error occured");
    }
  } catch (error) {
    console.log(error);
  }
}

//Getting All students information
getStudentsData("");

//Controllers

//creating a new student info card
function appendNewStudent(student) {
  const mainDiv = document.createElement("div");
  mainDiv.className = "card";
  mainDiv.innerHTML += `
  <h2>${student.name}</h2>
  <p>Batch <span id="batch-value">${student.batch}</span></p>
  <p>Age <span id="age-value">${student.age}</span></p>
  <div class="action-btn-group">
  <button data-id=${student.id} id="edit-btn" class="btn">Edit</button>
  <button data-id=${student.id} id="del-btn" class="btn">Delete</button>
  </div>
  `;
  studContainer.append(mainDiv);
}

//Form creation
studentForm.innerHTML += `
<form>
<h2>Student Form</h2>
<input
  type="text"
  name="name"
  required
  value=""
  placeholder="Enter Student Name"
  class="input-text"
  id="input-name"
/>

<input
  type="text"
  name="batch"
  required
  value=""
  placeholder="Enter Student Batch"
  class="input-text"
  id="input-batch"
/>

<input
  type="number"
  name="age"
  required
  value=""
  placeholder="Enter Student Age"
  class="input-text"
  id="input-age"
/>
<button type="submit" id="add-btn" class="btn">Add Student</button>
<button type="submit" id="update-btn" class="btn">Update Student</button>
</form>
`;

const input_name = document.querySelector("#input-name");
const input_batch = document.querySelector("#input-batch");
const input_age = document.querySelector("#input-age");
const updateBtn = document.querySelector("#update-btn");
const addBtn = document.querySelector("#add-btn");
updateBtn.style.display = "none";

// map all students recived from api
function mapAllStudents(students) {
  students.map((value) => {
    appendNewStudent(value);
  });
}

function clearForm() {
  input_name.value = "";
  input_age.value = "";
  input_batch.value = "";
}

function getUserInputValues() {
  return {
    name: input_name.value,
    batch: input_batch.value,
    age: input_age.value,
  };
}

function populateForm(parentNode) {
  input_name.value = parentNode.querySelector("h2").innerText;
  input_batch.value = parentNode.querySelector("#batch-value").innerText;
  input_age.value = parentNode.querySelector("#age-value").innerText;
  addBtn.style.display = "none";
  updateBtn.style.display = "block";
}

studentForm.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.id == "add-btn") {
    //get user input data
    const payload = getUserInputValues();
    console.log(payload);
    addNewStudentData(payload);
    clearForm();
  }
  if (e.target.id == "update-btn") {
    const payload = getUserInputValues();
    editStudent(payload, editId);
  }
});

studContainer.addEventListener("click", (event) => {
  const id = event.target.dataset.id;
  const parentNode = event.target.parentNode.parentNode;
  if (event.target.id == "del-btn") {
    deleteStudent(id, parentNode);
  }
  if (event.target.id == "edit-btn") {
    populateForm(parentNode);
    editId = id;
  }
});
