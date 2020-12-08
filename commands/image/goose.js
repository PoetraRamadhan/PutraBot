const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { get } = require('superagent');

module.exports = class GooseCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'goose',
            memberName: 'goose',
            group: 'image',
            description: 'Goose! honk honk!',
            guildOnly: true
        });
    }

    async run(message) {
        const res = await get('https://nekos.life/api/v2/img/goose');
        const embed = new MessageEmbed()
        .setAuthor('Honk honk!')
        .setImage(res.body.url)
        .setColor('RANDOM')
        .setFooter('Powered by nekos.life')
        return message.embed(embed);
    }
}