import Classes from "./Classes";

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
 
async function seedDatabase() {
    try {
        await Classes.bulkCreate(classes);
        console.log('Dados inseridos com sucesso.');
    } catch (error) {
        console.log('Erro ao inserir dados: ', error);
    }
};

export default seedDatabase;
