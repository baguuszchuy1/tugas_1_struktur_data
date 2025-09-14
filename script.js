function handleLogin() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Contoh validasi sederhana
  if (email === "test1@gmail.com" && password === "12345678") {
    window.location.href = "homepage.html"; // Redirect ke homepage
  } else {
    alert("Email atau password salah!");
  }
}
