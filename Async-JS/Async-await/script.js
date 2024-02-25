function getPermission(name) {
  return new Promise((resolve, reject) => {
    if (name === "MENTOR") {
      setTimeout(() => {
        resolve("Access Granted");
      }, 2000);
    } else {
      setTimeout(() => {
        reject("Access Denied");
      });
    }
  });
}

function giveData(Access) {
  return new Promise((resolve, reject) => {
    if (Access === "Access Granted") {
      setTimeout(() => {
        resolve([{ name: "sanjay" }]);
      }, 2000);
    } else {
      setTimeout(() => {
        reject("Data Failed");
      });
    }
  });
}

// // Promise chaining....
// getPermission("MENTOR")
//   .then((data) => data) //Acesss Granted
//   .then((data) => {
//     console.log("Welocome your data is processing");
//     return data;
//   }) //Access Granted
//   .then((data) => giveData(data)) // [{ name: "sanjay" }]
//   .then((res) => console.log(res)) //console(Print)
//   .catch((err) => console.log("ERROR", err));

function makeDelay(ms) {
  return new Promise((res, rej) => {
    if (ms <= 1000) {
      setTimeout(() => {
        res(`Delay done for ${ms}`);
      }, ms);
    } else {
      setTimeout(() => {
        rej(`Error in delay executing ${ms}`);
      }, ms);
    }
  });
}
async function doOperation() {
  try {
    console.log("Start");
    console.log("operation1");
    console.log("operation2");
    delay = await makeDelay(1000);
    console.log(delay);
    console.log("operation3");
    await makeDelay(2000); // error (failed promise)
    console.log("Stop");
  } catch (error) {
    console.log("Error :", error);
  }
}
// doOperation();

// in promise fetch
// fetch("https://restcountries.com/v3.1/all")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

let countryEle = document.getElementById("contry-container");
let currentpage = 1; //2, 3, 4
let itemsPage = 5;
async function fetchCountries() {
  try {
    countryEle.innerHTML = "";
    let startIndex = (currentpage - 1) * itemsPage; //0 , 5, 10, 15, 20
    let endIndex = startIndex + itemsPage; //5, 10, 15, 20
    let res = await fetch("https://restcountries.com/v3.1/all");
    let data = await res.json();
    data.slice(startIndex, endIndex).forEach((ele) => {
      createDataCard(ele);
    });
  } catch (error) {
    countryEle.innerHTML += `
    <h1 style="text-align:center">Error Occured Sorry 😥</h1>
    `;
  }
}

function createDataCard(ele) {
  countryEle.innerHTML += `
          <div class="container">
          <img id="flag" src=${ele.flags.png} alt="somename" />
          <div class="card-info">
            <h2>${ele.name.common}</h2>
            <p><span>Population :</span>${ele.population}</p>
            <p><span>Region :</span>${ele.region}</p>
            <p><span>Capital :</span>${ele.capital ? ele.capital[0] : ""}</p>
          </div>
        </div>
        `;
}

fetchCountries();

function prevButton() {
  if (currentpage > 1) {
    currentpage--; //1
    fetchCountries();
  }
}

function nextButton() {
  currentpage++;
  fetchCountries();
}
