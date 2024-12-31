document.getElementById('enviar').addEventListener('click', function () {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    if (nome && email && telefone) {
        // Simulando o envio de dados para o servidor
        console.log(`Nome: ${nome}, E-mail: ${email}, Telefone: ${telefone}`);
        
        // Redirecionando para a página de sucesso
        window.location.href = 'sucesso.html';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
