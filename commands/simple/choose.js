const commando = require('discord.js-commando');

class ChooseCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name:'choose',
			group:'simple',
			memberName:'choose',
			description:'Chooses between two or more options.'
		});
	}

	run(message, args) {
		if (args.length < 2) {
			message.channel.send('Need at least two things to choose from!');
			return;
		}
		var pick = Math.floor(Math.random() * args.length);
		message.channel.send('I pick \'' + args[pick] + '\'!');
	}
}
module.exports = ChooseCommand;