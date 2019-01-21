const commando = require('discord.js-commando');

class DeleteMsgCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name:'deletemsg',
			group:'highrolecommands',
			memberName:'deletemsg',
			description:'Deletes a number of messages.'
		});
	}

	async run(message, args) {
		if (!message.member.hasPermission('MANAGE_MESSAGES')) {
			message.channel.send('Must be of rank \'Admin\'!');
			return;
		}
		if (args[0] === undefined) {
			message.delete();
		} else {
			if (isNaN(Number(args[0]))) {
				message.channel.send('Please use a number!');
				return;
			}
			const fetched = await message.channel.fetchMessages({limit: args[0]});
			console.log('Deleting ' + fetched.size + ' messages');
			message.channel.bulkDelete(fetched)
				.catch(error => message.channel.send(`Error: ${error}`));
		}
	}
}
module.exports = DeleteMsgCommand;