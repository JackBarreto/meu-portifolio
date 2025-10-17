// Aguarda o conteúdo da página carregar completamente antes de executar o script
document.addEventListener('DOMContentLoaded', function () {

    // --- LÓGICA PARA VALIDAÇÃO DO FORMULÁRIO DE CONTATO ---

    // Pega a referência do formulário no HTML pelo ID
    const contactForm = document.getElementById('contact-form');

    // Adiciona um "escutador" para o evento de 'submit' (envio) do formulário
    contactForm.addEventListener('submit', function (event) {
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

    //Pega a referência do checkbox no HTML usando seu ID único.
    const themeCheckbox = document.getElementById('theme-checkbox');

    //Adiciona um "escutador de eventos" que fica monitorando o checkbox.
    themeCheckbox.addEventListener('change', function () {
        // Esta função anônima é executada TODA VEZ que o estado do checkbox muda (marcado/desmarcado).
        
        // Acessa a lista de classes CSS da tag <body> e usa a função .toggle() para adicionar a classe 'dark-theme' se ela não existir, ou para remover a classe 'dark-theme' se ela já existir.
        document.body.classList.toggle('dark-theme');
    });

});