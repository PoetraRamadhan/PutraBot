const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { get } = require('superagent');

module.exports = class DogCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'dog',
            memberName: 'dog',
            group: 'image',
            description: 'Woof, woof!',
            guildOnly: true
        });
    }

    async run(message) {
        const res = await this.client.neko.sfw.woof();

        const embed = new MessageEmbed()
        .setAuthor('Woof, woof!')
        .setImage(res.url)
        .setColor('RANDOM')
        .setFooter('Powered by nekos.life')
        return message.embed(embed);
    }
}