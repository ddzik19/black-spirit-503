const Discord = require("discord.js")
const fetch = require("node-fetch")
const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES"]
})
const dotenv = require("dotenv");
dotenv.config();

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
    if (msg.author.bot) return

    if (msg.content === "!ping") {
        msg.channel.send("pong")
    }
})

client.login(process.env.TOKEN)