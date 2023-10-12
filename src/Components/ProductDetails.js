
import React from 'react';

const ProductDetails = ({ product, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Product Details</h2>
        <p>Title: {product.title}</p>
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>
        <p>Category: {product.category}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ProductDetails;
