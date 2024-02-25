// Promise
//  - What is a promise?
//  - Promise States
//  - Promise chain
//  - promise.all()
//  - Use of fetch() & then()

//setup code

// const form = document.getElementById("form");
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   let taskPercentage = document.querySelector(".task-input").value;
//   console.log("Started calculating");
//   // if task percentage 80 placement or else he/she has to wait
//   //Promise - > Producer
//   let place_promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (taskPercentage >= 90) {
//         resolve("Yes! we can move for placement");
//       } else if (taskPercentage >= 80) {
//         resolve("Yes! we can move for placement for 80");
//       } else {
//         reject("We cannot move this profile");
//       }
//     }, 2000);
//   });
//   // pending -> fullied or else rejected ah polam
//   //Promise -> consumers
//   place_promise
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//     .finally(() => console.log("Result is given"));
// });

// chaining of proimise
let chain_promise = new Promise((res, rej) => {
  let value = 1;
  setTimeout(() => {
    if (value <= 0) {
      rej("Cannot do next process");
    } else {
      res(value);
    }
  }, 2000);
});
// chaining of process
// chain_promise
//   .then((data) => {
//     console.log("First process", data);
//     return data * 2;
//   })
//   .then((data2) => {
//     let value = data2 * 2;
//     console.log("second process", data2);
//     return value;
//   })
//   .then((data3) => {
//     console.log("Third process", data3);
//     return data3;
//   })
//   .then((data4) => {
//     console.log("Fourth process", data4);
//     console.log(data4);
//   })
//   .catch((err) => console.log(err));

const promise1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Success process 1");
  }, 5000);
});

const promise2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Success process 2");
  }, 2000);
});

const promise3 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Success process 3");
  }, 1000);
});

//promise1.then((data) => console.log(data)).catch((err) => console.log(err));

//promise2.then((data) => console.log(data)).catch((err) => console.log(err));

//promise3.then((data) => console.log(data)).catch((err) => console.log(err));
//promise.all

Promise.all([promise1, promise2, promise3])
  .then((data) => console.log(data))
  .catch((err) => console.log("Error :", err));

//fetch api

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.slice(0, 50).map((ele) => {
      createDataCard(ele);
    });
  })
  .catch((err) => console.log(err));

//create a card
function createDataCard(ele) {
  document.body.innerHTML += `
  <div class="container">
  <img id="flag" src=${ele.flags.png} alt="somename" />
  <div class="card-info">
    <h2>${ele.name.common}</h2>
    <p><span>Population :</span>${ele.population}</p>
    <p><span>Region :</span>${ele.region}</p>
    <p><span>Capital :</span>${ele.capital[0]}</p>
  </div>
</div>
          `;
}
