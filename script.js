function verificacaoAprovacao()
{
    let nota = document.getElementById("nota").value;
    console.log("Nota inserida: ", nota);

    if (nota >= 7) {
        document.getElementById("resultado").innerText = "Aluno(a) aprovado(a)";
        alert("Aluno(a) aprovado(a)");
    }
    else {
        document.getElementById("resultado").innerText = "Aluno(a) reprovado(a)";
        alert("Aluno(a) reprovado(a)");
    }

    console.log(nota);
}