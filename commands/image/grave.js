const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = class GraveCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'grave',
            memberName: 'grave',
            group: 'image',
            description: 'Put them into the graveyard!',
            examples: ['grave [@user/ID]'],
            guildOnly: true,
            args: [
                {
                    key: 'user',
                    prompt: 'Which user you want to be see in a grave?',
                    type: 'user',
                    default: ''
                }
            ],
            throttling: {
                duration: 3,
                usages: 1
            }
        });
    }

    async run(message, { user }) {
        if(!user) {
            const data = await fetch(`https://vacefron.nl/api/grave?user=${message.author.displayAvatarURL()}`);
            const embed = new MessageEmbed()
            .setImage(data.url)
            .setColor('RANDOM')
            return message.embed(embed);
        } else {
            const data = await fetch(`https://vacefron.nl/api/grave?user=${user.displayAvatarURL()}`);
            const embed = new MessageEmbed()
            .setImage(data.url)
            .setColor('RANDOM')
            return message.embed(embed);
        }
    }
}