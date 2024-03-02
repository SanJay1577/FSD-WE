const API = "https://65e294dca8583365b31844ea.mockapi.io/student";
//CRUD - CREATE READ UPDATE DELETE
const dummyData = {
  name: "new name",
  batch: "new batch",
  age: 65,
  id: "6",
};

const changeName = {
  name: "name 6",
};
//helper function
//Get API   // READ

async function getStudentsData(id) {
  try {
    const res = await fetch(`${API}/${id}`, {
      method: "GET",
    });
    const data = await res.json();
    console.log(data);
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
    console.log(data);
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
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

//DELETE API (To delete a data) //DELETE

async function deleteStudent(id) {
  try {
    const res = await fetch(`${API}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

//executing helper functions

//getStudentsData("");
//addNewStudentData(dummyData);
//editStudent(changeName, "6");
//deleteStudent("6");
