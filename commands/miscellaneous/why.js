const { Command } = require('discord.js-commando');

module.exports = class WhyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'why',
            memberName: 'why',
            group: 'miscellaneous',
            description: 'Gives you a "why" question',
            guildOnly: true,
            throttling: {
                duration: 3,
                usages: 1
            }
        });
    }

    async run(message) {
        const res = await this.client.neko.sfw.why();
        message.say(`\`${res.why}\``);
    }
}