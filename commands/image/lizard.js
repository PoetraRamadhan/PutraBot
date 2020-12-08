const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { get } = require('superagent');

module.exports = class LizardCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'lizard',
            memberName: 'lizard',
            group: 'image',
            description: 'Lizardooo',
            guildOnly: true
        });
    }

    async run(message) {
        const res = await get('https://nekos.life/api/v2/img/lizard');
        const embed = new MessageEmbed()
        .setImage(res.body.url)
        .setColor('RANDOM')
        .setFooter('Powered by nekos.life')
        return message.embed(embed);
    }
}