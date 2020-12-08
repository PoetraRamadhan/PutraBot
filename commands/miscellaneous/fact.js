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
        const res = await get('https://nekos.life/api/v2/fact');
        message.say(`Fact: \`${res.body.fact}\``);
    }
}