const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { get } = require('superagent');

module.exports = class CatCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'cat',
            memberName: 'cat',
            group: 'image',
            description: 'Meoww!!',
            guildOnly: true,
        });
    }

    async run(message) {
        const res = await get('https://nekos.life/api/v2/img/meow');
        const embed = new MessageEmbed()
        .setAuthor('Meow!')
        .setImage(res.body.url)
        .setColor('RANDOM')
        .setFooter('Powered by nekos.life')
        return message.embed(embed);
    }
}