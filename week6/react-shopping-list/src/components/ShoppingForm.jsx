import { useState } from "react";

const ShoppingForm = ({ generateList }) => {
  const [groceryItems, setGroceryItems] = useState({
    item1: "",
    item2: "",
    item3: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    generateList(groceryItems);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setGroceryItems((currentItems) => ({
      ...currentItems,
      [name]: value,
    }));
  };

  return (
    <form className="inputs" onSubmit={handleSubmit}>
      <label>
        Item 1
        <input
          className="inputBox1"
          type="text"
          name="item1"
          onChange={handleChange}
          value={groceryItems.item1}
        />
      </label>
      <label>
        Item 2
        <input
          className="inputBox2"
          type="text"
          name="item2"
          onChange={handleChange}
          value={groceryItems.item2}
        />
      </label>
      <label>
        Item 3
        <input
          className="inputBox3"
          type="text"
          name="item3"
          onChange={handleChange}
          value={groceryItems.item3}
        />
      </label>
      <button type="submit">Generate List</button>
    </form>
  );
};

export default ShoppingForm;
