const commando = require('discord.js-commando');

class CoinFlipCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name:'coinflip',
			group:'simple',
			memberName:'flip',
			description:'Flips a fair coin, landing on Heads or Tails.'
		});
	}

	async run(message, args) {
		var chance = Math.floor(Math.random()*2);
		if (chance === 0) {
			message.channel.sendMessage('The coin landed on heads!');
		} else {
			message.channel.sendMessage('The coin landed on tails!');
		}
	}
}
module.exports = CoinFlipCommand;