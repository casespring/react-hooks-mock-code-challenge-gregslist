import React, { useState } from "react";

function Search({onSearch}) {
  const [typeValue, setTypeValue] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    onSearch(typeValue)
  }
  

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={typeValue}
        onChange={(e) => setTypeValue(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
