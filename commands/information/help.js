const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class HelpCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'help',
            memberName: 'help',
            group: 'information',
            description: 'Shows the help command list',
            guildOnly: true,
        });
    }

    async run(message) {
        const embed = new MessageEmbed()
        .setAuthor('Command List')
        .setColor('RANDOM')
        .addField('Moderation', 'Coming soon')
        .addField('Configuration', 'Coming soon')
        .addField('Information', '`help, invite, ping`')
        .addField('Music', 'Coming soon')
        .addField('Miscellaneous', '`8ball, catemoji, fact, name, owoify, quotes, spoiler, why`')
        .addField('Image', '`cat, dog, goose, lizard`')
        .addField('Action', '`baka, cuddle, feed, hug, kiss, pat, poke, slap, smug, tickle`')
        return message.embed(embed);
    }
}