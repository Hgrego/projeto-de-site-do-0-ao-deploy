// Mock Database (Banco de Dados Falso)
const mockDatabase = {
    playlists: {
        trending: [
            {
                id: 'top50br',
                title: 'Top 50 - Brasil',
                description: 'As mais tocadas do momento',
                imageUrl: 'https://via.placeholder.com/300x300/1DB954/FFFFFF.png?text=%F0%9F%8E%B5+Top+50%0ABrasil',
                songs: [
                    { title: 'Funk do Momento', artist: 'MC Popular' },
                    { title: 'Sertanejo Hit', artist: 'Dupla Famosa' },
                    { title: 'Pop Nacional', artist: 'Cantora Brasileira' }
                ]
            },
            {
                id: 'chicobuarque',
                title: 'Chico Buarque',
                description: 'Melhores do Chico',
                imageUrl: 'https://via.placeholder.com/300x300/1DB954/FFFFFF.png?text=%F0%9F%8E%A8+Chico%0ABuarque',
                songs: [
                    { title: 'Construção', artist: 'Chico Buarque' },
                    { title: 'Apesar de Você', artist: 'Chico Buarque' },
                    { title: 'Vai Passar', artist: 'Chico Buarque' }
                ]
            },
            {
                id: 'caetano',
                title: 'Caetano Veloso',
                description: 'Clássicos Eternos',
                imageUrl: 'https://via.placeholder.com/300x300/1DB954/FFFFFF.png?text=%F0%9F%8E%B8+Caetano%0AVeloso',
                songs: [
                    { title: 'Alegria, Alegria', artist: 'Caetano Veloso' },
                    { title: 'Sampa', artist: 'Caetano Veloso' },
                    { title: 'Sozinho', artist: 'Caetano Veloso' }
                ]
            }
        ],
        dailyMix: [
            {
                id: 'dailymix1',
                title: 'Daily Mix 1',
                description: 'Pop e Rock nacional',
                imageUrl: 'https://i.scdn.co/image/ab67706f000000028b37b39f902400c3b92169fa',
                songs: [
                    { title: 'Tempo Perdido', artist: 'Legião Urbana' },
                    { title: 'Pais e Filhos', artist: 'Legião Urbana' },
                    { title: 'Eduardo e Mônica', artist: 'Legião Urbana' }
                ]
            },
            {
                id: 'dailymix2',
                title: 'Daily Mix 2',
                description: 'Hip Hop e R&B',
                imageUrl: 'https://i.scdn.co/image/ab67706f000000025f2635e031078672e7b384a5',
                songs: [
                    { title: 'Hip Hop Brasil', artist: 'Rapper Nacional' },
                    { title: 'Flow BR', artist: 'MC Conhecido' },
                    { title: 'Rap da Hora', artist: 'Artista Underground' }
                ]
            }
        ],
        genres: [
            {
                id: 'mpb',
                title: 'MPB Hoje',
                description: 'O novo som da MPB',
                imageUrl: 'https://i.scdn.co/image/ab67706f000000026019987df5656e2f01912fd8',
                songs: [
                    { title: 'Nova MPB 1', artist: 'Artista Contemporâneo' },
                    { title: 'Nova MPB 2', artist: 'Cantora Moderna' },
                    { title: 'Nova MPB 3', artist: 'Banda Atual' }
                ]
            },
            {
                id: 'rocknacional',
                title: 'Rock Nacional',
                description: 'Clássicos do rock brasileiro',
                imageUrl: 'https://i.scdn.co/image/ab67706f000000025466e7ae55243cebe82e9609',
                songs: [
                    { title: 'Rock BR 1', artist: 'Banda Clássica' },
                    { title: 'Rock BR 2', artist: 'Grupo Famoso' },
                    { title: 'Rock BR 3', artist: 'Roqueiros BR' }
                ]
            }
        ]
    },
    user: {
        name: 'Usuário Demo',
        email: 'usuario@demo.com',
        favorites: ['top50br', 'mpb', 'rocknacional'],
        recentlyPlayed: [
            { title: 'Construção', artist: 'Chico Buarque', playlistId: 'chicobuarque' },
            { title: 'Tempo Perdido', artist: 'Legião Urbana', playlistId: 'dailymix1' },
            { title: 'Alegria, Alegria', artist: 'Caetano Veloso', playlistId: 'caetano' }
        ]
    }
};

// Funções para interagir com o "banco de dados"
const database = {
    // Obter todas as playlists de uma categoria
    getPlaylists: (category) => {
        return mockDatabase.playlists[category] || [];
    },

    // Obter uma playlist específica por ID
    getPlaylistById: (playlistId) => {
        for (const category in mockDatabase.playlists) {
            const playlist = mockDatabase.playlists[category].find(p => p.id === playlistId);
            if (playlist) return playlist;
        }
        return null;
    },

    // Obter informações do usuário
    getUserInfo: () => {
        return mockDatabase.user;
    },

    // Obter playlists favoritas do usuário
    getUserFavorites: () => {
        return mockDatabase.user.favorites.map(id => database.getPlaylistById(id));
    },

    // Obter músicas recentemente tocadas
    getRecentlyPlayed: () => {
        return mockDatabase.user.recentlyPlayed;
    }
};

// Exportar o objeto database para uso em outros arquivos
export default database;
