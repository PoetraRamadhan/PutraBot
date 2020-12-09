const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');


module.exports = class TickleCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'tickle',
            memberName: 'tickle',
            group: 'action',
            description: 'Tickle your friends!',
            examples: ['tickle [@user/ID]'],
            guildOnly: true,
            args: [
                {
                    key: 'user',
                    prompt: 'Which user you want to tickle?',
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
        const res = await this.client.neko.sfw.tickle()

        if(!user) {
           const lonelyEmbed = new MessageEmbed()
           .setAuthor('Tickle, tickle!')
           .setImage(res.url)
           .setColor('RANDOM')
           .setFooter('Powered by nekos.life')
           return message.embed(lonelyEmbed);
        } else {
            const embed = new MessageEmbed()
            .setAuthor(`${user.tag} just got tickled by ${message.author.tag}`)
            .setImage(res.url)
            .setColor('RANDOM')
            .setFooter('Powered by nekos.life')
            return message.embed(embed);
        }
    }
}