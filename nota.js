function calcularTotal() {
  const linhas = document.querySelectorAll("#tabela tbody tr");
  let totalGeral = 0;

  linhas.forEach(linha => {
    const qtd = parseFloat(linha.children[1].textContent) || 0;
    const valor = parseFloat(linha.children[2].textContent) || 0;
    const total = qtd * valor;
    linha.children[3].textContent = total.toFixed(2);
    totalGeral += total;
  });

  document.getElementById("totalGeral").textContent = totalGeral.toFixed(2);
}
