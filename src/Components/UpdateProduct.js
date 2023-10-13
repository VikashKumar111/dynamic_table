import React, { useState } from 'react';

const UpdateProduct = ({ product, onUpdate, onCancel }) => {
    // Use object destructuring to extract properties from product
    
    const { title, price, description, category } = product;
  

  // Use a single state object to store the edited product
  const [editedProduct, setEditedProduct] = useState({ title, price, description, category });

  const handleInputChange = (e) => {
    const { name ,value } = e.target;
    // Update the editedProduct state with the changed value
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
          {/* Create a reusable input field component to reduce repetition */}
          <InputField
            label="Title"
            name="title"
            value={editedProduct.title}
            onChange={handleInputChange}
          />

          <InputField
            label="Price"
            name="price"
            value={editedProduct.price}
            onChange={handleInputChange}
          />

          <InputField
            label="Description"
            name="description"
            value={editedProduct.description}
            onChange={handleInputChange}
          />

          <InputField
            label="Category"
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

// Create a reusable input field component
const InputField = ({ label, name, value, onChange }) => (
  <div>
    <label htmlFor={name}>{label}:</label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default UpdateProduct;
