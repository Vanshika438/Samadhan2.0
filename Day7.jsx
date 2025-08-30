import React, { useState, createContext, useContext } from "react";
import "./App.css";

const AppContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [font, setFont] = useState("Arial");

  const handleTextChange = (value) => {
    setText(value);
    setCount(value.length);
  };

  return (
    <AppContext.Provider
      value={{ count, setCount, text, handleTextChange, font, setFont }}
    >
      <div className="app">
        <div className="stack">
          <h1 className="title">Counter + Live Text Preview</h1>
          <Counter />
          <TextInput />
          <FontSelector />
          <Preview />
        </div>
      </div>
    </AppContext.Provider>
  );
}

function Counter() {
  const { count, setCount, handleTextChange } = useContext(AppContext);
  return (
    <div className="card">
      <p className="counter-text">Count: {count}</p>
      <button
        className="reset-btn"
        onClick={() => {
          setCount(0);
          handleTextChange("");
        }}
      >
        Reset
      </button>
    </div>
  );
}

function TextInput() {
  const { text, handleTextChange } = useContext(AppContext);
  return (
    <div className="card">
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => handleTextChange(e.target.value)}
      />
    </div>
  );
}

function FontSelector() {
  const { font, setFont } = useContext(AppContext);
  return (
    <div className="card">
      <div className="font-row">
        <label className="preview-label" htmlFor="font-select">
          Choose Font:
        </label>
        <select
          id="font-select"
          value={font}
          onChange={(e) => setFont(e.target.value)}
        >
          <option value="Arial">Arial</option>
          <option value="Georgia">Georgia</option>
          <option value="Courier New">Courier New</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Verdana">Verdana</option>
          <option value="Comic Sans MS">Comic Sans</option>
        </select>
      </div>
    </div>
  );
}

function Preview() {
  const { text, font } = useContext(AppContext);
  return (
    <div className="card">
      <p className="preview-label">Preview:</p>
      <p className="preview-text" style={{ fontFamily: font }}>
        {text || "Start typing..."}
      </p>
    </div>
  );
}

export default App;
