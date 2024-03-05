import { useState } from "react";
import "./App.css";
import { Greeting } from "./components/Greeting";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Greeting name="ryan" />
      <button type="button" onClick={increment}>
        Click me
      </button>
      <p>Count is: {count}</p>
    </>
  );
}

export default App;
