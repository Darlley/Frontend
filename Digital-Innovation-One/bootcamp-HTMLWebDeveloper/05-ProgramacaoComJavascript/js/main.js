// Você receberá dois valores: um valor inteiro X com a distância total percorrida (em Km), e um valor real Y que representa o total de combustível consumido, com um dígito após o ponto decimal.
let distancia = parseInt(gets());
let combustivel = parseFloat(gets().toFixed(1));
let valor = 0;
valor = (distancia/combustivel).toFixed(3)
console.log(valor+" km/l")

/* AULA 1
 alert("Meu primeiro JavaScript")

var nome = "Darlley Brito"
var idade = 23
var idade2 = 18
alert("Bem vindo " + nome)
alert(nome + " tem " + idade + " anos!")
alert("soma: " + (idade + idade2))
console.log(nome)
console.log(idade+idade2)

var frase = "Japão é o melhor time do mundo"
console.log(frase)
frase = frase.replace("Japão", "Brasil")
console.log( frase )
console.log(frase.toLowerCase())
console.log(frase.toLocaleUpperCase())
*/

/* AULA 2
var lista = ["maça", "pêra", "laranja"]
console.log(lista, lista.pop()) // remove o ultimo
console.log(lista, lista.push("melancia")) // adiciona novo elemento na ultima posição
console.log(lista.reverse())
console.log(lista.toString())
console.log(lista.join(' - '))

var fruta = {
    nome: 'Maça', cor: 'Vermelha'
}
console.log(fruta, fruta.nome)

var frutas = [{nome: 'Maça', cor: 'Vermelha'}, {nome: 'Uva', cor: 'Roxa'}]
console.log(frutas, frutas[1].nome)

*/


/* AULA 3
var idade = prompt("Digite sua idade: ");
if(idade >= 18){
    console.log("Maior de idade")
}else{
    console.log("Menor de idade")
};

var count = 0;
while(count<=5){
    console.log(count)
    count++
}
for(i=1; i<=5; i++){
    console.log("count - " + i)
}

var data = new Date();
console.log(data)
console.log(data.getDay())
console.log(data.getHours())

*/

/* AULA 4

function soma(n1, n2){
    return n1+n2
}
console.log( soma(5, 10) )

function setReplace(frase, nome, nome_nome){
    return frase.replace(nome, nome_nome)
}
console.log( setReplace("Japão o melhor time", "Japão", "Brasil") )
*/

/* AULA 5

function clicou(){
    var elemento = document.getElementById('agradecimento')
    console.log(elemento)
    elemento.innerHTML = "<p>Clicou!</p>"
    console.log("Clicou")
}
function redirecionar(){
    window.open('https://darlley.github.io/') // abre em outra janela
//  window.location.href = 'https://darlley.github.io/' abre namesma janela
}

function trocar(elemento){
    elemento.innerHTML = "Mouse in"
}
function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui"
}*/