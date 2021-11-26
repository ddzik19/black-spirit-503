const {Client,Intents, Collection} = require('discord.js');
const fs = require('fs');
const client = new Client({intents: [Intents.FLAGS.GUILDS]});
const TOKEN = process.env.TOKEN;

client.commads = new Collection();

require('dotenv').config();

const functions = fs.readdirSync("/functions").filter(file => file.endsWith(".js"));
const eventFiles = fs.readdirSync("/events").filter(file => file.endsWith(".js"));
const commandFiles = fs.readdirSync("/commands");

// indicates when the bot is ready to work
client.on('ready', () => {
    console.info(`Logged in as ${client.user.tag}!`);
});

// assigning the bot token to the client 
(async () => {
    for(file of functions){
        require(`./functions/${file}`)(client);
    }
    client.handleEvents(eventFiles, "./src/events");
    client.handleCommands(commandFiles, "./src/commands");
    client.login(TOKEN);
});
