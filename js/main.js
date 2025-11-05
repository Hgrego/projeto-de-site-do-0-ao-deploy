// Aguarda o DOM estar completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Adiciona comportamento suave ao scroll dos links de navegação
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
