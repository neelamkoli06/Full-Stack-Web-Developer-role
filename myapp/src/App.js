import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import ProductList from "./components/ProductList";
import NavBar from "./components/NavBar";
import { UserProvider } from "./components/UserContext"; // Import UserProvider

function App() {
  return (
    <Router>
      <UserProvider>
        {" "}
        {/* Wrap your routes with UserProvider */}
        <NavBar />
        <div className="app-container">
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<ProductList />} />
          </Routes>
        </div>
      </UserProvider>
    </Router>
  );
}

export default App;
