const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { get } = require('superagent');

module.exports = class CuddleCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'cuddle',
            memberName: 'cuddle',
            group: 'action',
            description: 'Gives cuddle to everyone!',
            examples: ['cuddle [@user/ID]'],
            args: [
                {
                    key: 'user',
                    prompt: 'Which user do you want to cuddle?',
                    type: 'user',
                    default: ''
                }
            ]
        });
    }

    async run(message, { user }) {
        const res = await get('https://nekos.life/api/v2/img/cuddle');
        if(!user) {
            const lonelyEmbed = new MessageEmbed()
            .setAuthor('Let me give you a cuddle!')
            .setImage(res.body.url)
            .setColor('RANDOM')
            .setFooter('Powered by nekos.life')
            return message.embed(lonelyEmbed);
        } else {
            const embed = new MessageEmbed()
            .setAuthor(`${message.author.tag} just cuddled with ${user.tag}`)
            .setImage(res.body.url)
            .setColor('RANDOM')
            .setFooter('Powered by nekos.life')
            return message.embed(embed);
        }
    }
}