const words = [
    { word: "abacaxi", clue: "Fruta tropical" },
    { word: "elefante", clue: "Animal de grande porte com tromba longa" },
    { word: "computador", clue: "Dispositivo eletrônico" },
    { word: "girafa", clue: "Animal alto, com pescoço longo" },
    { word: "chocolate", clue: "Doce feito de cacau" },
    { word: "piano", clue: "Instrumento musical com teclas" },
    { word: "tigre", clue: "Felino selvagem" },
    { word: "esmeralda", clue: "Tipo de pedra preciosa" },
    { word: "navio", clue: "Embarcação no mar" },
    { word: "telefone", clue: "Dispositivo de comunicação" },
    { word: "floresta", clue: "Área com muitas árvores" },
    { word: "quadrado", clue: "Figura geométrica de quatro lados" },
    { word: "foguete", clue: "Veículo espacial" },
    { word: "sorvete", clue: "Doce gelado" },
    { word: "bicicleta", clue: "Veículo de duas rodas" },
    { word: "avião", clue: "Meio de transporte aéreo" },
    { word: "macaco", clue: "Primate arbóreo" },
    { word: "raios", clue: "Descargas elétricas na atmosfera" },
    { word: "montanha", clue: "Elevação natural da terra" },
    { word: "vela", clue: "Objeto para iluminação" },
    { word: "carro", clue: "Veículo automotor" },
    { word: "praia", clue: "Faixa de areia junto ao mar" },
    { word: "internet", clue: "Rede mundial de computadores" },
    { word: "futebol", clue: "Esporte com bola" },
    { word: "guitarra", clue: "Instrumento musical de cordas" },
    { word: "barco", clue: "Pequena embarcação" },
    { word: "Wi-Fi", clue: "Tecnologia sem fio para comunicação" },
    { word: "calendário", clue: "Sistema de contagem de dias" },
    { word: "cachorro", clue: "Melhor amigo do homem" },
    { word: "pinguim", clue: "Ave que não voa e vive no gelo" },
    { word: "estrela", clue: "Corpo celeste que brilha" },
    { word: "planeta", clue: "Corpo celeste que orbita uma estrela" },
    { word: "árvore", clue: "Planta de grande porte" },
    { word: "flor", clue: "Parte colorida de uma planta" },
    { word: "bolsa", clue: "Acessório usado para carregar objetos" },
    { word: "martelo", clue: "Ferramenta para bater pregos" },
    { word: "escada", clue: "Equipamento para subir e descer" },
    { word: "caneta", clue: "Instrumento para escrever" },
    { word: "papel", clue: "Material utilizado para escrita" },
    { word: "livro", clue: "Conjunto de folhas encadernadas" },
    { word: "revista", clue: "Publicação periódica" },
    { word: "cadeira", clue: "Móvel para sentar" },
    { word: "mesa", clue: "Móvel para apoio" },
    { word: "faca", clue: "Utensílio cortante" },
    { word: "garfo", clue: "Utensílio para comer" },
    { word: "colher", clue: "Utensílio para servir alimentos" },
    { word: "janela", clue: "Abertura em paredes para luz e ar" },
    { word: "porta", clue: "Abertura usada para entrada e saída" },
    { word: "telhado", clue: "Parte superior de uma casa" },
    { word: "muro", clue: "Estrutura de proteção ou divisão" },
    { word: "prato", clue: "Recipiente para servir comida" },
    { word: "xadrez", clue: "Jogo de tabuleiro estratégico" },
    { word: "bola de futebol", clue: "Objeto esférico usado no futebol" },
    { word: "bicicleta", clue: "Veículo de duas rodas" },
    { word: "oceano", clue: "Grande massa de água salgada" },
    { word: "golfinho", clue: "Mamífero marinho inteligente" },
    { word: "mariposa", clue: "Inseto noturno com asas" },
    { word: "cavalo", clue: "Animal usado para montaria" },
    { word: "tomate", clue: "Fruto vermelho usado em saladas" },
    { word: "pimenta", clue: "Fruto picante usado como tempero" },
    { word: "pipoca", clue: "Milho estourado" },
    { word: "panela", clue: "Utensílio de cozinha para cozinhar" },
    { word: "espelho", clue: "Superfície reflexiva" },
    { word: "lagartixa", clue: "Réptil pequeno e ágil" },
    { word: "tartaruga", clue: "Réptil com casco" },
    { word: "canguru", clue: "Animal que salta e tem bolsa" },
    { word: "boomerang", clue: "Objeto que volta quando lançado" },
    { word: "mochila", clue: "Bolsa usada nas costas" },
    { word: "quadro branco", clue: "Superfície usada para escrever" },
    { word: "sapato", clue: "Calçado para os pés" },
    { word: "capacete", clue: "Proteção para a cabeça" },
    { word: "camiseta", clue: "Peça de roupa casual" },
    { word: "carteira", clue: "Objeto para guardar dinheiro e cartões" },
    { word: "coelho", clue: "Animal pequeno com orelhas longas" },
    { word: "espada", clue: "Arma branca com lâmina" },
    { word: "fantasma", clue: "Espírito ou aparição" },
    { word: "ferradura", clue: "Proteção para casco de cavalo" },
    { word: "gato", clue: "Animal doméstico felino" },
    { word: "helicóptero", clue: "Aeronave de rotor vertical" },
    { word: "ilha", clue: "Porção de terra cercada de água" },
    { word: "jacaré", clue: "Réptil semelhante ao crocodilo" },
    { word: "lagoa", clue: "Corpo de água menor que um lago" },
    { word: "limonada", clue: "Bebida feita de limão" },
    { word: "lupa", clue: "Instrumento para ampliar objetos" },
    { word: "medalha", clue: "Prêmio de metal" },
    { word: "pirulito", clue: "Doce no palito" },
    { word: "morango", clue: "Fruto vermelho e suculento" },
    { word: "pavão", clue: "Ave com cauda colorida" },
    { word: "sino de igreja", clue: "Instrumento que faz som metálico" },
    { word: "trombone", clue: "Instrumento musical de sopro" },
    { word: "ultrassom", clue: "Exame de imagem por som" },
    { word: "vulcão", clue: "Montanha que expele lava" },
    { word: "zebra", clue: "Animal listrado de branco e preto" },
    { word: "baleia azul", clue: "Maior mamífero marinho" },
    { word: "zoológico", clue: "Local onde animais são mantidos" },
    { word: "abajur de mesa", clue: "Luminária de mesa" },
    { word: "biscoito recheado", clue: "Doce ou salgado, pequeno e crocante" },
    { word: "dicionário", clue: "Livro que define palavras" },
    { word: "eletricidade", clue: "Energia que alimenta aparelhos" },
    { word: "filtro solar", clue: "Protege a pele do sol" },
    { word: "geladeira", clue: "Eletrodoméstico que conserva alimentos" },
    { word: "harmonia musical", clue: "Acordo agradável de sons" },
    { word: "imagem digital", clue: "Representação visual de algo" },
];

export default function getWord(){
    const index = Math.floor(Math.random() * words.length);
    return words[index];
}