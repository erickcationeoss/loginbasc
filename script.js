document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');
    const welcomePage = document.getElementById('welcome-page');
    const loginContainer = document.querySelector('.login-container');
    const userNameSpan = document.getElementById('user-name');
    const logoutBtn = document.getElementById('logout-btn');
    
    // Credenciais válidas
    const validUsername = 'erickcationi';
    const validPassword = '03112008';
    
    // Função de login
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (username === validUsername && password === validPassword) {
            // Login bem-sucedido
            userNameSpan.textContent = username;
            loginContainer.classList.add('hidden');
            welcomePage.classList.remove('hidden');
            errorMessage.textContent = '';
        } else {
            // Login falhou
            errorMessage.textContent = 'Usuário ou senha incorretos!';
        }
    });
    
    // Função de logout
    logoutBtn.addEventListener('click', function() {
        welcomePage.classList.add('hidden');
        loginContainer.classList.remove('hidden');
        loginForm.reset();
    });
});