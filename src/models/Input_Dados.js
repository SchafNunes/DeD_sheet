import Armors from "./Armors";
import Class_Features from "./Class_Features";
import Classes from "./Classes";
import Equipaments from "./Equipaments";
import Races from "./Races";
import User from "./User";
import Weapons from "./Weapons";

const classes = [
  {
    name: "Bárbaro",
    description:
      "Os bárbaros são guerreiros ferozes de uma tribo, impulsionados pela fúria e pela força bruta em combate.",
  },
  {
    name: "Bardo",
    description:
      "Os bardos são artistas e mestres de magia, inspirando seus aliados e confundindo seus inimigos com suas canções e histórias.",
  },
  {
    name: "Clérigo",
    description:
      "Os clérigos são servos dos deuses, usando magia divina para curar seus aliados e punir seus inimigos.",
  },
  {
    name: "Druida",
    description:
      "Os druidas são guardiões da natureza, capazes de se transformar em animais e lançar magias baseadas na natureza.",
  },
  {
    name: "Guerreiro",
    description:
      "Os guerreiros são mestres das armas e do combate, capazes de se especializar em diversos estilos de luta.",
  },
  {
    name: "Ladino",
    description:
      "Os ladinos são mestres da furtividade, habilidosos em ataques surpresa e em evitar perigos.",
  },
  {
    name: "Mago",
    description:
      "Os magos são estudiosos das artes arcanas, lançando poderosas magias através de seus conhecimentos acumulados.",
  },
  {
    name: "Monge",
    description:
      "Os monges são guerreiros espirituais que canalizam a energia do ki para realizar feitos extraordinários em combate.",
  },
  {
    name: "Paladino",
    description:
      "Os paladinos são guerreiros sagrados que juram votos para proteger o bem e destruir o mal com a ajuda de poderes divinos.",
  },
  {
    name: "Patrulheiro",
    description:
      "Os patrulheiros são caçadores e rastreadores, especialistas em sobreviver e combater em ambientes selvagens.",
  },
  {
    name: "Feiticeiro",
    description:
      "Os feiticeiros possuem uma magia inata, derivada de uma linhagem mágica ou de um evento misterioso em suas vidas.",
  },
  {
    name: "Bruxo",
    description:
      "Os bruxos obtêm seus poderes através de pactos com seres extraplanares, ganhando habilidades únicas e misteriosas.",
  },
];

const class_features = [
  // Características do Bárbaro
  {
    name: "Fúria",
    description:
      "No 1º nível, você pode entrar em fúria como uma ação bônus. Enquanto em fúria, você causa mais dano com ataques corpo a corpo.",
    class_id: 1,
    level: 1,
  },
  {
    name: "Defesa sem Armadura",
    description:
      "Quando você não estiver vestindo armadura, sua CA será 10 + seu modificador de Destreza + seu modificador de Constituição.",
    class_id: 1,
    level: 1,
  },
  {
    name: "Ataque Imprudente",
    description:
      "A partir do 2º nível, você pode atacar imprudentemente, concedendo vantagem aos seus ataques corpo a corpo, mas ataques contra você também terão vantagem até o próximo turno.",
    class_id: 1,
    level: 2,
  },
  {
    name: "Sentir Perigo",
    description:
      "No 2º nível, você ganha vantagem em testes de resistência de Destreza contra efeitos que você possa ver, como armadilhas e magias.",
    class_id: 1,
    level: 2,
  },

  // Características do Bardo
  {
    name: "Inspiração de Bardo",
    description:
      "Você pode inspirar os outros através de palavras ou música. Usar uma inspiração de bardo consome uma de suas utilizações. Um aliado inspirado pode adicionar o dado de inspiração a uma jogada de ataque, teste de habilidade ou teste de resistência.",
    class_id: 2,
    level: 1,
  },
  {
    name: "Canção de Descanso",
    description:
      "Começando no 2º nível, você pode usar música para ajudar a revitalizar seus aliados durante um descanso curto. Se você ou quaisquer criaturas amigáveis que possam ouvir sua performance recuperarem pontos de vida ao final do descanso curto, cada uma dessas criaturas recupera pontos de vida adicionais.",
    class_id: 2,
    level: 2,
  },
  {
    name: "Mão Amiga",
    description:
      "No 2º nível, sua capacidade de inspirar os outros é melhorada. Quando uma criatura usar um dado de inspiração de bardo de você para adicionar à rolagem de um ataque, teste de habilidade ou teste de resistência, essa criatura pode rolar o dado de inspiração duas vezes e escolher o resultado mais alto.",
    class_id: 2,
    level: 2,
  },
  {
    name: "Escola de Magia",
    description:
      "No 3º nível, você escolhe uma escola de magia que representa sua prática mágica aprimorada. Sua escolha concede a você características no 3º nível e novamente no 6º e 14º níveis.",
    class_id: 2,
    level: 3,
  },
];

