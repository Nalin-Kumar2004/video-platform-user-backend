import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import { loginUser } from "../api/login";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleLogin = async (formData) => {
    setLoading(true);
    setError("");
    try {
      const data = await loginUser(formData);
      // Store token using AuthContext for global state and UI updates
      login(data.data.accessToken);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <LoginForm onSubmit={handleLogin} loading={loading} />
    </>
  );
};

export default Login;
