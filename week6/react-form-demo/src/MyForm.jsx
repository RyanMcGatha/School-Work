import { useState, useSyncExternalStore } from "react";

const Myform = ({ action }) => {
  const [myInput, setMyInput] = useState("");

  const handleChange = (e) => {
    setMyInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    action[myInput];
    setSomeText[myInput];
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        My Input
        <input
          type="text"
          name="myInput"
          value={myInput}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit Stuff</button>
    </form>
  );
};

export default Myform;
