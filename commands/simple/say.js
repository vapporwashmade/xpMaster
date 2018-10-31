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
		if (args[2] === undefined) {
			message.channel.send('Error: Need something to say');
			return;
		}
		args.splice(0, 2);
		message.channel.send(args.join(' '));
	}
}
module.exports = SayCommand;