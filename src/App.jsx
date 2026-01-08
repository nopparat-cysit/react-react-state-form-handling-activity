import { useState } from "react";
import "./App.css";


function App() {
const [text, setText] = useState("");
console.log(text);

const [clone, setClone] = useState("");
console.log(clone);

function handleAdd() {
  setText(clone);
}
  return (
    <div className="App">
      <h1>Simple Greeting Message App 2</h1>
      <div className="greeting-container">
        <h2>{text}</h2>
        <input type="text" value={clone} onChange={(e) => setClone(e.target.value)} />
        <div className="buttons">
          <button onClick={handleAdd}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default App;
