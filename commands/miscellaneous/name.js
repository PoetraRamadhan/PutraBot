const { Command } = require('discord.js-commando');
const { get } = require('superagent');

module.exports = class NameCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'name',
            memberName: 'name',
            group: 'miscellaneous',
            description: 'Sends you a random name',
            guildOnly: true,
            throttling: {
                duration: 3,
                usages: 1
            }
        });
    }

    async run(message) {
        const res = await get('https://nekos.life/api/v2/name');
        return message.say(res.body.name);
    }
}