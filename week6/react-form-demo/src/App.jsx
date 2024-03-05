import { useState } from "react";

import Myform from "./MyForm";
import "./App.css";

function App() {
  const [someText, setSomeText] = useState("");

  const getFromData = (text) => {
    setSomeText(text);
  };

  return (
    <>
      <h1>Form Demo</h1>
      <Myform acttion={getFromData} />
      <p>{someText}</p>
    </>
  );
}

export default App;
