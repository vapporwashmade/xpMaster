const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command {
	constructor(client) {
		super(client,{
			name:'diceroll',
			group:'simple',
			memberName:'d6roll',
			description:'Flips a die, lands from 1 to the number of sides.'
		});
	}

	run(message, args) {
		var sides = args[0];
		if (sides === undefined) {
			sides = 6;
		} else if (isNaN(Number(sides))) {
			message.channel.send('The argument must be a number!');
			return;
		}
		var chance = Math.floor(Math.random()*sides)+1;
		message.channel.send('The die landed on ' + chance + '!');
	}
}
module.exports = DiceRollCommand;