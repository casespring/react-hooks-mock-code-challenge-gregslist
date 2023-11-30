import React, {useState} from "react";


function ListingCard({item, onDelete}) {

  const [like, setLike] = useState(false);

  const {description, image, location} = item

  function handleLike() {
    return setLike(!like)
  }

  function handleDelete() {
    fetch(`http://localhost:6001/listings/${item.id}`, {
      method: "DELETE",
      "content-type": "Application/json"
    })
     onDelete(item.id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {like ? (
          <button onClick={handleLike} className="emoji-button favorite active" >★</button>
        ) : (
          <button onClick={handleLike} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
