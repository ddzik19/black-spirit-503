/*
    Author: Damian Dzik
    Date: 14/12/2021
*/
const Discord = require("discord.js")
const {
    Client,
    Intents
} = require('discord.js');
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});
const fs = require('fs');
client.recipes = new Discord.Collection();

const commandFiles = fs.readdirSync('./src/recipes').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./src/recipes/${file}`)
    client.recipes.set(command.name, command);
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

    if (command === "!ping") {
        msg.channel.send("pong")
    }

    if (command === "!recipe") {
        // checking if the args[2] only contains numbers or is empty
        if (args[2] == null || args[2].toString().match(/^[0-9]+$/) != null) {
            // commands.get is responsible for getting the correct js file
            // args[1] is the name of the js file that we are getting from recipes
            // args[2] is the quantity of recipes to produce 
            client.recipes.get(args[1]).execute(msg, args[2]);
        } else if (!args[2].toString().match(/^[0-9]+$/)) { // if args[2] contains numbers so return error message 
            msg.channel.send("Quantity can only contain numbers. Please try again.")
        }
    }
})

client.login(process.env.TOKEN)