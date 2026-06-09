async function converter() {
  const valor = Number(document.getElementById("valor").value);
  const moeda = document.getElementById("moeda").value;

  if (!valor) return;

  const resposta = await fetch(
    "https://open.er-api.com/v6/latest/" + moeda
  );

  const dados = await resposta.json();

  const taxa = dados.rates.BRL;

  const resultado = valor * taxa;

  document.getElementById("resultado").innerText =
    "R$ " + resultado.toFixed(2);
}