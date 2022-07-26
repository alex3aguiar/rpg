const tiposTags = {
    historia: "historia",
    viagem: "viagem",
    batalha: "batalha",
    segredo: "segredo",
    habilidade: "habilidade",
}
const anoInicial = 1241
const dados = [
    {
        dia: new Date(),
        sessao : "sessão zero",
        eventos: [{
            data: new Date(anoInicial, 11, 17, 3, 24, 0),
            texto: `
            Nesse dia, uma mãe dá a luz a 3 irmãos gêmeos, Hugo, Lui e Zézinho 
            e por conta de uma profecia, os 3 foram separados assim que nasceram`,
            imagem: "imagens/foto-bebes.png",
            tags: [tiposTags.historia],
        },
        {
             data: new Date(anoInicial, 11, 17, 3, 24, 0),
             dataIncompleta:true,
            texto: `Um casal de nobres de Nevenunca que não estavam conseguindo ter filhos naturalmente  adotou Hugo.
            Ele foi criado como se fosse um filho legítimo, sempre foi muito amado por seus pais  adotivos,
             até o dia da catástrofe  no vulcão`,
            imagem: "imagens/mapa-costa-da-espada.png",
            tags: [tiposTags.historia],
        },
        {
             data: new Date(anoInicial, 11, 17, 3, 24, 0),
             dataIncompleta:true,
            texto: `Ninguém sabe para onde o Zézinho foi levado`,
            tags: [tiposTags.historia],
        },
        {
             data: new Date(anoInicial, 11, 17, 3, 24, 0),
             dataIncompleta:true,
            imagem : "https://i.pinimg.com/736x/c1/42/bf/c142bf52427dacdd7d7ee6f294b85c46.jpg",
            texto: `e o protagonista dessa história, Lui, foi levado pra um continente distante, Khorvaire`,
            tags: [tiposTags.historia],
        },
        {
             data: new Date(anoInicial+6, 1, 1, 0, 0, 0),
             dataIncompleta:true,
            imagem : "https://i.imgur.com/tMj8SQN.jpg",
            texto: `La ele cresceu na Cidade das Torres, mais especificamente em Cantonorte, Escadão.
            Nos primeiros anos ele cresceu sendo cuidado por moradores de rua, logo muito cedo aprendeu que conseguia ganhar um pão ou dois vendendo sucata  para guilda dos artesões.
            Ele sempre teve muita vontade de descobrir sua origem
            Ele observava os ferreiros, escultores, funileiros trabalhando.
            Ainda bem criança ele sofre um acidente, uma roda de carroça passa por cima do seu braço esquerdo e ele o perde`,
            tags: [tiposTags.historia],
        },
        {
             data: new Date(anoInicial+6, 1, 1, 0, 0, 0),
             dataIncompleta:true,
            imagem : "https://i.pinimg.com/736x/e7/ed/54/e7ed5472bafec55ab556e00f93f65ffc.jpg",
            texto: `depois do acidente  Lui fica traumatizado, sempre fica com MUITO medo de situações perigosas`,
            tags: [tiposTags.historia],
        },
        {
             data: new Date(anoInicial+11, 1, 1, 0, 0, 0),
             dataIncompleta:true,
            imagem : "https://i.pinimg.com/originals/2d/fe/1d/2dfe1d17b8e5fe8c5ab058863314cda9.png",
            texto: `Uma vez uma ferreira anã, Bárbara, Punhos de Marreta  viu Lui  tentando recriar um mecanismo mágico,
             notou o talento dele e o adotou.
             Ele trabalhava ajudando ela, sempre muito interessado em aprender os mais diversos tipos de artesanato.
             E ela cuidava dele como um filho
             A Anã dá pra um um braço de cobre como prótese`,
            tags: [tiposTags.historia, tiposTags.habilidade],
        },
        {
             data: new Date(anoInicial+25, 1, 1, 0, 0, 0),
             dataIncompleta:true,
            imagem : "imagens/lui.png",
            texto: `Aos 25 ele ja era uma membro respeitado na guilda dos artesãos`,
            tags: [tiposTags.historia],
        },
        {
             data: new Date(anoInicial+26, 1, 1, 0, 0, 0),
             dataIncompleta:true,
            imagem : "imagens/lui.png",
            texto: `Ele sempre demonstrava muita vontade de conhecer sua origem, quando chega aos 26 começa pedir ajuda da Bárbara pra achar seus parentes, Bárbara incentiva muito ele e ajuda`,
            tags: [tiposTags.historia],
        },
        {
             data: new Date(anoInicial+26, 1, 1, 0, 0, 0),
             dataIncompleta:true,
            imagem : "https://static1-br.millenium.gg/articles/7/97/67/@/119743-o-famigerado-nexus-de-summoners-rift-imagem-riot-games-article_m-1.png",
            texto: `Bárbara e Lui conseguem construir um maquina arcana que vai teletransportar o Lui para perto do parente mais próximo`,
            tags: [tiposTags.historia],
        },
        {
            data: new Date(anoInicial+26, 5, 4, 14, 0, 0),
            imagem : "https://cdn.jwplayer.com/v2/media/ExSbFRYO/poster.jpg?width=720",
            texto: `Lui se prepara pra viagem para o desconhecido, se despede da Bárbara. Bárbara avisa que como eles tem muito pouca informação de quem ele está procurando, a precisão da máquina  é muito baixa, ele pode ser teletransportado para lado da pessoa,
            mas tb pode ficar a quilômetros  de distância. Lui  usa a máquina arcana e é teletransportado  para Baldur's Gate `,
            tags: [tiposTags.historia, tiposTags.viagem],
        },
        {
             data: new Date(anoInicial+26, 1, 1, 0, 0, 0),
             dataIncompleta:true,
            texto: `Lui  começa a investigar pra ver se acha alguma informação`,
            tags: [tiposTags.historia],
        },
        {
             data: new Date(anoInicial+26, 1, 1, 0, 0, 0),
             dataIncompleta:true,
            imagem: "https://as2.ftcdn.net/v2/jpg/00/68/27/29/1000_F_68272941_RxnsIm3EgCbifoDHEe0ZUrTW1d95iDO0.jpg",
            texto: `f3r357r3l3 d0rm170rulu1 m3u,
            d1n c4m3r4 m34 4 unu14 d1n7r3 m1l104n3l3 d1n lum3 d35pr3 c4r3 n1m3n1 nu șt13c1n3e573
            (Și dacar 7i c1ne357ec3 arș71 ei
            dais l4mi57erulun31 57rz17rav3r5473c0n57an7d304m3ni5pre o57radă1n4cces1b1l7u7uror 6ndur1l0r,r34limp051bild3r34l 51gurfăr5 ș7iesigur,
            cumi573rul lucrur1l0rde5ubp137reif1in3cu mo4r73a umedpep3r31 1părul4lb p3 bărb4țicude57inulc0nducândcru47utur0rpe drumulnim1culu1`,
            tags: [tiposTags.segredo],
        },
        
    ]
    },
    {
        dia: new Date(),
        sessao : "sessão 1",
        eventos: [{
            data: new Date(anoInicial, 11, 17, 3, 24, 0),
            texto: `
            teste123`,
            imagem: "",
            tags: [tiposTags.historia],
        },
]
    }
]