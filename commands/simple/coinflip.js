const commando = require('discord.js-commando');

class CoinFlipCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name:'coinflip',
			group:'simple',
			memberName:'flip',
			description:'Flips a coin, landing on Heads or Tails.'
		});
	}

	run(message, args) {
		var weighted = args[0];
		if (weighted === undefined) {
			weighted = 50;
		} else if (weighted > 100 || weighted < 0 || isNaN(Number(weighted))) {
			message.channel.send('Must be a valid number from 0 to 100!');
			return;
		}
		var chance = Math.floor(Math.random()*100);
		if (chance <= weighted) {
			message.channel.send('The coin landed on heads!');
		} else {
			message.channel.send('The coin landed on tails!');
		}
	}
}
module.exports = CoinFlipCommand;