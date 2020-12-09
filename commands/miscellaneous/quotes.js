const { Command } = require('discord.js-commando');
const { random } = require('quotesy');

module.exports = class QuotesCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'quotes',
            memberName: 'quotes',
            group: 'miscellaneous',
            description: 'Send a quote to start your adventure!',
            guildOnly: true,
            throttling: {
                duration: 3,
                usages: 1
            }
        });
    }

    async run(message) {
        const quote = random();
        message.say(`\`${quote.text}\` - **${quote.author}**`);
    }
}