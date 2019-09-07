let lista = []
function guardar(){
    let nomes = document.getElementById("nomes").value;
    document.getElementById("lista").innerHTML += '<li>'+ nomes + '</li>'
    lista.push(nomes)
}
