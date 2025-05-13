document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMsg = document.getElementById('error');

  if (username === 'admin' && password === '12345') {
    // Ganti URL ini sesuai kebutuhan
    window.location.href = 'https://inilah-aku.my.canva.site/';
  } else {
    errorMsg.textContent = 'Username atau password salah!';
  }
});