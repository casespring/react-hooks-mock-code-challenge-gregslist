import React from "react";
import ListingCard from "./ListingCard";
// import ListingCard from "./ListingCard";

function ListingsContainer({items, onDelete}) {
  
    const renderItems = items.map(item => {
     return <ListingCard 
      key={item.id}
      item={item}
      onDelete={onDelete}
      />
    })

  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {renderItems}
      </ul>
    </main>
  );
}

export default ListingsContainer;
