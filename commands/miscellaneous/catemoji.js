const { Command } = require('discord.js-commando');

module.exports = class CatemojiCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'catemoji',
            memberName: 'catemoji',
            group: 'miscellaneous',
            description: 'Sends a cat emoji',
            aliases: ['cat-emoji'],
            guildOnly: true
        });
    }

    async run(message) {
        const res = await this.client.neko.sfw.catText();

        return message.say(`**${res.cat}**`)
    }
}