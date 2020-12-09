const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

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
            ],
            throttling: {
                duration: 3,
                usages: 1
            }
        });
    }
    
    async run(message, { user }) {
        const res = await this.client.neko.sfw.slap();
        
        if(!user) {
            const lonelyEmbed = new MessageEmbed()
            .setAuthor('Why are you slapping yourself?')
            .setImage(res.url)
            .setColor('RANDOM')
            .setFooter('Powered by nekos.life')
            return message.embed(lonelyEmbed);
        } else {
            const embed = new MessageEmbed()
            .setAuthor(`${user.tag} just got slapped by ${message.author.tag}`)
            .setImage(res.url)
            .setColor('RANDOM')
            .setFooter('Powered by nekos.life')
            return message.embed(embed);
        }
    }
}