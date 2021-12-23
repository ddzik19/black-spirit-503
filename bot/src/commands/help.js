/*
    Author: Damian Dzik
    Date: 16/12/2021

    Desc: Embed with all the possible commands.
*/
const {
    MessageEmbed
} = require("discord.js");
module.exports = {
    name: "help",
    description: "Command that display all the commands that this bot can execute.",
    execute(msg) {
        try {
            const newEmbed = new MessageEmbed()
                .setColor('#FFFDC0')
                .setTitle('Commands')
                .addFields({
                    name: '!help',
                    value: 'displays all commands.'
                }, {
                    name: '!cook [recipeName] [quantity]',
                    value: 'This command display the ingredients needed for a recipe. Quantity can be left blank or you can provide the amount of times you want to cook the dish to calculate amount of ingredients needed. \n Example: !cook milktea 1500'
                }, {
                    name: '!recipes',
                    value: 'Displays all of the recipes of the Chef Bot.'
                });
            // creates the embed and sends it to the discord channel
            msg.channel.send({
                embeds: [newEmbed]
            });
        } catch (error) {
            console.log(error + 'in help.js')
        }
    }
}

//{
//     name: '!profile',
//     value: 'Displays the users cooking Profile.'
//}, 