const armors = [
  {
    name: "Armadura Leve",
    description:
      "Feitas a partir de materiais flexíveis e finos, armaduras leves favorecem aventureiros ágeis, uma vez que oferecem alguma proteção sem sacrificar sua mobilidade. Se você vestir uma armadura leve, ele adiciona seu modificador de Destreza ao número base de seu tipo de armadura para determinar sua Classe de Armadura.",
  },
  {
    name: "Acolchoada",
    description:
      "A armadura acolchoada consiste em camadas de panos acolchoados e batidos.",
    price: "5",
    weight: "4",
    armor_class: " 11 + modificador de Des",
    equipament_type: "Armadura Leve",
  },
  {
    name: "Couro",
    description:
      "O peitoral e as ombreiras da armadura de couro são feitos de couro que foi endurecido após ser fervido em óleo. O resto da armadura é feita de materiais mais macios e mais flexíveis.",
    price: "10",
    weight: "5",
    armor_class: " 11 + modificador de Des",
    equipament_type: "Armadura Leve",
  },
  {
    name: "Couro Batido",
    description:
      "Feita de couro resistente, mas flexível, a armadura de couro batido é reforçada com rebites ou cravos.",
    price: "45",
    weight: "6,5",
    armor_class: " 12 + modificador de Des",
    equipament_type: "Armadura Leve",
  },
  {
    name: "Armadura Média",
    description:
      "Armaduras médias oferecem mais proteção do que armaduras leves, mas também prejudicam mais o movimento. Se o personagem usar uma armadura média, ele adiciona seu modificador de Destreza, até um máximo de 2, ao número base de seu tipo de armadura para determinar a sua Classe de Armadura.",
  },
  {
    name: "Gibão de Peles",
    description:
      "Um gibão de peles é um armadura bruta consistindo de peles grossas. É comumente usada por tribos bárbaras, humanoides malignos e outros povos que não têm acesso às ferramentas e materiais necessários para criar uma armadura melhor.",
    price: "10",
    weight: "6",
    armor_class: " 12 + modificador de Des (máx. +2)",
    equipament_type: "Armadura Média",
  },
  {
    name: "Camisão de Malha",
    description:
      "Feito de anéis de metal intercalados, um camisão de cota de malha é usado entre as camadas de roupa. Essa armadura oferece proteção modesta para a parte superior do corpo de quem a usa e permite que o som dos anéis de metal, friccionados uns contra os outros, sejam amortecidos pelas camadas exteriores.",
    price: "30",
    weight: "10",
    armor_class: " 13 + modificador de Des (máx. +2)",
    equipament_type: " Armadura Média",
  },
  {
    name: "Brunea",
    description:
      "Essa armadura consiste em um casaco e calças (e talvez uma saia separada) de couro coberto com peças sobrepostas de metal, assim como as escamas de peixe. O conjunto inclui manoplas.",
    price: " 50",
    weight: " 22,5 ",
    armor_class: " 14 + modificador de Des (máx. +2)",
    equipament_type: " Armadura Média",
  },
  {
    name: "Peitoral",
    description:
      "A armadura peitoral é constituída por um peitoral de metal usado com couro flexível em seu interior. Embora ele deixe as pernas e braços do usuário relativamente desprotegidos, essa armadura fornece boa proteção para seus órgãos vitais, deixando quem a usa relativamente sem restrições.",
    price: "400",
    weight: "10",
    armor_class: " 14 + modificador de Des (máx. +2)",
    equipament_type: " Armadura Média",
  },
  {
    name: "Meia-Armadura",
    description:
      "Essa armadura é composta de placas de metal moldadas que cobrem a maior parte do corpo. Ela não inclui proteção para as pernas além de caneleiras fixadas com tiras de couro.",
    price: " 750",
    weight: " 20 ",
    armor_class: " 15 + modificador de Des (máx. +2)",
    equipament_type: " Armadura Média",
  },
  {
    name: "Armadura Pesada",
    description:
      "De todas as categorias de armaduras, as armaduras pesadas oferecem a melhor proteção. Essas armaduras cobrem todo o corpo e são projetadas para proteger quem as usa de uma grande variedade de ataques. Só guerreiros proficientes podem gerir o seu peso e volume. Armaduras pesadas não permitem que o usuário adicione seu modificador de Destreza na Classe de Armadura, mas também não o penaliza se seu modificador de Destreza for negativo.",
  },
  {
    name: "Cota de anéis",
    description:
      "Esta armadura é feita de couro com pesados anéis presos a ela. Os anéis ajudam a reforçar a armadura contra golpes de espadas e machados. A cota de anéis é inferior à cota de malha e geralmente é vestida apenas por aqueles que não podem pagar por uma armadura melhor.",
    price: "30",
    weight: " 20 ",
    armor_class: " 15",
    equipament_type: "Armadura Pesada",
  },
  {
    name: "Cota de malha",
    description:
      "Feita de anéis de metal entrelaçados, a cota de malha inclui uma camada de tecido acolchoado usada por baixo da malha de metal para evitar atrito e amortecer o impacto dos golpes. O conjunto inclui manoplas.",
    price: "75",
    weight: " 27,5",
    armor_class: " 16",
    strength: " For 13",
    equipament_type: " Armadura Pesada",
  },
  {
    name: "Cota de talas",
    description:
      "Essa armadura é feita de tiras verticais de metal, rebitadas a um suporte de couro, usadas sobre um preenchimento de pano. Cotas de malha flexíveis protegem as articulações.",
    price: " 200",
    weight: " 30",
    armor_class: "17",
    strength: " For 15",
    equipament_type: " Armadura Pesada",
  },
  {
    name: "Placas",
    description:
      "A armadura de placas consiste em placas de metal moldadas para cobrir todo o corpo. Inclui luvas, botas de couro pesadas, um capacete com viseira e espessas camadas de enchimento por baixo da armadura. Fivelas e tiras de couro distribuem o peso ao longo do corpo.",
    price: " 1500",
    weight: " 32,5",
    armor_class: " 18",
    strength: " For 15",
    equipament_type: " Armadura Pesada",
  },
  {
    name: "Escudos",
    description:
      "Os escudos são um equipamento vital para muitos aventureiros em Dungeons & Dragons, oferecendo proteção adicional em combate. Eles vêm em várias formas e tamanhos, cada um com suas próprias características e vantagens.",
  },
  {
    name: "Escudo",
    description:
      " Um escudo é feito de madeira ou metal e é preso ao antebraço. Ele é leve e fácil de manejar, e é usado para proteger o usuário de ataques. Um escudo normalmente concede um bônus de +2 na Classe de Armadura do usuário.",
    price: "10",
    weight: " 3",
    armor_class: " +2",
    equipament_type: " Escudos",
  },
];

