const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { get } = require('superagent');

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
            ]
        });
    }

    async run(message, { user }) {
        const res = await get('https://nekos.life/api/v2/img/tickle');
        if(!user) {
           const lonelyEmbed = new MessageEmbed()
           .setAuthor('Tickle, tickle!')
           .setImage(res.body.url)
           .setColor('RANDOM')
           .setFooter('Powered by nekos.life')
           return message.embed(lonelyEmbed);
        } else {
            const embed = new MessageEmbed()
            .setAuthor(`${user.tag} just got tickled by ${message.author.tag}`)
            .setImage(res.body.url)
            .setColor('RANDOM')
            .setFooter('Powered by nekos.life')
            return message.embed(embed);
        }
    }
}