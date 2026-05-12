function calcularDesconto() {
    let valorOriginal = document.getElementById("valorOriginal").value;
    console.log("Valor original: ", valorOriginal);

    let porcentagem = document.getElementById("porcentagem").value;
    console.log("Porcentagem de desconto: ", porcentagem);

    let valorDesconto = (valorOriginal * porcentagem) / 100;
    console.log("Valor do desconto: ", valorDesconto);

    let valorFinal = valorOriginal - valorDesconto;
    console.log("Valor final com desconto: ", valorFinal);

    if (valorOriginal <= 0 || porcentagem <= 0) {
        alert("Por favor, insira valores maiores que zero");
    }
    else {
        document.getElementById("resultado").innerText = "Valor final com desconto: " + valorFinal;
        alert("Valor inicial: " + valorOriginal + "\nValor final com desconto: " + valorFinal);
    }
}
