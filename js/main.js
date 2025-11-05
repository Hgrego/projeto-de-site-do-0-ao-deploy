// Importando o array de músicas
import musicas from './musicas.js';

// Função que cria o HTML para uma música
function criarCardMusica(musica) {
    return `
        <div class="musica-card">
            <div class="img-container">
                <img src="${musica.capaUrl}" alt="${musica.titulo}">
                <div class="play-button">
                    <i class="fas fa-play"></i>
                </div>
            </div>
            <h3>${musica.titulo}</h3>
            <p>${musica.artista}</p>
        </div>
    `;
}

// Função principal que carrega as músicas na página
function carregarMusicas() {
    console.log('Carregando músicas...'); // Debug
    const listaDeMusicas = document.getElementById('lista-de-musicas');
    
    if (listaDeMusicas) {
        console.log('Lista de músicas encontrada'); // Debug
        console.log('Músicas disponíveis:', musicas); // Debug
        
        // Limpa a lista
        listaDeMusicas.innerHTML = '';
        
        // Adiciona cada música
        musicas.forEach(musica => {
            listaDeMusicas.innerHTML += criarCardMusica(musica);
        });

        console.log('Músicas carregadas com sucesso'); // Debug
    } else {
        console.error('Elemento #lista-de-musicas não encontrado!');
    }
}

// Carrega as músicas quando a página estiver pronta
document.addEventListener('DOMContentLoaded', () => {
    console.log('Página carregada, iniciando...'); // Debug
    carregarMusicas();
});
