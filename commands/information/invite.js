const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class InviteCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'invite',
            memberName: 'invite',
            group: 'information',
            description: 'Sends you the invite link of this bot',
        });
    }

    run(message) {
        const embed = new MessageEmbed()
        .setAuthor('Thank you for inviting me!')
        .setDescription('[Invite](https://discord.com/api/oauth2/authorize?client_id=784763177383886849&permissions=8&scope=bot)')
        .setColor('RANDOM')
        return message.embed(embed);
    }
}