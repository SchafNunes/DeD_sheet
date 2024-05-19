import Classes from "./Classes";
import Class_Features from "./Class_Features";

const classes = [
    { name: 'Bárbaro', description: 'Os bárbaros são guerreiros ferozes de uma tribo, impulsionados pela fúria e pela força bruta em combate.' },
    { name: 'Bardo', description: 'Os bardos são artistas e mestres de magia, inspirando seus aliados e confundindo seus inimigos com suas canções e histórias.' },
    { name: 'Clérigo', description: 'Os clérigos são servos dos deuses, usando magia divina para curar seus aliados e punir seus inimigos.' },
    { name: 'Druida', description: 'Os druidas são guardiões da natureza, capazes de se transformar em animais e lançar magias baseadas na natureza.' },
    { name: 'Guerreiro', description: 'Os guerreiros são mestres das armas e do combate, capazes de se especializar em diversos estilos de luta.' },
    { name: 'Ladino', description: 'Os ladinos são mestres da furtividade, habilidosos em ataques surpresa e em evitar perigos.' },
    { name: 'Mago', description: 'Os magos são estudiosos das artes arcanas, lançando poderosas magias através de seus conhecimentos acumulados.' },
    { name: 'Monge', description: 'Os monges são guerreiros espirituais que canalizam a energia do ki para realizar feitos extraordinários em combate.' },
    { name: 'Paladino', description: 'Os paladinos são guerreiros sagrados que juram votos para proteger o bem e destruir o mal com a ajuda de poderes divinos.' },
    { name: 'Patrulheiro', description: 'Os patrulheiros são caçadores e rastreadores, especialistas em sobreviver e combater em ambientes selvagens.' },
    { name: 'Feiticeiro', description: 'Os feiticeiros possuem uma magia inata, derivada de uma linhagem mágica ou de um evento misterioso em suas vidas.' },
    { name: 'Bruxo', description: 'Os bruxos obtêm seus poderes através de pactos com seres extraplanares, ganhando habilidades únicas e misteriosas.' }
];

const class_features = [
    // Características do Bárbaro
    {
        name: 'Fúria', 
        description: 'No 1º nível, você pode entrar em fúria como uma ação bônus. Enquanto em fúria, você causa mais dano com ataques corpo a corpo.', 
        class_id: 1, 
        level: 1
    },
    {
        name: 'Defesa sem Armadura', 
        description: 'Quando você não estiver vestindo armadura, sua CA será 10 + seu modificador de Destreza + seu modificador de Constituição.', 
        class_id: 1, 
        level: 1
    },
    {
        name: 'Ataque Imprudente', 
        description: 'A partir do 2º nível, você pode atacar imprudentemente, concedendo vantagem aos seus ataques corpo a corpo, mas ataques contra você também terão vantagem até o próximo turno.', 
        class_id: 1, 
        level: 2
    },
    {
        name: 'Sentir Perigo', 
        description: 'No 2º nível, você ganha vantagem em testes de resistência de Destreza contra efeitos que você possa ver, como armadilhas e magias.', 
        class_id: 1, 
        level: 2
    },

    // Características do Bardo
    {
        name: 'Inspiração de Bardo', 
        description: 'Você pode inspirar os outros através de palavras ou música. Usar uma inspiração de bardo consome uma de suas utilizações. Um aliado inspirado pode adicionar o dado de inspiração a uma jogada de ataque, teste de habilidade ou teste de resistência.', 
        class_id: 2, 
        level: 1
    },
    {
        name: 'Canção de Descanso', 
        description: 'Começando no 2º nível, você pode usar música para ajudar a revitalizar seus aliados durante um descanso curto. Se você ou quaisquer criaturas amigáveis que possam ouvir sua performance recuperarem pontos de vida ao final do descanso curto, cada uma dessas criaturas recupera pontos de vida adicionais.', 
        class_id: 2, 
        level: 2
    },
    {
        name: 'Mão Amiga', 
        description: 'No 2º nível, sua capacidade de inspirar os outros é melhorada. Quando uma criatura usar um dado de inspiração de bardo de você para adicionar à rolagem de um ataque, teste de habilidade ou teste de resistência, essa criatura pode rolar o dado de inspiração duas vezes e escolher o resultado mais alto.', 
        class_id: 2, 
        level: 2
    },
    {
        name: 'Escola de Magia', 
        description: 'No 3º nível, você escolhe uma escola de magia que representa sua prática mágica aprimorada. Sua escolha concede a você características no 3º nível e novamente no 6º e 14º níveis.', 
        class_id: 2, 
        level: 3
    }
];




async function seedDatabase() {
    try {
        await Classes.bulkCreate(classes);
        await Class_Features.bulkCreate(class_features);
        console.log('Dados inseridos com sucesso.');
    } catch (error) {
        console.log('Erro ao inserir dados: ', error);
    }
};

export default seedDatabase;
