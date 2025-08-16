import React, { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import { registerUser } from "../api/auth";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (formData) => {
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      await registerUser(formData);
      setSuccess("Registration successful! You can now log in.");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {success && <div style={{ color: "green" }}>{success}</div>}
      <RegisterForm onSubmit={handleRegister} loading={loading} />
    </>
  );
};

export default Register;
