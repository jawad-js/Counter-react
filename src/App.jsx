import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <>
      <div className="container">
        <h1>Counter: {count}</h1>
        <button onClick={increase}>Increase</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrease}>Decrease</button>
      </div>
    </>
  );
}

export default App;
