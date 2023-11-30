import React, {useState, useEffect}from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setItems(data)
      })
  }, [])

  function onDelete(selectedItem) {

    const filteredItems = items.filter((item) => {
      return item.id !== selectedItem
    })
    setItems(filteredItems)
  }


    
    const searchItem = items.filter(item => {
      return item.description.toLowerCase().includes(search.toLowerCase())
    })

  return (
    <div className="app">
      <Header onSearch={setSearch} />
      <ListingsContainer items={searchItem} onDelete={onDelete} />
    </div>
  );
}

export default App;
