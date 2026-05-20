function ProductList({ products, onEdit, onDelete, user }) {
  return (
    <div className="transactions-section">
      <h2>Recent Transactions</h2>

      {products.length === 0 ? (
        <p>No transactions found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Category / Description</th>
              <th>Amount</th>
              <th>Type</th>
              {user?.role === "admin" && <th>Actions</th>}
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price} MAD</td>
                <td>
                  {Number(product.quantity) > 0 ? (
                    <span className="badge income-badge">Income</span>
                  ) : (
                    <span className="badge expense-badge">Expense</span>
                  )}
                </td>

                {user?.role === "admin" && (
                  <td>
                    <button onClick={() => onEdit(product)}>Edit</button>
                    <button className="delete-btn" onClick={() => onDelete(product.id)}>
                      Delete
                    </button>
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