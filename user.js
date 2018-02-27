const Eris = require("eris");
var bot = new Eris.CommandClient("NDAzNTcwODk1MDM5NDk2MTkz.DUk-mg.p-su4NqJthRxAyzd_jGseH6AHhg");
//funcional
bot.on("ready", () => {
    console.log("Sistema de evento pronto!");
});
bot.on("guildMemberAdd", member => {
     bot.createMessage("Sera mesmo?");
});
bot.on("guildMemberAdd", member => {
     bot.createMessage(msg.channel.id(370368210115100672), "Sera mesmo?");
});
bot.on("guildMemberAdd", member => {
  let guild = member.guild;
  let user = member.user;
  // log [join] from each server 
  console.log(user.username + " (" + user.id + ") joined " + guild.name + " (" + guild.id + ")");
});
bot.on('guildMemberAdd', (member, guild) => {
	bot.getDMChannel(member.id).then(channel => {
		console.log(channel.id)
	}).catch(e => {
		console.log('Get channel fail\n' + e)
	})
})
bot.on('guildMemberAdd', member => {
  member.createDM().then(channel => {
    return channel.send('Bienvenue sur mon serveur ' + member.displayName)
  }).catch(console.error)
  // On pourrait catch l'erreur autrement ici (l'utilisateur a peut être désactivé les MP)
})
bot.connect();