import { useEffect, useState } from "react";

function ProductForm({ onSubmit, selectedProduct }) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
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
      quantity: "",
    });
  };

  return (
    <div className="form-container">
      <h2>{selectedProduct ? "Edit Product" : "Add Product"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Product name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
        />

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={form.quantity}
          onChange={handleChange}
        />

        <button type="submit">
          {selectedProduct ? "Update Product" : "Add Product"}
        </button>
      </form>
    </div>
  );
}

export default ProductForm;