const weapons = [
  {
    name: "Adaga",
    price: " 2",
    damage: " 1d4 perfurante",
    weight: " 0,5 kg",
    properties: "Acuidade, leve, arremesso (distância 6/18)",
  },
  {
    name: "Azagaia",
    price: "5 ",
    damage: "1d6 perfurante",
    weight: "1 kg",
    properties: "Arremesso (distância 9/36)",
  },
  {
    name: "Bordão",
    price: "2 ",
    damage: "1d6 concussão",
    weight: "2 kg",
    properties: "Versátil (1d8)",
  },
  {
    name: "Clava Grande",
    price: "2 ",
    damage: "1d8 concussão",
    weight: "5 kg",
    properties: "Pesada, duas mãos",
  },
  {
    name: "Foice Curta",
    price: "1",
    damage: "1d4 cortante",
    weight: "1 kg",
    properties: "Leve",
  },
  {
    name: "Lança",
    price: "1",
    damage: "1d6 perfurante",
    weight: "1,5 kg",
    properties: "Arremesso (distância 6/18), versátil (1d8)",
  },
  {
    name: "Maça",
    price: "5",
    damage: "1d6 concussão",
    weight: "2 kg",
    properties: "-",
  },
  {
    name: "Machadinha",
    price: "5",
    damage: "1d6 cortante",
    weight: "1 kg",
    properties: "Leve, arremesso (distância 6/18)",
  },
  {
    name: "Martelo Leve",
    price: "2",
    damage: "1d4 concussão",
    weight: "1 kg",
    properties: "Leve, arremesso (distância 6/18)",
  },
  {
    name: "Porrete",
    price: "1",
    damage: "1d4 concussão",
    weight: "1 kg",
    properties: "Leve",
  },
  {
    name: "Arco Curto",
    price: "25",
    damage: "1d6 perfurante",
    weight: "1 kg",
    properties: "Munição (distância 24/96), duas mãos",
  },
  {
    name: "Besta Leve",
    price: "25",
    damage: "1d8 perfurante",
    weight: "2,5 kg",
    properties: "Munição (distância 24/96), recarga, duas mãos",
  },
  {
    name: "Dardo",
    price: "5",
    damage: "1d4 perfurante",
    weight: "0,1 kg",
    properties: "Acuidade, arremesso (distância 6/18)",
  },
  {
    name: "Funda",
    price: "1",
    damage: "1d4 concussão",
    weight: "-",
    properties: "Munição (distância 9/36)",
  },
  {
    name: "Alabarda",
    price: "20",
    damage: "1d10 cortante",
    weight: "3 kg",
    properties: "Pesada, alcance, duas mãos",
  },
  {
    name: "Cimitarra",
    price: "25",
    damage: "1d6 cortante",
    weight: "1,5 kg",
    properties: "Acuidade, leve",
  },
  {
    name: "Chicote",
    price: "2",
    damage: "1d4 cortante",
    weight: "1,5 kg",
    properties: "Acuidade, alcance",
  },
  {
    name: "Espada Curta",
    price: "10",
    damage: "1d6 perfurante",
    weight: "1 kg",
    properties: "Acuidade, leve",
  },
  {
    name: "Espada Grande",
    price: "50",
    damage: "2d6 cortante",
    weight: "3 kg",
    properties: "Pesada, duas mãos",
  },
  {
    name: "Espada Longa",
    price: "15",
    damage: "1d8 cortante",
    weight: "1,5 kg",
    properties: "Versátil (1d10)",
  },
  {
    name: "Glaive",
    price: "20",
    damage: "1d10 cortante",
    weight: "3 kg",
    properties: "Pesada, alcance, duas mãos",
  },
  {
    name: "Lança de Montaria",
    price: "10",
    damage: "1d12 perfurante",
    weight: "3 kg",
    properties: "Alcance, especial",
  },
  {
    name: "Lança Longa",
    price: "5",
    damage: "1d10 perfurante",
    weight: "4 kg",
    properties: "Pesada, alcance, duas mãos",
  },
  {
    name: "Maça Estrela",
    price: "15",
    damage: "1d8 perfurante",
    weight: "2 kg",
    properties: "-",
  },
  {
    name: "Machado Grande",
    price: "30",
    damage: "1d12 cortante",
    weight: "3,5 kg",
    properties: "Pesada, duas mãos",
  },
  {
    name: "Machado de Batalha",
    price: "10",
    damage: "1d8 cortante",
    weight: "2 kg",
    properties: "Versátil (1d10)",
  },
  {
    name: "Malho",
    price: "10",
    damage: "2d6 concussão",
    weight: "5 kg",
    properties: "Pesada, duas mãos",
  },
  {
    name: "Mangual",
    price: "10",
    damage: "1d8 concussão",
    weight: "1 kg",
  },
  {
    name: "Martelo de Guerra",
    price: "15",
    damage: "1d8 concussão",
    weight: "1 kg",
    properties: "Versátil (1d10)",
  },
  {
    name: "Picareta de Guerra",
    price: "5",
    damage: "1d8 perfurante",
    weight: "1 kg",
    properties: "-",
  },
  {
    name: "Rapieira",
    price: "25",
    damage: "1d8 perfurante",
    weight: "1 kg",
    properties: "Acuidade",
  },
  {
    name: "Tridente",
    price: "5",
    damage: "1d6 perfurante",
    weight: "2 kg",
    properties: "Arremesso (distância 6/18), versátil (1d8)",
  },
  {
    name: "Arco Longo",
    price: "50",
    damage: "1d8 perfurante",
    weight: "1 kg",
    properties: "Munição (distância 45/180), pesada, duas mãos",
  },
  {
    name: "Besta de Mão",
    price: "75",
    damage: "1d6 perfurante",
    weight: "1,5 kg",
    properties: "Munição (distância 9/36), leve, recarga",
  },
  {
    name: "Besta Pesada",
    price: "50",
    damage: "1d10 perfurante",
    weight: "4,5 kg",
    properties: "Munição (distância 30/120), pesada, recarga, duas mãos",
  },
  {
    name: "Rede",
    price: "1 ",
    weight: "1,5 kg",
    properties: "Especial, arremesso (distância 1,5/4,5)",
  },
  {
    name: "Zarabatana",
    price: "10",
    damage: "1 perfurante",
    weight: "0,5 kg",
    properties: "Munição (distância 7,5/30), recarga",
  },
];

