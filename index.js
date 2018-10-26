// add bot to server url:
// https://discordapp.com/api/oauth2/authorize?client_id=504441836887212034&scope=bot&permissions=2146958839
const Discord = require('discord.js');
const config = require("./botconfig.json");
const bot = new Discord.Client();
const token = 'NTA0NDQxODM2ODg3MjEyMDM0.DrFXPA.9oSQpWKSRMKJToxM3AfjwxnkmsU';
bot.on("message", function (message) {
	if (message.content.toLowerCase() === 'hi') {
		message.reply("Hello, how are you doing?");
		return;
	}
	var args = message.content.split(' ');
	var command = args[1].toLowerCase();
	if (message.author.bot || args.indexOf(config.prefix) !== 0) {
		return;
	}
	if (command === 'say') {
		if (args[2] === undefined) {
			message.channel.send('Error: Need something to say');
			return;
		}
		args.splice(0, 2);
		message.channel.send(args.join(' '));
	} else if (command === 'fail') {

	}
});
bot.on('ready', function () {
	console.log('ready');
});
bot.login(token);