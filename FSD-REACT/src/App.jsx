/* eslint-disable react/prop-types */
import "./App.css";

function App() {
  const name1 = "Prashanth";

  return (
    <>
      <Profile name="Sanjay" batch="53" />
      <Profile name="Vignesh" batch="54" />
      <Profile name="Chandra" batch="55" />
    </>
  );
}

export default App;
//props = {} => {name : "sanjay", batch="53"}

function Profile({ name, batch }) {
  //jsx will be returned
  return (
    <div className="profile-container">
      <img
        src="https://www.animaker.com/hub/wp-content/uploads/2023/03/Mickey_Mouse_Disney_1.webp"
        alt="#"
      />
      <h3>{name}</h3>
      <h3>{batch}</h3>
    </div>
  );
}

//React.createElement("h1", { className: "head", id: "h-1" }, `JSX ${name}`);

// JSX and HOW it works
{
  /* <>
<h1 className="head" id="h-1">
  <i className="itaclic">JSX {name}</i>
</h1>
</> */
}

// React.createElement(
//   "h1",
//   { className: "head", id: "h-1" },
//   React.createElement("i", { className: "itaclic" }, `JSX ${name}`)
