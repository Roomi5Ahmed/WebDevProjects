import React, { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("");
  const handleClick = (value) => {
    setInput((prev)=> (prev==="Error" ? value : prev+value));
  };
  const handleClear = () => {
    setInput("");
  };
  const handleEqual = () => {
    if (!input || input === "Error") {
      return;
    }
    try {
      setInput(eval(input).toString());
    }
    catch {
      setInput("Error");}
    };
return (

    <div className="Calculator">
      <h1 className='heading'>Calculator</h1>
      <input className="display" value={input} readOnly />
      <div className="buttons">
        <button onClick={() => handleClick("(")}>(</button>
        <button onClick={() => handleClick(")")}>)</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>   
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={handleEqual}>=</button>
        <button onClick={handleClear}>C</button>
      </div>
    </div>
  );

}

export default App
