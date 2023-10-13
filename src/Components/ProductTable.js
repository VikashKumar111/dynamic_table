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
    setSelectedProduct(editedProduct);
  };

  const handleDeleteProduct = (product) => {
    setSelectedProduct(product);
    setShowDeleteDialog(true);
  };

  const handleCancelDelete = () => {
    setShowDeleteDialog(false);
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
