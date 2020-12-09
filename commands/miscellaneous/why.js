const { Command } = require('discord.js-commando');
const { get } = require('superagent');

module.exports = class WhyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'why',
            memberName: 'why',
            group: 'miscellaneous',
            description: 'Gives you a "why" question',
            guildOnly: true
        });
    }

    async run(message) {
        const res = await this.client.neko.sfw.why();
        message.say(`\`${res.why}\``);
    }
}