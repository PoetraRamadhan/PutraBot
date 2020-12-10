const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = class EmergencyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'emergency',
            memberName: 'emergency',
            group: 'image',
            description: 'Call the emergency meeting!',
            examples: ['emergency <Text>'],
            guildOnly: true,
            args: [
                {
                    key: 'text',
                    prompt: 'Please provide a text',
                    type: 'string'
                }
            ],
            throttling: {
                duration: 3,
                usages: 1
            }
        });
    }

    async run(message, { text }) {
        const data = await fetch(`https://vacefron.nl/api/emergencymeeting?text=${text}`);

        const embed = new MessageEmbed()
        .setImage(data.url)
        .setColor('RANDOM')
        return message.embed(embed);
    }
}