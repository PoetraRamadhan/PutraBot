const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class PokeCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'poke',
            memberName: 'poke',
            group: 'action',
            description: 'Poke your friend',
            guildOnly: true,
            args: [
                {
                    key: 'user',
                    prompt: 'Which user would you like to poke?',
                    type: 'user',
                    default: ''
                }
            ]
        });
    }

    async run(message, { user}) {
        const res = await this.client.neko.sfw.poke();
        
        if(!user) {
            const lonelyEmbed = new MessageEmbed()
            .setAuthor('Poke, poke!')
            .setImage(res.url)
            .setColor('RANDOM')
            .setFooter('Powered by nekos.life');
            return message.embed(lonelyEmbed);
        } else {
            const embed = new MessageEmbed()
            .setAuthor(`${user.tag} just got poked by ${message.author.tag}`)
            .setImage(res.url)
            .setColor('RANDOM')
            .setFooter('Powered by nekos.life')
            return message.embed(embed);
        }
    }
}