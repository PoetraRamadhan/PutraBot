const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { get } = require('superagent');

module.exports = class KissCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'kiss',
            memberName: 'kiss',
            group: 'action',
            description: 'Give your special one a kiss!',
            examples: ['kiss [@user/ID]'],
            guildOnly: true,
            args: [
                {
                    key: 'user',
                    prompt: 'Which user you want to kiss?',
                    type: 'user',
                    default: ''
                }
            ]
        });
    }

    async run(message, { user }) {
        const res = await get('https://nekos.life/api/kiss');
        if(!user) {
            const lonelyEmbed = new MessageEmbed()
            .setAuthor('You\'re kissing yourself?')
            .setImage(res.body.url)
            .setColor('RANDOM')
            .setFooter('Powered by nekos.life')
            return message.embed(lonelyEmbed);
        } else {
            const embed = new MessageEmbed()
            .setAuthor(`${message.author.tag} just kissed ${user.tag}! ///`)
            .setImage(res.body.url)
            .setColor('RANDOM')
            .setFooter('Powered by nekos.life')
            return message.embed(embed);
        }
    }
}