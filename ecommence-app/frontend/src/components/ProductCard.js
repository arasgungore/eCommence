import React from 'react';

const ProductCard = ({ product }) => {
  // Customize the card layout based on your product data
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductCard;
