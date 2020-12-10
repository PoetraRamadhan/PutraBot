const { Command, CommandoMessage } = require('discord.js-commando');

module.exports = class SlowmodeCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'slowmode',
            memberName: 'slowmode',
            group: 'moderation',
            description: 'Gives the current channel slowmode',
            examples: ['slowmode <timer>', 'slowmode 30m'],
            guildOnly: true,
            args: [
                {
                    key: 'time',
                    prompt: 'Please provide a time',
                    type: 'string'
                }
            ],
            throttling: {
                duration: 3,
                usages: 1
            },
            clientPermissions: ['MANAGE_CHANNELS'],
            userPermissions: ['MANAGE_CHANNELS']
        });
    }

    /**
     * 
     * @param {CommandoMessage} message 
     */
    async run(message, { time }) {
        const timer = parseInt(time);
        if(timer + 's') {
            await message.channel.setRateLimitPerUser(timer);
            return message.say(`Slowmode has been set to \`${timer}\` second(s)`);
        } else if(timer + 'm') {
            await message.channel.setRateLimitPerUser(timer * 60);
            return message.say(`Slowmode has been set to \`${timer}\` minute(s)`);
        } else if(timer + 'h') {
            await message.channel.setRateLimitPerUser(timer * 60 * 60);
            return message.say(`Slowmode has been set to \`${timer}\` hour(s)`);
        }
    }
}