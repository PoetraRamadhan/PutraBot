const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class HugCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'hug',
            memberName: 'hug',
            group: 'action',
            description: 'Give your friends a warm hug >-<',
            examples: ['hug [@user/ID]'],
            guildOnly: true,
            args: [
                {
                    key: 'user',
                    prompt: 'Which user you want to hug?',
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
        const res = await this.client.neko.sfw.hug();
        
        if(!user) {
            const lonelyEmbed = new MessageEmbed()
            .setAuthor('There there, let me hug you pal!')
            .setImage(res.url)
            .setColor('RANDOM')
            .setFooter('Powered by nekos.life')
            return message.embed(lonelyEmbed);
        } else {
            const embed = new MessageEmbed()
            .setAuthor(`${message.author.tag} just hugged ${user.tag} awwww!`)
            .setImage(res.url)
            .setColor('RANDOM')
            .setFooter('Powered by nekos.life')
            return message.embed(embed);
        }
    }
}