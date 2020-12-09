const { Command } = require('discord.js-commando');

module.exports = class SpoilerCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'spoiler',
            memberName: 'spoiler',
            group: 'miscellaneous',
            description: 'Spoiler your text',
            examples: ['spoiler <text>', 'spoiler f, u'],
            guildOnly: true,
            args: [
                {
                    key: 'text',
                    prompt: 'Please provide a text',
                    type: 'string',
                    min: 1,
                    max: 1000
                }
            ],
            throttling: {
                duration: 3,
                usages: 1
            }
        });
    }

    async run(message, { text }) {
        message.say(`|| ${text} ||`);
    }
}