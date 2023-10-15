import React, { useState } from "react";
import UpdateProduct from "./UpdateProduct";
import DeleteProduct from "./DeleteProduct";
import ProductDetails from "./ProductDetails";
import table from "../tabledata";

const ProductTable = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [products, setProducts] = useState(table);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
    setShowDetails(false);
  };

  const handleUpdateProduct = (product) => {
    setSelectedProduct(product);
    setShowUpdateForm(true);
  };

  const handleCancelUpdate = () => {
    setSelectedProduct(null);
    setShowUpdateForm(false);
  };

  const handleEditedProduct = (editedProduct) => {
    // Assuming you have a state or mechanism to manage the product data
    // Update the product data in your state or API
    // Replace the existing product with the edited product
    // Here, we assume you have a "products" state and a "setProducts" function for managing products in your state

    // Create a copy of the existing products and update the edited product
    const updatedProducts = products.map((product) => {
      if (product.id === editedProduct.id) {
        // Replace the product with the editedProduct
        return editedProduct;
      }
      // Keep other products unchanged
      return product;
    });

    // Update the products state with the updated data
    setProducts(updatedProducts);

    // Close the update form
    setShowUpdateForm(false);
  };

  const handleDeleteProduct = (product) => {
    setSelectedProduct(product);
    setShowDeleteDialog(true);
  };

  const handleCancelDelete = () => {
    setShowDeleteDialog(false);
  };

  const handleDeletedProduct = (product) => {
    // Assuming you have a state or mechanism to manage the product data
    // You should confirm the delete operation with the user before proceeding

    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${product.title}"?`
    );

    if (confirmDelete) {
      // Perform the actual delete operation, e.g., send a request to delete the product from an API
      // Or update your state by removing the product

      // If you have a state for products, you can use the filter method to exclude the product to be deleted
      const updatedProducts = products.filter((p) => p.id !== product.id);

      // Update the products state with the updated data
      setProducts(updatedProducts);

      // Close the delete dialog or form
      setShowDeleteDialog(false);
    }
  };

  return (
    <div>
      {showUpdateForm && selectedProduct && (
        <UpdateProduct
          product={selectedProduct}
          onUpdate={handleEditedProduct}
          onCancel={handleCancelUpdate}
        />
      )}
      <table>
        <thead>
          <tr>
            <th> title</th>
            <th> price</th>
            <th> description</th>
            <th> category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td>
                {/* Add action buttons (View, Update, Delete) here */}
                <button onClick={() => handleViewDetails(product)}>View</button>
                <button onClick={() => handleUpdateProduct(product)}>
                  Update
                </button>
                <button onClick={() => handleDeleteProduct(product)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showDetails && selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onClose={handleCloseDetails}
        />
      )}

      {showDeleteDialog && selectedProduct && (
        <DeleteProduct
          product={selectedProduct}
          onDelete={handleDeletedProduct}
          onCancel={handleCancelDelete}
        />
      )}
    </div>
  );
};

export default ProductTable;
