require('dotenv').config();

const { CommandoClient } = require('discord.js-commando');
const { prefix, ownerId } = require('./config.json');

const path = require('path');
const fs = require('fs');

const client = new CommandoClient({
    commandPrefix: prefix,
    owner: [ownerId],
    disableMentions: 'everyone',
    messageSweepInterval: 180,
    messageCacheLifetime: 180,
    messageCacheMaxSize: 200,
    ws: {
        intents: ['GUILDS', 'GUILD_MEMBERS', 'GUILD_MESSAGES', 'GUILD_PRESENCES', 'GUILD_VOICE_STATES']
    },
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['information', 'Information Commands'],
        ['music', 'Music Commands'],
        ['moderation', 'Moderation Commands'],
        ['configuration', 'Configuration Commands'],
        ['fun', 'Fun Commands'],
    ])
    .registerCommandsIn(path.join(__dirname, 'commands'));

fs.readdir('./events/', (error, files) => {
    if(error) console.log(`[ERROR] => ${error}`);
    files.forEach((file) => {
        if(!file.endsWith('.js')) return;
        const event = require(`./events/${file}`);
        const eventName = file.split('.')[0];
        client.on(eventName, event.bind(null, client));
        console.log(`[SUCCESS] => ${eventName} event has been loaded`);
    });
});

client.login(process.env.TOKEN);