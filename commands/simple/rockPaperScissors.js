const commando = require('discord.js-commando');

class RockPaperScissors extends commando.Command {
	constructor(client) {
		super(client, {
			name:'rockpaperscissors',
			group:'simple',
			memberName:'rockpaperscissors',
			description:'Plays rock, paper, scissors with the bot.'
		});
	}

	run(message, args) {
		if (args[2] !== 'r' && args[2] !== 'rock' && args[2] !== 'p' && args[2] !== 'paper' && args[2] !== 's' && args[2] !== 'scissors') {
			message.channel.send('Need a valid choice: r for rock, p for paper, or s for scissors!');
			return;
		}
		var choices = {
			'rock' : 'paper', 'paper' : 'scissors', 'scissors' : 'rock'
		};
		var cpuChoice = Object.keys(choices)[Math.floor(Math.random()*3)];
		var usrChoice = '';
		if (args[2].startsWith('r')) {
			usrChoice = 'rock';
		} else if (args[2].startsWith('p')) {
			usrChoice = 'paper';
		} else {
			usrChoice = 'scissors';
		}
		message.channel.send('Bot choice: '+cpuChoice);
		message.channel.send('User choice: '+usrChoice);
		if (choices[cpuChoice] === usrChoice) {
			message.channel.send('The user ' + message.author + ' with id ' + message.author.id + ' won!');
		} else if (cpuChoice === usrChoice) {
			message.channel.send('It was a tie!');
		} else {
			message.channel.send('The bot won!');
		}
	}
}
module.exports = RockPaperScissors;