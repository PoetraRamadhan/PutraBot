const { Command } = require('discord.js-commando');
const { get } = require('superagent');

module.exports = class FactCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'fact',
            memberName: 'fact',
            group: 'miscellaneous',
            description: 'Its just fact bro!',
            guildOnly: true
        });
    }

    async run(message) {
        const res = await this.client.neko.sfw.fact();
        message.say(`Fact: \`${res.fact}\``);
    }
}