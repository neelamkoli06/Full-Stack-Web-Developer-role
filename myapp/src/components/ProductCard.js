import React from "react";
import "./ProductCard.css";

function ProductCard({ name, price, thumbnail }) {
  return (
    <div className="product-item">
      <img src={thumbnail} alt={name} className="product-image" />
      <div className="product-details">
        <h2>{name}</h2>
        <p>Price: ${price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
