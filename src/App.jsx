import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const handleClick = () => {
    setText('Hi');
  };
  const handleClick2 = () => {
    setText('สวัสดี');
  };
  return (
    <div className="App">
      <h1>Simple Greeting Message App</h1>
      <div className="greeting-container">
        <h2>{text}</h2>
        <div className="buttons">
          <button onClick={handleClick}>Hi</button>
          <button onClick={handleClick2}>สวัสดี</button>
        </div>
      </div>
    </div>
  );
}

export default App;
