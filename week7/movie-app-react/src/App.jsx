import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Movies from "./components/Movies";

function App() {
  return (
    <>
      <input placeholder="Search Movie Title" className="searchBar"></input>
      <Movies></Movies>
    </>
  );
}

export default App;
