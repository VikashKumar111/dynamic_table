import React from 'react';

const DeleteProduct = ({ product, onDelete, onCancel }) => {
  const handleDelete = () => {
    onDelete(product);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Confirm Delete</h2>
        <p>Are you sure you want to delete this product?</p>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default DeleteProduct;