const races = [
  {
    name: "Anão",
    description:
      "Anões são conhecidos por sua resistência e habilidade em combate, além de sua habilidade em trabalhar com metais e pedras.",
  },
  {
    name: "Elfo",
    description:
      "Elfos são seres graciosos e misteriosos, conhecidos por sua longevidade e habilidade em magia.",
  },
  {
    name: "Halfling",
    description:
      "Os halflings são seres pequenos e ágeis, conhecidos por sua habilidade em furtividade e sua sorte.",
  },
  {
    name: "Humano",
    description:
      "Humanos são seres versáteis e ambiciosos, conhecidos por sua adaptabilidade e habilidade em diversas áreas.",
  },
  {
    name: "Meio-Elfo",
    description:
      "Meio-elfos são seres que combinam a graça e a longevidade dos elfos com a versatilidade e ambição dos humanos.",
  },
  {
    name: "Meio-Orc",
    description:
      "Meio-orcs são seres fortes e brutais, conhecidos por sua resistência e habilidade em combate.",
  },
  {
    name: "Tiefling",
    description:
      "Tieflings são seres com sangue infernal, conhecidos por sua aparência exótica e habilidade em magia.",
  },
];

const equipaments = [
  {
    "name": "Mochila",
    "description": "Uma mochila pode conter um pé cúbico ou 13,6 kg de equipamento.",
    "price": "2 po",
    "weight": "2,27 kg"
  },
  {
    "name": "Saco de Dormir",
    "description": "Você pode dormir neste saco, embora provavelmente fique com frio sem um cobertor.",
    "price": "1 po",
    "weight": "2,27 kg"
  },
  {
    "name": "Corda de cânhamo (15 metros)",
    "description": "A corda tem 2 pontos de vida e pode ser rompida com um teste de Força CD 17.",
    "price": "1 po",
    "weight": "4,54 kg"
  },
  {
    "name": "Tocha",
    "description": "Uma tocha queima por 1 hora, fornecendo luz brilhante em um raio de 6 metros e luz fraca por mais 6 metros.",
    "price": "1 pc",
    "weight": "0,45 kg"
  },
  {
    "name": "Rações (1 dia)",
    "description": "Rações consistem em alimentos secos adequados para aventuras prolongadas, como carne seca, frutas secas, bolachas e nozes.",
    "price": "5 pp",
    "weight": "0,91 kg"
  },
  {
    "name": "Cantil",
    "description": "Um cantil pode conter até 2 litros de líquido.",
    "price": "2 pp",
    "weight": "0,91 kg"
  },
  {
    "name": "Lanterna Coberta",
    "description": "Uma lanterna coberta emite luz brilhante em um raio de 9 metros e luz fraca por mais 9 metros. Quando a cobertura está fechada, ela emite luz fraca em um raio de 1,5 metros.",
    "price": "5 po",
    "weight": "0,91 kg"
  },
  {
    "name": "Caixa de Isqueiro",
    "description": "Este pequeno recipiente contém pederneira, aço de fogo e isqueiro (geralmente um pano seco embebido em óleo leve) usado para acender um fogo.",
    "price": "5 pp",
    "weight": "0,45 kg"
  },
  {
    "name": "Kit de Escalada",
    "description": "Um kit de escalada inclui pitões especiais, pontas de botas, luvas e um arnês. Você pode usar o kit como uma ação para se ancorar; quando você faz isso, não pode cair mais de 7,5 metros do ponto onde está ancorado.",
    "price": "25 po",
    "weight": "5,44 kg"
  },
  {
    "name": "Gancho de Escalada",
    "description": "Quando amarrado a uma corda, um gancho de escalada pode ajudar você a escalar uma superfície, proporcionando vantagem em testes de Força (Atletismo) feitos para escalar.",
    "price": "2 po",
    "weight": "1,81 kg"
  },
  {
    "name": "Barraca para 2 pessoas",
    "description": "Uma barraca feita para abrigar duas pessoas.",
    "price": "2 po",
    "weight": "9,07 kg"
  },
  {
    "name": "Pá",
    "description": "Uma ferramenta útil para cavar.",
    "price": "2 po",
    "weight": "2,27 kg"
  },
  {
    "name": "Espelho de Aço",
    "description": "Um pequeno espelho polido, útil para ver ao redor de cantos ou se arrumar.",
    "price": "5 po",
    "weight": "0,23 kg"
  },
  {
    "name": "Martelo",
    "description": "Uma ferramenta básica para martelar estacas ou pitões.",
    "price": "1 po",
    "weight": "1,36 kg"
  },
  {
    "name": "Lanterna Comum",
    "description": "Uma lanterna comum que queima óleo por 6 horas em uma radiação de 4,5 metros de luz brilhante e o mesmo de luz fraca.",
    "price": "5 pp",
    "weight": "0,45 kg"
  },
  {
    "name": "Frasco",
    "description": "Um pequeno recipiente de vidro, cerâmica ou metal, útil para armazenar líquidos, como poções.",
    "price": "2 pp",
    "weight": "0,45 kg"
  },
  {
    "name": "Óleo (frasco)",
    "description": "O óleo pode ser usado para alimentar lâmpadas. Como ação, você pode salpicar o óleo de um frasco em uma criatura.",
    "price": "1 pp",
    "weight": "0,45 kg"
  },
  {
    "name": "Pequena Caixa de Ferro",
    "description": "Uma pequena caixa de ferro robusta, ideal para guardar objetos de valor.",
    "price": "5 po",
    "weight": "0,45 kg"
  },
  {
    "name": "Arpéu",
    "description": "Uma vara longa com um gancho em uma ponta, usada para pegar ou mover objetos em chamas.",
    "price": "2 po",
    "weight": "1,81 kg"
  },
  {
    "name": "Lente de Aumento",
    "description": "Esta lente de vidro permite que o usuário veja pequenos detalhes mais claramente.",
    "price": "100 po",
    "weight": "0 kg"
  },
  {
    "name": "Sineta",
    "description": "Um pequeno sino de metal com uma alça, útil para alarmes ou chamar a atenção.",
    "price": "1 po",
    "weight": "0 kg"
  },
  {
    "name": "Pé de Cabra",
    "description": "Essa alavanca de metal é excelente para abrir portas, caixotes ou pranchas de madeira.",
    "price": "2 po",
    "weight": "2,27 kg"
  },
  {
    "name": "Roupa Comum",
    "description": "Conjunto de roupas simples e apropriadas para o clima comum.",
    "price": "5 pp",
    "weight": "1,36 kg"
  },
  {
    "name": "Roupa de Viajar",
    "description": "Conjunto de roupas resistentes feitas para viagens longas.",
    "price": "2 po",
    "weight": "1,81 kg"
  },
  {
    "name": "Lâmina de Afiar",
    "description": "Uma ferramenta pequena usada para afiar lâminas.",
    "price": "5 pp",
    "weight": "0,45 kg"
  },
  {
    "name": "Corda de seda (15 metros)",
    "description": "A corda de seda tem 2 pontos de vida e pode ser rompida com um teste de Força CD 17.",
    "price": "10 po",
    "weight": "2,27 kg"
  },
  {
    "name": "Cobertor",
    "description": "Um grande cobertor de lã que pode ajudar a manter-se aquecido.",
    "price": "5 pp",
    "weight": "1,36 kg"
  },
  {
    "name": "Lâmpada",
    "description": "Uma lâmpada que queima por 6 horas em uma radiação de 1,5 metros de luz brilhante e mais 1,5 metros de luz fraca.",
    "price": "5 pp",
    "weight": "0,45 kg"
  },
  {
    "name": "Panela de Ferro",
    "description": "Uma panela robusta, útil para cozinhar durante as viagens.",
    "price": "2 po",
    "weight": "4,54 kg"
  },
  {
    "name": "Espelho pequeno",
    "description": "Um espelho pequeno de vidro emoldurado em metal, útil para ver ao redor de cantos ou se arrumar.",
    "price": "5 po",
    "weight": "0,11 kg"
  },
  {
    "name": "Picareta de Mineração",
    "description": "Uma ferramenta usada para cavar rochas e terra.",
    "price": "2 po",
    "weight": "4,54 kg"
  },
  {
    "name": "Saco de Areia",
    "description": "Um pequeno saco preenchido com areia, usado como contrapeso ou em armadilhas.",
    "price": "1 pc",
    "weight": "11,34 kg"
  },
  {
    "name": "Cofre",
    "description": "Um pequeno cofre robusto para proteger objetos de valor.",
    "price": "50 po",
    "weight": "11,34 kg"
  },
  {
    "name": "Serra",
    "description": "Uma ferramenta para cortar madeira ou outros materiais.",
    "price": "2 po",
    "weight": "1,81 kg"
  },
  {
    "name": "Rede",
    "description": "Uma rede usada para capturar criaturas pequenas ou médias.",
    "price": "1 po",
    "weight": "1,36 kg"
  },
];

const user = [
  {username: 'JoaoNunes', email: 'nunes@123', password: '123'} 
];

async function seedDatabase() {
  try {
    await Classes.bulkCreate(classes);
    await Class_Features.bulkCreate(class_features);
    await Armors.bulkCreate(armors);
    await Weapons.bulkCreate(weapons);
    await User.bulkCreate(user);
    await Races.bulkCreate(races);
    await Equipaments.bulkCreate(equipaments);
    console.log("Dados inseridos com sucesso.");
  } catch (error) {
    console.log("Erro ao inserir dados: ", error);
  }
}

export default seedDatabase;
