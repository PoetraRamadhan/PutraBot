const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { get } = require('superagent');

module.exports = class SmugCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'smug',
            memberName: 'smug',
            group: 'action',
            description: 'Show them the smug face!',
            examples: ['smug'],
            guildOnly: true
        });
    }

    async run(message) {
        const res = await get('https://nekos.life/api/v2/img/smug');

        const embed = new MessageEmbed()
        .setAuthor('Smugged')
        .setImage(res.body.url)
        .setColor('RANDOM')
        .setFooter('Powered by nekos.life')
        return message.embed(embed)
    }
}