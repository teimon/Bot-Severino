const Eris = require("eris");
var bot = new Eris.CommandClient("NDAzNTcwODk1MDM5NDk2MTkz.DUk-mg.p-su4NqJthRxAyzd_jGseH6AHhg");
var tempinho = process.uptime();
//funcional
bot.on("ready", () => {
    console.log("Sitema anti-vacuo on-line!");
});
//Sistema anti vacuo
bot.on("messageCreate", (msg) => {
	if(msg.content === "Oi" || msg.content === "oi" || msg.content === "Oi?" || msg.content === "oi?" || msg.content === "Hi" || msg.content === "hi" || msg.content === "Hi?" || msg.content === "hi?") {
        bot.createMessage(msg.channel.id, "Oi :kissing_smiling_eyes: ");
    }
    if(msg.content === "Bom dia" || msg.content === "bom dia" || msg.content === "dia" || msg.content === "Dia") {
        bot.createMessage(msg.channel.id, "```Espero que sejá bom, pois se não for eu vou botar a culpa em você.\nZoas, te amo :3```");
    }
    if(msg.content === "Boa tarde" || msg.content === "boa tarde" || msg.content === "tarde" || msg.content === "Tarde") {
        bot.createMessage(msg.channel.id, "```Podia ser melhor com você aqui, se divertindo com a gente e não acordando uma hora dessas.```");
    }
    if(msg.content === "Boa noite" || msg.content === "boa noite" || msg.content === "noite" || msg.content === "Noite") {
        bot.createMessage(msg.channel.id, "Seria boa com você, do meu lado, sozinhos, numa noite de luar, umas bebidas, e muita zoeira");
    }
    if(msg.content === "Boa" || msg.content === "boa") {
        bot.createMessage(msg.channel.id, "```Opa, Boa```");
    }
    if(msg.content === "Bom" || msg.content === "bom") {
        bot.createMessage(msg.channel.id, "```Opa, Bom```");
    }
    if(msg.content === "Ué" || msg.content === "ué" || msg.content === "ue" || msg.content === "Ue") {
        bot.createMessage(msg.channel.id, "```UéééÉÉÉ...```");
    }
    if(msg.content === "VSF" || msg.content === "vsf" || msg.content === "Vsf" || msg.content === "Vai se fude" || msg.content === "vai se fude" || msg.content === "Vai se fuder" || msg.content === "vai se fuder") {
        bot.createMessage(msg.channel.id, "```Vai você, guinorante```");
    }
    if(msg.content === "Hue" || msg.content === "hue" || msg.content === "Hue?" || msg.content === "hue?") {
        bot.createMessage(msg.channel.id, ":flag_br: :flag_br: :flag_br: :flag_br:");
    }
    if(msg.content === "Como?" || msg.content === "como?" || msg.content === "Cumé?" || msg.content === "cumé?" || msg.content === "Cume?" || msg.content === "cume?") {
        bot.createMessage(msg.channel.id, "```Também não entendi...```");
    }
    if(msg.content === "Culpa" || msg.content === "culpa" || msg.content === "Culpado" || msg.content === "culpado" || msg.content === "culpados" || msg.content === "culpados" || msg.content === "Culpa de quem?" || msg.content === "culpa de quem?") {
        bot.createMessage(msg.channel.id, "É sua, "+msg.author.mention+" e do <@403570895039496193>!");
    }
	if(msg.content === "Cash") {
        bot.createMessage(msg.channel.id, "Tais rica em :yen: ");
    }
    if(msg.content === ":3") {
        bot.createMessage(msg.channel.id, ":kissing_smiling_eyes: ");
    }
    if(msg.content === "Buu?" || msg.content === "buu?" || msg.content === "BUU?") {
        bot.createMessage(msg.channel.id, "```Ce ta ai?```");
    }
    if(msg.content === "Bug" || msg.content === "bug" || msg.content === "Bugs" || msg.content === "bugs" || msg.content === "Bug?" || msg.content === "bug?" || msg.content === "Bugs?" || msg.content === "bugs?") {
        bot.createMessage(msg.channel.id, "```Isso é um bug```Eu <@403570895039496193> vou notificar o cara que faz manutenção em mim, 1m.\nO <@354092988261203979>, da uma olhada nessa bagaça la, e para de vagabundear!");
    }
    if(msg.content === "Bot Severino" || msg.content === "Bot severino" || msg.content === "Severino" || msg.content === "severino" || msg.content === "Bot" || msg.content === "bot") { // If the message content is "!embed"
        bot.createMessage(msg.channel.id,
            {embed: {
    color: 3447003,
    author: {
        name: bot.user.username,
        //msg.author.username,
        icon_url: bot.user.avatarURL 
        //msg.author.avatarURL
    },
    title: "",
    url: "",
    description: "",
        fields: [
            { 
             name: 'Useless yet',
             value: "*Time* \ntimeParser.formatSeconds(process.uptime())\n\n*Guild Size Members* \nclient.guilds.size\n",						inline: false 
            },
            {
             name: 'RAM Usage',
             value: `${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB\n`,      inline: false
            },
            {
             name: 'Library',
             value: 'Eris\n',															inline: false 
            },
            {
             name: 'Servers',
             value: "Useless yet\n",												inline: false
            },
            {
             name: 'Test Testoso...',
             value: `rodando à ${Math.floor(tempinho)} segundos.`,												inline: false
            },
            {
             name: 'UpTime',
             value: `Rodando à ${process.uptime() / 0.001}\n`,												inline: false
            },
            {
             name: 'Latency',
             value: `${msg.channel.guild.shard.latency}ms\n`,							inline: false
            }
        ],
    image:{
        url: bot.user.avatarURL
    },
    footer: {
    	icon_url: bot.user.avatarURL,
    	text: bot.user.username,
    },
    timestamp: new Date(),
    }
  });
}
});
bot.on("messageCreate", (msg, args) => {
	if(msg.content.mention === "<@354092988261203979> " || msg.content === "oi" || msg.content === "Oi?" || msg.content === "oi?") {
        bot.createMessage(msg.channel.id, "Oi :kissing_smiling_eyes: ");
    } 
});
bot.on('messageCreate', (message) => {
    if (message.content === 'ping' || message.content === 'Ping') {
        bot.createMessage(message.channel.id, `Saca só esse ping... \`${message.channel.guild.shard.latency}ms\``) // If the Message is ping, reply with the API Latency and Pong!
    }
});
bot.connect();