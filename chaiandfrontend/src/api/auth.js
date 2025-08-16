// API utility for authentication-related requests
// This function will be used by the Register page to send form data to the backend

export async function registerUser(form) {
  const formData = new FormData();
  formData.append("fullName", form.fullName);
  formData.append("email", form.email);
  formData.append("username", form.username);
  formData.append("password", form.password);
  formData.append("avatar", form.avatar);
  if (form.coverImage) {
    formData.append("coverImage", form.coverImage);
  }

  const response = await fetch("http://localhost:8000/api/v1/users/register", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Registration failed");
  }
  return data;
}
