// add bot to server url:
// https://discordapp.com/api/oauth2/authorize?client_id=504441836887212034&scope=bot&permissions=2146958839
const Commando = require('discord.js-commando');
const config = require("./botconfig.json");
const bot = new Commando.Client();
const token = 'NTA0NDQxODM2ODg3MjEyMDM0.DrFXPA.9oSQpWKSRMKJToxM3AfjwxnkmsU';

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.on("message", function (message) {
	if (message.content.toLowerCase() === 'hi') {
		message.reply("Hello, how are you doing?");
		return;
	}
	var args = message.content.split(' ');
	console.log(args);
	if (message.author.bot || args.indexOf(config.prefix) !== 0 || args.length === 1) {
		return;
	}
	var command = args[1].toLowerCase();
	console.log(command);
	if (command === 'say') {
		if (args[2] === undefined) {
			message.channel.sendMessage('Error: Need something to say');
			return;
		}
		args.splice(0, 2);
		message.channel.sendMessage(args.join(' '));
	}
});
bot.on('ready', function () {
	console.log('ready');
});
bot.login(token);