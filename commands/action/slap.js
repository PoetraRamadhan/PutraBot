const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { get } = require('superagent');

module.exports = class SlapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'slap',
            memberName: 'slap',
            group: 'action',
            description: 'Slap your friends, but please be gently',
            guildOnly: true,
            args: [
                {
                    key: 'user',
                    prompt: 'Which user would you like to slap?',
                    type: 'user',
                    default: ''
                }
            ]
        });
    }
    
    async run(message, { user }) {
        const res = await get('https://nekos.life/api/v2/img/slap');
        if(!user) {
            const lonelyEmbed = new MessageEmbed()
            .setAuthor('Why are you slapping yourself?')
            .setImage(res.body.url)
            .setColor('RANDOM')
            .setFooter('Powered by nekos.life')
            return message.embed(lonelyEmbed);
        } else {
            const embed = new MessageEmbed()
            .setAuthor(`${user.tag} just got slapped by ${message.author.tag}`)
            .setImage(res.body.url)
            .setColor('RANDOM')
            .setFooter('Powered by nekos.life')
            return message.embed(embed);
        }
    }
}