const musicas = [
    // MPB Clássica
    {
        titulo: "Construção",
        artista: "Chico Buarque",
        capaUrl: "https://via.placeholder.com/300x300/1DB954/FFFFFF.png?text=Construção"
    },
    // Pop Contemporâneo
    {
        titulo: "Envolver",
        artista: "Anitta",
        capaUrl: "https://via.placeholder.com/300x300/1DB954/FFFFFF.png?text=Envolver"
    },
    {
        titulo: "Modo Turbo",
        artista: "Luísa Sonza, Pabllo Vittar, Anitta",
        capaUrl: "https://via.placeholder.com/300x300/1DB954/FFFFFF.png?text=Modo+Turbo"
    },
    // Trap
    {
        titulo: "Ela Me Falou Que Quer",
        artista: "MC Kevin o Chris",
        capaUrl: "https://via.placeholder.com/300x300/1DB954/FFFFFF.png?text=Ela+Me+Falou"
    },
    {
        titulo: "Tipo Gin",
        artista: "Kevin O Chris",
        capaUrl: "https://via.placeholder.com/300x300/1DB954/FFFFFF.png?text=Tipo+Gin"
    },
    // Funk
    {
        titulo: "Baile de Favela",
        artista: "MC João",
        capaUrl: "https://via.placeholder.com/300x300/1DB954/FFFFFF.png?text=Baile+de+Favela"
    },
    {
        titulo: "Vai Malandra",
        artista: "Anitta, Mc Zaac, Maejor ft. Tropkillaz & DJ Yuri Martins",
        capaUrl: "https://via.placeholder.com/300x300/1DB954/FFFFFF.png?text=Vai+Malandra"
    },
    {
        titulo: "Aquarela",
        artista: "Toquinho",
        capaUrl: "https://via.placeholder.com/300x300/1DB954/FFFFFF.png?text=Aquarela"
    },
    // Música Popular
    {
        titulo: "Taj Mahal",
        artista: "Jorge Ben Jor",
        capaUrl: "https://via.placeholder.com/300x300/1DB954/FFFFFF.png?text=Taj+Mahal"
    },
    {
        titulo: "Tempo Perdido",
        artista: "Legião Urbana",
        capaUrl: "https://via.placeholder.com/300x300/1DB954/FFFFFF.png?text=Tempo+Perdido"
    },
    // Samba
    {
        titulo: "O Mundo É um Moinho",
        artista: "Cartola",
        capaUrl: "https://via.placeholder.com/300x300/1DB954/FFFFFF.png?text=Cartola"
    },
    {
        titulo: "Malandro é Malandro",
        artista: "Bezerra da Silva",
        capaUrl: "https://via.placeholder.com/300x300/1DB954/FFFFFF.png?text=Bezerra"
    },
    // Rock Nacional
    {
        titulo: "Faroeste Caboclo",
        artista: "Legião Urbana",
        capaUrl: "https://via.placeholder.com/300x300/1DB954/FFFFFF.png?text=Faroeste"
    },
    {
        titulo: "Ainda é Cedo",
        artista: "Legião Urbana",
        capaUrl: "https://via.placeholder.com/300x300/1DB954/FFFFFF.png?text=Ainda+é+Cedo"
    },
    // Pop Nacional
    {
        titulo: "Anna Júlia",
        artista: "Los Hermanos",
        capaUrl: "https://via.placeholder.com/300x300/1DB954/FFFFFF.png?text=Anna+Júlia"
    },
    {
        titulo: "Céu Azul",
        artista: "Charlie Brown Jr",
        capaUrl: "https://via.placeholder.com/300x300/1DB954/FFFFFF.png?text=Céu+Azul"
    },
    // Sertanejo
    {
        titulo: "Evidências",
        artista: "Chitãozinho & Xororó",
        capaUrl: "https://via.placeholder.com/300x300/1DB954/FFFFFF.png?text=Evidências"
    },
    {
        titulo: "Boate Azul",
        artista: "Bruno & Marrone",
        capaUrl: "https://via.placeholder.com/300x300/1DB954/FFFFFF.png?text=Boate+Azul"
    },
    // Axé
    {
        titulo: "Eva",
        artista: "Banda Eva",
        capaUrl: "https://via.placeholder.com/300x300/1DB954/FFFFFF.png?text=Eva"
    },
    {
        titulo: "Requebra",
        artista: "Olodum",
        capaUrl: "https://via.placeholder.com/300x300/1DB954/FFFFFF.png?text=Requebra"
    },
    // Pop Rock
    {
        titulo: "Você Sempre Será",
        artista: "Marjorie Estiano",
        capaUrl: "https://via.placeholder.com/300x300/1DB954/FFFFFF.png?text=Você+Sempre+Será"
    },
    {
        titulo: "Dia Especial",
        artista: "Cidadão Quem",
        capaUrl: "https://via.placeholder.com/300x300/1DB954/FFFFFF.png?text=Dia+Especial"
    },
    // Rap Nacional
    {
        titulo: "Diário de um Detento",
        artista: "Racionais MCs",
        capaUrl: "https://via.placeholder.com/300x300/1DB954/FFFFFF.png?text=Diário"
    },
    {
        titulo: "A Vida é Desafio",
        artista: "Racionais MCs",
        capaUrl: "https://via.placeholder.com/300x300/1DB954/FFFFFF.png?text=Desafio"
    },
    // Forró
    {
        titulo: "Feira de Mangaio",
        artista: "Clara Nunes",
        capaUrl: "https://via.placeholder.com/300x300/1DB954/FFFFFF.png?text=Feira"
    },
    {
        titulo: "Morena Tropicana",
        artista: "Alceu Valença",
        capaUrl: "https://via.placeholder.com/300x300/1DB954/FFFFFF.png?text=Morena"
    },
    // MPB Contemporânea
    {
        titulo: "Velha Infância",
        artista: "Tribalistas",
        capaUrl: "https://via.placeholder.com/300x300/1DB954/FFFFFF.png?text=Velha+Infância"
    },
    {
        titulo: "Sinais de Fogo",
        artista: "Pitty",
        capaUrl: "https://via.placeholder.com/300x300/1DB954/FFFFFF.png?text=Sinais+de+Fogo"
    },
    // Reggae Nacional
    {
        titulo: "Não Deixe o Mar Te Engolir",
        artista: "Charlie Brown Jr",
        capaUrl: "https://via.placeholder.com/300x300/1DB954/FFFFFF.png?text=Mar"
    },
    {
        titulo: "Natiruts Reggae Power",
        artista: "Natiruts",
        capaUrl: "https://via.placeholder.com/300x300/1DB954/FFFFFF.png?text=Natiruts"
    }
];

export default musicas;
