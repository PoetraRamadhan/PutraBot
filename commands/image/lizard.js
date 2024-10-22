const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class LizardCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'lizard',
            memberName: 'lizard',
            group: 'image',
            description: 'Lizardooo',
            guildOnly: true,
            throttling: {
                duration: 3,
                usages: 1
            }
        });
    }

    async run(message) {
        const res = await this.client.neko.sfw.lizard();
        
        const embed = new MessageEmbed()
        .setImage(res.url)
        .setColor('RANDOM')
        .setFooter('Powered by nekos.life')
        return message.embed(embed);
    }
}