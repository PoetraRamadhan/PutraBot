const { Command } = require('discord.js-commando');

module.exports = class CatemojiCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'catemoji',
            memberName: 'catemoji',
            group: 'miscellaneous',
            description: 'Sends a cat emoji',
            aliases: ['cat-emoji'],
            guildOnly: true,
            throttling: {
                duration: 3,
                usages: 1
            }
        });
    }

    async run(message) {
        const res = await this.client.neko.sfw.catText();

        return message.say(`**${res.cat}**`)
    }
}