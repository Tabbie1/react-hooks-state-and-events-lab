import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


function App() {
  const [items, SetItems] = useState (itemData)
  const [onDarkMode, setOnDarkmode]=useState(false)



  function handleDarkonClick(){
    setOnDarkmode((onDarkMode)=>!onDarkMode)

  }

  const appClass = onDarkMode ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkonClick}>{onDarkMode ? "Dark":"Light"} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
