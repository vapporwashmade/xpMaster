const Discord = require('discord.js');
const config = require("./botconfig.json");
const bot = new Discord.Client();
const token = 'NTA0NDQxODM2ODg3MjEyMDM0.DrFXPA.9oSQpWKSRMKJToxM3AfjwxnkmsU';
bot.on("message", function (message) {
	if (message.content.toLowerCase() === 'hi') {
		bot.reply("Hello, how are you doing?");
	}
});

bot.login(token);