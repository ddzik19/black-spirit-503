const {
    Client,
    Intents,
    Collection
} = require('discord.js');
const fs = require('fs');
const client = new Client({
    intents: [Intents.FLAGS.GUILDS]
});

client.commands = new Collection();

require('dotenv').config();

const functions = fs.readdirSync("./src/functions").filter(file => file.endsWith(".js"));
const eventFiles = fs.readdirSync(`./src/events`).filter(file => file.endsWith(".js"));
const commandFolders = fs.readdirSync(`./src/commands`);

// indicates when the bot is ready to work
client.on('ready', () => {
    console.info(`Logged in as ${client.user.tag}!`);
});

// assigning the bot token to the client 
(async () => {
    for (file of functions) {
        require(`./src/functions/${file}`)(client);
    }
    client.handleEvents(eventFiles, "./src/events");
    client.handleCommands(commandFolders, "./src/commands");
    client.login("OTEyMDMxMzE5NDgyMDUyNjk5.YZqBWw.yt4UWDKDxi8azjzhn6eV24IL930");
})();

// https://www.youtube.com/watch?v=HNH4V6Dhw6s&list=PLv0io0WjFNn_4ryS0QmYbph3GWdHvXLeu&index=3&ab_channel=FusionTerror