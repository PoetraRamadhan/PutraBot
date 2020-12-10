const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const api = require('novelcovid');

api.settings({
    baseUrl: 'https://disease.sh'
});

module.exports = class CovidCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'covid',
            memberName: 'covid',
            group: 'miscellaneous',
            description: 'Sends a covid19 stats',
            examples: ['covid [country]'],
            guildOnly: true,
            args: [
                {
                    key: 'country',
                    prompt: 'Which country you want to check?',
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

    async run(message, { country }) {
        if(!country) {
            const covidStats = await api.all();
            const embed = new MessageEmbed()
            .setTitle('Covid-19 Information')
            .addFields(
                {
                    name: 'Total Cases',
                    value: covidStats.cases,
                    inline: true
                },
                {
                    name: 'Total Recovered',
                    value: covidStats.recovered,
                    inline: true
                },
                {
                    name: 'Total Deaths',
                    value: covidStats.deaths,
                    inline: true
                },
                {
                    name: 'Total Infected-Countries',
                    value: covidStats.affectedCountries,
                    inline: true
                },
                {
                    name: 'Total Active',
                    value: covidStats.active,
                    inline: true
                },
                {
                    name: 'Total Critical',
                    value: covidStats.critical,
                    inline: true
                }
            )
            .setFooter('Powered by disease.sh')
            .setColor('RANDOM')
            return message.embed(embed);
        }
    }
}