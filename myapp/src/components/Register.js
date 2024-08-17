// src/components/Register.js
import React, { useState } from "react";
import axios from "axios";
import "./AuthForm.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://intern-task-api.bravo68web.workers.dev/auth/signup",
        { email, password }
      );
      console.log("Registration successful", response.data);
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
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
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
