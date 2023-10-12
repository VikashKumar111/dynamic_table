import React, { useState } from "react";
import UpdateProduct from "./UpdateProduct";
import DeleteProduct from "./DeleteProduct";
import ProductDetails from "./ProductDetails";

const ProductTable = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [products, setProducts] = useState([]);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const table = [
    {
      title: "Smartphone",
      price: 499.99,
      description:
        "The latest model of our flagship smartphone with advanced features and high-quality camera.",
      category: "Electronics",
    },
    {
      title: "Laptop",
      price: 899.99,
      description:
        "A powerful laptop with a fast processor and a high-resolution display for ivity and entertainment.",
      category: "Electronics",
    },
    {
      title: "Running Shoes",
      price: 79.99,
      description:
        "Comfortable and stylish running shoes with excellent cushioning and support.",
      category: "Sports & Outdoors",
    },
    {
      title: "Cookware Set",
      price: 149.99,
      description:
        "A complete set of non-stick cookware for your kitchen, perfect for cooking a variety of meals.",
      category: "Home & Kitchen",
    },
    {
      title: "Smartphone",
      price: 499.99,
      description:
        "The latest model of our flagship smartphone with advanced features and high-quality camera.",
      category: "Electronics",
    },
    {
      title: "Laptop",
      price: 899.99,
      description:
        "A powerful laptop with a fast processor and a high-resolution display for ivity and entertainment.",
      category: "Electronics",
    },
    {
      title: "Running Shoes",
      price: 79.99,
      description:
        "Comfortable and stylish running shoes with excellent cushioning and support.",
      category: "Sports & Outdoors",
    },
    {
      title: "Cookware Set",
      price: 149.99,
      description:
        "A complete set of non-stick cookware for your kitchen, perfect for cooking a variety of meals.",
      category: "Home & Kitchen",
    },
    {
      title: "Digital Camera",
      price: 349.99,
      description:
        "Capture high-quality photos and videos with this digital camera, perfect for photography enthusiasts.",
      category: "Electronics",
    },
    {
      title: "Sneakers",
      price: 69.99,
      description:
        "Stylish and comfortable sneakers for casual wear or light sports activities.",
      category: "Fashion",
    },
    {
      title: "Coffee Maker",
      price: 59.99,
      description:
        "Brew your favorite coffee at home with this easy-to-use coffee maker.",
      category: "Home & Kitchen",
    },
  ];

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
      setShowUpdateForm(false);

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

      {showUpdateForm && selectedProduct && (
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
