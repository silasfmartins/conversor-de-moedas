const checkbox = document.querySelector('#checkbox')
const body = document.querySelector('body')
const btn = document.querySelector("button");

checkbox.addEventListener('change', changeTheme)

function changeTheme() {
  document.body.classList.toggle('dark')

  if (body.classList.contains('dark')) {
    body.classList.remove('light')
    body.classList.add('dark')
    localStorage.setItem("theme", "light")
  }
  else {
    body.classList.remove('dark')
    body.classList.add('light')
    localStorage.setItem("theme", "dark")
  }
}

body.classList.add(localStorage.getItem("theme"))

btn.addEventListener('click', function(e) {
  e.preventDefault();

  const input = document.querySelector("#dolarValue");

  const valorEmDolarTexto = input.value;

  var valorEmDolarNumero = parseFloat(valorEmDolarTexto)
  var valorEmReal = valorEmDolarNumero * 5.32
  var valorEmRealFixado = valorEmReal.toFixed(2)

  document.querySelector("#mensagem").innerHTML = `Valor em reais com a cotação de R$5.32: $${valorEmRealFixado}`
});