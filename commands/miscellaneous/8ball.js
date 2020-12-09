const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { get } = require('superagent');

module.exports = class EightballCommand extends Command {
    constructor(client) {
        super(client, {
            name: '8ball',
            memberName: '8ball',
            group: 'miscellaneous',
            description: 'Ask the ball',
            examples: ['8ball <question>'],
            guildOnly: true,
            args: [
                {
                    key: 'question',
                    prompt: 'What do you want to ask the ball?',
                    type: 'string'
                }
            ]
        });
    }

    async run(message, { question }) {
        const res = await get('https://nekos.life/api/v2/8ball');
        
        const embed = new MessageEmbed()
        .setAuthor(`${question}`)
        .setImage(res.body.url)
        .setColor('RANDOM')
        .setFooter('Powered by nekos.life')
        return message.embed(embed)
    }
}