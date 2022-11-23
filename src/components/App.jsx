import React, { useState } from "react";

function App() {
  const [inputList, setInputList] = useState("");
  const [addItem, setAddItem] = useState("");
  const items = [];

  function handleChange(event) {
    setInputList(event.target.value);
  }

  function handleClick(event) {
    setAddItem(inputList);
    const newItem = addItem;
    items.push(newItem);

    console.log(items);

    event.preventDefault();
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input value={inputList} onChange={handleChange} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>A Item</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
