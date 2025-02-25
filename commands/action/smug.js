const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class SmugCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'smug',
            memberName: 'smug',
            group: 'action',
            description: 'Show them the smug face!',
            examples: ['smug'],
            guildOnly: true,
            throttling: {
                duration: 3,
                usages: 1
            }
        });
    }

    async run(message) {
        const res = await this.client.neko.sfw.smug();

        const embed = new MessageEmbed()
        .setAuthor('Smugged')
        .setImage(res.url)
        .setColor('RANDOM')
        .setFooter('Powered by nekos.life')
        return message.embed(embed)
    }
}