const Eris = require("eris");
var bot = new Eris.CommandClient("NDAzNTcwODk1MDM5NDk2MTkz.DUk-mg.p-su4NqJthRxAyzd_jGseH6AHhg", {}, {
    description: "É o cara que faz de tudo e mais um pouco.\nMentira, ele é mais metido do que aquels velhas fofoqueiras.\nE escreve muito errado!",
    owner: "<@354092988261203979>",
    prefix: ["-", , "@mention ","Severino "]
});
bot.on("ready", () => {
    console.log("Tags prontas!");
});
bot.registerCommandAlias("halp", "help"), {
    description: "Todos os comandos desponiveis."
};
bot.on("messageCreate", (msg) => {
    if(msg.content === "Dark Skin" || msg.content === "DS") { // If the message content is "!embed"
        bot.createMessage(msg.channel.id, {
            embed: {
                color: 3447003,
                author: {
                    name: "Futei-Sama (不定様)",
                    icon_url: "https://cdn.discordapp.com/app-icons/407648590870347806/ecfa30445c54e20fa9b2b99fd79761bb.png"
                },
                title:"Dark Skin",
                url:"",
                description:"[link](https://hentaifusion.com/tag/dark-skin/)",
                fields: [
                ],
                image: {
                    url: "https://i.imgur.com/ta1TU5Y.jpg"
                },
                footer: {
                    icon_url:"https://i.imgur.com/RbGo8BM.jpg",
                    text:"© HentaiFusion"
                },
                timestamp: new Date(),
            }
        });
    }
    if(msg.content === "NTR" || msg.content === "Netorare" || msg.content === "-test") { // If the message content is "!embed"
        bot.createMessage(msg.channel.id, {
            embed: {
                color: 3447003,
                author: {
                    name: "Futei-Sama (不定様)",
                    icon_url: "https://cdn.discordapp.com/app-icons/407648590870347806/ecfa30445c54e20fa9b2b99fd79761bb.png"
                },
                title:":regional_indicator_n::regional_indicator_t::regional_indicator_r: = Netorare(''Traição:flag_br: '')",
                url:"",
                description:"[:regional_indicator_l::regional_indicator_i::regional_indicator_n::regional_indicator_k::flag_br: ](https://hentaifusion.com/tag/netorare/)",
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
    if(msg.content === "Futanari" || msg.content === "Futa") { // If the message content is "!embed"
        bot.createMessage(msg.channel.id, {
            embed: {
                color: 3447003,
                author: {
                    name: "Futei-Sama (不定様)",
                    icon_url: "https://cdn.discordapp.com/app-icons/407648590870347806/ecfa30445c54e20fa9b2b99fd79761bb.png"
                },
                title:"Futanari = Futa",
                url:"",
                description:"Mulher com adicional de fábrica\n[link](https://hentaifusion.com/tag/futanari/)",
                fields: [
                ],
                image: {
                    url: "https://i.imgur.com/ieZBKJ1.png"
                },
                footer: {
                    icon_url:"https://i.imgur.com/RbGo8BM.jpg",
                    text:"HentaiFusion - ©Toshirou"
                },
                timestamp: new Date(),
            }
        });
    }
    if(msg.content === "Yaoi" || msg.content === "Trap") { // If the message content is "!embed"
        bot.createMessage(msg.channel.id, {
            embed: {
                color: 3447003,
                author: {
                    name: "Futei-Sama (不定様)",
                    icon_url: "https://cdn.discordapp.com/app-icons/407648590870347806/ecfa30445c54e20fa9b2b99fd79761bb.png"
                },
                title:"Yaoi = Gay",
                url:"",
                description:"[link](https://hentaifusion.com/tag/yaoi/)",
                fields: [
                ],
                image: {
                    url: "https://i.imgur.com/6p7Ygxf.jpg"
                },
                footer: {
                    icon_url:"https://i.imgur.com/RbGo8BM.jpg",
                    text:"HentaiFusion - ©Toshirou"
                },
                timestamp: new Date(),
            }
        });
    }
    if(msg.content === "Amorzinho" || msg.content === "Kawaii" || msg.content === "Happy Sex") { // If the message content is "!embed"
        bot.createMessage(msg.channel.id, {
            embed: {
                color: 3447003,
                author: {
                    name: "Futei-Sama (不定様)",
                    icon_url: "https://cdn.discordapp.com/app-icons/407648590870347806/ecfa30445c54e20fa9b2b99fd79761bb.png"
                },
                title:"Amorzinho = Kawaii",
                url:"",
                description:"[link](https://hentaifusion.com/tag/amorzinho/)",
                fields: [
                ],
                image: {
                    url: "https://i.imgur.com/kI2iNRx.gif"
                },
                footer: {
                    icon_url:"https://i.imgur.com/RbGo8BM.jpg",
                    text:"HentaiFusion - ©Toshirou"
                },
                timestamp: new Date(),
            }
        });
    }
    if(msg.content === "Futei-Sama" || msg.content === "Futei" || msg.content === "Futei-sana" || msg.content === "futeisama" || msg.content === "futei-sama") { // If the message content is "!embed"
        bot.createMessage(msg.channel.id, {
            embed: {
                color: 3447003,
                author: {
                    name: "Futei-Sama (不定様)",
                    icon_url: "https://cdn.discordapp.com/app-icons/407648590870347806/ecfa30445c54e20fa9b2b99fd79761bb.png"
                },
                title:"É ele ou ela?",
                url:"",
                description:"Mulher com tromba\n[link do genero](https://hentaifusion.com/tag/futanari/)\n[Link da obra](http://www.hentaiseason.com/2017/12/dosukebe-josou-kyoushi.html)",
                fields: [
                ],
                image: {
                    url: "https://i.imgur.com/DCsEbQO.png"
                },
                footer: {
                    icon_url:"https://i.imgur.com/RbGo8BM.jpg",
                    text:"HentaiFusion - ©Toshirou"
                },
                timestamp: new Date(),
            }
        });
    }
    if(msg.content === "FAKKU" || msg.content === "Fakku" || msg.content === "fakku") { // If the message content is "!embed"
        bot.createMessage(msg.channel.id, {
            embed: {
                color: 3447003,
                author: {
                    name: "Futei-Sama (不定様)",
                    icon_url: "https://cdn.discordapp.com/app-icons/407648590870347806/ecfa30445c54e20fa9b2b99fd79761bb.png"
                },
                title:":regional_indicator_f::regional_indicator_a::regional_indicator_k::regional_indicator_k::regional_indicator_u: = ''Fuck:flag_us:'')",
                url:"",
                description:"[:regional_indicator_l::regional_indicator_i::regional_indicator_n::regional_indicator_k::flag_us: ](https://hentaifusion.com/tag/fakku/)",
                fields: [
                ],
                image: {
                    url: "https://i.imgur.com/5X3Lm69.png"
                },
                footer: {
                    icon_url:"https://i.imgur.com/RbGo8BM.jpg",
                    text:"HentaiFusion - ©Toshirou"
                },
                timestamp: new Date(),
            }
        });
    }
    if(msg.content === "FAKKU Traduzido" || msg.content === "FAKKU traduzido" || msg.content === "Fakku Traduzido" || msg.content === "Fakku traduzido" || msg.content === "fakku traduzido") { // If the message content is "!embed"
        bot.createMessage(msg.channel.id, {
            embed: {
                color: 3447003,
                author: {
                    name: "Futei-Sama (不定様)",
                    icon_url: "https://cdn.discordapp.com/app-icons/407648590870347806/ecfa30445c54e20fa9b2b99fd79761bb.png"
                },
                title:":regional_indicator_f::regional_indicator_a::regional_indicator_k::regional_indicator_k::regional_indicator_u: = ''Foder:flag_br:'')",
                url:"",
                description:"[:regional_indicator_l::regional_indicator_i::regional_indicator_n::regional_indicator_k::flag_br: ](https://hentaifusion.com/tag/fakku/)",
                fields: [
                ],
                image: {
                    url: "https://i.imgur.com/5X3Lm69.png"
                },
                footer: {
                    icon_url:"https://i.imgur.com/RbGo8BM.jpg",
                    text:"HentaiFusion - ©Toshirou"
                },
                timestamp: new Date(),
            }
        });
    }
    if(msg.content === "Tags" || msg.content === "tags" || msg.content === "tag") { // If the message content is "!embed"
        bot.createMessage(msg.channel.id,
            {embed: {
    color: 3447003,
    author: {
        name: "Toshirou-Sama",
        icon_url: "https://cdn.discordapp.com/avatars/241193863035748352/5154c3930260eb70e69f2dc8f24f7731.jpg?size=1024"
    },
    title: "Tags mais populares desponiveis no site da HENTAI FUSION.",
    url: "https://hentaifusion.com/",
    description: "*Em construção*",
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
});
bot.connect();