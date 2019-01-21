const commando = require('discord.js-commando');

class SayCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name:'say',
			group:'simple',
			memberName:'say',
			description:'Says a message.'
		});
	}

	run(message, args) {
		if (args[0] === undefined) {
			message.channel.send('Error: Need something to say');
			return;
		}
		message.channel.send(args.join(' '));
	}
}
module.exports = SayCommand;