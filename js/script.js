document.addEventListener('DOMContentLoaded', function () {

    // --- LÓGICA PARA VALIDAÇÃO DO FORMULÁRIO DE CONTATO ---
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        if (nome === '' || email === '' || mensagem === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um endereço de e-mail válido.');
            return;
        }

        alert('Mensagem enviada com sucesso!');
        contactForm.reset();
    });

    // --- LÓGICA PARA ALTERNAR TEMA CLARO/ESCURO ---
    const themeCheckbox = document.getElementById('theme-checkbox');

    themeCheckbox.addEventListener('change', function () {
        document.body.classList.toggle('dark-theme');
    });
});