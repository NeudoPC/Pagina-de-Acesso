function getValue() {
valor = document.getElementById("nome").value;
if (valor==="") {
    return
}
document.getElementById("subtitulo").innerHTML = "Olá " + valor + " é um prazer ter você aqui!";
document.getElementById("nome").value ="";
}

function removeValue() {
    document.getElementById("nome").value;
    document.getElementById("subtitulo").innerHTML = "Para assinar se inscreva!"
}