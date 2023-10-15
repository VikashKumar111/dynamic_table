import React, { useState } from 'react';

const UpdateProduct = ({ product, onUpdate, onCancel }) => {
  // Create local state to manage the updated product data
  const [updatedProduct, setUpdatedProduct] = useState(product);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update the local state with the changed product data
    setUpdatedProduct({
      ...updatedProduct,
      [name]: value,
    });
  };

  const handleUpdate = () => {
    // Call the onUpdate function and pass the updated product data
    onUpdate(updatedProduct);

    // Close the update form
    onCancel();
  };

  return (
    <div className="update-product">
      <h2>Update Product</h2>
      <form>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={updatedProduct.title}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={updatedProduct.price}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={updatedProduct.description}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={updatedProduct.category}
            onChange={handleInputChange}
          />
        </label>
        <button type="button" onClick={handleUpdate}>
          Update
        </button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
