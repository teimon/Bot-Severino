const Eris = require("eris");
var bot = new Eris.CommandClient("NDAzNTcwODk1MDM5NDk2MTkz.DUk-mg.p-su4NqJthRxAyzd_jGseH6AHhg");
//funcional
bot.on("ready", () => {
    console.log("Testes Testosos Prontos");
});
bot.registerCommand("Test", (msg, args) => { // Registers "@mention " as the guild prefix
  bot.registerGuildPrefix(msg.channel.guild.id, "@mention ");
  return (bot.createMessage(msg.channel.id, {
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
        })
    )}
);
bot.registerCommand("Teste", (msg, args) => {
  return (bot.createMessage(msg.channel.id, {
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
        })
    )}
);
bot.registerCommand("teste", (msg, args) => {
  return (bot.createMessage(msg.channel.id, {
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
        })
    )}
);
bot.registerCommand("?", (msg, args) => { // Registers "@mention " as the guild prefix
  bot.registerGuildPrefix(msg.channel.guild.id, "@mention ");
  return "Fala.";
});
var echoCommand = bot.registerCommand("Site", (msg, args) => { 
    if(args.length === 0) {
        return "https://hentaifusion.com";
    }
    var text = args.join("Texto aleatorio");
    return "Acho que ta errado ai";
}, {
    description: "https://hentaifusion.com",
    fullDescription: "O lindo site da HF",
    usage: "<text>"
});
bot.on('message', message => {

  if (message.content.startsWith('-play')) {
    // On récupère le premier channel audio du serveur
    let voiceChannel = message.guild.channels
      .filter(function (channel) { return channel.type === 'voice' })
      .first()
    // On récupère les arguments de la commande 
    // il faudrait utiliser une expression régulière pour valider le lien youtube
    let args = message.content.split(' ')
    // On rejoint le channel audio
    voiceChannel
      .join()
      .then(function (connection) {
        // On démarre un stream à partir de la vidéo youtube
        let stream = YoutubeStream(args[1])
        stream.on('error', function () {
          message.reply("Je n'ai pas réussi à lire cette vidéo :(")
          connection.disconnect()
        })
        // On envoie le stream au channel audio
        // Il faudrait ici éviter les superpositions (envoie de plusieurs vidéo en même temps)
        connection
          .playStream(stream)
          .on('end', function () {
            connection.disconnect()
          })
      })
  }
});
bot.on('guildMemberAdd', (member, guild) => {
    bot.getDMChannel(member.id).then(channel => {
        console.log(channel.id)
    }).catch(e => {
        console.log('Get channel fail\n' + e)
    })
});
//###############################################################################################################################
//Funcional
//###############################################################################################################################
var bot_commands = [{cmd: "ping", action: "Pong!", desc: "Pong!"}, 
    {cmd: "pout", action: "https://i.imgur.com/bah45ys.jpg", desc: ":T"},
    {cmd: "lewd", action: "http://i.imgur.com/3eeaBJA.gif", desc: "lewd"},
    {cmd: "clap", action: "https://gfycat.com/NeatWearyBluemorphobutterfly", desc: "Puck clap"},
    {cmd: "boii", action: "https://puu.sh/rl3qP/0d01ac5c82.jpg", desc: "Boii"},
    {cmd: "source", action: "https://github.com/Delybard/Discord-Bot", desc: "Bots Sourcecode"}];

for (var i = 0; i < bot_commands.length; i++){
    bot.registerCommand(bot_commands[i].cmd, bot_commands[i].action, {
        caseInsensitive: true,
        deleteCommand: true,
        description: bot_commands[i].desc,
        fullDescription: bot_commands[i].desc + " - " + bot_commands[i].action
    });
}
var echoCommand = bot.registerCommand("Say", (msg, args) => { // Make an echo command
    if(args.length === 0) { // If the user only typed "!echo", say "Invalid input"
        return "Invalid input";
    }
    var text = args.join(" "); // Make a string of the text after the command label
    return text; // Return the generated string
}, {
    caseInsensitive: true,
    deleteCommand: true,
    description: "Make the bot say something",
    fullDescription: "The bot will echo whatever is after the command label.",
    usage: "<text>"
});
bot.connect();