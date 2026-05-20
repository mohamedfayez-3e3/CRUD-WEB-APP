import { useEffect, useState } from "react";
import api from "../services/api";
import ProductList from "../components/ProductList";
import ProductForm from "../components/ProductForm";

function Products({ user }) {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [error, setError] = useState("");

  const getProducts = async () => {
    try {
      const response = await api.get("/products");
      setProducts(response.data);
    } catch (err) {
      setError("Error loading products");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleSubmit = async (form) => {
    try {
      if (selectedProduct) {
        await api.put(`/products/${selectedProduct.id}`, form);
        setSelectedProduct(null);
      } else {
        await api.post("/products", form);
      }

      getProducts();
    } catch (err) {
      setError("You are not allowed to perform this action");
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/products/${id}`);
      getProducts();
    } catch (err) {
      setError("You are not allowed to delete this product");
    }
  };

  return (
    <div className="page">
      <h1>Products Management</h1>

      {error && <p className="error">{error}</p>}

      {user?.role === "admin" && (
        <ProductForm
          onSubmit={handleSubmit}
          selectedProduct={selectedProduct}
        />
      )}

      <ProductList
        products={products}
        onEdit={setSelectedProduct}
        onDelete={handleDelete}
        user={user}
      />
    </div>
  );
}

export default Products;