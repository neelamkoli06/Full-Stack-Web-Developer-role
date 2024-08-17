// src/components/Login.js
import React, { useState } from "react";
import axios from "axios";
import "./AuthForm.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://intern-task-api.bravo68web.workers.dev/auth/login",
        { email, password }
      );
      console.log("Login successful", response.data);
      setSuccess("Login successful! Redirecting...");
      setError("");
    } catch (error) {
      console.error("Login failed", error);
      setError("Login failed. Please check your email and password.");
      setSuccess("");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="auth-input"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="auth-input"
        />
        <button type="submit" className="auth-button">
          Login
        </button>
        {error && <p className="auth-error">{error}</p>}
        {success && <p className="auth-success">{success}</p>}
      </form>
    </div>
  );
}

export default Login;
