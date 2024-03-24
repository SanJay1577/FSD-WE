/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";

function App() {
  //state management using states
  const [count, setCount] = useState(0);
  return (
    <>
      <ProductCounter count={count} />
      <AllPriceCard setCount={setCount} count={count} />
    </>
  );
}
export default App;
//This components hols and renders all product components
function AllPriceCard({ setCount, count }) {
  const data = [
    {
      type: "PRO",
      price: {
        value: 500,
        style: "abled",
      },
      storage: {
        value: 100,
        style: "abled",
      },
      access: {
        value: 100,
        style: "abled",
      },
    },
    {
      type: "FREE",
      price: {
        value: 0,
        style: "abled",
      },
      storage: {
        value: 0,
        style: "disabled",
      },
      access: {
        value: 1,
        style: "disabled",
      },
    },
    {
      type: "Standard",
      price: {
        value: 100,
        style: "abled",
      },
      storage: {
        value: 10,
        style: "abled",
      },
      access: {
        value: 1,
        style: "disabled",
      },
    },
  ];
  return (
    <div className="all-cards">
      {/* <PriceCard model={free}/> */}
      {data.map((val, idx) => (
        <PriceCard model={val} key={idx} setCount={setCount} count={count} />
      ))}
    </div>
  );
}

function PriceCard({ model, setCount, count }) {
  const [show, setShow] = useState(true);

  function handleBuy() {
    setShow(!show);
    setCount(count + 1);
  }

  function handleRemove() {
    setShow(!show);
    setCount(count - 1);
  }

  return (
    <div className="price-card">
      <p className="type">{model.type}</p>
      <p className={model.price.style}>Price : {model.price.value}$</p>
      <p className={model.storage.style}>
        {" "}
        <span>❌</span>Storage : {model.storage.value}gb
      </p>
      <p className={model.access.style}>
        <span>✅</span> Access : {model.access.value}
      </p>
      {/* conditional rendering */}
      {show ? (
        <button onClick={handleBuy}>Buy</button>
      ) : (
        <button onClick={handleRemove}>Remove</button>
      )}
    </div>
  );
}

function ProductCounter({ count }) {
  return (
    <div>
      <h1>CART : {count}</h1>
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
