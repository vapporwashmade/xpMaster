const commando = require('discord.js-commando');
const Discord = require('discord.js');

class KickCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name:'kick',
			group:'highrolecommands',
			memberName:'kick',
			description:'Kicks a member from the server.'
		});
	}

	run(message, args) {
		if (!message.member.hasPermission("MANAGE_MESSAGES")) {
			message.channel.send('Must be of rank \'Admin\'!');
			return;
		}
		if (args[3] === undefined) {
			message.channel.send("Need a reason!");
			return;
		}
		let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[2]));
		if(!kUser){
			return message.channel.send("Can't find user!");
		}
		let kReason = args.join(" ").slice(22);
		if(kUser.hasPermission("MANAGE_MESSAGES")) {
			return message.channel.send("That person can't be kicked!");
		}
		let kickEmbed = new Discord.RichEmbed()
			.setDescription("~Kick~")
			.setColor("#04ff00")
			.addField("Kicked User", `${kUser} with ID ${kUser.id}`)
			.addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
			.addField("Kicked In", message.channel)
			.addField("Time", message.createdAt)
			.addField("Reason", kReason);

		let kickChannel = message.guild.channels.find(`name`, "incidents");
		message.guild.member(kUser).kick(kReason);
		if (kickChannel) {
			kickChannel.send(kickEmbed);
		} else {
			message.channel.send(kickEmbed);
		}
	}
}
module.exports = KickCommand;