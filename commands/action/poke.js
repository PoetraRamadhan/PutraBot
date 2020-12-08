const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { get } = require('superagent');

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
        const res = await get('https://nekos.life/api/v2/img/poke');
        if(!user) {
            const lonelyEmbed = new MessageEmbed()
            .setAuthor('Poke, poke!')
            .setImage(res.body.url)
            .setColor('RANDOM')
            .setFooter('Powered by nekos.life');
            return message.embed(lonelyEmbed);
        } else {
            const embed = new MessageEmbed()
            .setAuthor(`${user.tag} just got poked by ${message.author.tag}`)
            .setImage(res.body.url)
            .setColor('RANDOM')
            .setFooter('Powered by nekos.life')
            return message.embed(embed);
        }
    }
}