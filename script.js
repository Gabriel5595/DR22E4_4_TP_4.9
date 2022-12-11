let ola = "sou uma string em letra minuscula"

document.body.innerHTML = `<div><h2>${ola}</h2></div> <br>
<div><h3>Sera transformada para MAIUSCULA em uma div dentro de um H1 </h3></div>
<div><h1>${ola.toUpperCase()}</h1></div>
`
