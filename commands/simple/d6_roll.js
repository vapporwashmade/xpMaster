const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command{
	constructor(client) {
		super(client,{
			name:'diceroll',
			group:'simple',
			memberName:'d6roll',
			description:'Flips a 6-sided die, lands from 1 to 6.'
		});
	}

	async run(message, args) {
		var chance = Math.floor(Math.random()*6);
		message.channel.sendMessage('The die landed on ' + chance+1 + '!');
	}
}
module.exports = DiceRollCommand;