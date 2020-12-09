const { Command } = require('discord.js-commando');

module.exports = class OwoifyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'owoify',
            memberName: 'owoify',
            group: 'miscellaneous',
            description: 'Owoify your text, owo!',
            examples: ['owoify <text?', 'owoify hello, world!'],
            guildOnly: true,
            args: [
                {
                    key: 'text',
                    prompt: 'Please provide a text',
                    type: 'string',
                    min: 1,
                    max: 200
                }
            ]
        });
    }

    async run(message, { text }) {
        const owo = await this.client.neko.sfw.OwOify({text: text});
        
        return message.say(owo.owo);
    }
}