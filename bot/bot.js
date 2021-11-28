const Discord = require("discord.js")
const {
    Client,
    Intents
} = require('discord.js');
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});
const fs = require('fs');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./src/recipes').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./src/recipes/${file}`)
    client.commands.set(command.name, command);
}
const dotenv = require("dotenv");
dotenv.config();

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

const prefix = "!";
client.on("messageCreate", msg => {
    // array of arguments, used for different kinds of functions
    const args = msg.content.trim().split(' ');
    const command = args[0].toLowerCase();
    // if the bot is the message author then return
    if (msg.author.bot || !msg.content.startsWith(prefix)) return

    if (msg.content === "!ping") {
        msg.channel.send("pong")
    }

    if (command === "!recipe") {
        //msg.channel.send(`Recipe: ${args[1]}`);
        client.commands.get(args[1]).execute(msg, args[2]);
    }
})

client.login(process.env.TOKEN)