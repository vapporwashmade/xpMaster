// add bot to server url:
// https://discordapp.com/api/oauth2/authorize?client_id=504441836887212034&scope=bot&permissions=2146958839
const Commando = require('discord.js-commando');
const config = require("./botconfig.json");
const fs = require('fs');
const path = require('path');
const bot = new Commando.Client();
const token = 'NTA0NDQxODM2ODg3MjEyMDM0.DrFXPA.9oSQpWKSRMKJToxM3AfjwxnkmsU';

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('highrolecommands', 'High Role Commands');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.on("message", function (message) {
	if (message.content.toLowerCase() === 'hi') {
		message.reply("Hello, how are you doing?");
		return;
	}
	console.log(message.guild.channels);
	var args = message.content.split(' ');
	console.log(args);
	if (message.author.bot || args.indexOf(config.prefix) !== 0 || args.length === 1) {
		return;
	}
	var command = args[1].toLowerCase();
	console.log(command);
	var files1 = fs.readdirSync('./commands/highrolecommands');
	var files2 = fs.readdirSync('./commands/simple');
	var files = files1.concat(files2);
	for (var i = 0; i < files.length; i++) {
		if (command === files[i].slice(0, -3).toLowerCase()) {
			var dirname = files1.indexOf(files[i]);
			if (dirname === -1) {
				dirname = 'simple';
			} else {
				dirname = 'highrolecommands';
			}
			var x = require('./commands/'+dirname+'/'+files[i]);
			console.log(x);
			var toRun = new x(bot);
			toRun.run(message, args);
		}
	}
});

bot.on('ready', function () {
	console.log('ready');
});
bot.login(token);