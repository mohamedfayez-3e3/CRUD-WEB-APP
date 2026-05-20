import { useEffect, useState } from "react";

function ProductForm({ onSubmit, selectedProduct }) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "1",
  });

  useEffect(() => {
    if (selectedProduct) {
      setForm({
        name: selectedProduct.name,
        description: selectedProduct.description || "",
        price: selectedProduct.price,
        quantity: selectedProduct.quantity,
      });
    }
  }, [selectedProduct]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);

    setForm({
      name: "",
      description: "",
      price: "",
      quantity: "1",
    });
  };

  return (
    <div className="form-container finance-form">
      <h2>{selectedProduct ? "Edit Transaction" : "Add Transaction"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Transaction title"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          name="description"
          placeholder="Category or description"
          value={form.description}
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Amount"
          value={form.price}
          onChange={handleChange}
          required
        />

        <select name="quantity" value={form.quantity} onChange={handleChange}>
          <option value="1">Income</option>
          <option value="0">Expense</option>
        </select>

        <button type="submit">
          {selectedProduct ? "Update Transaction" : "Add Transaction"}
        </button>
      </form>
    </div>
  );
}

export default ProductForm;