import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

function Navbar({ user, setUser }) {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await api.post("/logout");
    } catch (error) {
      console.log(error);
    }

    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2>Mizaniiti</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/products">Dashboard</Link>
        <Link to="/about">About</Link>

        {user ? (
          <>
            <span className="user-info">
              {user.name} ({user.role})
            </span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;