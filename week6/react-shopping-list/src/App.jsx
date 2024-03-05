import { useState } from "react";
import ShoppingForm from "./components/ShoppingForm";
import ShoppingList from "./components/ShoppingList";
import "./index.css";

function App() {
  const [shoppingListItems, setShoppingListItems] = useState({});

  const generateList = (listItems) => {
    setShoppingListItems(listItems);
  };

  return (
    <>
      <div className="body bg-chestnut-800">
        <div className="formContainer bg-chestnut-300">
          <h1>Time to go Shopping</h1>
          <ShoppingForm className="shoppingForm" generateList={generateList} />
          <ShoppingList className="shoppingList" items={shoppingListItems} />
        </div>
      </div>
    </>
  );
}

export default App;
