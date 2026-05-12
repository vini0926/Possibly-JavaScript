const carros = ["Uno", "Fusca", "Escort", "Gol"];

const conteudo = document.getElementById("conteudo");


var dados;
var i;
function criaSecao(titulo, dadosF) {
    let secao = document.createElement("div");
    secao.innerHTML = "<h2>" + titulo + "</h2>" + dadosF;
    conteudo.appendChild(secao);
}

dados ="";
i = 0;
while(i < 4) {
    dados += "<p>" + carros[i] + "</p>";
    i++;
}
criaSecao("Loop while", dados);


dados ="";
i = 0;
while(i < 4) {
    dados += "<p>" + carros[i] + "</p>";
    i++;
}
criaSecao("Loop while melhorado", dados);


dados = "";
i = 0;
do {
    dados += "<p>" + carros[i] + "</p>";
    i++; 
} while(i < carros.length)
criaSecao("Loop while invertido", dados);


dados = "";
for (i = 0; i < carros.length; i++) {
    dados += "<p>" + carros[i] + "</p>";
}
criaSecao("Loop for", dados);


dados = "";
for (let carro of carros) {
    if (carro === "Escort"){
        continue;
    }
    dados += "<p>" + carro + "</p>";
}
criaSecao("Loop for of", dados);


let carro1 = {marca: "Ford", modelo: "Ka", ano: "2015"};
let carro2 = {marca: "Fiat", modelo: "Uno", ano: "2000"};

let carros2 = [carro1, carro2];

dados = "";
for (let carro of carros2) {

    let propriedades = "";

    for (let prop in carro) {
        propriedades += carro[prop] + " | "
    }
    dados += "<p>" + propriedades + "</p>";
}
criaSecao("Loop for in", dados);


dados = "";
carros.forEach((carro) => {
    dados += "<p>" + carro + "</p>";
})
criaSecao("Loop for each", dados);