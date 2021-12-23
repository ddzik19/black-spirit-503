/*
    Author: Damian Dzik
    Date: 17/12/2021

    Displaying all recipes
*/
const {
    MessageEmbed,
    Client,
    Intents
} = require("discord.js");

const recipeString = '';

module.exports = {
    name: "recipes",
    execute(msg) {
        try {
            const newEmbed = new MessageEmbed()
                .setColor('#fc0303')
                .setTitle('Recipes')
                .addField({ // the fields with the names and amount of ingredients
                    name: recipeString
                })
            // creates the embed and sends it to the discord channel
            msg.channel.send({
                embeds: [newEmbed]
            })
        } catch (error) {
            console.log(error + "in recipes.js execute method")
        }
    }
}