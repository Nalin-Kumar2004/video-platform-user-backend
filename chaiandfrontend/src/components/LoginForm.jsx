import React, { useState } from "react";

// Designed based on backend: login accepts username or email, and password
const LoginForm = ({ onSubmit, loading }) => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((!form.username && !form.email) || !form.password) {
      setError("Username or email and password are required.");
      return;
    }
    setError("");
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <div>
        <label>Username:</label>
        <input name="username" value={form.username} onChange={handleChange} />
      </div>
      <div>or</div>
      <div>
        <label>Email:</label>
        <input name="email" type="email" value={form.email} onChange={handleChange} />
      </div>
      <div>
        <label>Password:</label>
        <input name="password" type="password" value={form.password} onChange={handleChange} required />
      </div>
      <button type="submit" disabled={loading}>{loading ? "Logging in..." : "Login"}</button>
    </form>
  );
};

export default LoginForm;
