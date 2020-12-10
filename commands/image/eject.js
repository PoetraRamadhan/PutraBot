const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = class EjectCommand extends Command {
        constructor(client) {
        super(client, {
            name: 'eject',
            memberName: 'eject',
            group: 'image',
            description: 'Eject the imposter QUICK!!',
            examples: ['eject [@user/ID]'],
            guildOnly: true,
            args: [
                {
                    key: 'user',
                    prompt: 'Which user you want to be eject?',
                    type: 'user'
                }
            ],
            throttling: {
                duration: 3,
                usages: 1
            }
        });
    }

    async run(message, { user }) {
        const imps = [true, false];
        const crewmate = ['black', 'blue', 'brown', 'cyan', 'darkgree', 'lime', 'orange', 'pink', 'purple', 'red', 'white', 'yellow'];
        const imposter = imps[Math.floor(Math.random() * imps.length)];        
        const crewmates = crewmate[Math.floor(Math.random() * crewmate.length)];
        
        const data = await fetch(`https://vacefron.nl/api//ejected?name=${user.username}&impostor=${imposter}&crewmate=${crewmates}`);
        const embed = new MessageEmbed()
        .setImage(data.url)
        .setColor(`RANDOM`)
        return message.embed(embed);
    }
}