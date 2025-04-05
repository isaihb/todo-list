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
      
      <label className = "addItem">Add Your Item Here: </label>
      <input type = "text" className = "textBox" onKeyDown = {handleKeyPress} onChange={(e) => setInputValue(e.target.value)}/>
      <ul className="list">
        {items.map((item, index) => (
          <li key={index} className="listItem">{item}</li>
        ))}
      </ul>
      </header>
    </div>
    
  );
}

export default App;
