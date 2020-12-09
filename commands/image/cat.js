const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

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
        const res = await this.client.neko.sfw.meow();

        const embed = new MessageEmbed()
        .setAuthor('Meow!')
        .setImage(res.url)
        .setColor('RANDOM')
        .setFooter('Powered by nekos.life')
        return message.embed(embed);
    }
}