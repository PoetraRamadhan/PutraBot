const { Command } = require('discord.js-commando');

module.exports = class FactCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'fact',
            memberName: 'fact',
            group: 'miscellaneous',
            description: 'Its just fact bro!',
            guildOnly: true,
            throttling: {
                duration: 3,
                usages: 1
            }
        });
    }

    async run(message) {
        const res = await this.client.neko.sfw.fact();
        message.say(`Fact: \`${res.fact}\``);
    }
}