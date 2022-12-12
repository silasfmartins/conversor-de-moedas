const btn = document.querySelector("button");

btn.addEventListener('click', function(e) {
  e.preventDefault();

  const input = document.querySelector("input");

  const valorEmDolarTexto = input.value;

  var valorEmDolarNumero = parseFloat(valorEmDolarTexto)
  var valorEmReal = valorEmDolarNumero * 5.32
  var valorEmRealFixado = valorEmReal.toFixed(2)

  document.querySelector("#mensagem").innerHTML = `Valor em reais com a cotação de R$5.32: $${valorEmRealFixado}`

});