const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class FeedCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'feed',
            memberName: 'feed',
            group: 'action',
            description: 'Give your hungry friend some food!',
            examples: ['feed [@user/ID]'],
            guildOnly: true,
            args: [
                {
                    key: 'user',
                    prompt: 'Which user you want to feed?',
                    type: 'user',
                    default: ''
                }
            ],
            throttling: {
                duration: 3,
                usages: 1
            }
        });
    }

    async run(message, { user }) {
        const res = await this.client.neko.sfw.feed();
        
        if(!user) {
            const lonelyEmbed = new MessageEmbed()
            .setAuthor('Nom!')
            .setImage(res.url)
            .setColor('RANDOM')
            .setFooter('Powered by nekos.life')
            return message.embed(lonelyEmbed);
        } else {
            const embed = new MessageEmbed()
            .setAuthor(`${user.tag} is now full! @-@`)
            .setImage(res.url)
            .setColor('RANDOM')
            .setFooter('Powered by nekos.life')
            return message.embed(embed);
        }
    }
}