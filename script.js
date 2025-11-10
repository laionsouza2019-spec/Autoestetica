function login() {
  const user = document.getElementById("usuario").value;
  const pass = document.getElementById("senha").value;
  const erro = document.getElementById("erro");

  if (user === "auto" && pass === "1234") {
    window.location.href = "nota.html";
  } else {
    erro.textContent = "Usuário ou senha incorretos!";
  }
}
