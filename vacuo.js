const Eris = require("eris");
var bot = new Eris.CommandClient("NDAzNTcwODk1MDM5NDk2MTkz.DUk-mg.p-su4NqJthRxAyzd_jGseH6AHhg");
//funcional
bot.on("ready", () => {
    console.log("Sitema anti-vacuo on-line!");
});
//Sistema anti vacuo
bot.on("messageCreate", (msg) => {
	if(msg.content === "Cash") {
        bot.createMessage(msg.channel.id, "Tais rica em :yen: ");
    }
    if(msg.content === ":3") {
        bot.createMessage(msg.channel.id, ":kissing_smiling_eyes: ");
    }
    if(msg.content === "Buu" || msg.content === "buu" || msg.content === "BUU" || msg.content === "<@188557592392368128>") {
        bot.createMessage(msg.channel.id, "```Ce ta ai?```");
    }
});
bot.connect();