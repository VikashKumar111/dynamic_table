import React, { useState } from "react";
import UpdateProduct from "./UpdateProduct";
import DeleteProduct from "./DeleteProduct";
import ProductDetails from "./ProductDetails";
import table from "../tabledata";

const ProductTable = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [products, setProducts] = useState(table);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
    setShowDetails(false);
  };

  const handleUpdateProduct = (product) => {
    // Find the index of the product to update in the products array
    const updatedIndex = products.findIndex((p) => p.id === product.id);

    if (updatedIndex !== -1) {
      // Create a copy of the products array to avoid mutating state directly
      const updatedProducts = [...products];

      // Replace the old product with the updated product
      updatedProducts[updatedIndex] = product;

      // Update the state with the new products array
      setProducts(updatedProducts);

      // Close the update form
      setShowUpdateForm(true);

      // Display a success message or perform any other desired actions
      console.log("Product updated successfully:", product);
    } else {
      // Handle the case where the product to update was not found
      console.error("Product not found for update.");
    }
  };

  const handleCancelUpdate = () => {
    setShowUpdateForm(false);
  };

  const handleDeleteProduct = (product) => {
    // Filter out the product to be deleted from the products array
    const updatedProducts = products.filter((p) => p.id !== product.id);

    // Update the state with the new products array (effectively removing the product)
    setProducts(updatedProducts);

    // Close the delete dialog
    setShowDeleteDialog(false);
  };

  const handleCancelDelete = () => {
    setShowDeleteDialog(false);
  };

  return (
    <div>
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
          {table.map((product) => (
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

      {showUpdateForm && setProducts && (
        <UpdateProduct
          product={selectedProduct}
          onUpdate={handleUpdateProduct}
          onCancel={handleCancelUpdate}
        />
      )}
      {showDeleteDialog && selectedProduct && (
        <DeleteProduct
          product={selectedProduct}
          onDelete={handleDeleteProduct}
          onCancel={handleCancelDelete}
        />
      )}
    </div>
  );
};

export default ProductTable;
