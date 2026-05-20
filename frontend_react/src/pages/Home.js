function Home() {
  return (
    <div className="home-page">
      <div className="hero">
        <div>
          <h1>Mizaniiti</h1>
          <p className="subtitle">
            Personal finance manager for tracking income, expenses, and monthly budget.
          </p>
          <a href="/products" className="hero-btn">Open Dashboard</a>
        </div>

        <div className="hero-card">
          <h3>Total Balance</h3>
          <h2>15,000 MAD</h2>
          <p>Track your money easily and clearly.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;