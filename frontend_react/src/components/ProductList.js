function ProductList({ products, onEdit, onDelete, user }) {
  return (
    <div>
      <h2>Products List</h2>

      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
              {user?.role === "admin" && <th>Actions</th>}
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>

                {user?.role === "admin" && (
                  <td>
                    <button onClick={() => onEdit(product)}>Edit</button>
                    <button onClick={() => onDelete(product.id)}>Delete</button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ProductList;