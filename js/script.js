// Aguarda o conteúdo da página carregar completamente antes de executar o script
document.addEventListener('DOMContentLoaded', function() {

    // --- LÓGICA PARA VALIDAÇÃO DO FORMULÁRIO DE CONTATO ---

    // Pega a referência do formulário no HTML pelo ID
    const contactForm = document.getElementById('contact-form');

    // Adiciona um "escutador" para o evento de 'submit' (envio) do formulário
    contactForm.addEventListener('submit', function(event) {
        // Previne o comportamento padrão do formulário, que é recarregar a página
        event.preventDefault();

        // Pega os valores dos campos do formulário, removendo espaços em branco
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        // 1. Validação: Verifica se algum campo está vazio
        if (nome === '' || email === '' || mensagem === '') {
            alert('Por favor, preencha todos os campos.');
            return; // Para a execução se houver erro
        }

        // 2. Validação: Verifica se o formato do e-mail é válido
        // Utiliza uma expressão regular simples para checar o formato
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um endereço de e-mail válido.');
            return; // Para a execução se houver erro
        }

        // Se todas as validações passarem...
        // 3. Simulação de envio: Exibe uma mensagem de sucesso
        alert('Mensagem enviada com sucesso!');

        // 4. Limpa os campos do formulário após o "envio"
        contactForm.reset();
    });


    // --- LÓGICA PARA ALTERNAR TEMA CLARO/ESCURO ---

    // Pega a referência do botão de alternar tema
    const themeToggle = document.getElementById('theme-toggle');

    // Adiciona um "escutador" para o evento de clique no botão
    themeToggle.addEventListener('click', function() {
        // Adiciona ou remove a classe 'dark-theme' do corpo (body) do documento.
        // O CSS se encarrega de mudar as cores com base na presença dessa classe.
        document.body.classList.toggle('dark-theme');
    });

});