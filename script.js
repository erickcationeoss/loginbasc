document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');
    const loginScreen = document.getElementById('login-screen');
    const contentScreen = document.getElementById('content');
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
            loginScreen.classList.add('hidden');
            contentScreen.classList.remove('hidden');
            
            // Mostrar alerta de boas-vindas
            alert(`Bem-vindo, ${username}! Acesso concedido ao sistema.`);
        } else {
            // Login falhou
            errorMessage.textContent = 'Usuário ou senha incorretos!';
            errorMessage.style.display = 'block';
            
            // Efeito de erro
            loginForm.classList.add('error-animation');
            setTimeout(() => {
                loginForm.classList.remove('error-animation');
            }, 1000);
        }
    });
    
    // Função de logout
    logoutBtn.addEventListener('click', function() {
        contentScreen.classList.add('hidden');
        loginScreen.classList.remove('hidden');
        loginForm.reset();
        errorMessage.style.display = 'none';
        
        // Mostrar alerta de logout
        alert('Logout realizado com sucesso!');
    });
    
    // Adicionar estilo de animação de erro
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
            20%, 40%, 60%, 80% { transform: translateX(10px); }
        }
        
        .error-animation {
            animation: shake 0.5s;
        }
    `;
    document.head.appendChild(style);
});