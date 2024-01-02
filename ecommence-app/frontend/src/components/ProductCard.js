import React from 'react';
import './ProductCard.css'; // Import your styles

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-details">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
