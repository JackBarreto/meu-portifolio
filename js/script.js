// Executa o JavaScript somente depois que todo o HTML da página carregar
document.addEventListener('DOMContentLoaded', function () {

    // --- LÓGICA PARA O FORMULÁRIO DE CONTATO ---

    // Guarda o elemento do formulário em uma variável
    const contactForm = document.getElementById('contact-form');

    // Executa uma função quando o formulário é enviado (botão de submit clicado)
    contactForm.addEventListener('submit', function (event) {
        
        // Impede a página de recarregar, para que a gente controle o que acontece
        event.preventDefault();

        // Pega o texto digitado nos campos
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        // Verifica se algum campo está vazio
        if (nome === '' || email === '' || mensagem === '') {
            alert('Por favor, preencha todos os campos.');
            return; // Para a execução do código aqui
        }

        // Verifica se o email tem um formato válido
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um endereço de e-mail válido.');
            return;
        }

        // Se tudo estiver certo, mostra uma mensagem de sucesso
        alert('Mensagem enviada com sucesso!');

        // Limpa os campos do formulário
        contactForm.reset();
    });


    // --- LÓGICA PARA O INTERRUPTOR DE TEMA ---

    // Guarda o checkbox do tema em uma variável
    const themeCheckbox = document.getElementById('theme-checkbox');

    // Executa uma função quando o estado do interruptor muda (ligado/desligado)
    themeCheckbox.addEventListener('change', function () {
        
        // Adiciona a classe 'dark-theme' ao body se não tiver, e remove se já tiver.
        // É isso que faz a troca de tema no CSS funcionar!
        document.body.classList.toggle('dark-theme');
    });

});
