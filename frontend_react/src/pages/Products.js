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
      setError("Error loading transactions");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const totalIncome = products
    .filter((p) => p.quantity > 0)
    .reduce((sum, p) => sum + Number(p.price), 0);

  const totalExpenses = products
    .filter((p) => p.quantity <= 0)
    .reduce((sum, p) => sum + Number(p.price), 0);

  const balance = totalIncome - totalExpenses;

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
      setError("You are not allowed to delete this transaction");
    }
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <div>
          <h1>Financial Dashboard</h1>
          <p>Track your income, expenses, and balance in one place.</p>
        </div>
      </div>

      {error && <p className="error">{error}</p>}

      <div className="summary-grid">
        <div className="summary-card balance">
          <p>Balance</p>
          <h2>{balance} MAD</h2>
        </div>

        <div className="summary-card income">
          <p>Total Income</p>
          <h2>{totalIncome} MAD</h2>
        </div>

        <div className="summary-card expense">
          <p>Total Expenses</p>
          <h2>{totalExpenses} MAD</h2>
        </div>

        <div className="summary-card budget">
          <p>Monthly Budget</p>
          <h2>20,000 MAD</h2>
        </div>
      </div>

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