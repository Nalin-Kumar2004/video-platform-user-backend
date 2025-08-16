// API utility for login requests
export async function loginUser(form) {
  const response = await fetch("http://localhost:8000/api/v1/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: form.username,
      email: form.email,
      password: form.password,
    }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Login failed");
  }
  return data;
}
