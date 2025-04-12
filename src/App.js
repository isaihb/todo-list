import "./App.css";
import React, {useState} from "react";



function App() {



  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  function handleKeyPress(event){

    if (event.key === "Enter") {
      setItems([...items, inputValue]);
      setInputValue("");
    }

    
  }



  


  return (
    <div className="App">
      <header className="App-header">
      
      <p className="Header"> To-Do List: </p>
      
      <label className="addItem">Add Your Item Here: </label>
      <input 
        type="text" 
        className="textBox" 
        onKeyDown={handleKeyPress} 
        onChange={(e) => setInputValue(e.target.value)} 
        value={inputValue}
      />
      <ul className="list">
        {items.map((item, index) => (
          <li key={index} className="listItem">
            {item}
            <button className = "specialButton" onClick={() => handleRemoveItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      </header>
    </div>
  );

  function handleRemoveItem(index) {
    const updatedItems = [];

  // Go through each item in the original items list
  for (let i = 0; i < items.length; i++) {
    // If the current index is not the one we want to remove, keep the item
    if (i !== index) {
      updatedItems.push(items[i]);
    }
  }

  // Update the state with the new list that doesn't include the removed item
  setItems(updatedItems);
  }
}

export default App;
