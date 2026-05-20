import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";

import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";

function App() {
  const savedUser = localStorage.getItem("user");

  const [user, setUser] = useState(savedUser ? JSON.parse(savedUser) : null);

  return (
    <BrowserRouter>
      <Navbar user={user} setUser={setUser} />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products user={user} />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;