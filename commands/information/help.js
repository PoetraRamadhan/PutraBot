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
            examples: ['help [command name]'],
            args: [
                {
                    key: 'commandName',
                    prompt: 'Which command you want to see?',
                    type: 'string',
                    default: ''
                }
            ],
            throttling: {
                duration: 3,
                usages: 1
            }
        });
    }

    async run(message, { commandName }) {
        const groups = this.client.registry.groups;
        const commands = this.client.registry.findCommands(commandName, false, message);
        if(!commandName) {
            try {
                const listEmbed = new MessageEmbed()
                .setDescription(`${groups.filter((grp) => grp.commands.some((cmd) => !cmd.hidden && cmd.isUsable(message))).map((grp) => `**${grp.name}**\n${grp.commands.filter((cmd) => !cmd.hidden && cmd.isUsable(message)).map((cmd) => `\`${cmd.name}\``).join(', ')}`).join('\n\n')}`)
                .setColor('RANDOM')
                .setFooter('<> - Required | [] - Optional')
                return message.embed(listEmbed)
            } catch (error) {
                message.say('Something went wrong while trying to show the command list...').then(err => console.error(`[FAILED] => ${err}`));
            }
        } else {
            const commandEmbed = new MessageEmbed()
            .addFields(
                {
                    name: 'Name',
                    value: commands[0].name,
                    inline: true
                },
                {
                    name: 'Description',
                    value: commands[0].description,
                    inline: true
                },
                {   name: 'Group',
                    value: commands[0].group.name,
                    inline: true
                },
                {
                    name: 'Aliases',
                    value: commands[0].aliases.join(', ') || 'No alias',
                    inline: true
                },
                {
                    name: 'Examples',
                    value: commands[0].examples ? commands[0].examples.join(', ') : 'No example(s)',
                    inline: true
                },
                {
                    name: 'Guild Only',
                    value: commands[0].guildOnly ? 'true' : 'false',
                    inline: true
                },
                {
                    name: 'Owner Only',
                    value: commands[0].ownerOnly ? 'true' : 'false',
                    inline: true
                },
                {
                    name: 'NSFW',
                    value: commands[0].nsfw ? 'true' : 'false',
                    inline: true
                },
                {
                    name: 'Cooldown',
                    value: `${commands[0].throttling.duration || 0} seconds out of ${commands[0].throttling.usages || 0} usages`,
                    inline: true
                }
            )
            .setColor('RANDOM')
            .setFooter('<> - Required | [] - Optional')
            return message.embed(commandEmbed);
        }
    }
}