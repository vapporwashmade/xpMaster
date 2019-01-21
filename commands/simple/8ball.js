const commando = require('discord.js-commando');

class EightBallCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name:'8ball',
			group:'simple',
			memberName:'8ball',
			description:'Rolls the magic 8-ball.'
		});
	}

	run(message, args) {
		if (args[0] === undefined) {
			message.channel.send('NEED A QUESTION TO ASK, ' + message.author);
			return;
		}
		var responses = ['It is certain.',
			'It is decidedly so.',
			'Without a doubt.',
			'Yes - definitely',
			'You may rely on it.',
			'As I see it, yes.',
			'Outlook good.',
			'Most likely',
			'Yes',
			'Signs point to yes',
			'Reply hazy, try again',
			'Ask again later.',
			'Better not tell you now,',
			'Cannot predict now.',
			'Concentrate and ask again.',
			'Don\'t count on it.',
			'My reply is no.',
			'My sources say no.',
			'Outlook not so good.',
			'Very Doubtful'
		];
		message.channel.send(responses[Math.floor(Math.random()*responses.length)]);
	}
}
module.exports = EightBallCommand;