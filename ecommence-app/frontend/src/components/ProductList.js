import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import apiService from '../services/apiService';
import './ProductList.css'; // Import your styles

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the backend API
    apiService.getProducts()
      .then((data) => setProducts(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="product-list-container">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {!loading && !error && (
        <>
          <h1 className="product-list-title">Explore Our Products</h1>
          <div className="product-list">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductList;
