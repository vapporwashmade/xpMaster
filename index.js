// add bot to server url:
// https://discordapp.com/api/oauth2/authorize?client_id=504441836887212034&scope=bot&permissions=2146958839
const Commando = require('discord.js-commando');
const config = require("./botconfig.json");
const bot = new Commando.Client();

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('highrolecommands', 'High Role Commands');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.on("message", function (message) {
	var args = message.content.split(' ');
	console.log(args);
	if (message.author.bot || args.indexOf(config.prefix) !== 0 || args.length === 1) {
		return;
	}
	var command = args[1].toLowerCase();
	if (command.toLowerCase() === 'setprefix') {
		if (args[2] === undefined) {
			message.channel.send('Need something to set the prefix to!');
			return;
		}
		config.prefix = args[2];
	}
	var cmds = {
		say:'simple/say.js',
		coinflip:'simple/coinflip.js',
		diceroll:'simple/diceroll.js',
		deletemsg:'highrolecommands/deleteMsg.js',
		kick:'highrolecommands/kick.js',
		rps:'simple/rockPaperScissors.js',
		'8ball':'simple/8ball.js'
	};
	if (cmds.hasOwnProperty(command.toLowerCase())) {
		var x = require('./commands/'+cmds[command]);
		var newClass = new x(bot);
		newClass.run(message, args);
	}
});

bot.on('ready', function () {
	console.log('ready');
});
bot.login(config.token);