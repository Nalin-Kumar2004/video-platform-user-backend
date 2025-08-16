import React, { useState } from "react";

// This form is designed based on backend requirements: fullName, email, username, password, avatar (file), coverImage (file)
const RegisterForm = ({ onSubmit, loading }) => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    avatar: null,
    coverImage: null,
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!form.fullName || !form.email || !form.username || !form.password || !form.avatar) {
      setError("All fields except cover image are required.");
      return;
    }
    setError("");
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <div>
        <label>Full Name:</label>
        <input name="fullName" value={form.fullName} onChange={handleChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input name="email" type="email" value={form.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Username:</label>
        <input name="username" value={form.username} onChange={handleChange} required />
      </div>
      <div>
        <label>Password:</label>
        <input name="password" type="password" value={form.password} onChange={handleChange} required />
      </div>
      <div>
        <label>Avatar:</label>
        <input name="avatar" type="file" accept="image/*" onChange={handleChange} required />
      </div>
      <div>
        <label>Cover Image:</label>
        <input name="coverImage" type="file" accept="image/*" onChange={handleChange} />
      </div>
      <button type="submit" disabled={loading}>{loading ? "Registering..." : "Register"}</button>
    </form>
  );
};

export default RegisterForm;
