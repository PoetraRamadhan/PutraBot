const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class BakaCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'baka',
            memberName: 'baka',
            group: 'action',
            description: 'Baka!!',
            examples: ['baka [@user/ID]'],
            guildOnly: true,
            args: [
                {
                    key: 'user',
                    prompt: 'Who is the baka one?',
                    type: 'user',
                    default: ''
                }
            ]
        });
    }

    async run(message, { user }) {
        const res = await this.client.neko.sfw.baka();
        
        if(!user) {
            const bakaEmbed = new MessageEmbed()
            .setAuthor('Bakaaa!!!')
            .setImage(res.url)
            .setColor('RANDOM')
            .setFooter('Powered by nekos.life')
            return message.embed(bakaEmbed);
        } else {
            const userEmbed = new MessageEmbed()
            .setAuthor(`${user.tag} BAKA!`)
            .setImage(res.url)
            .setColor('RANDOM')
            .setFooter('Powered by nekos.life')
            return message.embed(userEmbed)
        }
    }
}