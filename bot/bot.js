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
client.commands = new Discord.Collection();

const recipeFiles = fs.readdirSync('./src/recipes').filter(file => file.endsWith('.js'));
const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));
// going through each recipe in the recipes folder
for (const file of recipeFiles) {
    const recipe = require(`./src/recipes/${file}`)
    client.recipes.set(recipe.name, recipe);
}
// going through each command in the commands folder
for (const file of commandFiles) {
    const command = require(`./src/commands/${file}`)
    client.commands.set(command.name, command);
}
const dotenv = require("dotenv");
const teffbread = require("./src/recipes/teffbread");
dotenv.config();

// when bot is ready
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

    // !cook command, resposible for displaying recipes for dishes
    if (command === "!cook") {
        // checking if the args[2] only contains numbers or is empty
        if (args[2] == null || args[2].toString().match(/^[0-9]+$/) != null) {
            // recipes.get is responsible for getting the correct js file
            // args[1] is the name of the js file that we are getting from recipes
            // args[2] is the quantity of recipes to produce 
            client.recipes.get(args[1]).execute(msg, args[2]);
        } else if (!args[2].toString().match(/^[0-9]+$/)) { // if args[2] contains numbers so return error message 
            msg.channel.send("Quantity can only contain numbers. Please try again.")
        }
    }

    // !help is responsible for displaying all the possible commands
    if (command === "!help") {
        // getting the command name from args[1] and executing the execute function inside that file
        client.commands.get(args[0].substring(1)).execute(msg);
    }
})

client.login(process.env.TOKEN)