function validateForm() {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (nome === '' || email === '' || phoneNumber === '' || mensagem === '') {
        alert("Todos os campos são obrigatórios");
        return false;
    }

    if (nome.length < 3 || nome.length > 50) {
        alert("O nome deve ter entre 3 e 50 caracteres");
        return false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Email inválido");
        return false;
    }

    const phonePattern = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;
    if (!phonePattern.test(phoneNumber)) {
        alert("Telefone inválido. Use o formato (47) 99999-9999");
        return false;
    }

    if (mensagem.length < 10) {
        alert("A mensagem deve ter pelo menos 10 caracteres");
        return false;
    }

    return true;
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
        alert("Formulário enviado com sucesso!");
    }
});