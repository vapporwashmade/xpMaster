// add bot to server url:
// https://discordapp.com/api/oauth2/authorize?client_id=504441836887212034&scope=bot&permissions=8
const Discord = require('discord.js');
const config = require("./botconfig.json");
const bot = new Discord.Client();
const token = 'NTA0NDQxODM2ODg3MjEyMDM0.DrFXPA.9oSQpWKSRMKJToxM3AfjwxnkmsU';
bot.on("message", function (message) {
	if (message.content === 'hi') {
		message.reply("Hello, how are you doing?");
	}
});
bot.on('ready', function () {
	console.log('ready');
});
bot.login(token);