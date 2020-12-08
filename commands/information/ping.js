const { Command } = require('discord.js-commando');

module.exports = class PingCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ping',
            memberName: 'ping',
            group: 'information',
            description: 'Pings the bot and sends the result',
            guildOnly: true,
        });
    }

    async run(message) {
        const msg = await message.say('Pinging...');
        return msg.edit(`🏓 Round-trip: ${(msg.editedTimestamp || msg.createdTimestamp) - (message.editedTimestamp || message.createdTimestamp)}ms\n💓 Hearbeat: ${Math.round(this.client.ws.ping)}ms`)
    }
}