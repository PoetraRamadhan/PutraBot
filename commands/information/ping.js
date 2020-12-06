const { Command } = require('discord.js-commando');

module.exports = class PingCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ping',
            memberName: 'ping',
            group: 'information',
            description: 'Pings the bot and sends the result',
        });
    }

    run(message) {
        message.say(`Ping: \`${this.client.ws.ping}Ms\``)
    }
}