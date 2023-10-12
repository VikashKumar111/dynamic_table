import React, { useState } from 'react';

const UpdateProduct = ({ product, onUpdate, onCancel }) => {
  const [editedProduct, setEditedProduct] = useState({ ...product });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({
      ...editedProduct,
      [name]: value,
    });
  };

  const handleUpdate = () => {
    onUpdate(editedProduct);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Product</h2>
        <form>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            value={editedProduct.title}
            onChange={handleInputChange}
          />

          <label htmlFor="price">Price:</label>
          <input
            type="number"
            name="price"
            value={editedProduct.price}
            onChange={handleInputChange}
          />

          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            value={editedProduct.description}
            onChange={handleInputChange}
          />

          <label htmlFor="category">Category:</label>
          <input
            type="text"
            name="category"
            value={editedProduct.category}
            onChange={handleInputChange}
          />

          <button onClick={handleUpdate}>Update</button>
          <button onClick={onCancel}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
