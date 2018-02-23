const Eris = require("eris");
const tags = require("./tags.js");
const vacuo = require("./vacuo.js");
var bot = new Eris.CommandClient("NDAzNTcwODk1MDM5NDk2MTkz.DUk-mg.p-su4NqJthRxAyzd_jGseH6AHhg", {}, {
    description: "É o cara que faz de tudo e mais um pouco.\nMentira, ele é mais metido do que aquels velhas fofoqueiras.\nE escreve muito errado!",
    owner: "<@354092988261203979>",
    prefix: ["-", , "@mention ","Severino "]
});
bot.on("ready", () => {
    console.log("Bot Pronto!");
});
bot.registerCommandAlias("halp", "help"), {
	description: "Todos os comandos desponiveis."
};
bot.registerCommand("tes", (msg, args) => { // Registers "@mention " as the guild prefix
  bot.registerGuildPrefix(msg.channel.guild.id, "@mention ");
  return "Test";
});
bot.registerCommand("Teimon", "O <@354092988261203979> Tão te chamando, presta atenção!", {
    description: "Chama o pastel do Teimon.",
    fullDescription: "Comando para ver se o gordo do Teimon esta online."
});
bot.registerCommand("Buu", ["https://cdn.discordapp.com/attachments/370368210115100672/412029824018808833/Buu.gif", "Peraí que o Buu ta caçando a Loli que fugiu do porão dele"], {
    description: "Chamando o Buu.",
    fullDescription: "Chamando o Buu."
});
bot.registerCommand("Vitor", ["<@344264832909967362> expresses the next reaction:\n>.>", "<@344264832909967362> expresses the next reaction:\ne.e'"], {
    description: "Faces do VitorC.",
    fullDescription: "Faces do VitorC."
});
bot.registerCommand("site", ["O https://www.xvideos.com/ serve pra vc ver seu pornos, ta?", "Acho que você gostaria mais desse genero https://www.xvideos.com/shemale"], {
    description: "Chamando Sites",
    fullDescription: "Chamando Sites."
});
bot.registerCommand("Humor", ["https://i.imgur.com/yhqz15j.png",], {
    description: "Um bot também tem humor.",
    fullDescription: "Um bot também tem humor."
});
bot.registerCommand("Culpa", ["A culpa é do <@354092988261203979>",
	"A culpa é do <@354092988261203979>, mas se quiser tomar a culpa dele...",
	"A culpa é minha, como sempre a culpa sempre cai no <@403570895039496193>",
	"A culpa é da <@297153970613387264>",
	"A culpa é de todos menos minha, já que se fiz algo erradó, é pq fui programado pra fazer issim... né <@354092988261203979>"], {
    description: "Como chamar o Buu corretamente.",
    fullDescription: "Comando para ver se o BUU esta online."
});
bot.registerCommand("Kame", ["E ai tudo de boas?  By <@303575780892606464>", "E ai bichona, tudo de boas? By <@303575780892606464>"], {
    description: "Uma cosia que o Kame falaria.",
    fullDescription: "Uma cosia que o kame falaria para qualquer pessoa."
});
bot.registerCommand("Kanna", ["http://steamusercontent-a.akamaihd.net/ugc/159155650902044290/9ED16A3C6C201FC08347BBCD3AF08A11124483AD/", "https://thumbs.gfycat.com/ConcernedSpectacularGalapagossealion-size_restricted.gif", "https://avatarfiles.alphacoders.com/108/108681.gif", "https://i.imgur.com/omixCtq", "https://i.imgur.com/WqX98nt.gif", "https://i.imgur.com/pCLJXxF", "https://i.imgur.com/ctPze2A.png", "https://i.imgur.com/EVuZdi0.png", "https://i.imgur.com/yH6Ap3O", "https://i.imgur.com/lxRWQO0", "https://i.imgur.com/zv7yThP", "https://i.imgur.com/23nABET", "https://i.imgur.com/vfiYAA5", "https://i.imgur.com/RfZAXBB", "https://i.imgur.com/pHvU7EL"], { 
    description: "Kana",
    fullDescription: "Kana"
});
bot.registerCommand("Fome", ["https://i.imgur.com/w6qczgf"], { 
    description: "Gif de gente comendo.",
    fullDescription: "Gifs para a diversão."
});
bot.registerCommand("Saekano", ["https://i.imgur.com/w6qczgf", "https://i.imgur.com/duTJ8sB", "https://i.imgur.com/wiiDRZz", "https://i.imgur.com/iqanQNv"], { 
    description: "Gif da Saekano.",
    fullDescription: "Gif da Saekano."
});
bot.registerCommand("Gif", ["https://cdn.discordapp.com/attachments/370368210115100672/406288308558102556/Mega_milk_animated2.gif",
	"https://cdn.discordapp.com/attachments/370368210115100672/406290065610768386/mememe.gif",
	"https://cdn.discordapp.com/attachments/370368210115100672/406288589496909824/Mega_milk_pony.gif"], { 
    description: "Gifs para a diversão.",
    fullDescription: "Gifs para a diversão."
});
bot.registerCommand("Loli", ["https://i.imgur.com/Cbo3vQw.gif",
	"https://i.imgur.com/vWBtfFL.gif"], { 
    description: "Gifs/imagens relacionado a Loli para a diverção.",
    fullDescription: "Gifs/imagens relacionado a Loli para a diversão.."
});
bot.registerCommand("PF", ["https://i.imgur.com/UsdUgHa.gif",
	"https://i.imgur.com/Cbo3vQw.gif",
	"https://i.imgur.com/vWBtfFL.gif",
	"https://i.imgur.com/Dz1moc2",
	"https://i.imgur.com/CnQOMde"], { 
    description: "Gifs/imagens relacionado a PF para a diverção.",
    fullDescription: "Gifs/imagens relacionado a PF para a diversão.."
});
bot.registerCommand("FBI", ["https://i.imgur.com/Dz1moc2", "https://i.imgur.com/YBefMhh", "https://i.imgur.com/CnQOMde"], { 
    description: "Gifs/imagens relacionado a FBI para a diverção.",
    fullDescription: "Gifs/imagens relacionado a FBI para a diversão.."
});
bot.registerCommand("Trap", ["https://cdn.discordapp.com/attachments/370368210115100672/406290604222447616/TRAP.gif"], { 
    description: "Gifs, imagens.",
    fullDescription: "Gifs para a diversão."
});
bot.registerCommand("CDZ", ["https://i.imgur.com/hLd0U7O.jpg", "https://i.imgur.com/lY7pEVG.jpg"], { 
    description: "Gifs, imagens.",
    fullDescription: "Gifs e imagens para a diversão."
});
bot.registerCommand("Cuidado", ["Olha essa zoeira <@354092988261203979> e <@303575780892606464> https://imgur.com/C5XPAk5"], { 
    description: "Verivicar o nivel da converça.",
    fullDescription: "Verivicar o nivel da converça."
});
bot.registerCommand("Haha", ["https://media.giphy.com/media/3o6MblDwZHqmk9u7WU/giphy.gif", "https://i.imgur.com/qJwR9G1"], { 
    description: "HAHA.",
    fullDescription: "HAHA."
});
bot.registerCommand("Dance", ["https://imgur.com/8CmGpDm", "https://imgur.com/KQuqjfP", "https://imgur.com/IqrnDzz", "https://imgur.com/DxwX2FB", "https://imgur.com/ChvwijO", "https://imgur.com/UHlCzfW", "https://imgur.com/RT1kk9h", "https://imgur.com/yzMluxT", "https://imgur.com/ibH9f6w", "https://imgur.com/ux6EuCp", "https://imgur.com/nEzXoan", "https://imgur.com/iJeNvn0", "https://imgur.com/zP3LCEV", "https://imgur.com/fXk6Ujp", "https://imgur.com/r6gbQVi", "https://imgur.com/KOCoXyx", "https://imgur.com/5o6MpVm", "https://imgur.com/VGv8Siq", "https://imgur.com/LNCVXZC"], { 
    description: "Dance.",
    fullDescription: "Dance."
});
bot.registerCommand("Oi", ["Oi. Eu estou ocupado.\nMas... pra você, eu estaria sempre disponível."], { 
    description: "Oi.",
    fullDescription: "Oi."
});
bot.registerCommand("Nekopara", ["https://i.imgur.com/aCcXlAA.png", "https://i.imgur.com/GmZpoGR.png", "https://i.imgur.com/pDCWpWy.png", "https://i.imgur.com/Ko8KQIv.png", "https://i.imgur.com/uOJfkGO.png", "https://i.imgur.com/LsWfBOd.png", "https://i.imgur.com/M73Fqr2.png", "https://i.imgur.com/r1Yi7Sx.png", "https://i.imgur.com/2ysckav.png", "https://i.imgur.com/Tma2FyB.png", "https://i.imgur.com/jVG8ncH.png", "https://i.imgur.com/HHROZ8N.png", "https://i.imgur.com/gXjhmfQ.png", "https://i.imgur.com/fWi1ZN8.png", "https://i.imgur.com/eTIeZs4.png", "https://i.imgur.com/zZYoJIv.png", "https://i.imgur.com/zZYoJIv.png", "https://i.imgur.com/xIJwFqA.png", "https://i.imgur.com/g1VKCqX.png", "https://i.imgur.com/QFMo62F.png", "https://i.imgur.com/u3tIQTd.png", "https://i.imgur.com/Y4dRPN1.png", "https://i.imgur.com/JzErZcC.png", "https://i.imgur.com/amqjssp.png", "https://i.imgur.com/l1uh0BK.png",], { 
    description: "Nekopara amorzinho.",
    fullDescription: "Nekopara amorzinho."
});
bot.registerCommand("Corre", ["Corre porque?\nEita, corre berg!"], { 
    description: "Corre Severinono.",
    fullDescription: "Corre Severinono."
});
bot.registerCommand("Atenção", ["https://i.imgur.com/B3Uag7Q.jpg", "https://i.imgur.com/XzEUiiE.png", "https://i.imgur.com/rOv648m.jpg"], { 
    description: "Atenção...",
    fullDescription: "Atenção...",
    reactionButtons: [ // Add reaction buttons to the command
        {
            emoji: "🔁",
            type: "edit", // Pick a new pong variation
            response: ["https://i.imgur.com/B3Uag7Q.jpg", "https://i.imgur.com/XzEUiiE.png", "https://i.imgur.com/rOv648m.jpg"]
        }
],
});
var echoCommand = bot.registerCommand("Site", (msg, args) => { 
    if(args.length === 0) {
        return "https://hentaifusion.com";
    }
    var text = args.join(" Em casos de duvidas, pergunte ao <@354092988261203979>");
    return text;
}, {
    description: "https://hentaifusion.com",
    fullDescription: "O lindo site da HF",
    usage: "<text>"
});
bot.on("messageCreate", (msg) => {
    if(msg.content === "Regras") { // If the message content is "!embed"
        bot.createMessage(msg.channel.id, {
            embed: {
                title: "**Atenção, todas as regras aqui devem serem seguidas sem questionar, todos aqueles que quebrarem as regras serão punidos!.**", // Title of the embed
                description: "**01- Está proibido postar imagens com mutilações!.\n02- Está proibido postar imagens de crianças reais, isso é crime, e o membro que postar será banido na hora!.\n03- Está proibido flood de mensagens, querem divulgar seus grupos? terá uma área reservada para isso!.\n04- Está Proibido ofender os outros sem motivos, sejam educados, somos pervertidos, mas temos educação Haha!.\n05- Está proibido postar links com virus!.\nRespeitem as regras, e sejam felizes crianças!.**",
                color: 0xFF0000, // Color, either in hex (show), or a base-10 integer
                footer: { // Footer text
                    text: "Foram feitas para ser compridas, sempre que o possivel.\nIgnorem por hora, é só um teste!"
                }
            }
        });
    }
    if(msg.content === "Comandos do <@403570895039496193>") { // If the message content is "!embed"
        bot.createMessage(msg.channel.id, {
            embed: {
                title: "Comandos do Severino", // Title of the embed
                description: "Estão em construção.\n*Mas logo vai estar a lista toda.*\n\nOi\nCorre <@403570895039496193>\nTei\nTeimon\nLogo\nBoa noite kame\nSite\nCuidado\nT.T\nMeaw\nAtualização e testes no Severino!\nSeverino\nSilencio\nKanna\nDiálogo\nTreta\nTeta\nJá volto\nVoltei\nEu\nDuvidas\n-1\nHumor\nTags\nComandos do <@403570895039496193>\nOi <@403570895039496193>",
                author: { // Author property
                },
                color: 0xFFC629, // Color, either in hex (show), or a base-10 integer
                footer: { // Footer text
                    text: "Em manutenção.\nSem data de terminio!"
                }
            }
        });
    }
    if(msg.content === "Duvidas") { // If the message content is "!embed"
        bot.createMessage(msg.channel.id, {
            embed: {
                title: "Perguntas comuns", // Title of the embed
                url: "https://hentaifusion.com/",
                description: "**Pergunta: Como faço parte da equipe?**\nResposta: Faça uma obra e mande para qualquer um dos membros da Staff avaliar\n\n**Pergunta: Tem hora espesifica para as postagens?**\nResposta: Vareia de cada postador, mas geralmente é postado quando se esta pronto.\n\n**Pergunta: Vocês aceitam pedidos?**\nResposta: Tem os Pedidos mensais, mas pode deixar no #Pedidos(*<#376520732915662850>*).\nFica a cargo do Tradutor/Editor quiser fazer ou não.\n\nEm manutenção.\nSem data de terminio! [HF](https://hentaifusion.com/)",
                color: 0xFFC629, // Color, either in hex (show), or a base-10 integer
                footer: { // Footer text
                    text: ""
                }
            }
        });
    }
    if(msg.content === "Humor") { // If the message content is "!embed"
        bot.createMessage(msg.channel.id, {
            embed: {
                color: 3447003,
                author: {
                    name: "Severino",
                    icon_url: "https://i.imgur.com/yhqz15j.png"
                },
                title:"Novidades",
                url:"",
                description:"Logo o Bot severino vai canhar novas imagens de humor.\n**Supervisão:**\nToshirou • raiomarco\n**Participantes:** \nMestre Kame\nBuu\nvitorcorreia\n**Comando:**\n-Humor",
                fields: [
                ],
                image: {
                    url: "https://i.imgur.com/yhqz15j.png"
                },
                footer: {
                    icon_url:"https://i.imgur.com/RbGo8BM.jpg",
                    text:"HentaiFusion - ©Toshirou"
                },
                timestamp: new Date(),
            }
        });
    }
    if(msg.content === "-Revolução") { // If the message content is "!embed"
        bot.createMessage(msg.channel.id, {
            embed: {
                color: 3447003,
                author: {
                    name: "",
                    icon_url: "https://i.imgur.com/yhqz15j.png"
                },
                title:"Fazer revolução sem poder",
                url:"",
                description:"",
                fields: [
                ],
                image: {
                    url: "https://i.imgur.com/opBrs41.png"
                },
                footer: {
                    icon_url:"https://i.imgur.com/RbGo8BM.jpg",
                    text:"© HentaiFusion"
                },
                timestamp: new Date(),
            }
        });
    }
    if(msg.content === "Categorias") { // If the message content is "!embed"
        bot.createMessage(msg.channel.id,
        	{embed: {
    color: 3447003,
    author: {
    	name: "Toshirou-Sama",
    	icon_url: "https://cdn.discordapp.com/avatars/241193863035748352/5154c3930260eb70e69f2dc8f24f7731.jpg?size=1024"
    },
    title: "Categorias",
    url: "",
    description: "Categorias desponiveis no site da [HENTAI FUSION](https://hentaifusion.com/).",
    fields: [{
        name: "Doujinshi",
        value: "Doujinshi é produzido de Fan para Fan que usa de referencias doutra obras. \n[LINK](https://hentaifusion.com/category/doujinshi/)."
      },
      {
        name: "Colorido",
        value: "Obras coloridas ou parcialmente coloridas. \n[LINK](https://hentaifusion.com/category/doujinshi/)."
      },
      {
        name: "H-Mangá",
        value: "H-Manga ou Ecchi-Manga, Pode ser tanto de forma serielizada ou de forma de complilado com obras de outros autores\n[LINK](https://hentaifusion.com/category/h-manga/)."
      },// Da pra colocar quantas vezes quiser
      {
        name: "Book",
        value: "Varias obras de varios autores copiladas ou um/a unico/a autor/a para o Book todo. \n[LINK](https://hentaifusion.com/category/book/)."
      },
      {
        name: "One-Shot",
        value: "Geralmente são historias que possuem capitulos unicos sem ter conexão direta a historia horiginal. \n[LINK](https://hentaifusion.com/category/one-shot/)."
      },
      {
        name: "Hentai Vídeo",
        value: "Animações tanto em 2D(Desenhos) como em 3D(Graficos). \n[LINK](https://hentaifusion.com/category/hentai-video/)."
      },
      {
        name: "FAKKU",
        value: "Descrição indisponivel no momento. \n[LINK](https://hentaifusion.com/category/fakku/)."
      },
      {
        name: "HQ",
        value: "Descrição indisponivel no momento. \n[LINK](https://hentaifusion.com/category/hq/)."
      },
      {
        name: "EQUIPE",
        value: "Lista de membros que participam do Site [HF](https://hentaifusion.com/). \n[LINK](https://hentaifusion.com/equipe/)."
      }
    ],
    image:{
    	url: 'https://i.imgur.com/Bm57DMY.png'
    },
    footer: {
    	icon_url: "https://cdn.discordapp.com/avatars/241193863035748352/5154c3930260eb70e69f2dc8f24f7731.jpg?size=1024",
        text: "© Toshirou"
    },
    timestamp: new Date(),
    }
  });
}
if(msg.content === "Atualização e testes no Severino!") { // If the message content is "!embed"
        bot.createMessage(msg.channel.id,
        	{embed: {
    color: 3447003,
    title: "Nota",
    url: "",
    description: "Evitem usar o bot severino",
    fields: [{
        name: "Evitem usar o bot severino",
        value: "Serio, evitem mesmo"
      },
      {
        name: "Bugs",
        value: "Caso o bot bug sua conta, sinto muito mas eu avisei"
      },
      {
        name: "Quero ideias para usar no bot",
        value: "Qualquer tipo de ideia, que seja de uso geral e não de pessoal(seu ganancioso)"
      }// Da pra colocar quantas vezes quiser
    ],
    image:{
    	url: 'http://i.imgur.com/Bm57DMY.png'
    },
    footer: {
      text: "Ação de testes, leve a serio tudo dessa mensagem."
    },
    timestamp: new Date(),
    }
  });
}
    if(msg.content === "Severino") {
        bot.createMessage(msg.channel.id, "Oi, "+(msg.author.mention)+"\nO Sistema está on-line.\nCaso queira testar algum comando, fique à vontade.\nEu estarei executanto cada um deles, desde que estajam corretos.\nE muito obrigado pela cooperação!");
    }
    if(msg.content === "Severino!") {
        bot.createMessage(msg.channel.id, "Oque foi "+(msg.author.mention)+"?\nTa achadno que sou suas quengas pra ficar berrando comigo é!?");
    }
    if(msg.content === "Logo") {
        bot.createMessage(msg.channel.id, "https://i.imgur.com/FPiXD6o.png");
    }
    if(msg.content === "corre <@403570895039496193>") {
        bot.createMessage(msg.channel.id, "Corre porque?\nEita, corre berg!");
    }
    if(msg.content === "Corre <@403570895039496193>") {
        bot.createMessage(msg.channel.id, "Corre porque?\nEita, corre berg!");
    }
    if(msg.content === "boa noite kame") {
        bot.createMessage(msg.channel.id, "Bom dia, boa tarde ou boa noite pra quem fica\nEu desejo, pros manos, buças e pras minas, pikas!\nBy <@303575780892606464>");
    }
    if(msg.content === "Boa noite kame") {
        bot.createMessage(msg.channel.id, "Bom dia, boa tarde ou boa noite pra quem fica\nEu desejo, pros manos, buças e pras minas, pikas!\nBy <@303575780892606464>");
    }
    if(msg.mention === "Teimon#6775") {
        bot.createMessage(msg.channel.id, "Qualquer duvida pergunte para qualquer um dos Senpais, Farpeiro, Kouhai!");
    }
    if(msg.mention === "<@354092988261203979>") {
        bot.createMessage(msg.channel.id, "Qualquer duvida pergunte para qualquer um dos Senpais, Farpeiro, Kouhai!");
    }
    if(msg.content === "Oi <@403570895039496193>") {
        bot.createMessage(msg.channel.id, " É culpa dos outros, eu não fiz nada.\nAhh, ta, oi :3");
    }
    if(msg.content === "Site") {
        bot.createMessage(msg.channel.id, msg.author.mention+ "https://hentaifusion.com\nDe tudo e mais um pouco!");
    }
    if(msg.content === "site") {
        bot.createMessage(msg.channel.id, msg.author.mention+ "https://hentaifusion.com\nDe tudo e mais um pouco!");
    }
    if(msg.content === "Teimon") {
        bot.createMessage(msg.channel.id, msg.author.mention+ "Espere um minuto!\nO <@354092988261203979> já vem ver o que é!");
    }
    if(msg.content === "Tei") {
        bot.createMessage(msg.channel.id, msg.author.mention+ "Espere um minuto!\nO <@354092988261203979> já vem ver o que é!");
    }
    if(msg.content === "teimon") {
        bot.createMessage(msg.channel.id, msg.author.mention+ "Espere um minuto!\nO <@354092988261203979> já vem ver o que é!");
    }
    if(msg.content === "tei") {
        bot.createMessage(msg.channel.id, msg.author.mention+ "Espere um minuto!\nO <@354092988261203979> já vem ver o que é!");
    }
    if(msg.content === "Meaw") {
        bot.createMessage(msg.channel.id, msg.author.mention+ " se arrisca a miar outra vez pra você ver se não te taco uma paulada!");
    }
    if(msg.content === "Cuidado") {
        bot.createMessage(msg.channel.id, "Quando te falam pra ter cuidado, é pra ter cuidado mesmo!");
    }
    if(msg.content === "cuidado") {
        bot.createMessage(msg.channel.id, "Quando te falam pra ter cuidado, é pra ter cuidado mesmo!");
    }
    if(msg.content === "T.T") {
        bot.createMessage(msg.channel.id, "Chora não, tem coisa pior pela frente...!");
    }
    if(msg.content === "Kanna") {
        bot.createMessage(msg.channel.id, "https://i.imgur.com/Bm57DMY.png");
    }
    if(msg.content === "Silencio") {
        bot.createMessage(msg.channel.id, "***```...```***");
    }
    if(msg.content === "?") {
        bot.createMessage(msg.channel.id, "```Tá sem argumento é, safado.```");
    }
    if(msg.content === "dialogo") {
        bot.createMessage(msg.channel.id, "```**Vamos conversar**```\nhttps://i.imgur.com/wbYxZaB");
    }
    if(msg.content === "Diálogo") {
        bot.createMessage(msg.channel.id, "```**Vamos conversar**```\nhttps://i.imgur.com/wbYxZaB");
    }
    if(msg.content === "Treta") {
        bot.createMessage(msg.channel.id, "Mas que treta em...\nhttps://i.imgur.com/b5CluzL.png");
    }
    if(msg.content === "Teta") {
        bot.createMessage(msg.channel.id, "Mas que teta em...\nhttps://i.imgur.com/b5CluzL.png");
    }
    if(msg.content === "1m") {
        bot.createMessage(msg.channel.id, "```1 Minuto?\n1 Mes?\n1 Martelo?\nTem como espesificar não!?```");
    }
    if(msg.content === "já volto") {
        bot.createMessage(msg.channel.id, "```Volta rapido em, ou eu mando os tiras atraz de você!```");
    }
    if(msg.content === "Já volto") {
        bot.createMessage(msg.channel.id, "Volta rapido em, "+(msg.author.mention)+"!\nOu eu mando os tiras atraz de você!");
    }
    if(msg.content === "voltei") {
        bot.createMessage(msg.channel.id, "Voltou porque em? Zoas, Welcome back :3");
    }
    if(msg.content === "Voltei") {
        bot.createMessage(msg.channel.id, "Voltou porque em, "+(msg.author.mention)+"?\nZoas, Welcome back :3");
    }
    if(msg.content === "tchau") {
        bot.createMessage(msg.channel.id, "```Espero que va logo...\nOps, pensei que você tinha vazado...\nFoi mal, Hue hue hue```");
    }
    if(msg.content === "Tchau") {
        bot.createMessage(msg.channel.id, "Espero que va logo...\nOps, pensei que você tinha vazado, "+(msg.author.mention)+".");
    }
    if(msg.content === "eu") {
        bot.createMessage(msg.channel.id, "```Você nada. Te aquieta ai e seu hiperativo.```");
    }
    if(msg.content === "Eu") {
        bot.createMessage(msg.channel.id, "Você nada"+(msg.author.mention)+"\nTe aquieta ai e seu hiperativo.");
    }
    if(msg.content === "-1") {
        bot.createMessage(msg.channel.id, "O <@354092988261203979>, tem gente perdendo ponto de participação ai em...");
    }
    if(msg.content === "Tosh") {
        bot.createMessage(msg.channel.id, ":rat:");
    }
    if(msg.content === "Quero cargo") {
        bot.createMessage(msg.channel.id, "Hoje não e -1\n:rat:");
    }
    });
bot.connect();
