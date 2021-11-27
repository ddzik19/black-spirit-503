const Discord = require("discord.js")
const {
    Client,
    Intents
} = require('discord.js');
const client = new Client({
    intents: [Intents.FLAGS.GUILDS]
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
client.on("message", msg => {
    // array of arguments, used for different kinds of functions
    const args = [].msg.content.trim().split(' ');
    const command = args.shift().toLowerCase();
    
    // if the bot is the message author then return
    if (msg.author.bot) return

    if (msg.content === "!ping") {
        msg.channel.send("pong")
    }

    if (command === "!recipe") {
        msg.channel.send(`Recipe: ${args[0]}, ${args[1]}`);
        //client.commands.get(command).execute(command, args, Discord);
    }

    // if the user wants to search commands that contain
    // a certain ingredient
    // if (msg.content === "!ingredient") {
    //     // and what ingredient to search

    // }

    /* 
    use a loop to get all the commands on start
    then if user typed in a message then get the text of the message
    compare it to a name of a function
    if name matches then use the method in the corresponding script


    const commands = new Collection();
    cost command = fs.readdirSync(`./src/commands/${file}`)
        if (msg.content == command.name) {
            // do ping function here
            msg.channel.send("pong")
        }
    
    */
})

client.login(process.env.TOKEN)