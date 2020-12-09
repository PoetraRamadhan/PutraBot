const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class PatCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'pat',
            memberName: 'pat',
            group: 'action',
            description: 'Pats someone to make them feel better!',
            examples: ['pat [@user/ID]'],
            guildOnly: true,
            args: [
                {
                    key: 'user',
                    prompt: 'Which user you want to give a pat?',
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
        const res = await this.client.neko.sfw.pat();
        
        if(!user) {
            const lonelyEmbed = new MessageEmbed()
            .setAuthor('Pat pat!')
            .setImage(res.url)
            .setColor('RANDOM')
            .setFooter('Powered by nekos.life')
            return message.embed(lonelyEmbed);
        } else {
            const embed = new MessageEmbed()
            .setAuthor(`${user.tag} just got a pat from ${message.author.tag}`)
            .setImage(res.url)
            .setColor('RANDOM')
            .setFooter('Powered by nekos.life')
            return message.embed(embed);
        }
    }
}